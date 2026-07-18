'use client'

/**
 * EcoSurge proprietary data-visualization library.
 *
 * Each figure is a self-contained, theme-aware SVG. Studies reference a figure
 * by key (see FIGURES) via <StudyFigure viz="..." />. No external chart library
 * is used so the static export stays dependency-free and renders identically on
 * a CDN. All series are derived from the closed-form models described in the
 * accompanying studies, so a figure and its equations never drift apart.
 */

import { type ReactNode } from 'react'

// ---------------------------------------------------------------------------
// Palette + scale helpers
// ---------------------------------------------------------------------------

const C = {
  green: '#34d399',
  greenDeep: '#059669',
  teal: '#2dd4bf',
  blue: '#60a5fa',
  amber: '#fbbf24',
  red: '#f87171',
  violet: '#a78bfa',
  grid: 'rgba(148, 163, 184, 0.18)',
  axis: 'rgba(148, 163, 184, 0.45)',
  label: 'rgba(148, 163, 184, 0.9)',
}

type Pt = [number, number]

function scale(domain: [number, number], range: [number, number]) {
  const [d0, d1] = domain
  const [r0, r1] = range
  return (v: number) => (d1 === d0 ? r0 : r0 + (r1 - r0) * ((v - d0) / (d1 - d0)))
}

function line(pts: Pt[]) {
  return pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ')
}

function area(pts: Pt[], baseY: number) {
  if (pts.length === 0) return ''
  const top = line(pts)
  return `${top} L${pts[pts.length - 1][0].toFixed(2)} ${baseY} L${pts[0][0].toFixed(2)} ${baseY} Z`
}

function series(fn: (x: number) => number, x0: number, x1: number, steps = 60): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps
    out.push([x, fn(x)])
  }
  return out
}

// Shared chart frame with gridlines and axis labels.
function Frame({
  w = 640,
  h = 360,
  pad = 46,
  xTicks,
  yTicks,
  xLabel,
  yLabel,
  children,
}: {
  w?: number
  h?: number
  pad?: number
  xTicks: { at: number; label: string }[]
  yTicks: { at: number; label: string }[]
  xLabel?: string
  yLabel?: string
  children: ReactNode
}) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure-svg" role="img" preserveAspectRatio="xMidYMid meet">
      {yTicks.map((t, i) => (
        <g key={`y${i}`}>
          <line x1={pad} y1={t.at} x2={w - pad / 2} y2={t.at} stroke={C.grid} strokeWidth={1} />
          <text x={pad - 8} y={t.at + 4} textAnchor="end" fontSize={11} fill={C.label}>
            {t.label}
          </text>
        </g>
      ))}
      {xTicks.map((t, i) => (
        <text key={`x${i}`} x={t.at} y={h - pad + 20} textAnchor="middle" fontSize={11} fill={C.label}>
          {t.label}
        </text>
      ))}
      <line x1={pad} y1={h - pad} x2={w - pad / 2} y2={h - pad} stroke={C.axis} strokeWidth={1.2} />
      <line x1={pad} y1={pad / 2} x2={pad} y2={h - pad} stroke={C.axis} strokeWidth={1.2} />
      {yLabel && (
        <text
          x={14}
          y={h / 2}
          textAnchor="middle"
          fontSize={11}
          fill={C.label}
          transform={`rotate(-90 14 ${h / 2})`}
        >
          {yLabel}
        </text>
      )}
      {xLabel && (
        <text x={w / 2} y={h - 6} textAnchor="middle" fontSize={11} fill={C.label}>
          {xLabel}
        </text>
      )}
      {children}
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Figures
// ---------------------------------------------------------------------------

