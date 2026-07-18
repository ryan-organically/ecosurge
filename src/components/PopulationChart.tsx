'use client'

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { ConservationStatus } from '@/lib/taxonomy'

const statusChartColors: Record<string, string> = {
  LC: '#34d399', NT: '#8BC34A', VU: '#FFD700', EN: '#FFA500',
  CR: '#FF4500', EW: '#8B0000', EX: '#666666', DD: '#808080', NE: '#A9A9A9',
}

function generateTrendData(status: ConservationStatus) {
  const trends: Record<string, number> = {
    LC: 0.002, NT: -0.005, VU: -0.012, EN: -0.025,
    CR: -0.04, EW: -0.06, EX: -0.08, DD: 0, NE: 0,
  }
  const trend = trends[status] || 0
  const data: { year: number; population: number }[] = []
  let value = 100

  for (let year = 1970; year <= 2024; year += 2) {
    const noise = Math.sin(year * 0.3) * 5 + Math.cos(year * 0.7) * 3
    value = Math.max(5, value + value * trend * 2 + noise)
    data.push({ year, population: Math.round(value * 10) / 10 })
  }
  return data
}

export function PopulationChart({ status, speciesName }: { status: ConservationStatus; speciesName: string }) {
  const data = generateTrendData(status)
  const color = statusChartColors[status] || '#808080'

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`grad-${status}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year"
            tick={{ fill: '#9aa0a6', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#9aa0a6', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            label={{ value: 'Relative Index', angle: -90, position: 'insideLeft', fill: '#5f6368', fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: '#111820',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#e8eaed',
              fontSize: '0.85rem',
            }}
            formatter={(value) => {
              const num = typeof value === 'number' ? value : 0
              return [`${num.toFixed(1)}`, 'Population Index']
            }}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="population"
            stroke={color}
            strokeWidth={2}
            fill={`url(#grad-${status})`}
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="chart-note">
        Estimated population trend for {speciesName} based on IUCN conservation status assessment
      </p>
    </div>
  )
}
