// Ecosystem statistics aggregation helpers
// Pure functions for build-time static generation of biome/conservation analytics

import type { ConservationStatus } from '../taxonomy/types'
import { biomes, type Biome } from '../biomes'

/** All conservation statuses, used to initialize complete records */
const ALL_STATUSES: ConservationStatus[] = [
  'LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX', 'DD', 'NE',
]

/** Statuses that count as "threatened" per IUCN Red List criteria */
const THREATENED_STATUSES: ConservationStatus[] = ['VU', 'EN', 'CR']

/** Statuses that count as "extinct" */
const EXTINCT_STATUSES: ConservationStatus[] = ['EW', 'EX']

// ---------------------------------------------------------------------------
// Lookup
// ---------------------------------------------------------------------------

/** Get a biome by its ID */
export function getBiomeById(id: string): Biome | undefined {
  return biomes.find((b) => b.id === id)
}

// ---------------------------------------------------------------------------
// Sorting helpers
// ---------------------------------------------------------------------------

/** Get all biomes sorted by biodiversity index (descending) */
export function getBiomesByBiodiversity(): Biome[] {
  return [...biomes].sort((a, b) => b.biodiversityIndex - a.biodiversityIndex)
}

// ---------------------------------------------------------------------------
// Global aggregations
// ---------------------------------------------------------------------------

/** Get aggregate conservation breakdown across all biomes */
export function getGlobalConservationSummary(): Record<ConservationStatus, number> {
  const summary = Object.fromEntries(
    ALL_STATUSES.map((s) => [s, 0]),
  ) as Record<ConservationStatus, number>

  for (const biome of biomes) {
    for (const status of ALL_STATUSES) {
      summary[status] += biome.conservationBreakdown[status] ?? 0
    }
  }

  return summary
}

/** Compute the total count for a set of statuses within a conservation breakdown */
function sumStatuses(
  breakdown: Partial<Record<ConservationStatus, number>>,
  statuses: ConservationStatus[],
): number {
  return statuses.reduce((acc, s) => acc + (breakdown[s] ?? 0), 0)
}

/** Compute total species from a biome's conservation breakdown */
function totalSpeciesInBiome(biome: Biome): number {
  return ALL_STATUSES.reduce(
    (acc, s) => acc + (biome.conservationBreakdown[s] ?? 0),
    0,
  )
}

/** Get global biodiversity stats */
export function getGlobalBiodiversityStats(): {
  totalSpecies: number
  totalThreatened: number
  totalEndemic: number
  totalExtinct: number
  biomeCount: number
  mostBiodiverse: string
  mostThreatened: string
} {
  let totalSpecies = 0
  let totalThreatened = 0
  let totalEndemic = 0
  let totalExtinct = 0

  let highestBiodiversity = -Infinity
  let mostBiodiverseName = ''

  let highestThreatPct = -Infinity
  let mostThreatenedName = ''

  for (const biome of biomes) {
    const speciesInBiome = totalSpeciesInBiome(biome)
    const threatened = sumStatuses(biome.conservationBreakdown, THREATENED_STATUSES)
    const extinct = sumStatuses(biome.conservationBreakdown, EXTINCT_STATUSES)

    totalSpecies += speciesInBiome
    totalThreatened += threatened
    totalEndemic += biome.stats.endemicSpecies
    totalExtinct += extinct

    // Track most biodiverse biome
    if (biome.biodiversityIndex > highestBiodiversity) {
      highestBiodiversity = biome.biodiversityIndex
      mostBiodiverseName = biome.name
    }

    // Track most threatened biome (highest % threatened of total species)
    const threatPct = speciesInBiome > 0 ? threatened / speciesInBiome : 0
    if (threatPct > highestThreatPct) {
      highestThreatPct = threatPct
      mostThreatenedName = biome.name
    }
  }

  return {
    totalSpecies,
    totalThreatened,
    totalEndemic,
    totalExtinct,
    biomeCount: biomes.length,
    mostBiodiverse: mostBiodiverseName,
    mostThreatened: mostThreatenedName,
  }
}

// ---------------------------------------------------------------------------
// Threat analysis
// ---------------------------------------------------------------------------

/** Get biomes sorted by threat level (highest % threatened species first) */
export function getBiomesByThreatLevel(): Array<Biome & { threatPercentage: number }> {
  return biomes
    .map((biome) => {
      const total = totalSpeciesInBiome(biome)
      const threatened = sumStatuses(biome.conservationBreakdown, THREATENED_STATUSES)
      const threatPercentage = total > 0 ? (threatened / total) * 100 : 0
      return { ...biome, threatPercentage }
    })
    .sort((a, b) => b.threatPercentage - a.threatPercentage)
}

// ---------------------------------------------------------------------------
// Chart data formatters
// ---------------------------------------------------------------------------

/** Get biome comparison data formatted for chart components */
export function getBiomeComparisonData(
  metric: 'species' | 'threatened' | 'endemic' | 'biodiversity',
): Array<{
  id: string
  name: string
  value: number
  color: string
}> {
  return biomes
    .map((biome) => {
      let value: number
      switch (metric) {
        case 'species':
          value = totalSpeciesInBiome(biome)
          break
        case 'threatened':
          value = sumStatuses(biome.conservationBreakdown, THREATENED_STATUSES)
          break
        case 'endemic':
          value = biome.stats.endemicSpecies
          break
        case 'biodiversity':
          value = biome.biodiversityIndex
          break
      }
      return {
        id: biome.id,
        name: biome.name,
        value,
        color: biome.color,
      }
    })
    .sort((a, b) => b.value - a.value)
}

