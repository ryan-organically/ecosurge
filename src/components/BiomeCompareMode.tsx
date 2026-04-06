'use client'

import { useState, useMemo } from 'react'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar,
} from 'recharts'
import type { Biome } from '@/data/biomes'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

interface BiomeCompareModeProps {
  biomes: Biome[]
}

export function BiomeCompareMode({ biomes }: BiomeCompareModeProps) {
  const [biome1Id, setBiome1Id] = useState<string>(biomes[0]?.id || '')
  const [biome2Id, setBiome2Id] = useState<string>(biomes[1]?.id || '')
  const [isOpen, setIsOpen] = useState(false)

  const biome1 = useMemo(() => biomes.find(b => b.id === biome1Id), [biomes, biome1Id])
  const biome2 = useMemo(() => biomes.find(b => b.id === biome2Id), [biomes, biome2Id])

  if (!biome1 || !biome2) return null

  // Normalize values for radar chart (0-100 scale)
  const maxSpecies = Math.max(...biomes.map(b => b.stats.totalSpecies))
  const maxEndemic = Math.max(...biomes.map(b => b.stats.endemicSpecies))
  const maxArea = Math.max(...biomes.map(b => b.percentLand))

  const radarData = [
    {
      metric: 'Biodiversity',
      [biome1.name]: biome1.biodiversityIndex,
      [biome2.name]: biome2.biodiversityIndex,
      fullMark: 100,
    },
    {
      metric: 'Species',
      [biome1.name]: Math.round((biome1.stats.totalSpecies / maxSpecies) * 100),
      [biome2.name]: Math.round((biome2.stats.totalSpecies / maxSpecies) * 100),
      fullMark: 100,
    },
    {
      metric: 'Endemic',
      [biome1.name]: Math.round((biome1.stats.endemicSpecies / maxEndemic) * 100),
      [biome2.name]: Math.round((biome2.stats.endemicSpecies / maxEndemic) * 100),
      fullMark: 100,
    },
    {
      metric: 'Threatened %',
      [biome1.name]: Math.round((biome1.stats.threatenedSpecies / biome1.stats.totalSpecies) * 100),
      [biome2.name]: Math.round((biome2.stats.threatenedSpecies / biome2.stats.totalSpecies) * 100),
      fullMark: 100,
    },
    {
      metric: 'Land Coverage',
      [biome1.name]: Math.round((biome1.percentLand / maxArea) * 100),
      [biome2.name]: Math.round((biome2.percentLand / maxArea) * 100),
      fullMark: 100,
    },
  ]

  // Trend comparison data
  const trendData = biome1.trendData.map((d, i) => ({
    year: d.year,
    [biome1.name]: d.index,
    [biome2.name]: biome2.trendData[i]?.index ?? 0,
  }))

  // Conservation breakdown comparison
  const statusOrder = ['LC', 'NT', 'VU', 'EN', 'CR', 'EX'] as const
  const statusLabels: Record<string, string> = {
    LC: 'Least Concern', NT: 'Near Threatened', VU: 'Vulnerable',
    EN: 'Endangered', CR: 'Critically Endangered', EX: 'Extinct',
  }

  const conservationData = statusOrder.map(status => {
    const total1 = Object.values(biome1.conservationBreakdown).reduce((s, v) => s + (v || 0), 0)
    const total2 = Object.values(biome2.conservationBreakdown).reduce((s, v) => s + (v || 0), 0)
    return {
      status: statusLabels[status],
      [biome1.name]: total1 > 0 ? +((((biome1.conservationBreakdown as Record<string, number>)[status] || 0) / total1) * 100).toFixed(1) : 0,
      [biome2.name]: total2 > 0 ? +((((biome2.conservationBreakdown as Record<string, number>)[status] || 0) / total2) * 100).toFixed(1) : 0,
    }
  })

  // Threat severity counts
  const severityOrder = ['critical', 'high', 'moderate', 'low'] as const
  const severityColors: Record<string, string> = {
    critical: '#FF4500', high: '#FFA500', moderate: '#FFD700', low: '#32CD32',
  }
  const threatData = severityOrder.map(sev => ({
    severity: sev.charAt(0).toUpperCase() + sev.slice(1),
    [biome1.name]: biome1.threats.filter(t => t.severity === sev).length,
    [biome2.name]: biome2.threats.filter(t => t.severity === sev).length,
    color: severityColors[sev],
  }))

  return (
    <div className="compare-mode-section">
      <div
        className="compare-mode-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}>&#9654;</span>
          Compare Biomes
        </h3>
        {!isOpen && (
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Click to compare two biomes side-by-side
          </span>
        )}
      </div>

      {isOpen && (
        <>
          <div className="compare-selectors">
            <div className="compare-selector">
              <label>First Biome</label>
              <select
                value={biome1Id}
                onChange={e => setBiome1Id(e.target.value)}
                style={{ borderColor: biome1.color }}
              >
                {biomes.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <div className="compare-biome-badge" style={{ background: `${biome1.color}20`, borderColor: biome1.color, color: biome1.color }}>
                {biome1.biodiversityIndex} Biodiversity Index
              </div>
            </div>

            <div className="compare-vs">VS</div>

            <div className="compare-selector">
              <label>Second Biome</label>
              <select
                value={biome2Id}
                onChange={e => setBiome2Id(e.target.value)}
                style={{ borderColor: biome2.color }}
              >
                {biomes.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <div className="compare-biome-badge" style={{ background: `${biome2.color}20`, borderColor: biome2.color, color: biome2.color }}>
                {biome2.biodiversityIndex} Biodiversity Index
              </div>
            </div>
          </div>

          {/* Stats comparison */}
          <div className="compare-stats-grid">
            <div className="compare-stat-row">
              <div className="compare-stat-value" style={{ color: biome1.color }}>
                {biome1.stats.totalSpecies >= 1000000
                  ? `${(biome1.stats.totalSpecies / 1000000).toFixed(1)}M`
                  : biome1.stats.totalSpecies.toLocaleString()}
              </div>
              <div className="compare-stat-label">Total Species</div>
              <div className="compare-stat-value" style={{ color: biome2.color }}>
                {biome2.stats.totalSpecies >= 1000000
                  ? `${(biome2.stats.totalSpecies / 1000000).toFixed(1)}M`
                  : biome2.stats.totalSpecies.toLocaleString()}
              </div>
            </div>
            <div className="compare-stat-row">
              <div className="compare-stat-value" style={{ color: biome1.color }}>
                {biome1.stats.endemicSpecies.toLocaleString()}
              </div>
              <div className="compare-stat-label">Endemic Species</div>
              <div className="compare-stat-value" style={{ color: biome2.color }}>
                {biome2.stats.endemicSpecies.toLocaleString()}
              </div>
            </div>
            <div className="compare-stat-row">
              <div className="compare-stat-value" style={{ color: biome1.color }}>
                {((biome1.stats.threatenedSpecies / biome1.stats.totalSpecies) * 100).toFixed(1)}%
              </div>
              <div className="compare-stat-label">Threatened %</div>
              <div className="compare-stat-value" style={{ color: biome2.color }}>
                {((biome2.stats.threatenedSpecies / biome2.stats.totalSpecies) * 100).toFixed(1)}%
              </div>
            </div>
            <div className="compare-stat-row">
              <div className="compare-stat-value" style={{ color: biome1.color }}>
                {biome1.percentLand}%
              </div>
              <div className="compare-stat-label">Land Coverage</div>
              <div className="compare-stat-value" style={{ color: biome2.color }}>
                {biome2.percentLand}%
              </div>
            </div>
          </div>

          {/* Charts grid */}
          <div className="charts-grid">
            {/* Radar comparison */}
            <div className="chart-card">
              <h4>Multi-Metric Comparison</h4>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#9aa0a6', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9aa0a6', fontSize: 10 }} />
                  <Radar
                    name={biome1.name}
                    dataKey={biome1.name}
                    stroke={biome1.color}
                    fill={biome1.color}
                    fillOpacity={0.3}
                  />
                  <Radar
                    name={biome2.name}
                    dataKey={biome2.name}
                    stroke={biome2.color}
                    fill={biome2.color}
                    fillOpacity={0.3}
                  />
                  <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                  <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa0a6' }} itemStyle={{ color: '#e8eaed' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Population trend comparison */}
            <div className="chart-card">
              <h4>Population Trend Comparison (1970-2024)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="year" tick={{ fill: '#9aa0a6', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                  <YAxis domain={[0, 110]} tick={{ fill: '#9aa0a6', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                  <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa0a6' }} itemStyle={{ color: '#e8eaed' }} />
                  <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                  <Line type="monotone" dataKey={biome1.name} stroke={biome1.color} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey={biome2.name} stroke={biome2.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Conservation breakdown comparison */}
            <div className="chart-card">
              <h4>Conservation Status Comparison (%)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conservationData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9aa0a6', fontSize: 10 }} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="status" width={120} tick={{ fill: '#9aa0a6', fontSize: 10 }} />
                  <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa0a6' }} itemStyle={{ color: '#e8eaed' }} formatter={(value: any) => [`${value}%`, '']} />
                  <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                  <Bar dataKey={biome1.name} fill={biome1.color} fillOpacity={0.8} />
                  <Bar dataKey={biome2.name} fill={biome2.color} fillOpacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Threat severity comparison */}
            <div className="chart-card">
              <h4>Threat Severity Distribution</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={threatData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="severity" tick={{ fill: '#9aa0a6', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#9aa0a6', fontSize: 10 }} />
                  <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa0a6' }} itemStyle={{ color: '#e8eaed' }} />
                  <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                  <Bar dataKey={biome1.name} fill={biome1.color} fillOpacity={0.8} />
                  <Bar dataKey={biome2.name} fill={biome2.color} fillOpacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top threats comparison */}
          <div className="compare-threats">
            <h4>Top Threats</h4>
            <div className="compare-threats-grid">
              <div className="compare-threat-list">
                <div className="compare-threat-header" style={{ borderColor: biome1.color }}>
                  {biome1.name}
                </div>
                {biome1.threats.slice(0, 3).map((threat, i) => (
                  <div key={i} className="compare-threat-item">
                    <span className="threat-severity-dot" style={{ background: severityColors[threat.severity] }} />
                    <span className="threat-name">{threat.name}</span>
                    <span className="threat-severity-label" style={{ color: severityColors[threat.severity] }}>
                      {threat.severity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="compare-threat-list">
                <div className="compare-threat-header" style={{ borderColor: biome2.color }}>
                  {biome2.name}
                </div>
                {biome2.threats.slice(0, 3).map((threat, i) => (
                  <div key={i} className="compare-threat-item">
                    <span className="threat-severity-dot" style={{ background: severityColors[threat.severity] }} />
                    <span className="threat-name">{threat.name}</span>
                    <span className="threat-severity-label" style={{ color: severityColors[threat.severity] }}>
                      {threat.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .compare-mode-section {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .compare-mode-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .compare-selectors {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .compare-selector {
          flex: 1;
          min-width: 200px;
        }
        .compare-selector label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .compare-selector select {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid;
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 0.9rem;
          cursor: pointer;
        }
        .compare-biome-badge {
          margin-top: 0.5rem;
          padding: 0.25rem 0.5rem;
          border: 1px solid;
          border-radius: 4px;
          font-size: 0.75rem;
          text-align: center;
        }
        .compare-vs {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-muted);
          padding: 0 0.5rem;
        }
        .compare-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .compare-stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
        }
        .compare-stat-value {
          font-size: 1.1rem;
          font-weight: 600;
          min-width: 80px;
        }
        .compare-stat-value:first-child {
          text-align: left;
        }
        .compare-stat-value:last-child {
          text-align: right;
        }
        .compare-stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
          flex: 1;
        }
        .compare-threats {
          margin-top: 1.5rem;
        }
        .compare-threats h4 {
          margin-bottom: 1rem;
        }
        .compare-threats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .compare-threat-list {
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          overflow: hidden;
        }
        .compare-threat-header {
          padding: 0.75rem 1rem;
          font-weight: 600;
          font-size: 0.9rem;
          border-bottom: 2px solid;
          background: rgba(255,255,255,0.02);
        }
        .compare-threat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .compare-threat-item:last-child {
          border-bottom: none;
        }
        .threat-severity-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .threat-name {
          flex: 1;
          font-size: 0.85rem;
        }
        .threat-severity-label {
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .compare-threats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
