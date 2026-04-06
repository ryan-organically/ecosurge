// Build-time helpers for taxonomy data
import type { TaxonNode, TaxonomicRank } from './taxonomy'

export interface FlatTaxon {
  id: string
  name: string
  scientificName: string
  rank: TaxonomicRank
  description?: string
  speciesCount?: number
  imageUrl?: string
  parentId: string | null
  path: string[]
  childCount: number
}

/** Flatten the entire taxonomy tree into a flat array with path info */
export function flattenTree(nodes: TaxonNode[], parentId: string | null = null, parentPath: string[] = []): FlatTaxon[] {
  const results: FlatTaxon[] = []
  for (const node of nodes) {
    const currentPath = [...parentPath, node.id]
    results.push({
      id: node.id,
      name: node.name,
      scientificName: node.scientificName,
      rank: node.rank,
      description: node.description,
      speciesCount: node.speciesCount,
      imageUrl: node.imageUrl,
      parentId,
      path: currentPath,
      childCount: node.children?.length ?? 0,
    })
    if (node.children) {
      results.push(...flattenTree(node.children, node.id, currentPath))
    }
  }
  return results
}

/** Generate Astro getStaticPaths entries from the tree */
export function getTaxonPaths(nodes: TaxonNode[]) {
  function walk(nodes: TaxonNode[], parentPath: string[] = []): Array<{
    params: { slug: string }
    props: { node: TaxonNode; breadcrumb: string[]; parentPath: string[] }
  }> {
    const results: Array<{
      params: { slug: string }
      props: { node: TaxonNode; breadcrumb: string[]; parentPath: string[] }
    }> = []
    for (const node of nodes) {
      const currentPath = [...parentPath, node.id]
      results.push({
        params: { slug: currentPath.join('/') },
        props: { node, breadcrumb: currentPath, parentPath }
      })
      if (node.children) {
        results.push(...walk(node.children, currentPath))
      }
    }
    return results
  }
  return walk(nodes)
}

/** Get rank abbreviation */
export function getRankAbbrev(rank: TaxonomicRank): string {
  const abbrevs: Record<TaxonomicRank, string> = {
    domain: 'D', kingdom: 'K', phylum: 'P', class: 'C',
    order: 'O', family: 'F', genus: 'G', species: 'S'
  }
  return abbrevs[rank]
}

/** Get rank color */
export function getRankColor(rank: TaxonomicRank): string {
  const colors: Record<TaxonomicRank, string> = {
    domain: '#E91E63', kingdom: '#9C27B0', phylum: '#673AB7', class: '#3F51B5',
    order: '#2196F3', family: '#00BCD4', genus: '#4CAF50', species: '#8BC34A'
  }
  return colors[rank]
}

/** Get the label for the next rank down */
export function getNextRankLabel(currentRank: string): string {
  const hierarchy: Record<string, string> = {
    domain: 'Kingdoms', kingdom: 'Phyla', phylum: 'Classes', class: 'Orders',
    order: 'Families', family: 'Genera', genus: 'Species'
  }
  return hierarchy[currentRank] || 'Sub-groups'
}

/** Find ancestors of a node in the tree */
export function findAncestors(nodes: TaxonNode[], targetId: string, path: TaxonNode[] = []): TaxonNode[] | null {
  for (const node of nodes) {
    if (node.id === targetId) return path
    if (node.children) {
      const result = findAncestors(node.children, targetId, [...path, node])
      if (result) return result
    }
  }
  return null
}

/** Find siblings of a node (same parent) */
export function findSiblings(nodes: TaxonNode[], targetId: string): TaxonNode[] {
  for (const node of nodes) {
    if (node.children) {
      const childIds = node.children.map(c => c.id)
      if (childIds.includes(targetId)) {
        return node.children.filter(c => c.id !== targetId)
      }
      const result = findSiblings(node.children, targetId)
      if (result.length > 0) return result
    }
  }
  return []
}
