'use client'

/**
 * FireTrackerMap — performant 2D canvas map of North America for the
 * EcoSurge Fire Watch module. Replaces the old react-three-fiber globe.
 *
 * Rendering strategy:
 *  - Albers conic projection (d3-geo) fit to a North America bbox.
 *  - Basemap (land, lakes, borders, graticule, labels) drawn ONCE to an
 *    offscreen canvas per resize, then blitted under the fire layer.
 *  - Fires drawn as additive radial heat-glows so overlapping detections
 *    bloom into heat regions, plus a crisp core dot per fire.
 *  - Optional shimmer runs at <= 20 fps, only while the section is
 *    visible on screen and the tab is foregrounded, and is disabled
 *    entirely under prefers-reduced-motion. No WebGL, no full-rate loop.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { geoAlbers, geoGraticule, geoPath, type GeoPermissibleObjects } from 'd3-geo'

import {
  pollFires,
  FIRE_POLL_INTERVAL_MS,
  type FireEvent,
  type FireDataResult,
} from '@/lib/fireData'
import {
  NA_LAND,
  NA_LAKES,
  NA_BORDERS,
  NA_FRAME,
  NA_LABELS,
  inNorthAmerica,
} from './northAmericaGeo'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const SHIMMER_FPS = 18
const SHIMMER_FRAME_MS = 1000 / SHIMMER_FPS

/** Palette (mirrors tokens.css signal hues; canvas can't read CSS vars cheaply). */
const COLORS = {
  landFill: 'rgba(233, 242, 236, 0.05)',
  landStroke: 'rgba(233, 242, 236, 0.22)',
  lakeFill: 'rgba(6, 12, 9, 0.55)',
  lakeStroke: 'rgba(233, 242, 236, 0.14)',
  border: 'rgba(233, 242, 236, 0.13)',
  graticule: 'rgba(233, 242, 236, 0.045)',
  label: 'rgba(159, 178, 167, 0.42)',
  oceanLabel: 'rgba(159, 178, 167, 0.28)',
  ring: '#fbbf24', // --amber-400
}

interface ProjectedFire {
  event: FireEvent
  x: number
  y: number
  /** Glow radius in CSS px. */
  r: number
  intensity: number
  /** Per-fire phase so shimmer isn't synchronized. */
  phase: number
}

/* ------------------------------------------------------------------ */
/*  Formatting helpers                                                 */
/* ------------------------------------------------------------------ */

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatTime(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
}

