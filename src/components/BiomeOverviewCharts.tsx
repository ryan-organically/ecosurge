'use client'

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  Treemap, ScatterChart, Scatter, ZAxis, Cell,
} from 'recharts'
import type { Biome } from '@/data/biomes'

const tooltipStyle = {
  background: '#111820',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#e8eaed',
  fontSize: '0.8rem',
}

/* ------------------------------------------------------------------ */
/*  1. Ecosystem Health Trends - all biomes overlaid                   */
/* ------------------------------------------------------------------ */

export function BiomeTrendOverlayChart({ biomes }: { biomes: Biome[] }) {
  // Build combined time series
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

  // Sort biomes by current index (most declined first in legend)
  const sorted = [...biomes].sort((a, b) => {
    const aLast = a.trendData[a.trendData.length - 1]?.index ?? 100
    const bLast = b.trendData[b.trendData.length - 1]?.index ?? 100
    return aLast - bLast
  })

  return (
    <div className="chart-card">
      <h4>Ecosystem Health Trends (1970-2024)</h4>
      <p className="chart-subtitle">Population health index across all biomes, 1970 baseline = 100</p>
      <ResponsiveContainer width="100%" height={360}>
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
            label={{ value: 'Index', angle: -90, position: 'insideLeft', fill: '#5f6368', fontSize: 10 }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any, name: any) => {
              const biome = biomes.find(b => b.id === name)
              return [`${Number(value).toFixed(1)}`, biome?.name || name]
            }}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend
            wrapperStyle={{ fontSize: '9px', color: '#9aa0a6' }}
            formatter={(value: string) => {
              const biome = biomes.find(b => b.id === value)
              return biome?.name || value
            }}
          />
          {sorted.map(b => (
            <Area
              key={b.id}
              type="monotone"
              dataKey={b.id}
              stroke={b.color}
              fill={b.color}
              fillOpacity={0.03}
              strokeWidth={1.5}
              dot={false}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Biome Area Proportions - treemap visualization                  */
/* ------------------------------------------------------------------ */

interface TreemapContentProps {
  x: number
  y: number
  width: number
  height: number
  name: string
  color: string
  pctLabel: string
}

function CustomTreemapContent({ x, y, width, height, name, color, pctLabel }: TreemapContentProps) {
  if (width < 30 || height < 20) return null
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={color} fillOpacity={0.7} stroke="rgba(0,0,0,0.4)" strokeWidth={1} rx={3} />
      {width > 60 && height > 35 && (
        <>
          <text x={x + width / 2} y={y + height / 2 - 6} textAnchor="middle" fill="#e8eaed" fontSize={width > 100 ? 11 : 9} fontFamily="DM Sans, sans-serif">
            {name}
          </text>
          <text x={x + width / 2} y={y + height / 2 + 10} textAnchor="middle" fill="#9aa0a6" fontSize={8} fontFamily="DM Sans, sans-serif">
            {pctLabel}
          </text>
        </>
      )}
    </g>
  )
}

export function BiomeAreaTreemap({ biomes }: { biomes: Biome[] }) {
  const totalPct = biomes.reduce((s, b) => s + b.percentLand, 0)
  const treemapData = biomes
    .filter(b => b.percentLand > 0)
    .sort((a, b) => b.percentLand - a.percentLand)
    .map(b => ({
      name: b.name,
      size: b.percentLand,
      color: b.color,
      pctLabel: `${b.percentLand}% of Earth`,
    }))

  return (
    <div className="chart-card">
      <h4>Biome Coverage of Earth&apos;s Surface</h4>
      <p className="chart-subtitle">Proportional area of terrestrial and aquatic biomes ({totalPct.toFixed(1)}% mapped)</p>
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={treemapData}
          dataKey="size"
          stroke="rgba(0,0,0,0.3)"
          content={<CustomTreemapContent x={0} y={0} width={0} height={0} name="" color="" pctLabel="" />}
        >
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(value: any, _name: any, props: any) => [
              `${value}% of Earth's surface`,
              props.payload?.name || '',
            ]}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Threat Severity Bubble Chart                                    */
/* ------------------------------------------------------------------ */

const severityValue: Record<string, number> = {
  critical: 4,
  high: 3,
  moderate: 2,
  low: 1,
}

const severityColors: Record<string, string> = {
  critical: '#FF4500',
  high: '#FFA500',
  moderate: '#FFD700',
  low: '#32CD32',
}

export function BiomeThreatBubbleChart({ biomes }: { biomes: Biome[] }) {
  // Build scatter data: x = biome index, y = avg threat severity, z = threat count
  const chartData = biomes
    .map((b, i) => {
      const avgSev = b.threats.length > 0
        ? b.threats.reduce((s, t) => s + (severityValue[t.severity] || 0), 0) / b.threats.length
        : 0
      const critCount = b.threats.filter(t => t.severity === 'critical').length
      return {
        name: b.name,
        x: i,
        y: avgSev,
        z: b.threats.length * 100,
        threatCount: b.threats.length,
        criticalCount: critCount,
        color: critCount > 0 ? severityColors.critical : avgSev > 2.5 ? severityColors.high : severityColors.moderate,
      }
    })
    .sort((a, b) => b.y - a.y)

  return (
    <div className="chart-card">
      <h4>Threat Severity Overview</h4>
      <p className="chart-subtitle">Average threat severity and number of threats per biome</p>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
          <XAxis
            type="number"
            dataKey="x"
            tick={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
            domain={[-1, chartData.length]}
          />
          <YAxis
            type="number"
            dataKey="y"
            tick={{ fill: '#9aa0a6', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 4.5]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={(v) => ['', 'Low', 'Moderate', 'High', 'Critical'][v] || ''}
          />
          <ZAxis type="number" dataKey="z" range={[200, 600]} />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#9aa0a6' }}
            itemStyle={{ color: '#e8eaed' }}
            formatter={(_value: any, _name: any, props: any) => {
              const d = props.payload
              return [
                `${d.threatCount} threats (${d.criticalCount} critical)`,
                d.name,
              ]
            }}
          />
          <Scatter data={chartData}>
            {chartData.map((entry, i) => (
              <Cell key={i} fill={entry.color} fillOpacity={0.75} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="chart-legend-grid">
        {chartData.map(d => (
          <div key={d.name} className="chart-legend-row">
            <span className="chart-legend-dot" style={{ background: d.color }} />
            <span className="chart-legend-label">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Decline Ranking - which biomes declined most since 1970         */
/* ------------------------------------------------------------------ */

export function BiomeDeclineRanking({ biomes }: { biomes: Biome[] }) {
  const data = biomes.map(b => {
    const first = b.trendData[0]?.index ?? 100
    const last = b.trendData[b.trendData.length - 1]?.index ?? 100
    const decline = first - last
    const pct = first > 0 ? (decline / first) * 100 : 0
    return { name: b.name, decline: pct, current: last, color: b.color }
  }).sort((a, b) => b.decline - a.decline)

  return (
    <div className="chart-card">
      <h4>Ecosystem Decline Since 1970</h4>
      <p className="chart-subtitle">Percentage decline in ecosystem health index from 1970 baseline</p>
      <div style={{ padding: '0.5rem 0' }}>
        {data.map(d => (
          <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#9aa0a6', width: '130px', flexShrink: 0, textAlign: 'right' }}>
              {d.name}
            </span>
            <div style={{ flex: 1, height: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
              <div style={{
                width: `${Math.min(d.decline, 100)}%`,
                height: '100%',
                background: `linear-gradient(90deg, ${d.color}88, ${d.decline > 40 ? '#FF4500' : d.decline > 25 ? '#FFA500' : d.color}aa)`,
                borderRadius: '4px',
                transition: 'width 0.5s ease',
              }} />
              <span style={{
                position: 'absolute',
                right: '6px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '0.65rem',
                color: '#e8eaed',
                fontWeight: 600,
              }}>
                -{d.decline.toFixed(1)}%
              </span>
            </div>
            <span style={{ fontSize: '0.68rem', color: d.current >= 70 ? '#4CAF50' : d.current >= 50 ? '#FFD700' : '#FF5722', width: '36px', textAlign: 'right' }}>
              {d.current}
            </span>
          </div>
        ))}
      </div>
      <p className="chart-note">Current index shown at right (green = healthy, red = critical)</p>
    </div>
  )
}
