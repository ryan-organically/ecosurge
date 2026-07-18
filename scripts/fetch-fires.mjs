#!/usr/bin/env node

/**
 * fetch-fires.mjs — OPTIONAL build-time wildfire snapshot generator.
 *
 * The Fire Watch globe on the landing page fetches live data client-side from
 * NASA EONET (no key). This script produces a *fallback* dataset that the
 * client loads only if that live fetch fails, so the section degrades
 * gracefully on a static export.
 *
 * ── Data sources ────────────────────────────────────────────────────────────
 *   • NASA FIRMS (Fire Information for Resource Management System)
 *       Active-fire detections from MODIS (Aqua/Terra) and VIIRS (S-NPP/NOAA-20)
 *       thermal-anomaly products, served as CSV. Requires a free MAP_KEY:
 *         https://firms.modaps.eosdis.nasa.gov/api/area/
 *       Endpoint (CSV):
 *         https://firms.modaps.eosdis.nasa.gov/api/area/csv/<MAP_KEY>/<SOURCE>/<AREA>/<DAYS>
 *       We use SOURCE=VIIRS_SNPP_NRT, AREA=world, DAYS=1 by default, then keep
 *       Northern-Hemisphere detections (lat >= 0). Columns include latitude,
 *       longitude, bright_ti4/brightness, frp (fire radiative power), acq_date.
 *
 *   • GDACS (Global Disaster Alert and Coordination System) — https://www.gdacs.org
 *       An alternative/complementary source of geocoded wildfire *events* with
 *       severity, available as GeoJSON/RSS. Not wired here, but a natural second
 *       feed: swap the fetch + mapping below to GDACS geometries if preferred.
 *
 * ── Security ────────────────────────────────────────────────────────────────
 *   NO KEY IS HARD-CODED. Provide it via the environment:
 *       FIRMS_MAP_KEY=xxxx node scripts/fetch-fires.mjs
 *   Without a key the script writes an empty (but valid) snapshot and exits 0,
 *   so it never breaks a build.
 *
 * ── Output ──────────────────────────────────────────────────────────────────
 *   public/data/fires.snapshot.json  — array of normalized fire records:
 *       { id, title, lat, lon, date, intensity, category, source }
 *   matching the FireEvent shape consumed by src/lib/fireData.ts.
 *
 * Usage:
 *   FIRMS_MAP_KEY=<your key> node scripts/fetch-fires.mjs
 *   # optional overrides:
 *   FIRMS_SOURCE=VIIRS_NOAA20_NRT FIRMS_DAYS=2 node scripts/fetch-fires.mjs
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')
const OUT_PATH = path.join(PROJECT_ROOT, 'public', 'data', 'fires.snapshot.json')

const MAP_KEY = process.env.FIRMS_MAP_KEY || process.env.MAP_KEY || ''
const SOURCE = process.env.FIRMS_SOURCE || 'VIIRS_SNPP_NRT'
const DAYS = process.env.FIRMS_DAYS || '1'
const AREA = process.env.FIRMS_AREA || 'world'
// Cap the snapshot so the static asset stays small.
const MAX_RECORDS = Number(process.env.FIRMS_MAX || 600)

async function writeSnapshot(records) {
  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
  await fs.writeFile(OUT_PATH, JSON.stringify(records, null, 0))
  console.log(`[fetch-fires] wrote ${records.length} records -> ${path.relative(PROJECT_ROOT, OUT_PATH)}`)
}

/** Parse a FIRMS CSV string into normalized FireEvent-shaped records. */
function parseFirmsCsv(csv) {
  const lines = csv.trim().split(/\r?\n/)
  if (lines.length < 2) return []
  const header = lines[0].split(',').map((h) => h.trim())
  const idx = (name) => header.indexOf(name)

  const iLat = idx('latitude')
  const iLon = idx('longitude')
  const iFrp = idx('frp')
  const iBright = idx('bright_ti4') >= 0 ? idx('bright_ti4') : idx('brightness')
  const iDate = idx('acq_date')
  const iTime = idx('acq_time')
  const iConf = idx('confidence')

  const records = []
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',')
    const lat = Number(cols[iLat])
    const lon = Number(cols[iLon])
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue
    // Northern Hemisphere focus.
    if (lat < 0) continue

    const frp = iFrp >= 0 ? Number(cols[iFrp]) : NaN
    const bright = iBright >= 0 ? Number(cols[iBright]) : NaN
    // Intensity from FRP (log-compressed) when available, else brightness temp.
    let intensity
    if (Number.isFinite(frp) && frp > 0) {
      intensity = Math.max(0, Math.min(1, Math.log10(frp + 1) / 3))
    } else if (Number.isFinite(bright)) {
      // VIIRS I4 brightness temperature (K): ~300 (cool) .. ~367 (saturated).
      intensity = Math.max(0, Math.min(1, (bright - 300) / 67))
    }

    const dateStr = iDate >= 0 ? String(cols[iDate]) : ''
    const timeStr = iTime >= 0 ? String(cols[iTime]).padStart(4, '0') : '0000'
    const iso = dateStr
      ? `${dateStr}T${timeStr.slice(0, 2)}:${timeStr.slice(2, 4)}:00Z`
      : new Date().toISOString()

    const conf = iConf >= 0 ? String(cols[iConf]).trim() : ''
    records.push({
      id: `firms-${lat.toFixed(4)}-${lon.toFixed(4)}-${dateStr}${timeStr}`,
      title: `Active fire detection${conf ? ` (${conf} confidence)` : ''}`,
      lat,
      lon,
      date: iso,
      intensity,
      category: 'Wildfires',
      source: 'FIRMS snapshot',
    })
    if (records.length >= MAX_RECORDS) break
  }
  return records
}

async function main() {
  if (!MAP_KEY) {
    console.warn(
      '[fetch-fires] No FIRMS_MAP_KEY / MAP_KEY set. Writing an empty snapshot. ' +
        'Get a free key at https://firms.modaps.eosdis.nasa.gov/api/area/',
    )
    await writeSnapshot([])
    return
  }

  const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${MAP_KEY}/${SOURCE}/${AREA}/${DAYS}`
  console.log(`[fetch-fires] fetching FIRMS ${SOURCE} (${DAYS}d, ${AREA})…`)

  try {
    const res = await fetch(url, { headers: { Accept: 'text/csv' } })
    if (!res.ok) throw new Error(`FIRMS HTTP ${res.status}`)
    const csv = await res.text()
    // FIRMS returns an error string (not CSV) on bad key / rate limit.
    if (!csv.includes('latitude')) {
      throw new Error(`Unexpected FIRMS response: ${csv.slice(0, 120)}`)
    }
    const records = parseFirmsCsv(csv)
    await writeSnapshot(records)
  } catch (err) {
    // Never break the build — emit an empty snapshot on failure.
    console.error(`[fetch-fires] failed: ${err instanceof Error ? err.message : err}`)
    await writeSnapshot([])
    process.exitCode = 0
  }
}

main()
