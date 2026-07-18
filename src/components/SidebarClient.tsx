'use client'

import { useEffect, useRef } from 'react'
import { treeOfLife } from '@/lib/taxonomy'

interface TaxonNode {
  id: string
  name: string
  scientificName: string
  rank: string
  children?: TaxonNode[]
  speciesCount?: number
}

interface SearchMatch {
  node: TaxonNode
  path: string
  score: number  // Higher = better match
  matchType: 'exact' | 'prefix' | 'contains' | 'fuzzy'
}

// Flatten tree for search
function flattenTree(nodes: TaxonNode[], path = ''): Array<{ node: TaxonNode; path: string }> {
  const result: Array<{ node: TaxonNode; path: string }> = []
  for (const node of nodes) {
    const currentPath = `${path}/${node.id}`
    result.push({ node, path: currentPath })
    if (node.children) {
      result.push(...flattenTree(node.children, currentPath))
    }
  }
  return result
}

// Calculate Levenshtein distance for fuzzy matching
function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const matrix: number[][] = []

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        )
      }
    }
  }

  return matrix[b.length][a.length]
}

// Find best fuzzy match in a string (sliding window)
function fuzzyMatch(text: string, query: string, maxDistance: number): { distance: number; index: number } | null {
  if (query.length > text.length) {
    const dist = levenshteinDistance(text, query)
    return dist <= maxDistance ? { distance: dist, index: 0 } : null
  }

  let bestMatch: { distance: number; index: number } | null = null

  // Slide a window of query length (+/- 2) over the text
  for (let windowSize = Math.max(1, query.length - 2); windowSize <= query.length + 2 && windowSize <= text.length; windowSize++) {
    for (let i = 0; i <= text.length - windowSize; i++) {
      const substr = text.substring(i, i + windowSize)
      const dist = levenshteinDistance(substr, query)
      if (dist <= maxDistance && (bestMatch === null || dist < bestMatch.distance)) {
        bestMatch = { distance: dist, index: i }
      }
    }
  }

  return bestMatch
}

// Score a search match (higher = better)
function scoreMatch(node: TaxonNode, query: string): SearchMatch | null {
  const name = node.name.toLowerCase()
  const sci = node.scientificName.toLowerCase()
  const q = query.toLowerCase()

  // Exact match (best)
  if (name === q || sci === q) {
    return { node, path: '', score: 1000, matchType: 'exact' }
  }

  // Prefix match (very good)
  if (name.startsWith(q) || sci.startsWith(q)) {
    const prefixScore = 800 + (100 * q.length / Math.max(name.length, sci.length))
    return { node, path: '', score: prefixScore, matchType: 'prefix' }
  }

  // Word boundary prefix (e.g., "pan" matches "Pan troglodytes")
  const words = [...name.split(/\s+/), ...sci.split(/\s+/)]
  for (const word of words) {
    if (word.startsWith(q)) {
      return { node, path: '', score: 700, matchType: 'prefix' }
    }
  }

  // Contains match (good)
  if (name.includes(q) || sci.includes(q)) {
    return { node, path: '', score: 500, matchType: 'contains' }
  }

  // Fuzzy match (acceptable, for typo tolerance)
  // Allow 1 error for queries up to 4 chars, 2 for 5-8 chars, 3 for longer
  const maxDist = q.length <= 4 ? 1 : q.length <= 8 ? 2 : 3

  const nameMatch = fuzzyMatch(name, q, maxDist)
  const sciMatch = fuzzyMatch(sci, q, maxDist)

  const bestFuzzy = [nameMatch, sciMatch]
    .filter((m): m is NonNullable<typeof m> => m !== null)
    .sort((a, b) => a.distance - b.distance)[0]

  if (bestFuzzy) {
    // Score decreases with edit distance
    const fuzzyScore = 300 - (bestFuzzy.distance * 50)
    return { node, path: '', score: Math.max(100, fuzzyScore), matchType: 'fuzzy' }
  }

  return null
}

