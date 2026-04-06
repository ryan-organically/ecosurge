'use client'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend,
  AreaChart, Area,
} from 'recharts'
import type { Biome } from '@/data/biomes'
import { BiomeComparisonChart, BiomeConservationComparisonChart } from './BiomeComparisonChart'
import { BiomeThreatComparisonChart } from './ThreatAssessmentChart'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

function BiomeTrendOverviewChart({ biomes }: { biomes: Biome[] }) {
  // Build combined trend data: { year, biome1: index, biome2: index, ... }
  const years = new Set<number>()
  for (const b of biomes) {
    for (const d of b.trendData) years.add(d.year)
  }

  const sortedYears = [...years].sort()
  const chartData = sortedYears.map(year => {
    const row: Record<string, number> = { year }
    for (const b of biomes) {
      const point = b.trendData.find(d => d.year === year)
      if (point) row[b.id] = point.index
    }
    return row
  })

  // Only show top 6 most biodiverse for readability
  const topBiomes = [...biomes]
    .sort((a, b) => b.biodiversityIndex - a.biodiversityIndex)
    .slice(0, 6)

  return (
    <div className="chart-card">
      <h4>Ecosystem Health Trends (Top 6 Biomes)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="year"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 110]}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any, name: any) => {
              const biome = biomes.find(b => b.id === name)
              return [`${value.toFixed(1)}`, biome?.name || name]
            }}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend
            wrapperStyle={{ fontSize: '10px', color: '#9aa0a6' }}
            formatter={(value: string) => {
              const biome = biomes.find(b => b.id === value)
              return biome?.name || value
            }}
          />
          {topBiomes.map((biome) => (
            <Area
              key={biome.id}
              type="monotone"
              dataKey={biome.id}
              stroke={biome.color}
              fill={biome.color}
              fillOpacity={0.05}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
      <p className="chart-note">Population/ecosystem health index 1970-2024</p>
    </div>
  )
}

function ExtinctionRiskChart({ biomes }: { biomes: Biome[] }) {
  const chartData = [...biomes]
    .map(b => ({
      name: b.name,
      threatened: b.stats.totalSpecies > 0
        ? +((b.stats.threatenedSpecies / b.stats.totalSpecies) * 100).toFixed(1)
        : 0,
      color: b.color,
    }))
    .sort((a, b) => b.threatened - a.threatened)

  return (
    <div className="chart-card">
      <h4>Extinction Risk by Biome (%)</h4>
      <ResponsiveContainer width="100%" height={Math.max(300, chartData.length * 28)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            domain={[0, 'auto']}
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
            formatter={(value: any) => [`${value}%`, 'Threatened']}
          />
          <Bar dataKey="threatened" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.threatened > 15 ? '#FF4500' : entry.threatened > 10 ? '#FFA500' : '#4CAF50'}
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DashboardCharts({ biomes }: { biomes: Biome[] }) {
  return (
    <div className="taxon-charts-section">
      <div className="charts-grid">
        <BiomeComparisonChart biomes={biomes} />
        <ExtinctionRiskChart biomes={biomes} />
        <BiomeConservationComparisonChart biomes={biomes} />
        <BiomeTrendOverviewChart biomes={biomes} />
        <BiomeThreatComparisonChart biomes={biomes.slice(0, 6)} />
      </div>
    </div>
  )
}
