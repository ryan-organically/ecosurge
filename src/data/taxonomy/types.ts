// The Tree of Life - Type Definitions
export interface TaxonNode {
  id: string
  name: string
  scientificName: string
  rank: TaxonomicRank
  description?: string
  children?: TaxonNode[]
  speciesCount?: number
  imageUrl?: string
}

export type TaxonomicRank =
  | 'domain'
  | 'kingdom'
  | 'phylum'
  | 'class'
  | 'order'
  | 'family'
  | 'genus'
  | 'species'

export interface Species {
  id: string
  commonName: string
  scientificName: string
  taxonomy: {
    domain: string
    kingdom: string
    phylum: string
    class: string
    order: string
    family: string
    genus: string
    species: string
  }
  description: string
  habitat: string
  distribution: string
  conservationStatus: ConservationStatus
  characteristics: string[]
  diet?: string
  lifespan?: string
  size?: string
  images: string[]
  funFacts: string[]
  discoveredBy?: string
  discoveredYear?: number
}

export type ConservationStatus =
  | 'LC' // Least Concern
  | 'NT' // Near Threatened
  | 'VU' // Vulnerable
  | 'EN' // Endangered
  | 'CR' // Critically Endangered
  | 'EW' // Extinct in Wild
  | 'EX' // Extinct
  | 'DD' // Data Deficient
  | 'NE' // Not Evaluated

export const conservationStatusLabels: Record<ConservationStatus, string> = {
  'LC': 'Least Concern',
  'NT': 'Near Threatened',
  'VU': 'Vulnerable',
  'EN': 'Endangered',
  'CR': 'Critically Endangered',
  'EW': 'Extinct in Wild',
  'EX': 'Extinct',
  'DD': 'Data Deficient',
  'NE': 'Not Evaluated'
}

export const conservationStatusColors: Record<ConservationStatus, string> = {
  'LC': '#006400',
  'NT': '#32CD32',
  'VU': '#FFD700',
  'EN': '#FFA500',
  'CR': '#FF4500',
  'EW': '#8B0000',
  'EX': '#000000',
  'DD': '#808080',
  'NE': '#A9A9A9'
}
