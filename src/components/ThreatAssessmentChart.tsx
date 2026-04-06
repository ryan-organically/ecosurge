'use client'

import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip, Legend,
} from 'recharts'
import type { Biome, BiomeThreat } from '@/data/biomes'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

const severityValues: Record<string, number> = {
  critical: 100,
  high: 75,
  moderate: 50,
  low: 25,
}

const severityColors: Record<string, string> = {
  critical: '#FF4500',
  high: '#FFA500',
  moderate: '#FFD700',
  low: '#32CD32',
}

// Standard threat categories for normalization
const threatCategories = [
  'Habitat Loss',
  'Climate Change',
  'Pollution',
  'Invasive Species',
  'Overexploitation',
  'Disease',
]

function categorizeThreat(threat: BiomeThreat): string {
  const name = threat.name.toLowerCase()
  if (name.includes('habitat') || name.includes('deforest') || name.includes('land') || name.includes('urban') || name.includes('fragment') || name.includes('conversion') || name.includes('drain')) return 'Habitat Loss'
  if (name.includes('climate') || name.includes('warming') || name.includes('temperature') || name.includes('acidif') || name.includes('melt') || name.includes('sea level') || name.includes('permafrost')) return 'Climate Change'
  if (name.includes('pollut') || name.includes('plastic') || name.includes('chemical') || name.includes('nutrient') || name.includes('runoff') || name.includes('eutrophication')) return 'Pollution'
  if (name.includes('invasive') || name.includes('alien') || name.includes('introduced') || name.includes('non-native')) return 'Invasive Species'
  if (name.includes('overfish') || name.includes('overhunt') || name.includes('harvest') || name.includes('exploit') || name.includes('poach') || name.includes('logging') || name.includes('mining') || name.includes('trawl')) return 'Overexploitation'
  if (name.includes('disease') || name.includes('pathogen') || name.includes('fungal') || name.includes('virus')) return 'Disease'
  return 'Habitat Loss' // default
}

// Single biome radar threat chart
export function ThreatRadarChart({ biome }: { biome: Biome }) {
  const threatMap = new Map<string, number>()
  for (const cat of threatCategories) threatMap.set(cat, 0)

  for (const threat of biome.threats) {
    const cat = categorizeThreat(threat)
    const currentVal = threatMap.get(cat) || 0
    const newVal = severityValues[threat.severity] || 0
    if (newVal > currentVal) threatMap.set(cat, newVal)
  }

  const chartData = threatCategories.map(cat => ({
    category: cat,
    severity: threatMap.get(cat) || 0,
  }))

  return (
    <div className="chart-card">
      <h4>Threat Assessment</h4>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#5f6368', fontSize: 9 }}
            tickCount={5}
          />
          <Radar
            name="Threat Level"
            dataKey="severity"
            stroke={biome.color}
            fill={biome.color}
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any) => {
              const label = value >= 75 ? 'Critical' : value >= 50 ? 'High' : value >= 25 ? 'Moderate' : 'Low'
              return [`${label} (${value}/100)`, 'Severity']
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="threat-list">
        {biome.threats.map((t, i) => (
          <div key={i} className="threat-item">
            <span className="threat-severity-dot" style={{ background: severityColors[t.severity] }} />
            <span className="threat-name">{t.name}</span>
            <span className="threat-severity-label">{t.severity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Multi-biome threat comparison chart
export function BiomeThreatComparisonChart({ biomes }: { biomes: Biome[] }) {
  const chartData = threatCategories.map(cat => {
    const row: Record<string, unknown> = { category: cat }
    for (const biome of biomes) {
      let maxSeverity = 0
      for (const threat of biome.threats) {
        if (categorizeThreat(threat) === cat) {
          const val = severityValues[threat.severity] || 0
          if (val > maxSeverity) maxSeverity = val
        }
      }
      row[biome.id] = maxSeverity
    }
    return row
  })

  const biomeColors = biomes.reduce((acc, b) => {
    acc[b.id] = b.color
    return acc
  }, {} as Record<string, string>)

  return (
    <div className="chart-card">
      <h4>Threat Comparison Across Biomes</h4>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="65%">
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#5f6368', fontSize: 9 }}
            tickCount={5}
          />
          {biomes.map(biome => (
            <Radar
              key={biome.id}
              name={biome.name}
              dataKey={biome.id}
              stroke={biomeColors[biome.id]}
              fill={biomeColors[biome.id]}
              fillOpacity={0.1}
              strokeWidth={2}
            />
          ))}
          <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa0a6' }} itemStyle={{ color: '#e8eaed' }} />
          <Legend
            wrapperStyle={{ fontSize: '11px', color: '#9aa0a6' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
