#!/usr/bin/env node

/**
 * Species Image Fetcher & Compression Pipeline (TypeScript Source)
 *
 * Fetches public domain images from Wikimedia Commons for all species in the archive
 * and compresses them to WebP format at three sizes using Sharp.
 *
 * Output structure:
 *   public/species-images/{species-id}/thumb.webp   (150px, quality 80)
 *   public/species-images/{species-id}/medium.webp  (600px, quality 85)
 *   public/species-images/{species-id}/full.webp    (1200px, quality 85)
 *   public/species-images/manifest.json
 *
 * Usage:
 *   npm run fetch:images
 *   node scripts/fetch-images.js
 */

import sharp from 'sharp'
import { mkdir, writeFile, access, readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')

// --- Types ---

interface SpeciesEntry {
  id: string
  commonName: string
  scientificName: string
}

interface ImageSizeConfig {
  name: string
  width: number
  quality: number
}

interface ManifestEntry {
  thumb: string
  medium: string
  full: string
  attribution: string
  source: string
}

interface Manifest {
  generated: string
  species: Record<string, ManifestEntry>
}

// --- Configuration ---

const IMAGE_SIZES: ImageSizeConfig[] = [
  { name: 'thumb', width: 150, quality: 80 },
  { name: 'medium', width: 600, quality: 85 },
  { name: 'full', width: 1200, quality: 85 },
]

// The 5 species from sampleSpecies in taxonomy.ts
const SPECIES_LIST: SpeciesEntry[] = [
  { id: 'panthera-leo', scientificName: 'Panthera leo', commonName: 'African Lion' },
  { id: 'balaenoptera-musculus', scientificName: 'Balaenoptera musculus', commonName: 'Blue Whale' },
  { id: 'apis-mellifera', scientificName: 'Apis mellifera', commonName: 'Western Honey Bee' },
  { id: 'sequoia-sempervirens', scientificName: 'Sequoia sempervirens', commonName: 'Coast Redwood' },
  { id: 'octopus-vulgaris', scientificName: 'Octopus vulgaris', commonName: 'Common Octopus' },
]

// --- Wikimedia Commons API ---

async function fetchWikimediaImage(scientificName: string): Promise<{ url: string; attribution: string; source: string } | null> {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(scientificName)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=1200&format=json&origin=*`

  const response = await fetch(searchUrl)
  const data = await response.json() as any

  if (!data.query?.pages) return null

  // Find first image that is CC0, CC-BY, CC-BY-SA, or Public domain
  for (const page of Object.values(data.query.pages) as any[]) {
    const info = page.imageinfo?.[0]
    if (!info) continue

    const mime: string = info.mime || ''
    if (!mime.startsWith('image/')) continue

    const license: string = info.extmetadata?.LicenseShortName?.value || ''
    if (license.includes('CC') || license.includes('Public domain') || license === 'pd') {
      const imageUrl: string = info.thumburl || info.url
      const artist: string = info.extmetadata?.Artist?.value?.replace(/<[^>]*>/g, '') || 'Unknown'
      const pageUrl: string = info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`

      return {
        url: imageUrl,
        attribution: `${artist}, Wikimedia Commons, ${license}`,
        source: pageUrl,
      }
    }
  }
  return null
}

// --- Image Compression ---

async function compressImage(inputBuffer: Buffer, outputDir: string): Promise<void> {
  await mkdir(outputDir, { recursive: true })

  for (const size of IMAGE_SIZES) {
    await sharp(inputBuffer)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: size.quality })
      .toFile(path.join(outputDir, `${size.name}.webp`))
  }
}

// --- Helpers ---

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

// --- Main ---

async function main(): Promise<void> {
  console.log('Species Image Fetcher & Compression Pipeline')
  console.log('=============================================')
  console.log(`Processing ${SPECIES_LIST.length} species...\n`)

  const outputBase = path.join(PROJECT_ROOT, 'public', 'species-images')
  await mkdir(outputBase, { recursive: true })

  const manifest: Manifest = {
    generated: new Date().toISOString(),
    species: {},
  }

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (let i = 0; i < SPECIES_LIST.length; i++) {
    const sp = SPECIES_LIST[i]
    const speciesDir = path.join(outputBase, sp.id)
    const thumbPath = path.join(speciesDir, 'thumb.webp')

    console.log(`[${i + 1}/${SPECIES_LIST.length}] ${sp.commonName} (${sp.scientificName})`)

    // Check if images already exist
    if (await fileExists(thumbPath)) {
      console.log('  -> Images already exist, skipping download.')
      manifest.species[sp.id] = {
        thumb: `/species-images/${sp.id}/thumb.webp`,
        medium: `/species-images/${sp.id}/medium.webp`,
        full: `/species-images/${sp.id}/full.webp`,
        attribution: 'Previously fetched',
        source: '',
      }
      skipCount++
      continue
    }

    // Fetch image URL from Wikimedia Commons
    console.log('  -> Searching Wikimedia Commons...')
    const result = await fetchWikimediaImage(sp.scientificName)

    if (!result) {
      console.log('  -> No suitable image found.')
      errorCount++
      // Add rate-limiting delay even on failure
      if (i < SPECIES_LIST.length - 1) await sleep(1000)
      continue
    }

    console.log(`  -> Found image: ${result.url.substring(0, 80)}...`)
    console.log(`  -> Attribution: ${result.attribution}`)

    // Download the image
    console.log('  -> Downloading...')
    try {
      const imgResponse = await fetch(result.url)
      if (!imgResponse.ok) {
        throw new Error(`HTTP ${imgResponse.status}: ${imgResponse.statusText}`)
      }
      const arrayBuffer = await imgResponse.arrayBuffer()
      const inputBuffer = Buffer.from(arrayBuffer)

      console.log(`  -> Downloaded ${(inputBuffer.length / 1024).toFixed(1)} KB`)

      // Compress to WebP at 3 sizes
      console.log('  -> Compressing to WebP...')
      await compressImage(inputBuffer, speciesDir)

      // Record in manifest
      manifest.species[sp.id] = {
        thumb: `/species-images/${sp.id}/thumb.webp`,
        medium: `/species-images/${sp.id}/medium.webp`,
        full: `/species-images/${sp.id}/full.webp`,
        attribution: result.attribution,
        source: result.source,
      }

      console.log('  -> Done: thumb.webp, medium.webp, full.webp')
      successCount++
    } catch (err: any) {
      console.log(`  -> Error downloading/compressing: ${err.message}`)
      errorCount++
    }

    // Rate-limit: 1 second between API calls
    if (i < SPECIES_LIST.length - 1) {
      console.log('  -> Waiting 1s (rate limit)...')
      await sleep(1000)
    }
  }

  // Write manifest
  const manifestPath = path.join(outputBase, 'manifest.json')
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`\nManifest written to: ${manifestPath}`)

  // Summary
  console.log('\n=============================================')
  console.log('Summary:')
  console.log(`  Fetched & compressed: ${successCount}`)
  console.log(`  Skipped (existing):   ${skipCount}`)
  console.log(`  Errors:               ${errorCount}`)
  console.log(`  Total species:        ${SPECIES_LIST.length}`)
  console.log('=============================================')
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
