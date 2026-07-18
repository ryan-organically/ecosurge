'use client'

import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  AreaChart, Area, XAxis, YAxis,
} from 'recharts'
import type { Biome } from '@/data/biomes'
import { ThreatRadarChart } from './ThreatAssessmentChart'

const statusColors: Record<string, string> = {
  LC: '#006400', NT: '#32CD32', VU: '#FFD700', EN: '#FFA500',
  CR: '#FF4500', EW: '#8B0000', EX: '#000000', DD: '#808080', NE: '#A9A9A9',
}

const statusLabels: Record<string, string> = {
  LC: 'Least Concern', NT: 'Near Threatened', VU: 'Vulnerable',
  EN: 'Endangered', CR: 'Critically Endangered', EW: 'Extinct in Wild',
  EX: 'Extinct', DD: 'Data Deficient', NE: 'Not Evaluated',
}

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

const tooltipLabelStyle = { color: '#9aa0a6' }
const tooltipItemStyle = { color: '#e8eaed' }

function BiomeConservationChart({ biome }: { biome: Biome }) {
  const chartData = Object.entries(biome.conservationBreakdown)
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
      <p className="chart-subtitle">IUCN Red List classification of species in this biome</p>
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
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
              formatter={(value: any, name: any) => [
                `${value.toLocaleString()} species (${((value / total) * 100).toFixed(1)}%)`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-summary">
          <span className="chart-big-number">{threatPct}%</span>
          <span className="chart-big-label">Species at Risk (VU + EN + CR)</span>
        </div>
        <div className="conservation-legend">
          {chartData.map(d => (
            <div key={d.code} className="conservation-legend-item">
              <span className="conservation-legend-dot" style={{ background: statusColors[d.code] }} />
              <span className="conservation-legend-name">{statusLabels[d.code]}</span>
              <span className="conservation-legend-count">{d.value.toLocaleString()}</span>
              <span className="conservation-legend-pct">{((d.value / total) * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BiomeTrendChart({ biome }: { biome: Biome }) {
  if (!biome.trendData || biome.trendData.length === 0) return null

  const firstVal = biome.trendData[0]?.index ?? 100
  const lastVal = biome.trendData[biome.trendData.length - 1]?.index ?? 100
  const trend = lastVal > firstVal ? 'increasing' : lastVal < firstVal ? 'decreasing' : 'stable'

  const trendColor = trend === 'increasing' ? '#34d399' : trend === 'decreasing' ? '#FF5722' : '#2dd4bf'
  const trendLabel = trend === 'increasing' ? 'Improving' : trend === 'decreasing' ? 'Declining' : 'Stable'

  const changeVal = lastVal - firstVal
  const changePct = firstVal > 0 ? ((changeVal / firstVal) * 100).toFixed(1) : '0'

  return (
    <div className="chart-card">
      <h4>Ecosystem Health Trend</h4>
      <p className="chart-subtitle">Population health index relative to 1970 baseline</p>
      <div className="trend-summary">
        <div className="trend-score" style={{ borderColor: trendColor }}>
          <span className="trend-score-value" style={{ color: trendColor }}>{lastVal}</span>
          <span className="trend-score-label">/ 100</span>
        </div>
        <div className="trend-details">
          <span className="trend-status" style={{ color: trendColor }}>
            {trend === 'increasing' ? '\u25B2' : trend === 'decreasing' ? '\u25BC' : '\u25CF'}{' '}
            {trendLabel}
          </span>
          <span className="trend-change" style={{ color: trendColor }}>
            {changeVal > 0 ? '+' : ''}{changePct}% since 1970
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={biome.trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`biomeGrad-${biome.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={biome.color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={biome.color} stopOpacity={0.02} />
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
            domain={[0, 110]}
            label={{ value: 'Index', angle: -90, position: 'insideLeft', fill: '#5f6368', fontSize: 10 }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value: any) => [`${value.toFixed(1)}`, 'Ecosystem Index']}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Area type="monotone" dataKey="index" stroke={biome.color} strokeWidth={2} fill={`url(#biomeGrad-${biome.id})`} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="chart-note">Ecosystem health index for {biome.name} (1970-2024)</p>
    </div>
  )
}

export function BiomeChartsSection({ biome }: { biome: Biome }) {
  return (
    <div className="taxon-charts-section">
      <div className="charts-grid">
        <BiomeConservationChart biome={biome} />
        <BiomeTrendChart biome={biome} />
        <ThreatRadarChart biome={biome} />
      </div>
    </div>
  )
}
