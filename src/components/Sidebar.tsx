import { treeOfLife, type TaxonNode } from '@/lib/taxonomy'
import { getRankAbbrev, getRankColor } from '@/lib/taxonomy'
import { SidebarClient } from './SidebarClient'

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}

// Count total descendant nodes
function countDescendants(node: TaxonNode): number {
  if (!node.children) return 0
  return node.children.reduce((sum, child) => sum + 1 + countDescendants(child), 0)
}

// Serialize tree to JSON for client-side search/lazy-load
function serializeTree(nodes: TaxonNode[]): string {
  return JSON.stringify(nodes)
}

const MAX_DEPTH = 4 // domain/kingdom/phylum/class/order rendered, deeper nodes lazy-loaded

function TaxonTreeNode({ node, depth, basePath, maxDepth = MAX_DEPTH }: {
  node: TaxonNode
  depth: number
  basePath: string
  maxDepth?: number
}) {
  const hasChildren = !!(node.children && node.children.length > 0)
  const currentPath = `${basePath}/${node.id}`
  const url = `/taxon${currentPath}`

  // If we're at max depth and have children, render a lazy placeholder instead
  const atDepthLimit = depth >= maxDepth && hasChildren
  const descendantCount = atDepthLimit ? countDescendants(node) : 0

  return (
    <div
      className="taxonomy-node"
      data-id={node.id}
      data-rank={node.rank}
      data-name={node.name.toLowerCase()}
      data-sci={node.scientificName.toLowerCase()}
      data-path={currentPath}
    >
      <a
        href={url}
        className={`taxonomy-header`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {hasChildren ? (
          <button
            className="expand-btn"
            data-toggle
            data-lazy={atDepthLimit ? 'true' : undefined}
            aria-label="Expand"
          >&#9656;</button>
        ) : (
          <span className="expand-spacer" />
        )}

        <span
          className="rank-badge-mini"
          style={{ backgroundColor: getRankColor(node.rank) }}
          title={node.rank}
        >
          {getRankAbbrev(node.rank)}
        </span>

        <div className="taxon-name-container">
          <span className="taxon-name">{node.scientificName}</span>
          {node.name !== node.scientificName && (
            <span className="taxon-common-name">{node.name}</span>
          )}
        </div>

        {node.speciesCount && (
          <span className="species-count" title={`${node.speciesCount.toLocaleString()} species`}>
            {formatNumber(node.speciesCount)}
          </span>
        )}
      </a>

      {hasChildren && !atDepthLimit && (
        <div className="taxonomy-children">
          {node.children!.map(child => (
            <TaxonTreeNode key={child.id} node={child} depth={depth + 1} basePath={currentPath} maxDepth={maxDepth} />
          ))}
        </div>
      )}

      {atDepthLimit && (
        <div className="taxonomy-children" data-lazy-children={node.id}>
          <div
            className="lazy-placeholder"
            style={{ paddingLeft: `${(depth + 1) * 12 + 8}px` }}
            data-parent-id={node.id}
          >
            <span className="lazy-count">{descendantCount} sub-groups...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export function Sidebar({ currentTaxonId }: { currentTaxonId?: string }) {
  // Embed full tree as JSON for client-side search and lazy loading
  const treeJson = serializeTree(treeOfLife)

  return (
    <aside className="sidebar" data-current-taxon={currentTaxonId}>
      <script
        id="taxonomy-data"
        type="application/json"
        dangerouslySetInnerHTML={{ __html: treeJson }}
      />

      <div className="sidebar-search">
        <input type="text" className="search-input" placeholder="Search taxonomy..." />
      </div>

      <div className="sidebar-nav-links">
        <a href="/dashboard" className="sidebar-nav-link">
          <span className="sidebar-nav-icon" style={{ background: '#1565C0' }}>D</span>
          Dashboard
        </a>
        <a href="/biomes" className="sidebar-nav-link">
          <span className="sidebar-nav-icon" style={{ background: '#00897B' }}>B</span>
          Biomes
        </a>
      </div>

      <div className="sidebar-header">
        <h2>Tree of Life</h2>
        <p className="sidebar-subtitle">Complete Taxonomic Classification</p>
        <div className="rank-legend">
          {(['D', 'K', 'P', 'C', 'O', 'F', 'G', 'S'] as const).map((letter, i) => {
            const colors = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#00BCD4', '#4CAF50', '#8BC34A']
            return (
              <span key={letter} className="rank-badge-mini" style={{ backgroundColor: colors[i] }}>
                {letter}
              </span>
            )
          })}
        </div>
      </div>

      <div className="taxonomy-tree">
        {treeOfLife.map(domain => (
          <TaxonTreeNode key={domain.id} node={domain} depth={0} basePath="" />
        ))}
      </div>

      <SidebarClient currentTaxonId={currentTaxonId} />
    </aside>
  )
}
