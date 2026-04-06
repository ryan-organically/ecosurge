import type { TaxonEnrichment, EnrichmentMap } from './types'
import { animaliaEnrichment } from './animalia'
import { plantaeEnrichment } from './plantae'
import { fungiEnrichment } from './fungi'
import { protistaEnrichment } from './protista'
import { bacteriaEnrichment } from './bacteria'
import { archaeaEnrichment } from './archaea'

export type { TaxonEnrichment, EnrichmentMap }

const eukaryotaEnrichment: EnrichmentMap = {
  'eukaryota': {
    facts: [
      'Eukaryotes evolved ~2 billion years ago, likely from a symbiosis between an Asgard archaeon and an alphaproteobacterium',
      'All eukaryotic cells contain membrane-bound organelles including a nucleus, mitochondria (or remnants), and endomembrane system',
      'Eukaryotes account for only ~0.3% of Earth\'s biomass but include all multicellular organisms',
      'Sexual reproduction, involving meiosis and syngamy, evolved in the eukaryotic lineage and is nearly universal among them',
    ],
    distribution: ['Worldwide', 'Marine', 'Freshwater'],
    conservationBreakdown: { LC: 1200000, NT: 15000, VU: 16000, EN: 14000, CR: 8500, EW: 80, EX: 900, DD: 20000, NE: 5500000 },
    populationTrend: 'decreasing',
    habitat: ['Terrestrial', 'Marine', 'Freshwater', 'Soil', 'Aerial', 'Symbiotic'],
    estimatedPopulation: '~8.7 million estimated species; ~1.9 million described',
    extinctSpecies: 900,
    oldestFossil: '~2.1 billion years ago (Grypania spiralis)',
    keyAdaptations: ['Membrane-bound nucleus with linear chromosomes', 'Mitochondria from endosymbiosis', 'Cytoskeleton enabling phagocytosis and cell motility'],
    trendData: [
      { year: 1970, index: 100 }, { year: 1975, index: 97 }, { year: 1980, index: 93 },
      { year: 1985, index: 89 }, { year: 1990, index: 84 }, { year: 1995, index: 80 },
      { year: 2000, index: 76 }, { year: 2005, index: 72 }, { year: 2010, index: 68 },
      { year: 2015, index: 65 }, { year: 2020, index: 62 }, { year: 2024, index: 60 },
    ],
    diversityByRegion: [
      { region: 'South America', count: 400000 }, { region: 'Asia', count: 350000 },
      { region: 'Africa', count: 300000 }, { region: 'North America', count: 250000 },
      { region: 'Europe', count: 200000 }, { region: 'Oceania', count: 150000 },
      { region: 'Marine', count: 200000 }, { region: 'Antarctica', count: 5000 },
    ],
  },
}

const allEnrichment: EnrichmentMap = {
  ...eukaryotaEnrichment,
  ...bacteriaEnrichment,
  ...archaeaEnrichment,
  ...animaliaEnrichment,
  ...plantaeEnrichment,
  ...fungiEnrichment,
  ...protistaEnrichment,
}

export function getEnrichment(taxonId: string): TaxonEnrichment | null {
  return allEnrichment[taxonId] || null
}

export function getAllEnrichment(): EnrichmentMap {
  return allEnrichment
}