/** Get trend data comparison across biomes (for multi-line charts) */
export function getBiomeTrendComparison(): Array<{
  year: number
  [biomeId: string]: number
}> {
  // Collect every unique year across all biomes
  const yearSet = new Set<number>()
  for (const biome of biomes) {
    for (const point of biome.trendData) {
      yearSet.add(point.year)
    }
  }

  const years = Array.from(yearSet).sort((a, b) => a - b)

  // Build lookup maps per biome: year -> index
  const biomeLookups = new Map<string, Map<number, number>>()
  for (const biome of biomes) {
    const lookup = new Map<number, number>()
    for (const point of biome.trendData) {
      lookup.set(point.year, point.index)
    }
    biomeLookups.set(biome.id, lookup)
  }

  // Merge into a single array of records, one per year
  return years.map((year) => {
    const entry: Record<string, number> = { year }
    for (const biome of biomes) {
      const lookup = biomeLookups.get(biome.id)!
      // Use the exact data point if available, otherwise interpolate
      const value = lookup.get(year)
      if (value !== undefined) {
        entry[biome.id] = value
      } else {
        entry[biome.id] = interpolateIndex(biome.trendData, year)
      }
    }
    return entry as { year: number; [biomeId: string]: number }
  })
}

/**
 * Linearly interpolate an index value for a given year from sorted trend data.
 * Returns 0 if trend data is empty, or clamps to the nearest endpoint when
 * the year falls outside the data range.
 */
function interpolateIndex(
  trendData: Array<{ year: number; index: number }>,
  year: number,
): number {
  if (trendData.length === 0) return 0
  if (trendData.length === 1) return trendData[0].index

  // Sorted ascending by year (biomes data is authored in order)
  const first = trendData[0]
  const last = trendData[trendData.length - 1]

  if (year <= first.year) return first.index
  if (year >= last.year) return last.index

  // Find the two surrounding points
  for (let i = 0; i < trendData.length - 1; i++) {
    const a = trendData[i]
    const b = trendData[i + 1]
    if (year >= a.year && year <= b.year) {
      const t = (year - a.year) / (b.year - a.year)
      return Math.round(a.index + t * (b.index - a.index))
    }
  }

  return last.index
}

// ---------------------------------------------------------------------------
// Habitat matching
// ---------------------------------------------------------------------------

/**
 * Keyword fragments used to map free-text habitat strings to biome IDs.
 * Each biome defines a set of keywords -- if any keyword appears as a
 * case-insensitive substring of a habitat string, the biome is matched.
 */
const HABITAT_BIOME_KEYWORDS: Record<string, string[]> = {
  'tropical-rainforest': [
    'tropical', 'rainforest', 'rain forest', 'jungle', 'equatorial',
  ],
  'temperate-forest': [
    'temperate forest', 'deciduous', 'broadleaf', 'mixed forest',
    'temperate woodland', 'montane', 'mountain', 'alpine', 'highland',
    'cloud forest', 'afroalpine',
  ],
  'boreal-forest': [
    'boreal', 'taiga', 'coniferous forest', 'subarctic forest',
  ],
  'tropical-savanna': [
    'savanna', 'savannah', 'tropical grassland',
  ],
  'temperate-grassland': [
    'grassland', 'prairie', 'steppe', 'pampas', 'veld',
  ],
  'desert': [
    'desert', 'arid', 'xeric', 'sand dune', 'semi-arid',
  ],
  'tundra': [
    'tundra', 'arctic', 'alpine meadow', 'permafrost',
  ],
  'wetland': [
    'wetland', 'swamp', 'marsh', 'bog', 'fen',
    'floodplain', 'riparian',
  ],
  'mangrove': [
    'mangrove', 'mangal',
  ],
  'coral-reef': [
    'coral', 'reef', 'atoll', 'lagoon',
  ],
  'marine-pelagic': [
    'marine', 'ocean', 'oceanic', 'pelagic', 'sea', 'coastal',
    'intertidal', 'neritic', 'epipelagic',
  ],
  'deep-sea': [
    'deep sea', 'deep ocean', 'abyssal', 'hadal',
    'bathypelagic', 'mesopelagic', 'hydrothermal vent',
  ],
  'freshwater': [
    'freshwater', 'fresh water', 'river', 'lake', 'stream', 'pond',
    'creek', 'estuary',
  ],
  'mediterranean': [
    'mediterranean', 'chaparral', 'maquis', 'fynbos', 'scrubland',
  ],
}

/**
 * Given a list of habitat strings (from enrichment data), find matching biome IDs.
 * Returns an array of unique biome IDs that match any of the provided habitats.
 */
export function matchHabitatsToBiomes(habitats: string[]): string[] {
  const matched = new Set<string>()

  for (const habitat of habitats) {
    const lower = habitat.toLowerCase()
    for (const [biomeId, keywords] of Object.entries(HABITAT_BIOME_KEYWORDS)) {
      if (keywords.some((kw) => lower.includes(kw))) {
        matched.add(biomeId)
      }
    }
  }

  return Array.from(matched)
}
