# EcoSurge

## Parent rails
- **Motherboard** `~/dev/CLAUDE.md` governs here: session startup routine, tracker discipline, ticket-at-discovery, no-attribution rule.
- **Protocol library** `~/Documents/` (index: `~/Documents/context-crumbs-protocol.md`): check the index before improvising a procedure for any domain; arm the domain doc first.
- **Docs taxonomy** (`~/Documents/repo-docs-taxonomy-protocol.md`): `devlog/` = dated journal; `protocols/` = sparing arm-first project doctrine, each crumbed here; `docs/` = guides only.
- **Bucket:** "EcoSurge" `3d1b9b32-767c-4279-800c-fb640b6d27a7` (top-level, not under Organically — own venture, no client reporting) — start the tracker here per the motherboard startup routine.

## Mission

EcoSurge is building a global conglomerate to save the world from the drastic effects of climate change, promote harmony between nature and agriculture, and stimulate a growing biomechanical and biotechnological ecosystem. This is not a side project — it is an industry-leading, revenue-generating platform with global ambition.

Every session should treat this codebase with that gravity.

## Two Surfaces

EcoSurge has two web surfaces that will eventually share a unified design language:

1. **Landing page** (`index.html`) — Green tech homepage with GSAP-animated hero, full-viewport video background (`assets/Concept video 1.mov`), and frosted-glass UI. This is the original EcoSurge root. Assets live in `assets/` (4 .MOV videos, DX Grafik font, logo). The Species Archive style will be redesigned to match this aesthetic.

2. **The Species Archive** (Next.js app at `/archive`) — Interactive biodiversity platform with 3D globes, radial clade diagrams, species field guides, biome dashboards, and ecosystem health metrics. Server-rendered on Vercel (see Rendering below).

### Key Routes (Species Archive)

- `/archive` — Homepage: 3D globe, clade diagram, featured species
- `/taxon/[...slug]` — Drill into any taxonomic rank (domain to species)
- `/species/[id]` — Individual species field guide
- `/biomes` — Biome overview with comparison charts and 3D globe
- `/biomes/[id]` — Individual biome detail
- `/dashboard` — Global ecosystem health metrics

### Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript 5.9
- **3D:** Three.js + React Three Fiber/Drei
- **Charts:** D3.js, Recharts
- **Data:** Modular taxonomy trees (`src/data/taxonomy/`), enrichment metadata (`src/data/enrichment/`), biome definitions (`src/data/biomes.ts`)
- **Database:** SQLite via sql.js (browser-side), better-sqlite3 (build-time), IndexedDB caching
- **Rendering:** Vercel on-demand rendering. **Not** a static export — `output: 'export'` was removed (the export hit 2.7GB, over GitHub Pages' 1GB limit; see `DEPLOYMENT.md`). ISR is used on `/taxon/[...slug]` (`revalidate = 86400`). Server code (API routes, edge functions) is available but currently unused — there are no `src/app/api/*` routes yet.

## Repository Structure

```
index.html          # EcoSurge landing page (video hero, GSAP animations)
assets/             # Landing page assets (videos, fonts, logo)
src/
  app/              # Next.js App Router pages
    (archive)/      # All archive routes (archive, taxon, species, biomes, dashboard)
  components/       # React components (Globe, Tree3D, CladeDiagram, charts, nav)
  data/
    taxonomy/       # Modular tree of life by kingdom (~1.2MB)
    enrichment/     # Facts, trends, distributions per taxon (~8.5MB)
    biomes.ts       # 14 biome definitions with climate, threats, trends
  db/               # BrowserDB.ts (sql.js wrapper), schema.sql
  lib/              # cladeUtils.ts, taxonomy helpers
scripts/
  build-db.js       # Builds SQLite DB from taxonomy/enrichment data
  fetch-images.ts   # Fetches Wikimedia Commons images for species
  lib/              # ImageFetcher, ImageCompressor utilities
public/
  species-images/   # WebP images at 3 sizes (~94MB, ~1000 species)
  data/species.db   # Generated SQLite DB (build artifact, gitignored)
```

## Data Delivery

Clients are people visiting the website in a browser. They don't have the repo. Data must be procured to them.

### Authoring (build side)
Claude Code adds species by editing `src/data/taxonomy/*.ts` and `src/data/enrichment/*.ts`. These are TypeScript source files checked into git. `npm run build:db` compiles them into `public/data/species.db`. `npm run build` exports the static site. Deploy to CDN.

### Delivery to clients (three tiers, adopt as dataset grows)

**Tier 1 — Versioned static DB (current)**
- `build-db.js` produces `species.db` and a `db-manifest.json` with a content hash and version number
- On page load, `BrowserDB.ts` checks the manifest. If the version changed, it re-downloads the DB. Otherwise it serves from IndexedDB cache
- Works well up to ~50MB of species data (~50K species)
- No server required — pure static files on a CDN

**Tier 2 — Chunked databases (medium-term)**
- Split the DB by kingdom: `animalia.db`, `plantae.db`, `fungi.db`, etc.
- Client only downloads the chunk for the kingdom they're browsing
- Manifest lists all chunks with versions. Lazy-load on navigation
- Scales to hundreds of thousands of species without punishing initial load

**Tier 3 — API layer (at scale)**
- Edge functions (Vercel/CloudFlare Workers) or a lightweight backend serve queries on demand
- Client never downloads a full dataset — requests individual species/taxon data
- Required once past ~100K species or when real-time data matters

### Images
`npm run fetch:images` pulls from Wikimedia Commons into `public/species-images/`. Served statically from CDN. At scale, move to a dedicated image CDN or object storage (S3 + CloudFront) with on-demand resizing.

## Build & Run

```bash
npm install
npm run dev          # Dev server on :3000
npm run build:db     # Rebuild SQLite from source data
npm run build        # Production build (Vercel on-demand rendering, not a static export)
npm run fetch:images # Pull species images from Wikimedia
```

## Session logging

Substantive sessions write a `devlog/YYYY-MM-DD-<topic>.md` entry (what was
directed, what shipped, what was decided, what was deliberately left open).
Read `devlog/` at session start before touching anything. Project tracking runs
on the Malleable bucket **EcoSurge** (`3d1b9b32-767c-4279-800c-fb640b6d27a7`),
linked to this repo, so `mal` auto-resolves it from inside the directory —
ticket-worthy work goes on the board, not just in chat.

## Live data feeds

Fire Watch is the working precedent and the house pattern for any feed of live
external data (`src/lib/fireData.ts` → `FireTrackerMap.tsx`): poll a free,
CORS-open public API from the browser, fall back to a build-time snapshot in
`public/data/`, and fall back again to a **labeled** empty state. Never render
a plausible-looking zero when a feed is down; say the feed is unavailable and
show its last-updated time. Build-time fetches that need a key
(`scripts/fetch-fires.mjs` / `FIRMS_MAP_KEY`) write an empty snapshot rather
than failing the build when the key is absent.

Planned expansion (idea captured, not yet spec'd): planetary distances, solar
and planetary storms, Earth disasters, and trends. See
`docs/live-feeds-idea.md` before designing anything feed-shaped.

## Working With This Codebase

- **Data files are large.** Taxonomy + enrichment total ~10MB of TypeScript. This is source data, not generated — treat it as such.
- **The landing page (`index.html`) is separate from Next.js.** It's a standalone HTML file with inline GSAP animations and video. The Species Archive style will be redesigned to unify with this aesthetic.
- **Build artifacts must never be committed.** `.next/`, `out/`, `dist/` are all gitignored.
- **The sidebar renders the full taxonomy tree** with fuzzy search (Levenshtein distance), generated server-side in `Sidebar.tsx`.

## Known Issues

- 5 species IDs are duplicated between `taxonomy/*.ts` and `species.ts` (panthera-leo, balaenoptera-musculus, apis-mellifera, sequoia-sempervirens, octopus-vulgaris). These are intentional (sample species reference the same entities) but could cause key collisions if both datasets are rendered together.

## Hardware (roombot)

`hardware/roombot/` holds the parametric OpenSCAD blueprints for the Zen
Gardener deck plate, camera mast and LIDAR pedestal (`render.sh` → `stl/`,
gitignored). Read `docs/roombot-vision-infra.md` before buying or
benchmarking anything vision-shaped: the settled doctrine is thin robot, fat
desktop (reflexes on an ESP32, semantics on the 4060 over WiFi), and it
lists the dead ends so they are not re-researched.
