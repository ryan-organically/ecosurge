'use client'

import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import type { Biome } from '@/data/biomes'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

type Metric = 'species' | 'threatened' | 'endemic' | 'biodiversity'

const metricLabels: Record<Metric, string> = {
  species: 'Total Species',
  threatened: 'Threatened Species',
  endemic: 'Endemic Species',
  biodiversity: 'Biodiversity Index',
}

function getValue(biome: Biome, metric: Metric): number {
  switch (metric) {
    case 'species': return biome.stats.totalSpecies
    case 'threatened': return biome.stats.threatenedSpecies
    case 'endemic': return biome.stats.endemicSpecies
    case 'biodiversity': return biome.biodiversityIndex
  }
}

export function BiomeComparisonChart({ biomes }: { biomes: Biome[] }) {
  const [metric, setMetric] = useState<Metric>('species')

  const chartData = biomes
    .map(b => ({
      name: b.name,
      value: getValue(b, metric),
      color: b.color,
    }))
    .sort((a, b) => b.value - a.value)

  return (
    <div className="chart-card">
      <div className="chart-header-row">
        <h4>Biome Comparison</h4>
        <div className="chart-metric-selector">
          {(Object.keys(metricLabels) as Metric[]).map(m => (
            <button
              key={m}
              className={`metric-btn ${m === metric ? 'active' : ''}`}
              onClick={() => setMetric(m)}
            >
              {metricLabels[m]}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={Math.max(300, chartData.length * 32)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
            tickFormatter={(v) => metric === 'biodiversity' ? `${v}` : v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : `${v}`}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{ fill: '#9aa0a6', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any) => [
              metric === 'biodiversity'
                ? `${value}/100`
                : `${value.toLocaleString()} species`,
              metricLabels[metric],
            ]}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, i) => (
              <Cell key={i} fill={entry.color} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Stacked conservation comparison across biomes
export function BiomeConservationComparisonChart({ biomes }: { biomes: Biome[] }) {
  const statusOrder = ['LC', 'NT', 'VU', 'EN', 'CR', 'EX'] as const
  const statusColors: Record<string, string> = {
    LC: '#006400', NT: '#32CD32', VU: '#FFD700',
    EN: '#FFA500', CR: '#FF4500', EX: '#000000',
  }
  const statusLabels: Record<string, string> = {
    LC: 'Least Concern', NT: 'Near Threatened', VU: 'Vulnerable',
    EN: 'Endangered', CR: 'Critically Endangered', EX: 'Extinct',
  }

  const chartData = biomes
    .sort((a, b) => b.stats.totalSpecies - a.stats.totalSpecies)
    .map(b => {
      const total = Object.values(b.conservationBreakdown).reduce((s, v) => s + (v || 0), 0)
      const row: Record<string, unknown> = { name: b.name }
      for (const status of statusOrder) {
        const count = b.conservationBreakdown[status] || 0
        row[status] = total > 0 ? +((count / total) * 100).toFixed(1) : 0
      }
      return row
    })

  return (
    <div className="chart-card">
      <h4>Conservation Status by Biome (%)</h4>
      <ResponsiveContainer width="100%" height={Math.max(300, chartData.length * 32)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{ fill: '#9aa0a6', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any, name: any) => [`${value}%`, statusLabels[name] || name]}
          />
          {statusOrder.map(status => (
            <Bar key={status} dataKey={status} stackId="conservation" fill={statusColors[status]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div className="chart-legend-grid">
        {statusOrder.map(s => (
          <div key={s} className="chart-legend-row">
            <span className="chart-legend-dot" style={{ background: statusColors[s] }} />
            <span className="chart-legend-label">{statusLabels[s]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
