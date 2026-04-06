#!/usr/bin/env node

/**
 * Species Image Fetcher & Compression Pipeline
 *
 * Fetches public domain images from Wikimedia Commons for all species in the
 * EcoSurge Species Archive and compresses them to WebP format at three sizes
 * using Sharp.
 *
 * Output structure:
 *   public/species-images/{species-id}/thumb.webp   (150px width, quality 80)
 *   public/species-images/{species-id}/medium.webp  (600px width, quality 85)
 *   public/species-images/{species-id}/full.webp    (1200px width, quality 85)
 *   public/species-images/manifest.json
 *
 * Usage:
 *   npm run fetch:images
 *   node scripts/fetch-images.js
 *
 * Run with: node --experimental-modules scripts/fetch-images.js
 */

import { mkdir, writeFile, access } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')

// --- Configuration ---

const IMAGE_SIZES = [
  { name: 'thumb', width: 150, quality: 80 },
  { name: 'medium', width: 600, quality: 85 },
  { name: 'full', width: 1200, quality: 85 },
]

// The 5 species from sampleSpecies in src/data/taxonomy.ts
const SPECIES_LIST = [
  { id: 'panthera-leo', scientificName: 'Panthera leo', commonName: 'African Lion' },
  { id: 'balaenoptera-musculus', scientificName: 'Balaenoptera musculus', commonName: 'Blue Whale' },
  { id: 'apis-mellifera', scientificName: 'Apis mellifera', commonName: 'Western Honey Bee' },
  { id: 'sequoia-sempervirens', scientificName: 'Sequoia sempervirens', commonName: 'Coast Redwood' },
  { id: 'octopus-vulgaris', scientificName: 'Octopus vulgaris', commonName: 'Common Octopus' },
]

// --- Wikimedia Commons API Integration ---

/**
 * Search Wikimedia Commons for a public domain / CC-licensed image of a species.
 * Returns the image URL, attribution string, and source page URL, or null if none found.
 */
async function fetchWikimediaImage(scientificName) {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(scientificName)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=1200&format=json&origin=*`

  const response = await fetch(searchUrl)
  const data = await response.json()

  if (!data.query?.pages) return null

  // Find first image that is CC0, CC-BY, CC-BY-SA, or Public domain
  for (const page of Object.values(data.query.pages)) {
    const info = page.imageinfo?.[0]
    if (!info) continue

    const mime = info.mime || ''
    if (!mime.startsWith('image/')) continue

    const license = info.extmetadata?.LicenseShortName?.value || ''
    if (license.includes('CC') || license.includes('Public domain') || license === 'pd') {
      const imageUrl = info.thumburl || info.url
      // Strip HTML tags from artist name
      const artist = (info.extmetadata?.Artist?.value || 'Unknown').replace(/<[^>]*>/g, '')
      const pageUrl = info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`

      return {
        url: imageUrl,
        attribution: `${artist}, Wikimedia Commons, ${license}`,
        source: pageUrl,
      }
    }
  }
  return null
}

// --- Sharp Image Compression ---

/**
 * Compress an image buffer to three WebP sizes and save to outputDir.
 */
async function compressImage(inputBuffer, outputDir, sharp) {
  await mkdir(outputDir, { recursive: true })

  for (const size of IMAGE_SIZES) {
    await sharp(inputBuffer)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: size.quality })
      .toFile(path.join(outputDir, `${size.name}.webp`))
  }
}

// --- Helpers ---

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

// --- Main ---

async function main() {
  console.log('Species Image Fetcher & Compression Pipeline')
  console.log('=============================================')

  // Load Sharp (it is a devDependency)
  let sharp
  try {
    const sharpModule = await import('sharp')
    sharp = sharpModule.default
    console.log('[OK] Sharp loaded successfully')
  } catch (err) {
    console.error('[ERROR] Could not load Sharp. Make sure it is installed:')
    console.error('  npm install --save-dev sharp')
    process.exit(1)
  }

  console.log(`Processing ${SPECIES_LIST.length} species...\n`)

  const outputBase = path.join(PROJECT_ROOT, 'public', 'species-images')
  await mkdir(outputBase, { recursive: true })

  // The manifest that will be written at the end
  const manifest = {
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

    // Check if images already exist for this species
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

    // Fetch image URL from Wikimedia Commons API
    console.log('  -> Searching Wikimedia Commons...')
    let result = null
    try {
      result = await fetchWikimediaImage(sp.scientificName)
    } catch (err) {
      console.log(`  -> Wikimedia API error: ${err.message}`)
    }

    if (!result) {
      console.log('  -> No suitable image found on Wikimedia Commons.')
      errorCount++
      if (i < SPECIES_LIST.length - 1) await sleep(1000)
      continue
    }

    console.log(`  -> Found: ${result.url.substring(0, 100)}...`)
    console.log(`  -> Attribution: ${result.attribution}`)

    // Download the image
    console.log('  -> Downloading image...')
    try {
      const imgResponse = await fetch(result.url)
      if (!imgResponse.ok) {
        throw new Error(`HTTP ${imgResponse.status}: ${imgResponse.statusText}`)
      }
      const arrayBuffer = await imgResponse.arrayBuffer()
      const inputBuffer = Buffer.from(arrayBuffer)

      const originalKB = (inputBuffer.length / 1024).toFixed(1)
      console.log(`  -> Downloaded ${originalKB} KB`)

      // Compress to WebP at 3 sizes
      console.log('  -> Compressing to WebP (thumb, medium, full)...')
      await compressImage(inputBuffer, speciesDir, sharp)

      // Log output file sizes
      for (const size of IMAGE_SIZES) {
        const outPath = path.join(speciesDir, `${size.name}.webp`)
        try {
          const { default: fs } = await import('fs')
          const stats = fs.statSync(outPath)
          console.log(`     ${size.name}.webp: ${(stats.size / 1024).toFixed(1)} KB (${size.width}px)`)
        } catch {
          // Ignore stat errors
        }
      }

      // Record in manifest
      manifest.species[sp.id] = {
        thumb: `/species-images/${sp.id}/thumb.webp`,
        medium: `/species-images/${sp.id}/medium.webp`,
        full: `/species-images/${sp.id}/full.webp`,
        attribution: result.attribution,
        source: result.source,
      }

      console.log('  -> Success!')
      successCount++
    } catch (err) {
      console.log(`  -> Error downloading/compressing: ${err.message}`)
      errorCount++
    }

    // Rate-limit: 1 second between API calls to be respectful
    if (i < SPECIES_LIST.length - 1) {
      console.log('  -> Waiting 1s (rate limit)...')
      await sleep(1000)
    }
  }

  // Write manifest.json
  const manifestPath = path.join(outputBase, 'manifest.json')
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`\nManifest written to: public/species-images/manifest.json`)

  // Summary
  console.log('\n=============================================')
  console.log('Summary:')
  console.log(`  Fetched & compressed: ${successCount}`)
  console.log(`  Skipped (existing):   ${skipCount}`)
  console.log(`  Errors (no image):    ${errorCount}`)
  console.log(`  Total species:        ${SPECIES_LIST.length}`)
  console.log('=============================================')
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
