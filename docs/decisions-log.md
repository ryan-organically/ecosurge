# EcoSurge — Engineering Decisions Log

A running record of what was built, why, and the decision forks taken along the
way. Newest work first.

## Studies engine & content

**What.** `/blog` is a typed studies engine (`src/data/studies/`) rendered by
`/blog/[slug]`, with a dependency-free SVG figure library
(`src/components/studies/figures.tsx`). Content is authored as structured blocks
(lead, heading, equation, figure, steps, table, callout, quote, stats) so it
renders deterministically in the static export.

**Content.** Two whitepapers ("The Convex Planet", "The Age of Embodiment") plus
studies on ocean dynamics, cryosphere scaffolds, restoration robotics, species
recovery, permafrost carbon, the operational blueprint, a 24/7 local-model lab,
the stair-climbing **Zen Gardener** robot, robotic vision, Gaussian-splat
streaming, generative CAD, and the live **Fire Watch** tracker. Every study
carries real, checked equations.

**Decision forks.**
- *Data model vs MDX.* Chose a typed block model over MDX/markdown — it keeps
  content decoupled from rendering, guarantees static-export safety, and lets
  figures stay first-class typed references. Cost: authoring is more verbose.
- *Equations without KaTeX.* Rendered equations as styled Unicode-math strings
  rather than adding a math library — zero dependencies, identical on a CDN.
- *Figure ownership under parallel agents.* When fanning content authoring out
  to subagents, exactly one agent owns `figures.tsx`; the others reuse existing
  figure keys. Prevents merge collisions on the shared registry.

## Taxon static-export bottleneck (fixed)

**Symptom.** `npm run build` never completed — the `/taxon/[...slug]` route
exports ~7,460 pages and dozens were failing the 60s per-page timeout.

**Diagnosis.** Not slow pages. The default one-worker-per-core pool loaded
three.js + d3 + ~10 MB of parsed taxonomy/enrichment *per worker*; on a 15 GB
box that exhausted RAM and pushed pages into swap. Evidence: failures scattered
across all kingdoms at the exact 60s mark, all workers.

**Fix.** Cap export concurrency (`experimental.cpus`, env-overridable via
`NEXT_EXPORT_CPUS`) and raise `staticPageGenerationTimeout`. Result: 7,460/7,460
pages, zero failures, ~12 min, ~11 GiB RAM free throughout.

**Decision fork.** Considered capping `generateStaticParams` depth and
client-rendering deep taxa — rejected because `output: 'export'` 404s unlisted
dynamic params, which would break deep-link navigation. Fixing the resource
contention keeps every URL working.

## Deployment — the "Species Archive 404" (fixed)

**Root cause.** There was **no deploy workflow**. GitHub Pages (custom domain
`ecosurge.co`) served the repo *root* — the old standalone `index.html` — so the
entire Next.js app (archive, blog, taxon, biomes) was never published. `/archive`
404'd because it didn't exist at the served root.

**Fix.** `.github/workflows/deploy.yml` builds the export and deploys `out/` to
Pages; `public/.nojekyll` (so Jekyll can't strip `_next/`) and `public/CNAME`
(so the custom domain survives export). CI caps export workers
(`NEXT_EXPORT_CPUS=2`) for runner memory.

**Action required (one-time, repo owner):** Settings → Pages → Source =
**GitHub Actions**. Until then Pages keeps serving the old branch root.

**Decision fork.** Committing the built `out/` to a Pages branch would also work
but violates the "never commit build artifacts" rule — the Actions workflow is
the correct path.

## Navigation, SEO & docs

- Consolidated nav so `/blog` and `/docs` are reachable from the archive NavBar,
  the blog/docs layouts, and the landing Research section.
- `sitemap.ts`, `robots.ts`, `public/llms.txt`, and JSON-LD schema
  (Organization/WebSite site-wide, TechArticle per study).
- The `docs/*.md` runbooks (this file included) render on-site at `/docs`.

## Fire Watch — live public-data polling on a static site

**Constraint.** `output: 'export'` has no server runtime.

**Solution.** Client-side polling of **NASA EONET v3** (CORS-safe, no API key)
every 5 min, with 3-tier graceful degradation: live → optional build-time NASA
FIRMS snapshot (`scripts/fetch-fires.mjs`, keyless-safe) → empty-labeled state.
The R3F globe is `mounted`-gated so it never crashes the export SSR.

**Decision fork.** FIRMS has richer data but needs a key and isn't reliably
CORS-open in the browser; EONET is the pragmatic live source, FIRMS the
build-time enrichment.
