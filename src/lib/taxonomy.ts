// Re-export everything needed from taxonomy data
export {
  treeOfLife,
  sampleSpecies,
  findTaxon,
  getSpeciesForTaxon,
  conservationStatusLabels,
  conservationStatusColors,
} from '@/data/taxonomy'
export type {
  TaxonNode,
  TaxonomicRank,
  Species,
  ConservationStatus,
} from '@/data/taxonomy'
export {
  flattenTree,
  getTaxonPaths,
  getRankAbbrev,
  getRankColor,
  getNextRankLabel,
  findAncestors,
  findSiblings,
} from '@/data/helpers'
export type { FlatTaxon } from '@/data/helpers'
