'use client'

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell,
} from 'recharts'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

interface KingdomTrend {
  id: string
  name: string
  color: string
  trend: 'increasing' | 'decreasing' | 'stable'
  currentIndex: number
  trendData: { year: number; index: number }[]
}

interface PopulationHealthProps {
  kingdoms: KingdomTrend[]
}

function LivingPlanetChart({ kingdoms }: PopulationHealthProps) {
  // Build combined time series
  const years = new Set<number>()
  for (const k of kingdoms) {
    for (const d of k.trendData) years.add(d.year)
  }

  const sortedYears = [...years].sort()
  const chartData = sortedYears.map(year => {
    const row: Record<string, number> = { year }
    for (const k of kingdoms) {
      const point = k.trendData.find(d => d.year === year)
      if (point) row[k.id] = point.index
    }
    return row
  })

  return (
    <div className="chart-card">
      <h4>Living Planet Index by Kingdom</h4>
      <p style={{ fontSize: '0.75rem', color: '#9aa0a6', marginBottom: '0.5rem' }}>
        Population health index (1970 baseline = 100)
      </p>
      <ResponsiveContainer width="100%" height={320}>
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
              const kingdom = kingdoms.find(k => k.id === name)
              return [`${Number(value).toFixed(1)}`, kingdom?.name || name]
            }}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend
            wrapperStyle={{ fontSize: '10px', color: '#9aa0a6' }}
            formatter={(value: string) => {
              const kingdom = kingdoms.find(k => k.id === value)
              return kingdom?.name || value
            }}
          />
          {kingdoms.map(k => (
            <Area
              key={k.id}
              type="monotone"
              dataKey={k.id}
              stroke={k.color}
              fill={k.color}
              fillOpacity={0.06}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

function CurrentHealthChart({ kingdoms }: PopulationHealthProps) {
  const chartData = kingdoms
    .map(k => ({
      name: k.name,
      index: k.currentIndex,
      color: k.color,
      trend: k.trend,
    }))
    .sort((a, b) => b.index - a.index)

  return (
    <div className="chart-card">
      <h4>Current Population Health by Kingdom</h4>
      <ResponsiveContainer width="100%" height={Math.max(200, chartData.length * 40)}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <XAxis
            type="number"
            domain={[0, 110]}
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            tick={{ fill: '#9aa0a6', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any, _name: any, props: any) => {
              const trend = props.payload.trend
              const arrow = trend === 'increasing' ? ' ▲' : trend === 'decreasing' ? ' ▼' : ' ●'
              return [`${Number(value).toFixed(1)}/100${arrow}`, 'Health Index']
            }}
          />
          <Bar dataKey="index" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.index >= 80 ? '#4CAF50' : entry.index >= 50 ? '#FFD700' : '#FF5722'}
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function TrendSummaryCards({ kingdoms }: PopulationHealthProps) {
  const increasing = kingdoms.filter(k => k.trend === 'increasing').length
  const declining = kingdoms.filter(k => k.trend === 'decreasing').length
  const stable = kingdoms.filter(k => k.trend === 'stable').length
  const avgIndex = kingdoms.reduce((s, k) => s + k.currentIndex, 0) / kingdoms.length

  return (
    <div className="welcome-stats" style={{ marginBottom: '1.5rem' }}>
      <div className="stat-card">
        <div className="stat-number" style={{ color: '#4CAF50' }}>{avgIndex.toFixed(1)}</div>
        <div className="stat-label">Avg Health Index</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: '#4CAF50' }}>{increasing}</div>
        <div className="stat-label">Kingdoms Improving</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: '#FF5722' }}>{declining}</div>
        <div className="stat-label">Kingdoms Declining</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: '#2196F3' }}>{stable}</div>
        <div className="stat-label">Kingdoms Stable</div>
      </div>
    </div>
  )
}

export function PopulationHealthOverview({ kingdoms }: PopulationHealthProps) {
  return (
    <div>
      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Population Health</h3>
      <p style={{ fontSize: '0.85rem', color: '#9aa0a6', marginBottom: '1rem' }}>
        Tracking population trends across all domains of life, 1970&ndash;2024
      </p>
      <TrendSummaryCards kingdoms={kingdoms} />
      <div className="charts-grid">
        <LivingPlanetChart kingdoms={kingdoms} />
        <CurrentHealthChart kingdoms={kingdoms} />
      </div>
    </div>
  )
}