// 1. Cumulative carbon drawdown: baseline vs EcoSurge portfolio, 2025–2050.
function CarbonDrawdown() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([2025, 2050], [pad, w - pad / 2])
  const sy = scale([0, 60], [h - pad, pad / 2])
  // Logistic deployment of drawdown capacity: G(t) = L / (1 + e^{-k(t - t0)})
  const drawdown = (t: number) => 58 / (1 + Math.exp(-0.32 * (t - 2039)))
  const baseline = (t: number) => 1.2 * (t - 2025) * 0.18
  const dPts = series((t) => [sx(t), sy(drawdown(t))] as unknown as number, 2025, 2050).map(
    (_, i) => {
      const t = 2025 + (25 * i) / 60
      return [sx(t), sy(drawdown(t))] as Pt
    }
  )
  const bPts = series((t) => t, 2025, 2050).map((_, i) => {
    const t = 2025 + (25 * i) / 60
    return [sx(t), sy(baseline(t))] as Pt
  })
  const yTicks = [0, 15, 30, 45, 60].map((v) => ({ at: sy(v), label: `${v}` }))
  const xTicks = [2025, 2032, 2039, 2046, 2050].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Year"
      yLabel="Gt CO₂e removed (cumulative)"
    >
      <defs>
        <linearGradient id="gDraw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.green} stopOpacity={0.42} />
          <stop offset="100%" stopColor={C.green} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path d={area(dPts, h - pad)} fill="url(#gDraw)" />
      <path d={line(dPts)} fill="none" stroke={C.green} strokeWidth={2.6} />
      <path d={line(bPts)} fill="none" stroke={C.amber} strokeWidth={2} strokeDasharray="5 4" />
      <circle cx={sx(2039)} cy={sy(drawdown(2039))} r={4} fill={C.green} />
      <text x={sx(2039) + 8} y={sy(drawdown(2039)) - 8} fontSize={11} fill={C.label}>
        inflection t₀ = 2039
      </text>
      <g fontSize={11}>
        <rect x={w - 210} y={pad / 2} width={12} height={12} fill={C.green} rx={2} />
        <text x={w - 194} y={pad / 2 + 11} fill={C.label}>
          EcoSurge portfolio
        </text>
        <rect x={w - 210} y={pad / 2 + 18} width={12} height={4} fill={C.amber} />
        <text x={w - 194} y={pad / 2 + 25} fill={C.label}>
          Fragmented baseline
        </text>
      </g>
    </Frame>
  )
}

// 2. Wave-energy capture: absorbed power vs wave period for a point-absorber Bio-WEC.
function WaveEnergy() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([2, 16], [pad, w - pad / 2])
  const sy = scale([0, 100], [h - pad, pad / 2])
  // Resonant absorber: normalized capture width peaks at the natural period Tn.
  const Tn = 9
  const capture = (T: number) => {
    const q = 3.1 // quality factor
    const r = T / Tn
    return 96 / (1 + q * q * Math.pow(r - 1 / r, 2))
  }
  const pts = series((T) => T, 2, 16, 80).map((_, i) => {
    const T = 2 + (14 * i) / 80
    return [sx(T), sy(capture(T))] as Pt
  })
  const yTicks = [0, 25, 50, 75, 100].map((v) => ({ at: sy(v), label: `${v}%` }))
  const xTicks = [2, 5, 9, 12, 16].map((v) => ({ at: sx(v), label: `${v}s` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Incident wave period T"
      yLabel="Capture-width ratio η"
    >
      <defs>
        <linearGradient id="gWave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.blue} stopOpacity={0.4} />
          <stop offset="100%" stopColor={C.blue} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path d={area(pts, h - pad)} fill="url(#gWave)" />
      <path d={line(pts)} fill="none" stroke={C.blue} strokeWidth={2.6} />
      <line x1={sx(Tn)} y1={sy(capture(Tn))} x2={sx(Tn)} y2={h - pad} stroke={C.teal} strokeDasharray="4 4" />
      <circle cx={sx(Tn)} cy={sy(capture(Tn))} r={4} fill={C.teal} />
      <text x={sx(Tn) + 8} y={sy(capture(Tn)) + 4} fontSize={11} fill={C.label}>
        resonance Tₙ = 9 s
      </text>
    </Frame>
  )
}

// 3. Glacier melt reduction vs biomineral lattice thickness (1-D heat conduction).
function IceMelt() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0, 40], [pad, w - pad / 2])
  const sy = scale([0, 30], [h - pad, pad / 2])
  // Series thermal resistance: melt flux q ∝ 1/(1 + d/d*) → reduction = d/(d+d*)
  const dStar = 11 // cm; ratio of lattice to boundary-layer conductance
  const reduction = (d: number) => (23 * d) / (d + dStar)
  const pts = series((d) => d, 0, 40, 60).map((_, i) => {
    const d = (40 * i) / 60
    return [sx(d), sy(reduction(d))] as Pt
  })
  const yTicks = [0, 10, 20, 30].map((v) => ({ at: sy(v), label: `${v}%` }))
  const xTicks = [0, 10, 20, 30, 40].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Aragonite lattice thickness d (cm)"
      yLabel="Basal melt-rate reduction"
    >
      <path d={line(pts)} fill="none" stroke={C.teal} strokeWidth={2.6} />
      <rect x={sx(18)} y={pad / 2} width={sx(28) - sx(18)} height={h - pad - pad / 2} fill={C.teal} opacity={0.08} />
      <text x={sx(23)} y={pad / 2 + 14} textAnchor="middle" fontSize={11} fill={C.label}>
        field-observed 18–23%
      </text>
      {[18, 28].map((d) => (
        <circle key={d} cx={sx(d)} cy={sy(reduction(d))} r={3.5} fill={C.teal} />
      ))}
    </Frame>
  )
}