/** Deterministic phase from the event id (stable across polls). */
function hashPhase(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return (Math.abs(h) % 628) / 100
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FireTrackerMap() {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState<FireDataResult | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  /** Cached basemap layer, re-rendered only on resize. */
  const baseRef = useRef<HTMLCanvasElement | null>(null)
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 })
  const projectedRef = useRef<ProjectedFire[]>([])
  const selectedRef = useRef<string | null>(null)

  const rafRef = useRef<number>(0)
  const lastFrameRef = useRef(0)
  const visibleRef = useRef(true) // section in viewport
  const tabVisibleRef = useRef(true) // document not hidden
  const reducedMotionRef = useRef(false)

  useEffect(() => setMounted(true), [])

  /* ---------------- data polling (unchanged data layer) ------------- */
  useEffect(() => {
    if (!mounted) return
    return pollFires((result) => setData(result), FIRE_POLL_INTERVAL_MS)
  }, [mounted])

  const events = useMemo(() => data?.events ?? [], [data])
  const naEvents = useMemo(
    () => events.filter((e) => inNorthAmerica(e.lat, e.lon)),
    [events],
  )
  const outsideCount = events.length - naEvents.length

  /* ---------------- drawing ---------------------------------------- */

  /** Rebuild the projection + cached basemap for the current size. */
  const renderBase = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    sizeRef.current = { w, h, dpr }

    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    // Albers conic centered on North America.
    const projection = geoAlbers()
      .rotate([100, 0])
      .center([0, 45])
      .parallels([20, 60])
      .fitExtent(
        [
          [12, 12],
          [w - 12, h - 12],
        ],
        NA_FRAME as GeoPermissibleObjects,
      )

    // Offscreen basemap layer.
    const base = document.createElement('canvas')
    base.width = w * dpr
    base.height = h * dpr
    const ctx = base.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const path = geoPath(projection, ctx)

    // Graticule — faint context lines.
    ctx.beginPath()
    path(geoGraticule().step([15, 15])() as GeoPermissibleObjects)
    ctx.strokeStyle = COLORS.graticule
    ctx.lineWidth = 1
    ctx.stroke()

    // Land.
    ctx.beginPath()
    path(NA_LAND as GeoPermissibleObjects)
    ctx.fillStyle = COLORS.landFill
    ctx.fill()
    ctx.strokeStyle = COLORS.landStroke
    ctx.lineWidth = 1
    ctx.stroke()

    // Great Lakes (punched back to water).
    ctx.beginPath()
    path(NA_LAKES as GeoPermissibleObjects)
    ctx.fillStyle = COLORS.lakeFill
    ctx.fill()
    ctx.strokeStyle = COLORS.lakeStroke
    ctx.lineWidth = 0.75
    ctx.stroke()

    // Country borders.
    ctx.beginPath()
    path(NA_BORDERS as GeoPermissibleObjects)
    ctx.strokeStyle = COLORS.border
    ctx.lineWidth = 0.9
    ctx.setLineDash([4, 3])
    ctx.stroke()
    ctx.setLineDash([])

    // Region labels.
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const [text, lon, lat] of NA_LABELS) {
      const p = projection([lon, lat])
      if (!p) continue
      const ocean = text.includes('OCEAN')
      ctx.font = `600 ${ocean ? 9 : 10}px ui-sans-serif, system-ui, sans-serif`
      ctx.fillStyle = ocean ? COLORS.oceanLabel : COLORS.label
      const spaced = text.split('').join('  ')
      ctx.fillText(spaced, p[0], p[1])
    }

    baseRef.current = base

    // Project fires for the new size.
    projectedRef.current = projectFires(projection, naEvents)
  }, [naEvents])

  /** Project NA fires to screen space (radius scaled by intensity). */
  function projectFires(
    projection: ReturnType<typeof geoAlbers>,
    fires: FireEvent[],
  ): ProjectedFire[] {
    const out: ProjectedFire[] = []
    for (const event of fires) {
      const p = projection([event.lon, event.lat])
      if (!p) continue
      const intensity = event.intensity ?? 0.4
      out.push({
        event,
        x: p[0],
        y: p[1],
        r: 7 + intensity * 24,
        intensity,
        phase: hashPhase(event.id),
      })
    }
    return out
  }

  /** Composite: cached basemap + additive fire glows (+ selection ring). */
  const draw = useCallback((timeSec: number) => {
    const canvas = canvasRef.current
    const base = baseRef.current
    if (!canvas || !base) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { w, h, dpr } = sizeRef.current

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(base, 0, 0)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const animate = timeSec >= 0

    // Heat glows — additive so overlapping fires bloom into regions.
    ctx.globalCompositeOperation = 'lighter'
    for (const f of projectedRef.current) {
      const flicker = animate ? 1 + 0.09 * Math.sin(timeSec * (1.6 + f.intensity) + f.phase) : 1
      const r = f.r * flicker
      const a = 0.55 + f.intensity * 0.45
      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r)
      grad.addColorStop(0, `rgba(255, 255, 245, ${0.9 * a})`)
      grad.addColorStop(0.12, `rgba(255, 224, 130, ${0.8 * a})`)
      grad.addColorStop(0.32, `rgba(255, 87, 34, ${0.5 * a})`)
      grad.addColorStop(0.62, `rgba(251, 146, 60, ${0.16 * a})`)
      grad.addColorStop(1, 'rgba(251, 146, 60, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(f.x, f.y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Crisp core dots on top of the bloom.
    ctx.globalCompositeOperation = 'source-over'
    for (const f of projectedRef.current) {
      ctx.beginPath()
      ctx.arc(f.x, f.y, 1.4 + f.intensity * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = '#fff7e6'
      ctx.fill()
    }

    // Selection ring (cross-highlight from the feed).
    const sel = selectedRef.current
    if (sel) {
      const f = projectedRef.current.find((p) => p.event.id === sel)
      if (f) {
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r + 5, 0, Math.PI * 2)
        ctx.strokeStyle = COLORS.ring
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r + 10, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Frame is unscaled between draws.
    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }, [])

  /* ---------------- size / rebuild --------------------------------- */
  useEffect(() => {
    if (!mounted) return
    const container = containerRef.current
    if (!container) return

    const rebuild = () => {
      renderBase()
      draw(reducedMotionRef.current ? -1 : performance.now() / 1000)
    }
    rebuild()

    const ro = new ResizeObserver(rebuild)
    ro.observe(container)
    return () => ro.disconnect()
  }, [mounted, renderBase, draw])

  /* ---------------- selection redraw -------------------------------- */
  useEffect(() => {
    selectedRef.current = selectedId
    // Immediate redraw so the highlight is instant even when paused.
    draw(reducedMotionRef.current ? -1 : performance.now() / 1000)
  }, [selectedId, draw])

  /* ---------------- throttled shimmer loop -------------------------- */
  useEffect(() => {
    if (!mounted) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = media.matches
    const onMedia = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches
      if (e.matches) draw(-1)
    }
    media.addEventListener('change', onMedia)

    const onVisibility = () => {
      tabVisibleRef.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibility)

    let io: IntersectionObserver | null = null
    if (containerRef.current) {
      io = new IntersectionObserver(
        ([entry]) => {
          visibleRef.current = entry.isIntersecting
        },
        { threshold: 0.05 },
      )
      io.observe(containerRef.current)
    }

    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop)
      if (reducedMotionRef.current || !tabVisibleRef.current || !visibleRef.current) return
      if (now - lastFrameRef.current < SHIMMER_FRAME_MS) return
      lastFrameRef.current = now
      draw(now / 1000)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      media.removeEventListener('change', onMedia)
      document.removeEventListener('visibilitychange', onVisibility)
      io?.disconnect()
    }
  }, [mounted, draw])

  /* ---------------- feed ------------------------------------------- */
  const feed = useMemo(() => {
    return [...naEvents]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 40)
  }, [naEvents])

  const sourceLabel =
    data?.source === 'eonet'
      ? 'NASA EONET · live'
      : data?.source === 'snapshot'
        ? 'FIRMS snapshot · fallback'
        : data?.source === 'empty'
          ? 'No data available'
          : 'Connecting…'

  return (
    <div className="firewatch-grid">
      <div className="firewatch-map" ref={containerRef}>
        {mounted ? (
          <canvas ref={canvasRef} className="firewatch-canvas" aria-label="Map of active wildfires across North America" role="img" />
        ) : (
          <div className="firewatch-globe-placeholder" aria-hidden="true" />
        )}

        <div className="firewatch-status">
          <span
            className={`firewatch-dot firewatch-dot--${data?.source ?? 'loading'}`}
            aria-hidden="true"
          />
          <span>{sourceLabel}</span>
          {data && (
            <span className="firewatch-updated">updated {formatTime(data.fetchedAt)}</span>
          )}
        </div>

        <div className="firewatch-count">
          <strong>{naEvents.length}</strong> active in North America
          {outsideCount > 0 && (
            <span className="firewatch-count-note"> · {outsideCount} elsewhere</span>
          )}
        </div>

        <div className="firewatch-legend" aria-hidden="true">
          <span className="firewatch-legend-label">low</span>
          <span className="firewatch-legend-ramp" />
          <span className="firewatch-legend-label">extreme</span>
        </div>
      </div>

      <aside className="firewatch-panel" aria-label="Recent North America fire events">
        <header className="firewatch-panel-head">
          <h3>North America Fire Feed</h3>
          <p>Live wildfire detections across the continent, pulled from NASA Earth-observation systems.</p>
        </header>

        {data?.error && data.source !== 'eonet' && (
          <div className="firewatch-notice">
            Live feed unavailable ({data.error}). Showing{' '}
            {data.source === 'snapshot' ? 'the latest cached snapshot' : 'no data'}.
          </div>
        )}

        <ul className="firewatch-feed">
          {feed.length === 0 && (
            <li className="firewatch-empty">
              {data
                ? 'No open North America fire events right now.'
                : 'Loading live fire data…'}
            </li>
          )}
          {feed.map((e) => {
            const active = e.id === selectedId
            const intensity = e.intensity ?? 0.4
            return (
              <li key={e.id}>
                <button
                  type="button"
                  className={`firewatch-item${active ? ' is-active' : ''}`}
                  onMouseEnter={() => setSelectedId(e.id)}
                  onMouseLeave={() => setSelectedId(null)}
                  onFocus={() => setSelectedId(e.id)}
                  onBlur={() => setSelectedId(null)}
                >
                  <div className="firewatch-item-head">
                    <span
                      className="firewatch-flame"
                      style={{
                        background:
                          intensity > 0.66 ? '#ffe066' : intensity > 0.33 ? '#ff9800' : '#ff5722',
                      }}
                      aria-hidden="true"
                    />
                    <span className="firewatch-title">{e.title}</span>
                  </div>
                  <div className="firewatch-meta">
                    <span>
                      {e.lat.toFixed(1)}°, {e.lon.toFixed(1)}°
                    </span>
                    <span>{formatDate(e.date)}</span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
