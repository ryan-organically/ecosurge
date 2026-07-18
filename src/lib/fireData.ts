/**
 * fireData — client-side live wildfire data for the EcoSurge Fire Watch globe.
 *
 * Static-export friendly: no server routes, no API keys, no build-time secrets.
 * Everything here runs in the browser.
 *
 * Primary source: NASA EONET v3 (Earth Observatory Natural Event Tracker).
 *   https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open
 *   Public, CORS-enabled, no key required. Poll on an interval.
 *
 * Fallback source: a build-time snapshot at /data/fires.snapshot.json produced
 * by scripts/fetch-fires.mjs (NASA FIRMS active-fire CSV). Loaded only if the
 * live fetch fails, so the section degrades gracefully instead of going blank.
 */

/** A single normalized fire event, source-agnostic. */
export interface FireEvent {
  id: string
  title: string
  lat: number
  lon: number
  /** ISO timestamp of the most recent geometry/observation. */
  date: string
  /** Optional intensity in [0,1]; derived from magnitude/FRP when available. */
  intensity?: number
  category: string
  /** Free-text source label ("EONET", "FIRMS snapshot"). */
  source: string
  /** Optional link to the source event page. */
  link?: string
}

export interface FireDataResult {
  events: FireEvent[]
  /** ISO timestamp of when the data was fetched. */
  fetchedAt: string
  /** Which pipeline produced these events. */
  source: 'eonet' | 'snapshot' | 'empty'
  /** Non-fatal error message when live fetch failed. */
  error?: string
}

const EONET_URL =
  'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open'

const SNAPSHOT_URL = 'data/fires.snapshot.json'

/** Default polling interval: 5 minutes. */
export const FIRE_POLL_INTERVAL_MS = 5 * 60 * 1000

/* ------------------------------------------------------------------ */
/*  EONET response shapes (only the fields we consume)                 */
/* ------------------------------------------------------------------ */

interface EonetGeometry {
  magnitudeValue?: number | null
  magnitudeUnit?: string | null
  date: string
  type: string
  coordinates: number[]
}

interface EonetEvent {
  id: string
  title: string
  link?: string
  categories?: { id: string; title: string }[]
  geometry?: EonetGeometry[]
}

interface EonetResponse {
  events?: EonetEvent[]
}

/* ------------------------------------------------------------------ */
/*  Normalization                                                      */
/* ------------------------------------------------------------------ */

/** Clamp a value into [0,1]. */
function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n))
}

/**
 * Map an EONET wildfire event to a FireEvent using its most recent Point
 * geometry. Returns null for events without usable point coordinates.
 */
function normalizeEonetEvent(ev: EonetEvent): FireEvent | null {
  const geometries = (ev.geometry ?? []).filter(
    (g) => g.type === 'Point' && Array.isArray(g.coordinates) && g.coordinates.length >= 2,
  )
  if (geometries.length === 0) return null

  // Most recent observation wins.
  const latest = geometries.reduce((a, b) =>
    new Date(b.date).getTime() >= new Date(a.date).getTime() ? b : a,
  )

  // EONET coordinates are [lon, lat].
  const lon = Number(latest.coordinates[0])
  const lat = Number(latest.coordinates[1])
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null

  // Derive a rough intensity. EONET wildfire magnitude is often absent; when
  // present it can be acreage or FRP-like. We log-compress it into [0,1].
  let intensity: number | undefined
  const mag = latest.magnitudeValue
  if (typeof mag === 'number' && Number.isFinite(mag) && mag > 0) {
    // log10 scaling: ~1 unit -> 0, ~10^5 units -> ~1.
    intensity = clamp01(Math.log10(mag + 1) / 5)
  }

  return {
    id: ev.id,
    title: ev.title,
    lat,
    lon,
    date: latest.date,
    intensity,
    category: ev.categories?.[0]?.title ?? 'Wildfires',
    source: 'EONET',
    link: ev.link,
  }
}