// Find a taxon by ID in the tree
function findInTree(nodes: TaxonNode[], id: string): TaxonNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findInTree(node.children, id)
      if (found) return found
    }
  }
  return null
}

// Rank color mapping
const rankColors: Record<string, string> = {
  domain: '#E91E63',
  kingdom: '#9C27B0',
  phylum: '#673AB7',
  class: '#3F51B5',
  order: '#2dd4bf',
  family: '#00BCD4',
  genus: '#34d399',
  species: '#8BC34A'
}

const rankAbbrev: Record<string, string> = {
  domain: 'D',
  kingdom: 'K',
  phylum: 'P',
  class: 'C',
  order: 'O',
  family: 'F',
  genus: 'G',
  species: 'S'
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}

// Render a taxon node as HTML
function renderTaxonNode(node: TaxonNode, depth: number, basePath: string): string {
  const hasChildren = !!(node.children && node.children.length > 0)
  const currentPath = `${basePath}/${node.id}`
  const url = `/taxon${currentPath}`
  const paddingLeft = depth * 12 + 8

  const childrenHtml = hasChildren
    ? `<div class="taxonomy-children">${node.children!.map(child =>
        renderTaxonNode(child, depth + 1, currentPath)
      ).join('')}</div>`
    : ''

  return `
    <div class="taxonomy-node" data-id="${node.id}" data-rank="${node.rank}" data-name="${node.name.toLowerCase()}" data-sci="${node.scientificName.toLowerCase()}" data-path="${currentPath}">
      <a href="${url}" class="taxonomy-header" style="padding-left: ${paddingLeft}px">
        ${hasChildren
          ? '<button class="expand-btn" data-toggle aria-label="Expand">▸</button>'
          : '<span class="expand-spacer"></span>'
        }
        <span class="rank-badge-mini" style="background-color: ${rankColors[node.rank] || '#888'}" title="${node.rank}">
          ${rankAbbrev[node.rank] || '?'}
        </span>
        <div class="taxon-name-container">
          <span class="taxon-name">${node.scientificName}</span>
          ${node.name !== node.scientificName ? `<span class="taxon-common-name">${node.name}</span>` : ''}
        </div>
        ${node.speciesCount ? `<span class="species-count" title="${node.speciesCount.toLocaleString()} species">${formatNumber(node.speciesCount)}</span>` : ''}
      </a>
      ${childrenHtml}
    </div>
  `
}

