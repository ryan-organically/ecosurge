import type { Metadata } from 'next'
import Link from 'next/link'
import { biomes, getBiomeById } from '@/data/biomes'
import { BiomeChartsSection } from '@/components/BiomeChartsSection'

type PageProps = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return biomes.map(b => ({ id: b.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const biome = getBiomeById(id)
  if (!biome) return { title: 'Not Found' }

  return {
    title: `${biome.name} - Biomes - The Species Archive`,
    description: biome.description.substring(0, 160),
    openGraph: {
      title: biome.name,
      description: biome.description.substring(0, 160),
    },
  }
}

const severityColors: Record<string, string> = {
  critical: '#FF4500',
  high: '#FFA500',
  moderate: '#FFD700',
  low: '#32CD32',
}

export default async function BiomeDetailPage({ params }: PageProps) {
  const { id } = await params
  const biome = getBiomeById(id)
  if (!biome) return <div>Biome not found</div>

  const threatPct = biome.stats.totalSpecies > 0
    ? ((biome.stats.threatenedSpecies / biome.stats.totalSpecies) * 100).toFixed(1)
    : '0'

  return (
    <div>
      <nav className="breadcrumb">
        <Link href="/archive">Archive</Link>
        <span className="breadcrumb-sep">&rarr;</span>
        <Link href="/biomes">Biomes</Link>
        <span className="breadcrumb-sep">&rarr;</span>
        <span className="breadcrumb-current">{biome.name}</span>
      </nav>

      <div className="taxon-header-row">
        <div className="taxon-header">
          <span className="rank-badge" style={{ background: biome.color }}>BIOME</span>
          <h1>{biome.name}</h1>
        </div>
      </div>

      <div className="taxon-description">
        <p>{biome.description}</p>
      </div>

      {/* Stats */}
      <div className="taxon-stats">
        <div className="taxon-stat">
          <span className="stat-value">{biome.stats.totalSpecies >= 1000000 ? `${(biome.stats.totalSpecies / 1000000).toFixed(1)}M` : biome.stats.totalSpecies.toLocaleString()}</span>
          <span className="stat-label">Total Species</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value" style={{ color: '#9C27B0' }}>{biome.stats.endemicSpecies.toLocaleString()}</span>
          <span className="stat-label">Endemic Species</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value" style={{ color: '#FF5722' }}>{biome.stats.threatenedSpecies.toLocaleString()}</span>
          <span className="stat-label">Threatened ({threatPct}%)</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value">{biome.stats.extinctSpecies.toLocaleString()}</span>
          <span className="stat-label">Extinct</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value">{biome.biodiversityIndex}/100</span>
          <span className="stat-label">Biodiversity Index</span>
        </div>
      </div>

      {/* Climate */}
      <div className="info-grid" style={{ marginTop: '1.5rem' }}>
        <div className="info-card">
          <h3>Temperature</h3>
          <p>{biome.climate.temperatureRange}</p>
        </div>
        <div className="info-card">
          <h3>Precipitation</h3>
          <p>{biome.climate.precipitation}</p>
        </div>
        <div className="info-card">
          <h3>Seasonality</h3>
          <p>{biome.climate.seasonality}</p>
        </div>
        <div className="info-card">
          <h3>Area</h3>
          <p>{biome.area} ({biome.percentLand}% of Earth&apos;s surface)</p>
        </div>
      </div>

      {/* Regions */}
      <div className="distribution-section" style={{ marginTop: '1.5rem' }}>
        <h3>Key Regions</h3>
        <div className="distribution-badges">
          {biome.regions.map(region => (
            <span key={region} className="distribution-badge-sm" style={{
              borderColor: biome.color,
              color: biome.color,
            }}>
              {region}
            </span>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <BiomeChartsSection biome={biome} />

      {/* Threats */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Threats</h3>
        <div className="threat-cards">
          {biome.threats.map((threat, i) => (
            <div key={i} className="threat-card" style={{ borderLeftColor: severityColors[threat.severity] }}>
              <div className="threat-card-header">
                <span className="threat-card-name">{threat.name}</span>
                <span className="threat-severity-pill" style={{
                  color: severityColors[threat.severity],
                  background: `${severityColors[threat.severity]}18`,
                  borderColor: `${severityColors[threat.severity]}40`,
                }}>
                  {threat.severity}
                </span>
              </div>
              <p className="threat-card-desc">{threat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Species Groups */}
      {biome.keySpeciesGroups.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Key Taxonomic Groups</h3>
          <div className="distribution-badges">
            {biome.keySpeciesGroups.map(groupId => (
              <Link key={groupId} href={`/taxon/${groupId}`} className="distribution-badge" style={{
                borderColor: '#2196F3',
                color: '#2196F3',
                background: 'rgba(33,150,243,0.08)',
                textDecoration: 'none',
                textTransform: 'capitalize',
              }}>
                {groupId.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
