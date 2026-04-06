import type { TaxonNode } from './types'
import { animalia } from './animalia'
import { plantae } from './plantae'
import { fungi } from './fungi'
import { protista } from './protista'

export const eukaryota: TaxonNode = {
  id: 'eukaryota',
  name: 'Eukaryotes',
  scientificName: 'Eukaryota',
  rank: 'domain',
  description: 'Organisms with cells containing a nucleus',
  speciesCount: 8700000,
  children: [
    animalia,
    plantae,
    fungi,
    protista
  ]
}
