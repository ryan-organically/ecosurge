import type { ConservationStatus } from '../taxonomy/types'

export interface TaxonEnrichment {
  /** 2-5 interesting real facts about this taxon */
  facts: string[]
  /** Continents/regions where this taxon is found */
  distribution: string[]
  /** Conservation status breakdown: how many species per status */
  conservationBreakdown?: Partial<Record<ConservationStatus, number>>
  /** Overall population trend for this group */
  populationTrend: 'increasing' | 'decreasing' | 'stable' | 'unknown'
  /** Primary habitat types */
  habitat: string[]
  /** Estimated total species or population size as display string */
  estimatedPopulation?: string
  /** Number of known extinct species in this group */
  extinctSpecies?: number
  /** Oldest known fossil record */
  oldestFossil?: string
  /** Key evolutionary adaptations */
  keyAdaptations?: string[]
  /** Population index data points (year, relative index) for trend charts */
  trendData?: { year: number; index: number }[]
  /** Species diversity by region for distribution charts */
  diversityByRegion?: { region: string; count: number }[]
  /** Biome associations for this taxon */
  biomes?: string[]
}

export type EnrichmentMap = Record<string, TaxonEnrichment>