export function SidebarClient({ currentTaxonId }: { currentTaxonId?: string }) {
  const taxonomyDataRef = useRef<TaxonNode[] | null>(null)
  const flatDataRef = useRef<Array<{ node: TaxonNode; path: string }> | null>(null)

  useEffect(() => {
    // The tree is imported directly and bundled once into a shared client chunk
    // (downloaded once, cached across pages) instead of being inlined as JSON in
    // every page's HTML — which had ballooned the static export to 66GB.
    const parsedData = treeOfLife as unknown as TaxonNode[]
    taxonomyDataRef.current = parsedData
    flatDataRef.current = flattenTree(parsedData)

    // Expand/collapse handler with lazy-load support
    function handleExpandClick(e: Event) {
      const btn = e.target as HTMLButtonElement
      if (!btn.classList.contains('expand-btn')) return

      e.preventDefault()
      e.stopPropagation()

      const nodeEl = btn.closest('.taxonomy-node') as HTMLElement
      if (!nodeEl) return

      const childrenEl = nodeEl.querySelector(':scope > .taxonomy-children') as HTMLElement
      if (!childrenEl) return

      const isExpanded = childrenEl.classList.contains('expanded')

      // Check if this is a lazy-load node
      if (btn.dataset.lazy === 'true' && !isExpanded) {
        const nodeId = nodeEl.dataset.id
        const nodePath = nodeEl.dataset.path || ''
        const depth = (nodePath.match(/\//g) || []).length

        if (taxonomyDataRef.current && nodeId) {
          const taxonNode = findInTree(taxonomyDataRef.current, nodeId)
          if (taxonNode && taxonNode.children) {
            // Render children and replace placeholder
            const childrenHtml = taxonNode.children.map(child =>
              renderTaxonNode(child, depth, nodePath)
            ).join('')

            childrenEl.innerHTML = childrenHtml
            btn.removeAttribute('data-lazy')

            // Attach handlers to new nodes
            childrenEl.querySelectorAll<HTMLButtonElement>('.expand-btn').forEach(newBtn => {
              // Handlers are attached via delegation, no need to add here
            })
          }
        }
      }

      if (isExpanded) {
        childrenEl.classList.remove('expanded')
        btn.classList.remove('expanded')
      } else {
        childrenEl.classList.add('expanded')
        btn.classList.add('expanded')
      }
    }

    // Clicking a sidebar item expands its direct children (in addition to navigating)
    function handleHeaderClick(e: Event) {
      const target = e.target as HTMLElement
      // Skip if the expand button itself was clicked (handled separately)
      if (target.classList.contains('expand-btn')) return

      const header = target.closest('.taxonomy-header') as HTMLElement
      if (!header) return

      const nodeEl = header.closest('.taxonomy-node') as HTMLElement
      if (!nodeEl) return

      const childrenEl = nodeEl.querySelector(':scope > .taxonomy-children') as HTMLElement
      if (!childrenEl) return

      const btn = header.querySelector('.expand-btn') as HTMLButtonElement

      // Handle lazy loading if needed
      if (btn?.dataset.lazy === 'true') {
        const nodeId = nodeEl.dataset.id
        const nodePath = nodeEl.dataset.path || ''
        const depth = (nodePath.match(/\//g) || []).length

        if (taxonomyDataRef.current && nodeId) {
          const taxonNode = findInTree(taxonomyDataRef.current, nodeId)
          if (taxonNode && taxonNode.children) {
            const childrenHtml = taxonNode.children.map(child =>
              renderTaxonNode(child, depth, nodePath)
            ).join('')
            childrenEl.innerHTML = childrenHtml
            btn.removeAttribute('data-lazy')
          }
        }
      }

      // Always expand (never collapse on link click - user is navigating there)
      if (!childrenEl.classList.contains('expanded')) {
        childrenEl.classList.add('expanded')
        if (btn) btn.classList.add('expanded')
      }
    }

    // Use event delegation for expand buttons and header clicks
    document.querySelector('.sidebar')?.addEventListener('click', handleExpandClick)
    document.querySelector('.sidebar')?.addEventListener('click', handleHeaderClick)

    // Search handler - searches the full JSON data with fuzzy matching
    const searchInput = document.querySelector<HTMLInputElement>('.search-input')
    const searchContainer = searchInput?.closest('.sidebar-search')

    // Create match count indicator
    let matchCountEl = searchContainer?.querySelector('.search-match-count') as HTMLElement | null
    if (!matchCountEl && searchContainer) {
      matchCountEl = document.createElement('span')
      matchCountEl.className = 'search-match-count'
      matchCountEl.style.cssText = 'position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 0.75rem; color: var(--text-secondary); pointer-events: none;'
      ;(searchContainer as HTMLElement).style.position = 'relative'
      searchContainer.appendChild(matchCountEl)
    }

    if (searchInput) {
      let searchTimeout: ReturnType<typeof setTimeout>

      searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
          const query = searchInput.value.trim()
          const nodes = document.querySelectorAll<HTMLElement>('.sidebar .taxonomy-node')

          // Update match count display
          const updateMatchCount = (count: number, matchType?: string) => {
            if (matchCountEl) {
              if (count === 0 && query.length > 0) {
                matchCountEl.textContent = 'No matches'
                matchCountEl.style.color = '#f44336'
              } else if (count > 0) {
                const typeIndicator = matchType === 'fuzzy' ? ' ~' : ''
                matchCountEl.textContent = `${count}${typeIndicator}`
                matchCountEl.style.color = 'var(--text-secondary)'
              } else {
                matchCountEl.textContent = ''
              }
            }
          }

          if (!query) {
            nodes.forEach(n => {
              n.style.display = ''
              n.classList.remove('search-match', 'search-match-fuzzy')
            })
            updateMatchCount(0)
            return
          }

          // Search in the full flattened data with fuzzy matching
          const matchingIds = new Map<string, SearchMatch>()
          const ancestorIds = new Set<string>()
          let hasFuzzyMatches = false

          if (flatDataRef.current) {
            for (const { node, path } of flatDataRef.current) {
              const match = scoreMatch(node, query)
              if (match) {
                match.path = path
                matchingIds.set(node.id, match)
                if (match.matchType === 'fuzzy') hasFuzzyMatches = true
                // Add all ancestors
                const pathParts = path.split('/').filter(Boolean)
                for (let i = 0; i < pathParts.length - 1; i++) {
                  ancestorIds.add(pathParts[i])
                }
              }
            }
          }

          updateMatchCount(matchingIds.size, hasFuzzyMatches ? 'fuzzy' : undefined)

          // Update visibility based on matches
          nodes.forEach(n => {
            const id = n.dataset.id || ''
            const match = matchingIds.get(id)
            if (match) {
              n.style.display = ''
              n.classList.add('search-match')
              // Mark fuzzy matches differently
              if (match.matchType === 'fuzzy') {
                n.classList.add('search-match-fuzzy')
              } else {
                n.classList.remove('search-match-fuzzy')
              }
              // Expand path to this node
              let parent = n.parentElement
              while (parent) {
                if (parent.classList.contains('taxonomy-children')) {
                  parent.classList.add('expanded')
                  const parentBtn = parent.parentElement?.querySelector(':scope > .taxonomy-header .expand-btn')
                  if (parentBtn) parentBtn.classList.add('expanded')
                }
                if (parent.classList.contains('taxonomy-node')) {
                  parent.style.display = ''
                }
                parent = parent.parentElement
              }
            } else if (ancestorIds.has(id)) {
              n.style.display = ''
              n.classList.remove('search-match', 'search-match-fuzzy')
            } else {
              n.style.display = 'none'
              n.classList.remove('search-match', 'search-match-fuzzy')
            }
          })
        }, 150) // Debounce search
      })
    }

    // Highlight current taxon and auto-expand path
    if (currentTaxonId) {
      const currentNode = document.querySelector<HTMLElement>(`.taxonomy-node[data-id="${currentTaxonId}"]`)
      if (currentNode) {
        const header = currentNode.querySelector('.taxonomy-header')
        if (header) header.classList.add('selected')

        let parent = currentNode.parentElement
        while (parent) {
          if (parent.classList.contains('taxonomy-children')) {
            parent.classList.add('expanded')
            const parentBtn = parent.parentElement?.querySelector(':scope > .taxonomy-header .expand-btn')
            if (parentBtn) parentBtn.classList.add('expanded')
          }
          parent = parent.parentElement
        }
      }
    }

    // Close mobile sidebar when backdrop is clicked
    const backdrop = document.querySelector('.sidebar-backdrop')
    function handleBackdropClick() {
      document.querySelector('.sidebar')?.classList.remove('open')
      backdrop?.classList.remove('visible')
    }
    backdrop?.addEventListener('click', handleBackdropClick)

    return () => {
      document.querySelector('.sidebar')?.removeEventListener('click', handleExpandClick)
      document.querySelector('.sidebar')?.removeEventListener('click', handleHeaderClick)
      backdrop?.removeEventListener('click', handleBackdropClick)
    }
  }, [currentTaxonId])

  return null // This component only adds client-side behavior
}
