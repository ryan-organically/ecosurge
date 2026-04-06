import type { Metadata } from 'next'
import Link from 'next/link'
import {
  sampleSpecies,
  treeOfLife,
  conservationStatusColors,
  conservationStatusLabels,
  getRankColor,
  getRankAbbrev,
  type TaxonNode,
} from '@/lib/taxonomy'
import { PopulationChart } from '@/components/PopulationChart'
import { matchHabitatsToBiomes } from '@/data/helpers/ecosystem-stats'
import { getBiomeById } from '@/data/biomes'

export function generateStaticParams() {
  return sampleSpecies.map(s => ({ id: s.id }))
}

type PageProps = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const species = sampleSpecies.find(s => s.id === id)
  if (!species) return { title: 'Not Found' }

  return {
    title: `${species.commonName} (${species.scientificName})`,
    description: species.description.substring(0, 160),
    openGraph: {
      title: `${species.commonName} (${species.scientificName})`,
      description: species.description.substring(0, 160),
      images: species.images?.[0] ? [species.images[0]] : undefined,
    },
  }
}

function findGenusNode(nodes: TaxonNode[], genusName: string): TaxonNode | null {
  for (const node of nodes) {
    if (node.rank === 'genus' && node.scientificName.toLowerCase() === genusName.toLowerCase()) {
      return node
    }
    if (node.children) {
      const found = findGenusNode(node.children, genusName)
      if (found) return found
    }
  }
  return null
}

export default async function SpeciesPage({ params }: PageProps) {
  const { id } = await params
  const species = sampleSpecies.find(s => s.id === id)
  if (!species) return <div>Species not found</div>

  const statusColor = conservationStatusColors[species.conservationStatus]
  const statusLabel = conservationStatusLabels[species.conservationStatus]
  const imageUrl = `/species-images/${species.id}/full.webp`

  // Find close relatives
  const genusNode = findGenusNode(treeOfLife, species.taxonomy.genus)
  const closeRelatives = genusNode?.children?.filter(c => c.scientificName !== species.scientificName) || []

  // Find other species in same family with field guides
  const familyRelated = sampleSpecies.filter(s =>
    s.id !== species.id && s.taxonomy.family === species.taxonomy.family
  )

  return (
        <div className="field-guide">
          <Link href="/archive" className="back-btn">&larr; Back to Archive</Link>

          {/* Header */}
          <header className="field-guide-header">
            <div>
              <span className="species-badge" style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '6px', color: 'white', background: statusColor, marginBottom: '8px' }}>
                {species.conservationStatus} - {statusLabel}
              </span>
              <h1>{species.commonName}</h1>
              <p className="scientific-name" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {species.scientificName}
              </p>
            </div>
            <div className="header-visual">
              {imageUrl ? (
                <img src={imageUrl} alt={species.commonName} />
              ) : (
                <span className="species-emoji">&#x1F98E;</span>
              )}
            </div>
          </header>

          <div className="field-guide-body">
            {/* Classification */}
            <section>
              <h2>Classification</h2>
              <div className="taxonomy-path">
                {Object.entries(species.taxonomy).map(([rank, name], i, arr) => (
                  <span key={rank} style={{ display: 'contents' }}>
                    <div className="taxonomy-step">
                      <span className="rank">{rank}</span>
                      <span className="name">{name}</span>
                    </div>
                    {i < arr.length - 1 && <span className="taxonomy-arrow">&rarr;</span>}
                  </span>
                ))}
              </div>
            </section>

            {/* Overview */}
            <section>
              <h2>Overview</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{species.description}</p>
            </section>

            {/* Info Grid */}
            <div className="info-grid">
              <div className="info-card">
                <h3>Habitat</h3>
                <p>{species.habitat}</p>
              </div>
              <div className="info-card">
                <h3>Distribution</h3>
                <p>{species.distribution}</p>
              </div>
              {species.diet && (
                <div className="info-card">
                  <h3>Diet</h3>
                  <p>{species.diet}</p>
                </div>
              )}
              {species.lifespan && (
                <div className="info-card">
                  <h3>Lifespan</h3>
                  <p>{species.lifespan}</p>
                </div>
              )}
              {species.size && (
                <div className="info-card">
                  <h3>Size</h3>
                  <p>{species.size}</p>
                </div>
              )}
            </div>

            {/* Biome Associations */}
            {(() => {
              const habitatTexts = [species.habitat, species.distribution].filter(Boolean) as string[]
              const biomeIds = matchHabitatsToBiomes(habitatTexts)
              if (biomeIds.length === 0) return null
              return (
                <section>
                  <h2>Biomes</h2>
                  <div className="distribution-badges">
                    {biomeIds.map(biomeId => {
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
                </section>
              )
            })()}

            {/* Population Trend */}
            <section>
              <h2>Population Trend</h2>
              <PopulationChart status={species.conservationStatus} speciesName={species.commonName} />
            </section>

            {/* Close Relatives */}
            {(closeRelatives.length > 0 || familyRelated.length > 0) && (
              <section>
                <h2>Close Relatives</h2>

                {closeRelatives.length > 0 && (
                  <div>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '1rem 0 0.5rem' }}>
                      Same Genus ({species.taxonomy.genus})
                    </h3>
                    <div className="relatives-grid">
                      {closeRelatives.slice(0, 12).map(relative => (
                        <div key={relative.id} className="relative-card">
                          <span className="rank-badge-mini" style={{ backgroundColor: getRankColor(relative.rank) }}>
                            {getRankAbbrev(relative.rank)}
                          </span>
                          <div>
                            <strong>{relative.name}</strong>
                            <span className="relative-sci">{relative.scientificName}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {familyRelated.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0.5rem 0' }}>
                      Same Family ({species.taxonomy.family})
                    </h3>
                    <div className="species-grid">
                      {familyRelated.map(rel => (
                        <Link key={rel.id} href={`/species/${rel.id}`} className="species-card">
                          <div className="species-card-content">
                            <h4>{rel.commonName}</h4>
                            <p className="species-scientific">{rel.scientificName}</p>
                            <span className="conservation-badge" style={{ background: conservationStatusColors[rel.conservationStatus] }}>
                              {rel.conservationStatus}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Characteristics */}
            <section>
              <h2>Key Characteristics</h2>
              <ul className="characteristics-list">
                {species.characteristics.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </section>

            {/* Fun Facts */}
            <section>
              <h2>Fun Facts</h2>
              <div className="fun-facts-grid">
                {species.funFacts.map((fact, i) => (
                  <div key={i} className="fun-fact">
                    <span className="fact-number">{i + 1}</span>
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
  )
}