/* ------------------------------------------------------------------ */
/*  Fetchers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Fetch live wildfires from NASA EONET v3. Throws on network/HTTP error so the
 * caller can fall back to the snapshot.
 */
export async function fetchEonetFires(signal?: AbortSignal): Promise<FireEvent[]> {
  const res = await fetch(EONET_URL, {
    signal,
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`EONET HTTP ${res.status}`)
  const json: EonetResponse = await res.json()
  const events = (json.events ?? [])
    .map(normalizeEonetEvent)
    .filter((e): e is FireEvent => e !== null)
  return events
}

/**
 * Load the build-time snapshot fallback. Returns [] if absent (never throws for
 * a missing file — a static export may simply not ship one).
 */
export async function fetchSnapshotFires(signal?: AbortSignal): Promise<FireEvent[]> {
  try {
    const res = await fetch(SNAPSHOT_URL, { signal, cache: 'no-store' })
    if (!res.ok) return []
    const json = await res.json()
    const raw: unknown = Array.isArray(json) ? json : json?.events
    if (!Array.isArray(raw)) return []
    return raw
      .map((r): FireEvent | null => {
        const o = r as Record<string, unknown>
        const lat = Number(o.lat)
        const lon = Number(o.lon)
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null
        return {
          id: String(o.id ?? `${lat},${lon}`),
          title: String(o.title ?? 'Active fire detection'),
          lat,
          lon,
          date: String(o.date ?? new Date().toISOString()),
          intensity:
            typeof o.intensity === 'number' ? clamp01(o.intensity) : undefined,
          category: String(o.category ?? 'Wildfires'),
          source: 'FIRMS snapshot',
          link: typeof o.link === 'string' ? o.link : undefined,
        }
      })
      .filter((e): e is FireEvent => e !== null)
  } catch {
    return []
  }
}

/**
 * Fetch fires with graceful degradation: try EONET live, fall back to the
 * snapshot, and finally return an empty-but-labeled result. Never throws.
 */
export async function fetchFires(signal?: AbortSignal): Promise<FireDataResult> {
  try {
    const events = await fetchEonetFires(signal)
    return { events, fetchedAt: new Date().toISOString(), source: 'eonet' }
  } catch (err) {
    if (signal?.aborted) {
      // Aborted on unmount — propagate as an abort so callers can ignore it.
      throw err
    }
    const message = err instanceof Error ? err.message : 'Live fetch failed'
    const snapshot = await fetchSnapshotFires(signal)
    if (snapshot.length > 0) {
      return {
        events: snapshot,
        fetchedAt: new Date().toISOString(),
        source: 'snapshot',
        error: message,
      }
    }
    return {
      events: [],
      fetchedAt: new Date().toISOString(),
      source: 'empty',
      error: message,
    }
  }
}

/**
 * Start polling fetchFires on an interval. Calls onData with every successful
 * result (including empty/degraded ones). Returns a cleanup function that
 * clears the interval and aborts any in-flight request.
 */
export function pollFires(
  onData: (result: FireDataResult) => void,
  intervalMs: number = FIRE_POLL_INTERVAL_MS,
): () => void {
  let cancelled = false
  let controller: AbortController | null = null
  let timer: ReturnType<typeof setInterval> | null = null

  const run = async () => {
    controller?.abort()
    controller = new AbortController()
    try {
      const result = await fetchFires(controller.signal)
      if (!cancelled) onData(result)
    } catch {
      // Aborted or unexpected — swallow; the next tick retries.
    }
  }

  // Kick off immediately, then on interval.
  void run()
  timer = setInterval(() => void run(), intervalMs)

  return () => {
    cancelled = true
    if (timer) clearInterval(timer)
    controller?.abort()
  }
}

/**
 * Convert lat/lon (degrees) to a point on a unit sphere of the given radius.
 * Mirrors the convention used by the archive Globe component.
 */
export function latLonToVec3(
  lat: number,
  lon: number,
  radius: number,
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ]
}
