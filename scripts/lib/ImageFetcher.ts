/**
 * Image Fetcher Service - Fetches public domain images from GBIF and iNaturalist
 *
 * NOTE: This service is for BUILD-TIME use only (Node.js environment).
 * It is not included in the browser bundle.
 * Use via: scripts/fetch-images.js
 */

/// <reference types="node" />

export interface ImageSource {
  url: string
  source: 'gbif' | 'inaturalist' | 'wikimedia'
  license: string
  attribution: string
}

export interface FetchResult {
  speciesId: string
  scientificName: string
  images: ImageSource[]
  error?: string
}

// GBIF Species Match API Response Types
interface GBIFMatchResponse {
  usageKey?: number
  scientificName?: string
  status?: string
  matchType?: string
}

interface GBIFMediaItem {
  identifier: string
  license?: string
  rightsHolder?: string
  creator?: string
  type?: string
}

interface GBIFMediaResponse {
  results?: GBIFMediaItem[]
}

// iNaturalist API Response Types
interface INatObservation {
  photos?: Array<{
    url?: string
    license_code?: string
    attribution?: string
  }>
}

interface INatResponse {
  results?: INatObservation[]
}

export class ImageFetcher {
  private readonly GBIF_API = 'https://api.gbif.org/v1'
  private readonly INAT_API = 'https://api.inaturalist.org/v1'

  // Acceptable licenses for public domain / CC-BY images
  private readonly ACCEPTABLE_LICENSES = [
    'CC0_1_0',
    'CC_BY_4_0',
    'CC_BY_3_0',
    'CC_BY_2_0',
    'CC_BY_NC_4_0', // Non-commercial but commonly available
    'cc0',
    'cc-by',
    'cc-by-nc',
    'public domain'
  ]

  /**
   * Fetch images for a species by scientific name
   */
  async fetchImages(speciesId: string, scientificName: string, limit: number = 5): Promise<FetchResult> {
    const result: FetchResult = {
      speciesId,
      scientificName,
      images: []
    }

    try {
      // Try GBIF first (primary source)
      const gbifImages = await this.fetchFromGBIF(scientificName)
      result.images.push(...gbifImages)

      // If not enough images, try iNaturalist
      if (result.images.length < limit) {
        const inatImages = await this.fetchFromINaturalist(scientificName, limit - result.images.length)
        result.images.push(...inatImages)
      }

      // Limit total images
      result.images = result.images.slice(0, limit)

    } catch (error) {
      result.error = error instanceof Error ? error.message : 'Unknown error'
    }

    return result
  }

  /**
   * Fetch images from GBIF (Global Biodiversity Information Facility)
   */
  private async fetchFromGBIF(scientificName: string): Promise<ImageSource[]> {
    const images: ImageSource[] = []

    try {
      // First, get the species key from GBIF
      const matchUrl = `${this.GBIF_API}/species/match?name=${encodeURIComponent(scientificName)}`
      const matchResponse = await fetch(matchUrl)

      if (!matchResponse.ok) {
        console.warn(`GBIF match failed for ${scientificName}`)
        return images
      }

      const matchData: GBIFMatchResponse = await matchResponse.json()

      if (!matchData.usageKey) {
        console.warn(`No GBIF species key found for ${scientificName}`)
        return images
      }

      // Fetch media for this species
      const mediaUrl = `${this.GBIF_API}/species/${matchData.usageKey}/media?limit=10`
      const mediaResponse = await fetch(mediaUrl)

      if (!mediaResponse.ok) {
        return images
      }

      const mediaData: GBIFMediaResponse = await mediaResponse.json()

      if (mediaData.results) {
        for (const item of mediaData.results) {
          if (item.identifier && this.isAcceptableLicense(item.license)) {
            images.push({
              url: item.identifier,
              source: 'gbif',
              license: item.license || 'Unknown',
              attribution: item.rightsHolder || item.creator || 'GBIF'
            })
          }
        }
      }

    } catch (error) {
      console.error(`GBIF fetch error for ${scientificName}:`, error)
    }

    return images
  }

  /**
   * Fetch images from iNaturalist
   */
  private async fetchFromINaturalist(scientificName: string, limit: number = 5): Promise<ImageSource[]> {
    const images: ImageSource[] = []

    try {
      // Search for observations with photos
      const searchUrl = `${this.INAT_API}/observations?taxon_name=${encodeURIComponent(scientificName)}&photos=true&quality_grade=research&per_page=${limit * 2}`
      const response = await fetch(searchUrl)

      if (!response.ok) {
        return images
      }

      const data: INatResponse = await response.json()

      if (data.results) {
        for (const obs of data.results) {
          if (obs.photos && obs.photos.length > 0) {
            const photo = obs.photos[0]
            if (photo.url && this.isAcceptableLicense(photo.license_code)) {
              // Convert thumbnail URL to medium size
              const mediumUrl = photo.url.replace('square', 'medium')
              images.push({
                url: mediumUrl,
                source: 'inaturalist',
                license: photo.license_code || 'Unknown',
                attribution: photo.attribution || 'iNaturalist'
              })
            }
          }

          if (images.length >= limit) break
        }
      }

    } catch (error) {
      console.error(`iNaturalist fetch error for ${scientificName}:`, error)
    }

    return images
  }

  /**
   * Check if a license is acceptable for use
   */
  private isAcceptableLicense(license?: string): boolean {
    if (!license) return false
    const normalizedLicense = license.toLowerCase().replace(/[^a-z0-9]/g, '')
    return this.ACCEPTABLE_LICENSES.some(acceptable =>
      normalizedLicense.includes(acceptable.toLowerCase().replace(/[^a-z0-9]/g, ''))
    )
  }

  /**
   * Download an image from URL and return as Buffer
   */
  async downloadImage(url: string): Promise<Buffer | null> {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        console.warn(`Failed to download image: ${url}`)
        return null
      }
      const arrayBuffer = await response.arrayBuffer()
      return Buffer.from(arrayBuffer)
    } catch (error) {
      console.error(`Error downloading image ${url}:`, error)
      return null
    }
  }
}

export const imageFetcher = new ImageFetcher()
