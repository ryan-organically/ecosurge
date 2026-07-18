import type { MetadataRoute } from 'next'
import { studySlugs } from '@/data/studies'
import { docSlugs } from '@/lib/docs'

// Required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static'

const BASE_URL = 'https://ecosurge.co'

/**
 * Static sitemap for the EcoSurge site. Emitted as sitemap.xml at build time by
 * the static export. Deliberately does NOT enumerate the ~7,460 taxon pages —
 * only the top-level taxonomic domains are listed as entry points; crawlers
 * discover the rest by following links.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '/',
    '/blog',
    '/archive',
    '/biomes',
    '/dashboard',
    '/docs',
    '/taxon/eukaryota',
    '/taxon/bacteria',
    '/taxon/archaea',
  ]

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }))

  for (const slug of studySlugs()) {
    entries.push({ url: `${BASE_URL}/blog/${slug}`, lastModified: now })
  }

  for (const slug of docSlugs()) {
    entries.push({ url: `${BASE_URL}/docs/${slug}`, lastModified: now })
  }

  return entries
}
