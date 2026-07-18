/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // The taxon route statically exports ~7,460 pages. The default worker pool
  // (one per core) loads three.js + d3 + ~10MB of parsed taxonomy/enrichment
  // per worker, which exhausts RAM on smaller machines and pushes pages into
  // swap — where they blow past the per-page timeout. Cap the pool and give a
  // generous timeout so the export is memory-bound-safe and completes.
  experimental: {
    cpus: Number(process.env.NEXT_EXPORT_CPUS) || 4,
  },
  staticPageGenerationTimeout: 300,
}

export default nextConfig
