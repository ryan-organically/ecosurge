import type { Metadata } from 'next'
import Link from 'next/link'
import {
  treeOfLife,
  sampleSpecies,
  getSpeciesForTaxon,
  getTaxonPaths,
  getRankAbbrev,
  getRankColor,
  getNextRankLabel,
  findAncestors,
  type TaxonNode,
} from '@/lib/taxonomy'
import { SpeciesCard } from '@/components/SpeciesCard'
import { CladeDiagramWrapper } from '@/components/CladeDiagramWrapper'
import { Tree3DWrapper } from '@/components/Tree3DWrapper'
import { buildFocusedTree } from '@/lib/cladeUtils'
import { getEnrichment } from '@/data/enrichment'
import { TaxonChartsSection } from '@/components/TaxonCharts'
import { TaxonImage } from '@/components/TaxonImage'
import { getBiomeById } from '@/data/biomes'

type PageProps = { params: Promise<{ slug: string[] }> }

export function generateStaticParams() {
  return getTaxonPaths(treeOfLife).map(entry => ({
    slug: entry.params.slug.split('/')
  }))
}

function findNodeByPath(nodes: TaxonNode[], slugParts: string[]): TaxonNode | null {
  let current = nodes
  let found: TaxonNode | null = null
  for (const part of slugParts) {
    found = current.find(n => n.id === part) || null
    if (!found) return null
    current = found.children || []
  }
  return found
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const node = findNodeByPath(treeOfLife, slug)
  if (!node) return { title: 'Not Found' }

  const description = node.description
    || `Explore ${node.name} (${node.scientificName}), a ${node.rank}${node.speciesCount ? ` with ${node.speciesCount.toLocaleString()} known species` : ''}.`

  return {
    title: `${node.name} (${node.scientificName}) - ${node.rank}`,
    description,
    openGraph: {
      title: `${node.name} (${node.scientificName})`,
      description,
    },
  }
}

export default async function TaxonPage({ params }: PageProps) {
  const { slug } = await params
  const node = findNodeByPath(treeOfLife, slug)
  if (!node) return <div>Taxon not found</div>

  const breadcrumb = slug
  const ancestors = findAncestors(treeOfLife, node.id) || []
  const relatedSpecies = getSpeciesForTaxon(node.id, sampleSpecies)
  const enrichment = getEnrichment(node.id)

  return (
        <div>
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/archive">Archive</Link>
            {ancestors.map((ancestor, i) => (
              <span key={ancestor.id}>
                <span className="breadcrumb-sep">&rarr;</span>
                <Link href={`/taxon/${breadcrumb.slice(0, i + 1).join('/')}`}>
                  {ancestor.name}
                </Link>
              </span>
            ))}
            <span className="breadcrumb-sep">&rarr;</span>
            <span className="breadcrumb-current">{node.name}</span>
          </nav>

          {/* Header */}
          <div className="taxon-header-row">
            <div className="taxon-header">
              <span className="rank-badge">{node.rank}</span>
              <h1>{node.name}</h1>
              <p className="taxon-scientific">{node.scientificName}</p>
            </div>
            <TaxonImage taxonId={node.id} name={node.name} />
          </div>

          {node.description && (
            <div className="taxon-description">
              <p>{node.description}</p>
            </div>
          )}

          {/* Stats */}
          <div className="taxon-stats">
            {node.speciesCount != null && (
              <div className="taxon-stat">
                <span className="stat-value">{node.speciesCount.toLocaleString()}</span>
                <span className="stat-label">Known Species</span>
              </div>
            )}
            {node.children && node.children.length > 0 && (
              <div className="taxon-stat">
                <span className="stat-value">{node.children.length}</span>
                <span className="stat-label">Sub-groups</span>
              </div>
            )}
          </div>

          {/* Biome Associations */}
          {enrichment?.biomes && enrichment.biomes.length > 0 && (
            <div style={{ marginTop: '1.5rem' }}>
              <h3>Biomes</h3>
              <div className="distribution-badges">
                {enrichment.biomes.map(biomeId => {
                  const biome = getBiomeById(biomeId)
                  if (!biome) return null
                  return (
                    <Link key={biomeId} href={`/biomes/${biomeId}`} className="distribution-badge" style={{
                      borderColor: biome.color,
                      color: biome.color,
                      background: `${biome.color}15`,
                      textDecoration: 'none',
                    }}>
                      {biome.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Clade Diagram */}
          {(() => {
            const focusedTree = buildFocusedTree(treeOfLife, node.id, slug)
            return focusedTree ? (
              <>
                <div className="clade-section">
                  <h3>Position in the Tree of Life</h3>
                  <CladeDiagramWrapper data={focusedTree} activeNodeId={node.id} size={500} showLegend />
                </div>
                <div className="tree3d-section">
                  <h3>3D Tree Explorer</h3>
                  <Tree3DWrapper data={focusedTree} activeNodeId={node.id} />
                </div>
              </>
            ) : null
          })()}

          {/* Charts & Facts */}
          {enrichment && (
            <TaxonChartsSection
              data={enrichment}
              name={node.name}
              children={node.children?.map(c => ({ name: c.name, speciesCount: c.speciesCount }))}
            />
          )}

          {/* Children */}
          {node.children && node.children.length > 0 && (
            <div className="child-taxa">
              <h3>{getNextRankLabel(node.rank)}</h3>
              <div className="taxa-grid">
                {node.children.map(child => {
                  const childSlug = `${breadcrumb.join('/')}/${child.id}`
                  return (
                    <Link key={child.id} href={`/taxon/${childSlug}`} className="taxon-card">
                      <div className="taxon-card-header">
                        <span className="taxon-rank-badge" style={{ background: getRankColor(child.rank) }}>
                          {getRankAbbrev(child.rank)}
                        </span>
                        <span className="taxon-rank">{child.rank}</span>
                      </div>
                      <h4>{child.name}</h4>
                      <p>{child.scientificName}</p>
                      <div className="taxon-card-footer">
                        {child.speciesCount != null && (
                          <span className="count">{child.speciesCount.toLocaleString()} species</span>
                        )}
                        {child.children && child.children.length > 0 && (
                          <span className="child-indicator">+{child.children.length}</span>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Related species field guides */}
          {relatedSpecies.length > 0 && (
            <div className="related-species" style={{ marginTop: '2rem' }}>
              <h3>Field Guides</h3>
              <div className="species-grid">
                {relatedSpecies.map(species => (
                  <SpeciesCard key={species.id} species={species} />
                ))}
              </div>
            </div>
          )}
        </div>
  )
}