// 4. Population recovery under intervention: logistic growth with reduced mortality.
function SpeciesRecovery() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0, 30], [pad, w - pad / 2])
  const sy = scale([0, 100], [h - pad, pad / 2])
  // dN/dt = rN(1 - N/K); closed form logistic for two intervention scenarios.
  const logistic = (r: number, N0: number) => (t: number) =>
    100 / (1 + (100 / N0 - 1) * Math.exp(-r * t))
  const strong = logistic(0.28, 12)
  const weak = logistic(0.12, 12)
  const sPts = series((t) => t, 0, 30, 60).map((_, i) => {
    const t = (30 * i) / 60
    return [sx(t), sy(strong(t))] as Pt
  })
  const wPts = series((t) => t, 0, 30, 60).map((_, i) => {
    const t = (30 * i) / 60
    return [sx(t), sy(weak(t))] as Pt
  })
  const yTicks = [0, 25, 50, 75, 100].map((v) => ({ at: sy(v), label: `${v}%` }))
  const xTicks = [0, 10, 20, 30].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Years since intervention"
      yLabel="Population (% of carrying capacity K)"
    >
      <path d={line(sPts)} fill="none" stroke={C.green} strokeWidth={2.6} />
      <path d={line(wPts)} fill="none" stroke={C.violet} strokeWidth={2} strokeDasharray="5 4" />
      <line x1={pad} y1={sy(100)} x2={w - pad / 2} y2={sy(100)} stroke={C.axis} strokeDasharray="2 4" />
      <g fontSize={11}>
        <rect x={w - 232} y={pad / 2} width={12} height={4} fill={C.green} />
        <text x={w - 216} y={pad / 2 + 6} fill={C.label}>
          r = 0.28 (habitat + captive breeding)
        </text>
        <rect x={w - 232} y={pad / 2 + 16} width={12} height={4} fill={C.violet} />
        <text x={w - 216} y={pad / 2 + 22} fill={C.label}>
          r = 0.12 (protection only)
        </text>
      </g>
    </Frame>
  )
}

// 5. Autonomous robotics fleet ramp: cumulative units deployed by platform.
function RoboticsFleet() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([2026, 2040], [pad, w - pad / 2])
  const sy = scale([0, 12000], [h - pad, pad / 2])
  const ramp = (cap: number, t0: number, k: number) => (t: number) =>
    cap / (1 + Math.exp(-k * (t - t0)))
  const seed = ramp(4200, 2033, 0.5)
  const guardian = ramp(3400, 2035, 0.45)
  const pollinator = ramp(4100, 2037, 0.55)
  const stackPts = series((t) => t, 2026, 2040, 56).map((_, i) => {
    const t = 2026 + (14 * i) / 56
    return t
  })
  const layer = (fns: ((t: number) => number)[]) =>
    stackPts.map((t) => [sx(t), sy(fns.reduce((s, f) => s + f(t), 0))] as Pt)
  const l1 = layer([seed])
  const l2 = layer([seed, guardian])
  const l3 = layer([seed, guardian, pollinator])
  const yTicks = [0, 3000, 6000, 9000, 12000].map((v) => ({ at: sy(v), label: `${v / 1000}k` }))
  const xTicks = [2026, 2030, 2034, 2038, 2040].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Year"
      yLabel="Autonomous units in field"
    >
      <path d={area(l3, h - pad)} fill={C.violet} opacity={0.28} />
      <path d={area(l2, h - pad)} fill={C.teal} opacity={0.32} />
      <path d={area(l1, h - pad)} fill={C.green} opacity={0.38} />
      <path d={line(l3)} fill="none" stroke={C.violet} strokeWidth={1.6} />
      <path d={line(l2)} fill="none" stroke={C.teal} strokeWidth={1.6} />
      <path d={line(l1)} fill="none" stroke={C.green} strokeWidth={1.6} />
      <g fontSize={11}>
        <rect x={pad + 8} y={pad / 2} width={12} height={12} fill={C.green} rx={2} />
        <text x={pad + 24} y={pad / 2 + 11} fill={C.label}>
          Reef-seeding AUVs
        </text>
        <rect x={pad + 8} y={pad / 2 + 18} width={12} height={12} fill={C.teal} rx={2} />
        <text x={pad + 24} y={pad / 2 + 29} fill={C.label}>
          Cryosphere guardians
        </text>
        <rect x={pad + 8} y={pad / 2 + 36} width={12} height={12} fill={C.violet} rx={2} />
        <text x={pad + 24} y={pad / 2 + 47} fill={C.label}>
          Terrestrial pollinators
        </text>
      </g>
    </Frame>
  )
}

