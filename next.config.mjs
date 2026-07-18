/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosted on Vercel with on-demand rendering. NOT a static export — the taxon
  // route has ~7,425 pages; pre-rendering them all produced a 2.7GB output that
  // no static host could serve. Instead only a shallow backbone is pre-rendered
  // (see src/app/(archive)/taxon/[...slug]/page.tsx) and deeper taxa render on
  // demand with ISR caching.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Generous per-page timeout for the backbone pages we do pre-render.
  staticPageGenerationTimeout: 300,
}

export default nextConfig
