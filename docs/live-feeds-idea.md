# Live Feeds — idea capture (2026-08-03)

**Status: idea, not a spec.** Captured before implementation so it isn't lost.
The spec gets written once the feed infrastructure exists (or once we decide
Fire Watch's pattern is the infrastructure). Nothing here is committed to a
route, a component, or a vendor yet.

## The idea

EcoSurge shows the planet's living systems. It should also show the systems
acting *on* the planet, live. Four feed families, in rough order of how exotic
they feel to a visitor:

1. **Planetary distances from Earth.** Real-time distance to each planet in the
   solar system, updating as the bodies move. The "you are here, and everything
   else is this far away right now" panel.
2. **Storms elsewhere in the solar system.** Two sub-kinds: *solar* (flares,
   coronal mass ejections, geomagnetic storm level, solar wind) and *planetary*
   (Jovian storm systems, Martian dust storms).
3. **Earth storms and disasters.** Active hurricanes/cyclones, wildfires,
   floods, earthquakes, volcanic activity, severe weather.
4. **Trends.** The layer that turns the other three from a novelty into the
   thesis: what's rising, what's falling, how this week compares to this week
   last decade.

Feed 3 already half-exists as Fire Watch. Feed 4 is the one that carries the
mission, and the one most likely to need our own storage rather than a
passthrough of someone else's API.

## What already exists here (verified 2026-08-03)

- `src/lib/fireData.ts` — client-side poll of **NASA EONET v3** (CORS-open, no
  API key), on a 5-minute interval with `AbortController`. Falls back to
  `public/data/fires.snapshot.json`, then to a labeled empty state.
- `scripts/fetch-fires.mjs` — build-time fetch of NASA FIRMS CSV, needs
  `FIRMS_MAP_KEY`; writes an empty snapshot rather than failing the build when
  the key is absent.
- `src/components/landing/FireTrackerMap.tsx` — d3-geo Albers canvas map,
  rendered by `FireWatchSection.tsx`. The closest existing analog to a
  live-feed widget.
- The three-tier degradation (live API → build-time snapshot → labeled empty)
  is already documented in `docs/decisions-log.md`. **That pattern is the
  house rule for any new feed** unless a spec argues otherwise.
- **The app is no longer a static export.** `next.config.mjs` runs Vercel
  on-demand rendering; ISR is in use on `/taxon/[...slug]` (`revalidate =
  86400`). There are currently zero `src/app/api/*` routes, but server routes
  are available if a feed needs a key hidden or a CORS-blocked upstream
  proxied. Any older comment claiming "static-export friendly, no server
  routes" is stale doctrine.

## Candidate sources — unverified, check at spec time

None of these have been fetched or CORS-tested for this repo yet. Treat every
row as a lead, not a decision.

| Feed | Candidate source | Key? | Notes |
|---|---|---|---|
| Planetary distances | NASA JPL Horizons API | no | Ephemeris-grade. Likely needs a server route (CORS + response parsing). Alternative: compute client-side from orbital elements, no network at all. |
| Solar storms | NASA DONKI (flares, CMEs, geomagnetic) | yes (`api.nasa.gov`) | Key means a server route or build-time fetch. |
| Solar storms | NOAA SWPC | no | Solar wind, Kp index, aurora forecast. Generally CORS-open. |
| Planetary storms | *none known* | — | No live public API for Jovian/Martian storm state. Probably curated content updated on a slow cadence, not a feed. Say so honestly in the UI. |
| Earth disasters | NASA EONET | no | **Already wired.** Covers wildfires, severe storms, volcanoes, floods. Extending its use is the cheapest first move. |
| Earthquakes | USGS earthquake feeds | no | GeoJSON, CORS-open. |
| Cyclones | NOAA / National Hurricane Center | no | Active-storm products. |
| Trends | our own store | — | Requires persistence: snapshot feeds over time and chart the series. Nothing in the repo does this today. |

## Open questions for the spec

- **Where does this live?** A dedicated route (a "live" or "watch" dashboard),
  a band on the landing page next to Fire Watch, or panels folded into the
  existing `/dashboard`? Different answers imply very different builds.
- **Client poll or server route?** Fire Watch polls from the browser. That
  stops working the moment a feed needs a key or blocks CORS. Decide once,
  per feed, and record it.
- **Where do trends persist?** Trends need history, and history needs storage.
  The species data pattern (build-time SQLite artifact) doesn't fit
  continuously-arriving data. This is the real architectural question and
  should be answered before any trend UI is designed.
- **Honesty rule.** Every feed states its source and its last-updated time, and
  degrades to a labeled empty state rather than a plausible-looking zero. A
  climate platform that shows stale or invented numbers is worse than one that
  shows nothing.
- **Cost of motion.** Globes and canvas maps are already the heaviest thing on
  the site. A live-feeds surface should not become four more R3F canvases; the
  Fire Watch refactor away from an R3F globe is the precedent.

## Suggested first slice (when we get there)

Ship one feed end to end rather than four half-feeds: planetary distances
(self-contained, no upstream dependency if computed client-side, visually
striking) or an EONET expansion (zero new integration work, reuses the polling
and fallback code that already exists). Then generalize whatever that first
slice teaches us into a shared feed module before adding the rest.
