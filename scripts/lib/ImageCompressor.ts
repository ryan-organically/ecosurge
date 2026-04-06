/**
 * Image Compressor Service - Compresses images to WebP format
 * Uses Sharp for high-quality, efficient image processing
 *
 * NOTE: This service is for BUILD-TIME use only (Node.js environment).
 * It is not included in the browser bundle.
 * Use via: scripts/fetch-images.js
 */

/// <reference types="node" />

import type Sharp from 'sharp'

export interface CompressionOptions {
  quality?: number
  width?: number
  height?: number
}

export interface ImageSizes {
  thumbnail: { width: number; height: number; quality: number }
  medium: { width: number; height: number; quality: number }
  full: { width: number; height: number; quality: number }
}

export const DEFAULT_SIZES: ImageSizes = {
  thumbnail: { width: 150, height: 150, quality: 80 },
  medium: { width: 600, height: 600, quality: 85 },
  full: { width: 1200, height: 1200, quality: 85 }
}

export interface CompressedImage {
  buffer: Buffer
  width: number
  height: number
  size: number
  format: string
}

export class ImageCompressor {
  private sharp: typeof Sharp | null = null

  /**
   * Initialize Sharp (lazy load for build-time use)
   */
  private async getSharp(): Promise<typeof Sharp> {
    if (!this.sharp) {
      // Dynamic import for Node.js environment
      const sharpModule = await import('sharp')
      this.sharp = sharpModule.default
    }
    return this.sharp
  }

  /**
   * Compress an image buffer to WebP format
   */
  async compress(
    inputBuffer: Buffer,
    options: CompressionOptions = {}
  ): Promise<CompressedImage> {
    const sharp = await this.getSharp()
    const { quality = 85, width, height } = options

    let pipeline = sharp(inputBuffer)

    // Resize if dimensions specified
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
    }

    // Convert to WebP
    const outputBuffer = await pipeline
      .webp({ quality })
      .toBuffer()

    // Get metadata
    const metadata = await sharp(outputBuffer).metadata()

    return {
      buffer: outputBuffer,
      width: metadata.width || 0,
      height: metadata.height || 0,
      size: outputBuffer.length,
      format: 'webp'
    }
  }

  /**
   * Generate all size variants for a species image
   */
  async generateAllSizes(
    inputBuffer: Buffer,
    sizes: ImageSizes = DEFAULT_SIZES
  ): Promise<Record<keyof ImageSizes, CompressedImage>> {
    const [thumbnail, medium, full] = await Promise.all([
      this.compress(inputBuffer, {
        width: sizes.thumbnail.width,
        height: sizes.thumbnail.height,
        quality: sizes.thumbnail.quality
      }),
      this.compress(inputBuffer, {
        width: sizes.medium.width,
        height: sizes.medium.height,
        quality: sizes.medium.quality
      }),
      this.compress(inputBuffer, {
        width: sizes.full.width,
        height: sizes.full.height,
        quality: sizes.full.quality
      })
    ])

    return { thumbnail, medium, full }
  }

  /**
   * Calculate size savings percentage
   */
  calculateSavings(originalSize: number, compressedSize: number): number {
    return Math.round((1 - compressedSize / originalSize) * 100)
  }
}

export const imageCompressor = new ImageCompressor()
