import type { TaxonNode, TaxonomicRank } from '@/data/taxonomy'
import { findAncestors } from '@/data/helpers'

export interface CladeDiagramNode {
  id: string
  name: string
  scientificName: string
  rank: TaxonomicRank
  speciesCount?: number
  path: string[]
  children?: CladeDiagramNode[]
}

/** Prune a TaxonNode tree to a maximum depth */
export function pruneTree(
  node: TaxonNode,
  maxDepth: number,
  depth = 0,
  parentPath: string[] = []
): CladeDiagramNode {
  const currentPath = [...parentPath, node.id]
  const result: CladeDiagramNode = {
    id: node.id,
    name: node.name,
    scientificName: node.scientificName,
    rank: node.rank,
    speciesCount: node.speciesCount,
    path: currentPath,
  }

  if (node.children && depth < maxDepth) {
    result.children = node.children.map(child =>
      pruneTree(child, maxDepth, depth + 1, currentPath)
    )
  }

  return result
}

/** Build the overview tree for the archive page (all 3 domains, pruned to depth 3) */
export function buildOverviewTree(treeOfLife: TaxonNode[], maxDepth = 3): CladeDiagramNode {
  return {
    id: 'life',
    name: 'Life',
    scientificName: 'Vita',
    rank: 'domain' as TaxonomicRank,
    path: [],
    children: treeOfLife.map(domain => pruneTree(domain, maxDepth, 0, []))
  }
}

/** Find a node by ID in the tree */
function findNode(nodes: TaxonNode[], targetId: string): TaxonNode | null {
  for (const node of nodes) {
    if (node.id === targetId) return node
    if (node.children) {
      const found = findNode(node.children, targetId)
      if (found) return found
    }
  }
  return null
}

/** Build a focused subtree for a taxon page showing ancestors, siblings, and children */
export function buildFocusedTree(
  treeOfLife: TaxonNode[],
  targetId: string,
  slug: string[]
): CladeDiagramNode | null {
  const ancestors = findAncestors(treeOfLife, targetId)
  if (!ancestors) return null

  const targetNode = findNode(treeOfLife, targetId)
  if (!targetNode) return null

  // Build from root down
  // At each level: include the ancestor node fully (recurse into it)
  // and include siblings as stubs (leaf nodes, no children)
  function buildLevel(
    ancestorChain: TaxonNode[],
    depth: number,
    parentPath: string[]
  ): CladeDiagramNode[] {
    if (depth >= ancestorChain.length) {
      // We've reached the target node's parent level
      // Return the target node with its immediate children as stubs
      const currentPath = [...parentPath, targetNode!.id]
      const targetResult: CladeDiagramNode = {
        id: targetNode!.id,
        name: targetNode!.name,
        scientificName: targetNode!.scientificName,
        rank: targetNode!.rank,
        speciesCount: targetNode!.speciesCount,
        path: currentPath,
      }

      if (targetNode!.children) {
        targetResult.children = targetNode!.children.map(child => ({
          id: child.id,
          name: child.name,
          scientificName: child.scientificName,
          rank: child.rank,
          speciesCount: child.speciesCount,
          path: [...currentPath, child.id],
        }))
      }

      return [targetResult]
    }

    const currentAncestor = ancestorChain[depth]
    const currentPath = [...parentPath, currentAncestor.id]

    // Get all children of the current ancestor
    const siblings = currentAncestor.children || []
    const nextAncestorId = depth + 1 < ancestorChain.length
      ? ancestorChain[depth + 1].id
      : targetId

    return siblings.map(sibling => {
      const sibPath = [...parentPath, sibling.id]
      if (sibling.id === nextAncestorId) {
        if (sibling.id === targetId) {
          // This sibling IS the target — build it directly with children
          // instead of recursing (which would create a duplicate node)
          const targetPath = [...parentPath, sibling.id]
          const result: CladeDiagramNode = {
            id: sibling.id,
            name: sibling.name,
            scientificName: sibling.scientificName,
            rank: sibling.rank,
            speciesCount: sibling.speciesCount,
            path: targetPath,
          }
          if (targetNode!.children) {
            result.children = targetNode!.children.map(child => ({
              id: child.id,
              name: child.name,
              scientificName: child.scientificName,
              rank: child.rank,
              speciesCount: child.speciesCount,
              path: [...targetPath, child.id],
            }))
          }
          return result
        }
        // This is on the path to target - recurse
        const result: CladeDiagramNode = {
          id: sibling.id,
          name: sibling.name,
          scientificName: sibling.scientificName,
          rank: sibling.rank,
          speciesCount: sibling.speciesCount,
          path: sibPath,
          children: buildLevel(ancestorChain, depth + 1, parentPath),
        }
        return result
      } else {
        // Sibling - render as stub (no children)
        return {
          id: sibling.id,
          name: sibling.name,
          scientificName: sibling.scientificName,
          rank: sibling.rank,
          speciesCount: sibling.speciesCount,
          path: sibPath,
        }
      }
    })
  }

  // If the target is a top-level domain
  if (ancestors.length === 0) {
    const currentPath = [targetNode.id]
    const result: CladeDiagramNode = {
      id: targetNode.id,
      name: targetNode.name,
      scientificName: targetNode.scientificName,
      rank: targetNode.rank,
      speciesCount: targetNode.speciesCount,
      path: currentPath,
    }
    if (targetNode.children) {
      result.children = targetNode.children.map(child => ({
        id: child.id,
        name: child.name,
        scientificName: child.scientificName,
        rank: child.rank,
        speciesCount: child.speciesCount,
        path: [...currentPath, child.id],
      }))
    }
    return {
      id: 'life',
      name: 'Life',
      scientificName: 'Vita',
      rank: 'domain' as TaxonomicRank,
      path: [],
      children: treeOfLife.map(d => {
        if (d.id === targetNode.id) return result
        return {
          id: d.id,
          name: d.name,
          scientificName: d.scientificName,
          rank: d.rank,
          speciesCount: d.speciesCount,
          path: [d.id],
        }
      })
    }
  }

  // Build from the first ancestor (domain level)
  const firstAncestor = ancestors[0]
  const rootChildren = treeOfLife.map(domain => {
    if (domain.id === firstAncestor.id) {
      const domainPath = [domain.id]
      return {
        id: domain.id,
        name: domain.name,
        scientificName: domain.scientificName,
        rank: domain.rank,
        speciesCount: domain.speciesCount,
        path: domainPath,
        children: buildLevel(ancestors, 1, []),
      } as CladeDiagramNode
    }
    return {
      id: domain.id,
      name: domain.name,
      scientificName: domain.scientificName,
      rank: domain.rank,
      speciesCount: domain.speciesCount,
      path: [domain.id],
    }
  })

  return {
    id: 'life',
    name: 'Life',
    scientificName: 'Vita',
    rank: 'domain' as TaxonomicRank,
    path: [],
    children: rootChildren,
  }
}
