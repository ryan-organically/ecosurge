import type { MetadataRoute } from 'next'

// Required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static'

const BASE_URL = 'https://ecosurge.co'

/** Emitted as robots.txt at build time by the static export. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