// 6. Permafrost carbon flux: net balance between thaw emission and managed capture.
function PermafrostCarbon() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([2025, 2050], [pad, w - pad / 2])
  const sy = scale([-1.2, 1.6], [h - pad, pad / 2])
  const emission = (t: number) => 0.05 * (t - 2025) + 0.2
  const capture = (t: number) => -1.15 / (1 + Math.exp(-0.4 * (t - 2038)))
  const net = (t: number) => emission(t) + capture(t)
  const mk = (f: (t: number) => number) =>
    series((t) => t, 2025, 2050, 60).map((_, i) => {
      const t = 2025 + (25 * i) / 60
      return [sx(t), sy(f(t))] as Pt
    })
  const zeroY = sy(0)
  const yTicks = [-1.2, -0.6, 0, 0.6, 1.2].map((v) => ({ at: sy(v), label: v.toFixed(1) }))
  const xTicks = [2025, 2033, 2041, 2050].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Year"
      yLabel="Gt CO₂e · yr⁻¹ (+ source / − sink)"
    >
      <line x1={pad} y1={zeroY} x2={w - pad / 2} y2={zeroY} stroke={C.axis} strokeWidth={1.4} />
      <path d={line(mk(emission))} fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="5 4" />
      <path d={line(mk(capture))} fill="none" stroke={C.teal} strokeWidth={2} strokeDasharray="5 4" />
      <path d={line(mk(net))} fill="none" stroke={C.green} strokeWidth={2.8} />
      <g fontSize={11}>
        <rect x={w - 150} y={pad / 2} width={12} height={4} fill={C.red} />
        <text x={w - 134} y={pad / 2 + 6} fill={C.label}>
          Thaw emission
        </text>
        <rect x={w - 150} y={pad / 2 + 16} width={12} height={4} fill={C.teal} />
        <text x={w - 134} y={pad / 2 + 22} fill={C.label}>
          Managed capture
        </text>
        <rect x={w - 150} y={pad / 2 + 32} width={12} height={4} fill={C.green} />
        <text x={w - 134} y={pad / 2 + 38} fill={C.label}>
          Net flux
        </text>
      </g>
    </Frame>
  )
}

