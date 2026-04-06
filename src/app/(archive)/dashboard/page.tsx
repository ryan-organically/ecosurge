import type { Metadata } from 'next'
import Link from 'next/link'
import { biomes } from '@/data/biomes'
import { DashboardCharts } from '@/components/DashboardCharts'
import { PopulationHealthOverview } from '@/components/PopulationHealthOverview'
import { getEnrichment } from '@/data/enrichment'

export const metadata: Metadata = {
  title: 'Ecosystem Dashboard - The Species Archive',
  description: 'Global biodiversity overview: biome health, conservation status, threat assessments, and ecosystem trends across all major biomes.',
}

export default function DashboardPage() {
  const totalSpecies = biomes.reduce((sum, b) => sum + b.stats.totalSpecies, 0)
  const totalThreatened = biomes.reduce((sum, b) => sum + b.stats.threatenedSpecies, 0)
  const totalEndemic = biomes.reduce((sum, b) => sum + b.stats.endemicSpecies, 0)
  const totalExtinct = biomes.reduce((sum, b) => sum + b.stats.extinctSpecies, 0)
  const avgBiodiversity = biomes.reduce((sum, b) => sum + b.biodiversityIndex, 0) / biomes.length
  const mostBiodiverse = [...biomes].sort((a, b) => b.biodiversityIndex - a.biodiversityIndex)[0]
  const mostThreatened = [...biomes].sort((a, b) => {
    const aPct = a.stats.totalSpecies > 0 ? a.stats.threatenedSpecies / a.stats.totalSpecies : 0
    const bPct = b.stats.totalSpecies > 0 ? b.stats.threatenedSpecies / b.stats.totalSpecies : 0
    return bPct - aPct
  })[0]

  return (
    <div>
      <nav className="breadcrumb">
        <Link href="/archive">Archive</Link>
        <span className="breadcrumb-sep">&rarr;</span>
        <span className="breadcrumb-current">Ecosystem Dashboard</span>
      </nav>

      <div className="taxon-header">
        <span className="rank-badge" style={{ background: '#1565C0' }}>DASHBOARD</span>
        <h1>Global Ecosystem Dashboard</h1>
        <p className="taxon-scientific">Biodiversity and conservation overview across all major biomes</p>
      </div>

      {/* Global Stats */}
      <div className="welcome-stats">
        <div className="stat-card">
          <div className="stat-number">{totalSpecies >= 1000000 ? `${(totalSpecies / 1000000).toFixed(1)}M` : totalSpecies.toLocaleString()}</div>
          <div className="stat-label">Total Species</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: '#FF5722' }}>{totalThreatened.toLocaleString()}</div>
          <div className="stat-label">Threatened Species</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: '#9C27B0' }}>{totalEndemic.toLocaleString()}</div>
          <div className="stat-label">Endemic Species</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{totalExtinct.toLocaleString()}</div>
          <div className="stat-label">Extinct Species</div>
        </div>
      </div>

      <div className="info-grid" style={{ marginTop: '1.5rem' }}>
        <div className="info-card">
          <h3>Biomes Tracked</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{biomes.length}</p>
        </div>
        <div className="info-card">
          <h3>Avg Biodiversity Index</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{avgBiodiversity.toFixed(1)}/100</p>
        </div>
        <div className="info-card">
          <h3>Most Biodiverse</h3>
          <p><Link href={`/biomes/${mostBiodiverse.id}`} style={{ color: mostBiodiverse.color }}>{mostBiodiverse.name}</Link></p>
        </div>
        <div className="info-card">
          <h3>Most Threatened</h3>
          <p><Link href={`/biomes/${mostThreatened.id}`} style={{ color: '#FF4500' }}>{mostThreatened.name}</Link></p>
        </div>
      </div>

      {/* Charts */}
      <DashboardCharts biomes={biomes} />

      {/* Population Health by Kingdom */}
      {(() => {
        const kingdomDefs = [
          { id: 'animalia', name: 'Animalia', color: '#FF5722' },
          { id: 'plantae', name: 'Plantae', color: '#4CAF50' },
          { id: 'fungi', name: 'Fungi', color: '#9C27B0' },
          { id: 'protista', name: 'Protista', color: '#00BCD4' },
          { id: 'bacteria', name: 'Bacteria', color: '#FF9800' },
          { id: 'archaea', name: 'Archaea', color: '#607D8B' },
        ]
        const kingdoms = kingdomDefs
          .map(k => {
            const data = getEnrichment(k.id)
            if (!data?.trendData) return null
            const last = data.trendData[data.trendData.length - 1]
            return {
              id: k.id,
              name: k.name,
              color: k.color,
              trend: data.populationTrend === 'increasing' ? 'increasing' as const
                : data.populationTrend === 'decreasing' ? 'decreasing' as const
                : 'stable' as const,
              currentIndex: last?.index ?? 0,
              trendData: data.trendData,
            }
          })
          .filter((k): k is NonNullable<typeof k> => k !== null)
        return <PopulationHealthOverview kingdoms={kingdoms} />
      })()}

      {/* Quick Links */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Explore Biomes</h3>
        <div className="distribution-badges">
          {biomes.map(biome => (
            <Link key={biome.id} href={`/biomes/${biome.id}`} className="distribution-badge" style={{
              borderColor: biome.color,
              color: biome.color,
              textDecoration: 'none',
            }}>
              {biome.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
