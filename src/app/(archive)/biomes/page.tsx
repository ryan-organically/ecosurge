import type { Metadata } from 'next'
import Link from 'next/link'
import { biomes } from '@/data/biomes'
import { BiomeGlobe } from '@/components/BiomeGlobe'
import { BiomeComparisonChart, BiomeConservationComparisonChart } from '@/components/BiomeComparisonChart'
import { BiomeTrendOverlayChart, BiomeAreaTreemap, BiomeThreatBubbleChart, BiomeDeclineRanking } from '@/components/BiomeOverviewCharts'
import { BiomeCompareMode } from '@/components/BiomeCompareMode'

export const metadata: Metadata = {
  title: 'World Biomes - The Species Archive',
  description: 'Explore the major biomes of Earth - from tropical rainforests to deep sea trenches. Discover biodiversity, conservation status, and threats for each biome.',
}

const severityColors: Record<string, string> = {
  critical: '#FF4500',
  high: '#FFA500',
  moderate: '#FFD700',
  low: '#32CD32',
}

function getThreatScore(biome: typeof biomes[0]): number {
  const total = biome.stats.totalSpecies
  if (total === 0) return 0
  return (biome.stats.threatenedSpecies / total) * 100
}

export default function BiomesPage() {
  const sortedBiomes = [...biomes].sort((a, b) => b.biodiversityIndex - a.biodiversityIndex)
  const totalSpecies = biomes.reduce((sum, b) => sum + b.stats.totalSpecies, 0)
  const totalThreatened = biomes.reduce((sum, b) => sum + b.stats.threatenedSpecies, 0)
  const totalEndemic = biomes.reduce((sum, b) => sum + b.stats.endemicSpecies, 0)

  return (
    <div>
      <nav className="breadcrumb">
        <Link href="/archive">Archive</Link>
        <span className="breadcrumb-sep">&rarr;</span>
        <span className="breadcrumb-current">Biomes</span>
      </nav>

      <div className="taxon-header">
        <span className="rank-badge" style={{ background: '#00897B' }}>BIOMES</span>
        <h1>World Biomes</h1>
        <p className="taxon-scientific">Major ecosystems of planet Earth</p>
      </div>

      <p className="taxon-description" style={{ marginBottom: '1.5rem' }}>
        Biomes are large-scale biological communities classified by their dominant vegetation and climate patterns.
        Each biome supports distinct communities of plants, animals, and microorganisms adapted to its conditions.
      </p>

      <div className="taxon-stats">
        <div className="taxon-stat">
          <span className="stat-value">{biomes.length}</span>
          <span className="stat-label">Biomes</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value">{totalSpecies >= 1000000 ? `${(totalSpecies / 1000000).toFixed(1)}M` : totalSpecies.toLocaleString()}</span>
          <span className="stat-label">Total Species</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value" style={{ color: '#FF5722' }}>{totalThreatened.toLocaleString()}</span>
          <span className="stat-label">Threatened</span>
        </div>
        <div className="taxon-stat">
          <span className="stat-value" style={{ color: '#9C27B0' }}>{totalEndemic.toLocaleString()}</span>
          <span className="stat-label">Endemic</span>
        </div>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h3>Global Biome Distribution</h3>
        <BiomeGlobe height={380} />
      </div>

      {/* Comparison Charts */}
      <div className="taxon-charts-section">
        <div className="charts-grid">
          <BiomeComparisonChart biomes={biomes} />
          <BiomeConservationComparisonChart biomes={biomes} />
        </div>
      </div>

      {/* Trend & Area Analysis */}
      <div className="taxon-charts-section">
        <div className="charts-grid">
          <BiomeTrendOverlayChart biomes={biomes} />
          <BiomeDeclineRanking biomes={biomes} />
        </div>
      </div>

      {/* Threat & Area Charts */}
      <div className="taxon-charts-section">
        <div className="charts-grid">
          <BiomeAreaTreemap biomes={biomes} />
          <BiomeThreatBubbleChart biomes={biomes} />
        </div>
      </div>

      {/* Compare Mode */}
      <BiomeCompareMode biomes={biomes} />

      <div className="child-taxa">
        <h3>All Biomes</h3>
        <div className="taxa-grid">
          {sortedBiomes.map(biome => {
            const threatPct = getThreatScore(biome)
            const topThreat = biome.threats.find(t => t.severity === 'critical') || biome.threats[0]
            const fmtSpecies = biome.stats.totalSpecies >= 1000000
              ? `${(biome.stats.totalSpecies / 1000000).toFixed(1)}M`
              : `${(biome.stats.totalSpecies / 1000).toFixed(0)}K`

            return (
              <Link key={biome.id} href={`/biomes/${biome.id}`} className="taxon-card">
                <div className="taxon-card-header">
                  <span className="taxon-rank-badge" style={{ background: `${biome.color}30`, color: biome.color, border: `1px solid ${biome.color}50` }}>
                    {biome.biodiversityIndex}
                  </span>
                  <span className="taxon-rank">Biodiversity</span>
                </div>
                <h4>{biome.name}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0.5rem', lineHeight: 1.4 }}>
                  {biome.description.substring(0, 120)}...
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                  <span className="biome-card-stat">{fmtSpecies} species</span>
                  <span className="biome-card-stat">{biome.stats.endemicSpecies.toLocaleString()} endemic</span>
                </div>
                <div className="taxon-card-footer">
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: threatPct > 15 ? 'rgba(255,69,0,0.15)' : threatPct > 10 ? 'rgba(255,165,0,0.15)' : 'rgba(76,175,80,0.15)',
                    color: threatPct > 15 ? '#FF4500' : threatPct > 10 ? '#FFA500' : '#4CAF50',
                  }}>
                    {threatPct.toFixed(1)}% at risk
                  </span>
                  {topThreat && (
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {topThreat.name}
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