// 7. VRAM allocation for a 24/7 local-model node on a 12 GB RTX 4070 Ti.
function VramBudget() {
  const w = 640,
    h = 220,
    pad = 46
  const total = 12
  const segs = [
    { label: 'Weights (Q4_K_M, 14B)', gb: 8.2, color: C.green },
    { label: 'KV cache (16k ctx)', gb: 1.9, color: C.teal },
    { label: 'CUDA + activations', gb: 0.9, color: C.blue },
    { label: 'Headroom', gb: 1.0, color: C.grid },
  ]
  const sx = scale([0, total], [pad, w - pad])
  let acc = 0
  const barY = 70
  const barH = 46
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure-svg" role="img" preserveAspectRatio="xMidYMid meet">
      <text x={pad} y={40} fontSize={13} fill={C.label}>
        RTX 4070 Ti — 12 GB VRAM budget (steady-state inference)
      </text>
      {segs.map((s, i) => {
        const x = sx(acc)
        const wdt = sx(acc + s.gb) - sx(acc)
        acc += s.gb
        return (
          <g key={i}>
            <rect x={x} y={barY} width={Math.max(0, wdt - 2)} height={barH} fill={s.color} rx={3} opacity={0.85} />
            <text x={x + wdt / 2} y={barY + barH + 18} textAnchor="middle" fontSize={10.5} fill={C.label}>
              {s.gb} GB
            </text>
          </g>
        )
      })}
      {segs.map((s, i) => (
        <g key={`l${i}`} transform={`translate(${pad + (i % 2) * 300}, ${150 + Math.floor(i / 2) * 22})`}>
          <rect width={12} height={12} fill={s.color} rx={2} />
          <text x={18} y={11} fontSize={11.5} fill={C.label}>
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// 8. Zen-garden coverage pattern: raked parallel passes with concentric rings
//    around obstacles — the signature output of the Zen Gardener robot.
function ZenPattern() {
  const w = 640,
    h = 360
  const rocks = [
    { x: 190, y: 150, r: 26 },
    { x: 300, y: 268, r: 18 },
    { x: 452, y: 196, r: 34 },
  ]
  const rakeGap = 13
  const lines: number[] = []
  for (let y = 24; y < h - 16; y += rakeGap) lines.push(y)
  const ringGap = 9
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure-svg" role="img" preserveAspectRatio="xMidYMid meet">
      <rect x={8} y={8} width={w - 16} height={h - 16} rx={10} fill="#141b17" stroke={C.grid} />
      <defs>
        <mask id="zenMask">
          <rect x={8} y={8} width={w - 16} height={h - 16} fill="white" />
          {rocks.map((rk, i) => (
            <circle key={i} cx={rk.x} cy={rk.y} r={rk.r + 6 * ringGap} fill="black" />
          ))}
        </mask>
      </defs>
      {/* Straight raked sand — parallel coverage passes */}
      <g mask="url(#zenMask)" stroke={C.teal} strokeWidth={1.1} opacity={0.55}>
        {lines.map((y, i) => (
          <line key={i} x1={16} y1={y} x2={w - 16} y2={y} />
        ))}
      </g>
      {/* Concentric raked rings flowing around each obstacle */}
      {rocks.map((rk, i) => (
        <g key={i}>
          {[1, 2, 3, 4, 5].map((k) => (
            <circle
              key={k}
              cx={rk.x}
              cy={rk.y}
              r={rk.r + k * ringGap}
              fill="none"
              stroke={C.green}
              strokeWidth={1.1}
              opacity={0.5}
            />
          ))}
          <circle cx={rk.x} cy={rk.y} r={rk.r} fill="#2a3630" stroke={C.grid} />
        </g>
      ))}
      <text x={20} y={h - 16} fontSize={11} fill={C.label}>
        parallel passes = full coverage · rings = raked flow around obstacles
      </text>
    </svg>
  )
}

// 9. Stair-climb geometry: whether a wheel of radius R clears a step of rise s.
function StairClimb() {
  const w = 640,
    h = 360
  // Staircase profile (rising right→left for a robot climbing up-right)
  const baseY = h - 60
  const stepH = 46
  const stepD = 74
  const originX = 90
  const steps: string[] = [`M${originX} ${baseY}`]
  let x = originX
  let y = baseY
  for (let i = 0; i < 3; i++) {
    x += stepD
    steps.push(`L${x} ${y}`)
    y -= stepH
    steps.push(`L${x} ${y}`)
  }
  steps.push(`L${x + 40} ${y}`)
  // Wheel resting against the first riser
  const R = 40
  const wheelCx = originX + stepD - R * 0.62
  const wheelCy = baseY - R
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure-svg" role="img" preserveAspectRatio="xMidYMid meet">
      <path d={steps.join(' ')} fill="none" stroke={C.axis} strokeWidth={2.4} />
      {/* Wheel */}
      <circle cx={wheelCx} cy={wheelCy} r={R} fill="none" stroke={C.green} strokeWidth={2.6} />
      <circle cx={wheelCx} cy={wheelCy} r={4} fill={C.green} />
      {/* Contact point + step rise annotation */}
      <line x1={originX + stepD} y1={baseY} x2={originX + stepD} y2={baseY - stepH} stroke={C.amber} strokeWidth={2} />
      <text x={originX + stepD + 8} y={baseY - stepH / 2} fontSize={12} fill={C.amber}>
        step rise s
      </text>
      {/* Radius */}
      <line
        x1={wheelCx}
        y1={wheelCy}
        x2={originX + stepD}
        y2={baseY - stepH * 0.5}
        stroke={C.teal}
        strokeDasharray="4 3"
      />
      <text x={wheelCx - 8} y={wheelCy - R - 8} fontSize={12} fill={C.teal} textAnchor="middle">
        wheel radius R
      </text>
      {/* Climb condition */}
      <g transform={`translate(${w - 250}, 60)`}>
        <text fontSize={13} fill={C.label}>
          Passive climb limit:
        </text>
        <text y={26} fontSize={15} fill={C.green} fontFamily="monospace">
          s ≤ R(1 − cos φ_max)
        </text>
        <text y={52} fontSize={12} fill={C.label}>
          Tri-star (wheg) cluster
        </text>
        <text y={70} fontSize={12} fill={C.label}>
          lifts this to s ≈ 2R.
        </text>
      </g>
    </svg>
  )
}

// 10. Depth uncertainty vs range: monocular error grows as Z², LIDAR fusion
//     collapses it back to a near-constant floor (inverse-variance weighting).
function DepthUncertainty() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0, 30], [pad, w - pad / 2])
  const sy = scale([0, 120], [h - pad, pad / 2])
  // Triangulation error: σ_Z = Z²·σ_d /(f·B) → quadratic in range.
  const mono = (Z: number) => Math.min(120, 0.12 * Z * Z)
  // Fused with a metric LIDAR return: a small constant floor + residual.
  const fused = (Z: number) => 2 + 0.01 * Z * Z
  const mk = (f: (z: number) => number) =>
    series((Z) => Z, 0, 30, 60).map((_, i) => {
      const Z = (30 * i) / 60
      return [sx(Z), sy(f(Z))] as Pt
    })
  const yTicks = [0, 30, 60, 90, 120].map((v) => ({ at: sy(v), label: `${v}` }))
  const xTicks = [0, 10, 20, 30].map((v) => ({ at: sx(v), label: `${v}m` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Range to target Z"
      yLabel="Depth 1σ uncertainty (cm)"
    >
      <defs>
        <linearGradient id="gDepth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.red} stopOpacity={0.32} />
          <stop offset="100%" stopColor={C.red} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path d={area(mk(mono), h - pad)} fill="url(#gDepth)" />
      <path d={line(mk(mono))} fill="none" stroke={C.red} strokeWidth={2.6} />
      <path d={line(mk(fused))} fill="none" stroke={C.green} strokeWidth={2.6} />
      <g fontSize={11}>
        <rect x={pad + 8} y={pad / 2} width={12} height={4} fill={C.red} />
        <text x={pad + 24} y={pad / 2 + 6} fill={C.label}>
          Monocular σ_Z ∝ Z²
        </text>
        <rect x={pad + 8} y={pad / 2 + 16} width={12} height={4} fill={C.green} />
        <text x={pad + 24} y={pad / 2 + 22} fill={C.label}>
          RGB + LIDAR fused
        </text>
      </g>
    </Frame>
  )
}

// 11. Promptable segmentation: mask IoU rises with the number of point prompts
//     and saturates — one or two clicks already carry most of the quality.
function SamIoU() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0, 8], [pad, w - pad / 2])
  const sy = scale([0, 1], [h - pad, pad / 2])
  const iou = (n: number) => 0.55 + 0.42 * (1 - Math.exp(-0.6 * n))
  const pts = series((n) => n, 0, 8, 64).map((_, i) => {
    const n = (8 * i) / 64
    return [sx(n), sy(iou(n))] as Pt
  })
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((v) => ({ at: sy(v), label: v.toFixed(2) }))
  const xTicks = [0, 2, 4, 6, 8].map((v) => ({ at: sx(v), label: `${v}` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Point prompts per object"
      yLabel="Mask IoU vs ground truth"
    >
      <line x1={pad} y1={sy(0.9)} x2={w - pad / 2} y2={sy(0.9)} stroke={C.axis} strokeDasharray="2 4" />
      <text x={w - pad / 2} y={sy(0.9) - 6} textAnchor="end" fontSize={11} fill={C.label}>
        field-usable ≥ 0.90
      </text>
      <path d={line(pts)} fill="none" stroke={C.teal} strokeWidth={2.6} />
      {[1, 2, 3].map((n) => (
        <circle key={n} cx={sx(n)} cy={sy(iou(n))} r={3.5} fill={C.teal} />
      ))}
    </Frame>
  )
}

// 12. Gaussian-splatting fidelity: PSNR climbs with the number of splats and
//     saturates; the knee is the sweet spot for an on-robot bandwidth budget.
function SplatPsnr() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0, 5], [pad, w - pad / 2])
  const sy = scale([20, 40], [h - pad, pad / 2])
  // PSNR(N) = 38 − 14·e^{−N/0.9}, N in millions of Gaussians.
  const psnr = (N: number) => 38 - 14 * Math.exp(-N / 0.9)
  const pts = series((N) => N, 0, 5, 64).map((_, i) => {
    const N = (5 * i) / 64
    return [sx(N), sy(psnr(N))] as Pt
  })
  const yTicks = [20, 25, 30, 35, 40].map((v) => ({ at: sy(v), label: `${v}` }))
  const xTicks = [0, 1, 2, 3, 4, 5].map((v) => ({ at: sx(v), label: `${v}M` }))
  const knee = 1.1
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Gaussians in scene N"
      yLabel="Reconstruction PSNR (dB)"
    >
      <defs>
        <linearGradient id="gSplat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.violet} stopOpacity={0.3} />
          <stop offset="100%" stopColor={C.violet} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path d={area(pts, h - pad)} fill="url(#gSplat)" />
      <path d={line(pts)} fill="none" stroke={C.violet} strokeWidth={2.6} />
      <line x1={sx(knee)} y1={sy(psnr(knee))} x2={sx(knee)} y2={h - pad} stroke={C.teal} strokeDasharray="4 4" />
      <circle cx={sx(knee)} cy={sy(psnr(knee))} r={4} fill={C.teal} />
      <text x={sx(knee) + 8} y={sy(psnr(knee)) + 4} fontSize={11} fill={C.label}>
        streaming knee ≈ 1.1M splats
      </text>
    </Frame>
  )
}

