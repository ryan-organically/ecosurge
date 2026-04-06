// Main taxonomy module - assembles the Tree of Life from modular files
export * from './types'
export { sampleSpecies } from './species'
export { bacteria } from './bacteria'
export { archaea } from './archaea'
export { eukaryota } from './eukaryota'
export { animalia } from './animalia'
export { plantae } from './plantae'
export { fungi } from './fungi'
export { protista } from './protista'

import type { TaxonNode, Species } from './types'
import { bacteria } from './bacteria'
import { archaea } from './archaea'
import { eukaryota } from './eukaryota'

// The complete Tree of Life
export const treeOfLife: TaxonNode[] = [
  bacteria,
  archaea,
  eukaryota
]

// Helper to find a taxon by ID
export function findTaxon(nodes: TaxonNode[], id: string): TaxonNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findTaxon(node.children, id)
      if (found) return found
    }
  }
  return null
}

// Helper to get all species under a taxon
export function getSpeciesForTaxon(taxonId: string, species: Species[]): Species[] {
  return species.filter(s => {
    const taxonomy = Object.values(s.taxonomy).map(v => v.toLowerCase())
    return taxonomy.some(t => t.includes(taxonId.toLowerCase()))
  })
}
