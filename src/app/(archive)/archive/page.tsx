import type { Metadata } from 'next'
import { treeOfLife, sampleSpecies, conservationStatusColors, conservationStatusLabels } from '@/lib/taxonomy'
import { SpeciesCard } from '@/components/SpeciesCard'
import { OverviewGlobe } from '@/components/OverviewGlobe'
import { CladeDiagramWrapper } from '@/components/CladeDiagramWrapper'
import { Tree3DWrapper } from '@/components/Tree3DWrapper'
import { buildOverviewTree } from '@/lib/cladeUtils'

export const metadata: Metadata = {
  title: 'The Species Archive',
  description: 'A comprehensive field guide to every species on Earth. Explore the complete tree of life from domains to species.',
}

const statuses = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX', 'DD', 'NE'] as const

export default function ArchivePage() {
  return (
    <div>
      <div className="welcome-header-row">
        <div className="welcome-header">
          <h1>The Species Archive</h1>
          <p className="welcome-subtitle">A comprehensive field guide to life on Earth</p>
        </div>
        <OverviewGlobe />
      </div>

      <div className="welcome-stats">
        <div className="stat-card">
          <div className="stat-number">8.7M+</div>
          <div className="stat-label">Estimated Species</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2.1M</div>
          <div className="stat-label">Catalogued</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">41K+</div>
          <div className="stat-label">Threatened</div>
        </div>
      </div>

      <div className="welcome-intro">
        <h2>Explore the Tree of Life</h2>
        <p>Navigate through the complete taxonomic classification of all known organisms. From domains to species, discover the incredible diversity of life.</p>
      </div>

      <div className="clade-section">
        <h3>Phylogenetic Overview</h3>
        <p>A radial clade diagram showing the major branches of life. Click any node to explore.</p>
        <CladeDiagramWrapper data={buildOverviewTree(treeOfLife)} size={650} showLegend />
      </div>

      <div className="tree3d-section">
        <h3>3D Tree Explorer</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Rotate, zoom, and pan to explore the tree of life in three dimensions. Click any node to navigate.
        </p>
        <Tree3DWrapper data={buildOverviewTree(treeOfLife)} />
      </div>

      <div className="featured-species">
        <h3>Featured Field Guides</h3>
        <div className="species-grid">
          {sampleSpecies.map(species => (
            <SpeciesCard key={species.id} species={species} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Conservation Status Guide</h3>
        <div className="status-grid">
          {statuses.map(code => (
            <div key={code} className="status-item">
              <span className="status-badge" style={{ background: conservationStatusColors[code] }}>{code}</span>
              <span className="status-label">{conservationStatusLabels[code]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