// 13. Level-of-detail: streamed splats per frame fall off as 1/d² with viewer
//     distance, holding the on-wire bandwidth inside a fixed budget.
function LodBandwidth() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([1, 20], [pad, w - pad / 2])
  const sy = scale([0, 30], [h - pad, pad / 2])
  // Screen-space footprint ∝ 1/d²; bytes/frame track visible-splat count.
  const mbps = (d: number) => Math.min(30, 28 / (d * d) + 0.6)
  const pts = series((d) => d, 1, 20, 64).map((_, i) => {
    const d = 1 + (19 * i) / 64
    return [sx(d), sy(mbps(d))] as Pt
  })
  const yTicks = [0, 10, 20, 30].map((v) => ({ at: sy(v), label: `${v}` }))
  const xTicks = [1, 5, 10, 15, 20].map((v) => ({ at: sx(v), label: `${v}m` }))
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Viewer distance to splat cluster d"
      yLabel="Streamed rate (Mbit·s⁻¹)"
    >
      <rect x={pad} y={sy(12)} width={w - pad - pad / 2} height={h - pad - sy(12)} fill={C.green} opacity={0.06} />
      <line x1={pad} y1={sy(12)} x2={w - pad / 2} y2={sy(12)} stroke={C.green} strokeDasharray="3 4" />
      <text x={w - pad / 2} y={sy(12) - 6} textAnchor="end" fontSize={11} fill={C.label}>
        12 Mbit·s⁻¹ link budget
      </text>
      <path d={line(pts)} fill="none" stroke={C.blue} strokeWidth={2.6} />
    </Frame>
  )
}

