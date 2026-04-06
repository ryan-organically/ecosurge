# Species of the Day

## Overview

A prominent daily-rotating species highlight on the archive homepage (`/archive`). Deterministic — every visitor sees the same species on the same UTC date. Works within static export (no server runtime).

## Placement

Between the welcome stats and the clade diagram — the highest-attention zone after the header.

## Design

Two-column card (stacks on mobile):

- **Left:** Species image from `/species-images/{id}/medium.webp`
- **Right:**
  - Label: "Species of the Day" + date stamp
  - Common name (h2)
  - Scientific name (italic)
  - Conservation status badge
  - Hook fact (one sentence)
  - CTA: "Explore Field Guide" (links to `/species/{id}` if field guide exists) or "View in Tree" (links to `/taxon/{path}`)

## Selection Algorithm

```ts
function getSpeciesOfTheDay(pool: SpeciesSummary[], date: Date = new Date()): SpeciesSummary {
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth()
  const day = date.getUTCDate()
  // Prime-scattered hash avoids sequential cycling
  const hash = (year * 367 + month * 31 + day * 7) % pool.length
  return pool[hash]
}
```

Uses UTC to avoid timezone drift. All visitors see the same species.

## Eligible Pool

Species-rank nodes in `treeOfLife` that also have an image in `public/species-images/`. Currently ~305 species qualify. Pool is sorted alphabetically by ID for stable ordering across builds.

## Static Export Strategy (Hybrid)

1. **Build time:** A data module (`src/data/speciesOfTheDayPool.ts`) pre-computes the eligible pool with display data (id, name, scientificName, conservationStatus, hookFact, imagePath, taxonPath)
2. **Runtime:** A `'use client'` component receives the pool as a prop, runs the date-hash in `useEffect`, renders today's species
3. **No hydration mismatch:** Server renders a skeleton placeholder; client fills in content after mount

## Files to Create

- `src/data/speciesOfTheDayPool.ts` — Build-time pool assembly
- `src/lib/speciesOfTheDay.ts` — Date-hash utility
- `src/components/SpeciesOfTheDay.tsx` — Client component

## Files to Modify

- `src/app/(archive)/archive/page.tsx` — Add `<SpeciesOfTheDay pool={speciesPool} />`
- `src/app/globals.css` — Add `.sotd-*` styles

## Data Per Species (~100 bytes each, ~30KB total for 305)

| Field | Source |
|---|---|
| id | TaxonNode.id |
| name | TaxonNode.name |
| scientificName | TaxonNode.scientificName |
| conservationStatus | sampleSpecies lookup or null |
| hookFact | funFacts[0], or generated from parent taxon |
| imagePath | `/species-images/{id}/medium.webp` |
| hasFieldGuide | whether id is in sampleSpecies |
| taxonPath | from flattenTree() path |
