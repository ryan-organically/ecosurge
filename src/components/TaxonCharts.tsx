'use client'

import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis,
  AreaChart, Area,
  Legend,
} from 'recharts'
import type { TaxonEnrichment } from '@/data/enrichment/types'
import type { ConservationStatus } from '@/data/taxonomy/types'

const statusColors: Record<string, string> = {
  LC: '#006400', NT: '#32CD32', VU: '#FFD700', EN: '#FFA500',
  CR: '#FF4500', EW: '#8B0000', EX: '#000000', DD: '#808080', NE: '#A9A9A9',
}

const statusLabels: Record<string, string> = {
  LC: 'Least Concern', NT: 'Near Threatened', VU: 'Vulnerable',
  EN: 'Endangered', CR: 'Critically Endangered', EW: 'Extinct in Wild',
  EX: 'Extinct', DD: 'Data Deficient', NE: 'Not Evaluated',
}

const regionColors: Record<string, string> = {
  'Africa': '#E91E63',
  'Asia': '#FF5722',
  'Europe': '#3F51B5',
  'North America': '#2dd4bf',
  'South America': '#34d399',
  'Oceania': '#FF9800',
  'Antarctica': '#78909C',
  'Worldwide': '#9C27B0',
  'Marine': '#00BCD4',
  'Freshwater': '#009688',
}

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