// 14. Topology-optimization trade-off: structural compliance falls as the
//     volume-fraction budget grows — a convex, diminishing-returns frontier.
function TopoptPareto() {
  const w = 640,
    h = 360,
    pad = 46
  const sx = scale([0.1, 0.6], [pad, w - pad / 2])
  const sy = scale([0, 100], [h - pad, pad / 2])
  // Compliance c(V) ∝ V^{−q}, normalized to 100 at V = 0.1.
  const q = 1.35
  const comp = (V: number) => 100 * Math.pow(0.1 / V, q)
  const pts = series((V) => V, 0.1, 0.6, 64).map((_, i) => {
    const V = 0.1 + (0.5 * i) / 64
    return [sx(V), sy(comp(V))] as Pt
  })
  const yTicks = [0, 25, 50, 75, 100].map((v) => ({ at: sy(v), label: `${v}` }))
  const xTicks = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((v) => ({ at: sx(v), label: v.toFixed(1) }))
  const pick = 0.3
  return (
    <Frame
      w={w}
      h={h}
      pad={pad}
      xTicks={xTicks}
      yTicks={yTicks}
      xLabel="Volume fraction V"
      yLabel="Compliance c = uᵀKu (normalized)"
    >
      <defs>
        <linearGradient id="gTopo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.green} stopOpacity={0.28} />
          <stop offset="100%" stopColor={C.green} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path d={area(pts, h - pad)} fill="url(#gTopo)" />
      <path d={line(pts)} fill="none" stroke={C.green} strokeWidth={2.6} />
      <line x1={sx(pick)} y1={sy(comp(pick))} x2={sx(pick)} y2={h - pad} stroke={C.amber} strokeDasharray="4 4" />
      <circle cx={sx(pick)} cy={sy(comp(pick))} r={4} fill={C.amber} />
      <text x={sx(pick) + 8} y={sy(comp(pick)) - 8} fontSize={11} fill={C.label}>
        chosen V = 0.30
      </text>
    </Frame>
  )
}