// Conservation Status Donut Chart
export function ConservationChart({ data }: { data: TaxonEnrichment }) {
  if (!data.conservationBreakdown) return null

  const chartData = Object.entries(data.conservationBreakdown)
    .filter(([, count]) => count && count > 0)
    .map(([status, count]) => ({
      name: statusLabels[status] || status,
      code: status,
      value: count!,
    }))
    .sort((a, b) => {
      const order = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX', 'DD', 'NE']
      return order.indexOf(a.code) - order.indexOf(b.code)
    })

  if (chartData.length === 0) return null

  const total = chartData.reduce((sum, d) => sum + d.value, 0)
  const threatened = chartData
    .filter(d => ['VU', 'EN', 'CR'].includes(d.code))
    .reduce((sum, d) => sum + d.value, 0)
  const threatPct = total > 0 ? ((threatened / total) * 100).toFixed(1) : '0'

  return (
    <div className="chart-card">
      <h4>Conservation Status</h4>
      <div className="chart-card-body">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              dataKey="value"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth={1}
            >
              {chartData.map((entry) => (
                <Cell key={entry.code} fill={statusColors[entry.code] || '#666'} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={{ color: '#9aa0a6' }}
              itemStyle={{ color: '#e8eaed' }}
              formatter={(value: any, name: any) => [
                `${value.toLocaleString()} species (${((value / total) * 100).toFixed(1)}%)`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-summary">
          <span className="chart-big-number">{threatPct}%</span>
          <span className="chart-big-label">Threatened</span>
        </div>
        <div className="chart-legend-grid">
          {chartData.map(d => (
            <div key={d.code} className="chart-legend-row">
              <span className="chart-legend-dot" style={{ background: statusColors[d.code] }} />
              <span className="chart-legend-label">{d.code}</span>
              <span className="chart-legend-value">{d.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Population Trend Area Chart
export function TrendChart({ data, name }: { data: TaxonEnrichment; name: string }) {
  if (!data.trendData || data.trendData.length === 0) return null

  const trendColor = data.populationTrend === 'increasing' ? '#34d399'
    : data.populationTrend === 'decreasing' ? '#FF5722'
    : data.populationTrend === 'stable' ? '#2dd4bf'
    : '#808080'

  const trendLabel = data.populationTrend === 'increasing' ? 'Increasing'
    : data.populationTrend === 'decreasing' ? 'Declining'
    : data.populationTrend === 'stable' ? 'Stable'
    : 'Unknown'

  return (
    <div className="chart-card">
      <h4>Population Trend</h4>
      <div className="trend-indicator" style={{ color: trendColor }}>
        <span className="trend-arrow">
          {data.populationTrend === 'increasing' ? '▲' : data.populationTrend === 'decreasing' ? '▼' : '●'}
        </span>
        {trendLabel}
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data.trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={trendColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={trendColor} stopOpacity={0.02} />
            </linearGradient>
          </defs>
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
            label={{ value: 'Index', angle: -90, position: 'insideLeft', fill: '#5f6368', fontSize: 10 }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any) => [`${Number(value).toFixed(1)}`, 'Population Index']}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Area type="monotone" dataKey="index" stroke={trendColor} strokeWidth={2} fill="url(#trendGrad)" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="chart-note">Living Planet Index-style trend for {name}</p>
    </div>
  )
}

// Distribution by Region Bar Chart
export function DistributionChart({ data }: { data: TaxonEnrichment }) {
  if (!data.diversityByRegion || data.diversityByRegion.length === 0) return null

  const chartData = [...data.diversityByRegion].sort((a, b) => b.count - a.count)

  return (
    <div className="chart-card">
      <h4>Species by Region</h4>
      <ResponsiveContainer width="100%" height={Math.max(180, chartData.length * 32)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="region"
            width={100}
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any) => [`${Number(value).toLocaleString()} species`, 'Count']}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {chartData.map((entry) => (
              <Cell key={entry.region} fill={regionColors[entry.region] || '#2dd4bf'} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Diversity Chart - comparing children's species counts
export function DiversityChart({ children }: { children: { name: string; speciesCount?: number }[] }) {
  const chartData = children
    .filter(c => c.speciesCount != null && c.speciesCount > 0)
    .sort((a, b) => (b.speciesCount || 0) - (a.speciesCount || 0))
    .slice(0, 15) // Top 15
    .map(c => ({ name: c.name, species: c.speciesCount! }))

  if (chartData.length < 2) return null

  return (
    <div className="chart-card">
      <h4>Species Diversity by Sub-group</h4>
      <ResponsiveContainer width="100%" height={Math.max(180, chartData.length * 28)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={110}
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any) => [`${Number(value).toLocaleString()}`, 'Species']}
          />
          <Bar dataKey="species" fill="#673AB7" radius={[0, 4, 4, 0]} fillOpacity={0.7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Facts & Info Panel
export function TaxonFactsPanel({ data }: { data: TaxonEnrichment }) {
  return (
    <div className="facts-panel">
      {data.facts.length > 0 && (
        <div className="facts-section">
          <h4>Key Facts</h4>
          <ul className="facts-list">
            {data.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="facts-grid">
        {data.estimatedPopulation && (
          <div className="fact-stat">
            <span className="fact-stat-value">{data.estimatedPopulation}</span>
            <span className="fact-stat-label">Est. Population/Species</span>
          </div>
        )}
        {data.extinctSpecies != null && data.extinctSpecies > 0 && (
          <div className="fact-stat">
            <span className="fact-stat-value" style={{ color: '#FF5722' }}>{data.extinctSpecies.toLocaleString()}</span>
            <span className="fact-stat-label">Known Extinct</span>
          </div>
        )}
        {data.oldestFossil && (
          <div className="fact-stat">
            <span className="fact-stat-value">{data.oldestFossil}</span>
            <span className="fact-stat-label">Oldest Fossil</span>
          </div>
        )}
      </div>

      {data.distribution.length > 0 && (
        <div className="distribution-section">
          <h4>Distribution</h4>
          <div className="distribution-badges">
            {data.distribution.map(region => (
              <span key={region} className="distribution-badge" style={{
                borderColor: regionColors[region] || '#2dd4bf',
                color: regionColors[region] || '#2dd4bf',
              }}>
                {region}
              </span>
            ))}
          </div>
        </div>
      )}

      {data.habitat && data.habitat.length > 0 && (
        <div className="habitat-section">
          <h4>Habitats</h4>
          <div className="habitat-tags">
            {data.habitat.map(h => (
              <span key={h} className="habitat-tag">{h}</span>
            ))}
          </div>
        </div>
      )}

      {data.keyAdaptations && data.keyAdaptations.length > 0 && (
        <div className="adaptations-section">
          <h4>Key Adaptations</h4>
          <ul className="adaptations-list">
            {data.keyAdaptations.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Main wrapper that renders all charts for a taxon
export function TaxonChartsSection({
  data,
  name,
  children,
}: {
  data: TaxonEnrichment
  name: string
  children?: { name: string; speciesCount?: number }[]
}) {
  return (
    <div className="taxon-charts-section">
      <TaxonFactsPanel data={data} />
      <div className="charts-grid">
        <ConservationChart data={data} />
        <TrendChart data={data} name={name} />
        <DistributionChart data={data} />
        {children && <DiversityChart children={children} />}
      </div>
    </div>
  )
}