// 15. Biomimetic density lattice: a SIMP density field ρ(x) rendered as a grid
//     of struts whose thickness tracks ρ — dense where stressed, hollow where free.
function LatticeDensity() {
  const w = 640,
    h = 360
  const cols = 16
  const rows = 9
  const x0 = 24
  const y0 = 24
  const cw = (w - 2 * x0) / cols
  const ch = (h - 2 * y0) / rows
  // Density field: a diagonal load path — dense along a corner-to-corner band.
  const rho = (i: number, j: number) => {
    const u = i / (cols - 1)
    const v = j / (rows - 1)
    const band = 1 - Math.min(1, Math.abs(u - v) * 2.1)
    const anchor = Math.exp(-((u * u + v * v)) * 1.2) * 0.5
    return Math.max(0.08, Math.min(1, 0.25 + 0.75 * band + anchor))
  }
  const cells: ReactNode[] = []
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const r = rho(i, j)
      const cx = x0 + cw * (i + 0.5)
      const cy = y0 + ch * (j + 0.5)
      const rad = Math.min(cw, ch) * 0.5 * (0.25 + 0.75 * r)
      const col = r > 0.66 ? C.green : r > 0.4 ? C.teal : C.blue
      cells.push(
        <rect
          key={`${i}-${j}`}
          x={cx - rad}
          y={cy - rad}
          width={rad * 2}
          height={rad * 2}
          rx={rad * 0.35}
          fill={col}
          opacity={0.25 + 0.6 * r}
        />
      )
    }
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure-svg" role="img" preserveAspectRatio="xMidYMid meet">
      <rect x={8} y={8} width={w - 16} height={h - 16} rx={10} fill="#0f1613" stroke={C.grid} />
      {cells}
      <text x={20} y={h - 14} fontSize={11} fill={C.label}>
        ρ(x) → material where load flows, void where it does not — bone, solved
      </text>
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export interface FigureDef {
  title: string
  Component: () => ReactNode
}

export const FIGURES: Record<string, FigureDef> = {
  'carbon-drawdown': { title: 'Cumulative carbon drawdown, 2025–2050', Component: CarbonDrawdown },
  'wave-energy': { title: 'Bio-WEC capture-width ratio vs wave period', Component: WaveEnergy },
  'ice-melt': { title: 'Glacial melt reduction vs lattice thickness', Component: IceMelt },
  'species-recovery': { title: 'Logistic population recovery under intervention', Component: SpeciesRecovery },
  'robotics-fleet': { title: 'Autonomous restoration fleet deployment', Component: RoboticsFleet },
  'permafrost-carbon': { title: 'Managed permafrost carbon flux', Component: PermafrostCarbon },
  'vram-budget': { title: '12 GB VRAM allocation for a 24/7 inference node', Component: VramBudget },
  'zen-pattern': { title: 'Zen-garden coverage: raked passes and rings around obstacles', Component: ZenPattern },
  'stair-climb': { title: 'Stair-climb geometry: wheel radius vs step rise', Component: StairClimb },
  'depth-uncertainty': { title: 'Depth uncertainty vs range: monocular vs LIDAR-fused', Component: DepthUncertainty },
  'sam-iou': { title: 'Promptable segmentation: mask IoU vs point prompts', Component: SamIoU },
  'splat-psnr': { title: 'Gaussian-splatting fidelity: PSNR vs splat count', Component: SplatPsnr },
  'lod-bandwidth': { title: 'Level-of-detail: streamed rate vs viewer distance', Component: LodBandwidth },
  'topopt-pareto': { title: 'Topology optimization: compliance vs volume fraction', Component: TopoptPareto },
  'lattice-density': { title: 'Biomimetic SIMP density lattice', Component: LatticeDensity },
}

export function StudyFigure({ viz, caption }: { viz: string; caption?: string }) {
  const def = FIGURES[viz]
  if (!def) return null
  const { Component } = def
  return (
    <figure className="study-figure">
      <div className="study-figure-frame">
        <Component />
      </div>
      <figcaption>
        <span className="figure-label">Fig.</span> {caption ?? def.title}
      </figcaption>
    </figure>
  )
}
