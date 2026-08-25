# 2026-08-03 — repo cloned to WSL, Malleable bucket created, live-feeds idea captured

Ryan's directive: clone ecosurge when we're able, create and attach a Malleable
bucket if one doesn't exist, and document the live-feeds idea (planet distances
from Earth, storms in our solar system both solar and planetary, Earth storms
and disasters, trends). Spec comes later, once the infrastructure exists.

## Cloned

`ryan-organically/ecosurge` (public) → `/home/ryan-organically/dev/ecosurge`,
338MB. `main` and `origin/dev` are at the same commit, `d814476` (2026-07-18),
zero divergence. Last commit authored `ryan-guest <ryan.organically@gmail.com>`
— the email is the one Vercel's git-author check wants, so deploys aren't at
risk from the name.

## Malleable bucket

No bucket existed, and `mal buckets current` resolved to null. Created
**EcoSurge** `3d1b9b32-767c-4279-800c-fb640b6d27a7`, **top-level, deliberately
not under Organically** — this is Ryan's own venture, not client work. Linked
to the repo (`mal buckets link`), so `mal` auto-resolves the bucket from inside
the directory and `mal tasks add` needs no `--bucket`.

Note: this box's `mal` has no `buckets repos` subcommand yet; `buckets current
--json` is the verification path.

## Live-feeds idea captured

Repo doc: `docs/live-feeds-idea.md`. Board: backlog ticket
`60164321-577c-4da3-8b51-c7e69e9dec98` with the same content attached as a
note. Marked explicitly as an idea, not a spec.

## What the pre-write survey changed (the useful part)

A subagent surveyed the repo before anything was written, and two assumptions
that would have poisoned the spec turned out to be wrong:

1. **Fire Watch is already a live feed, not a mockup.** `src/lib/fireData.ts`
   polls NASA EONET v3 (no key, CORS-open) on a 5-minute interval, falls back
   to a build-time FIRMS snapshot (`scripts/fetch-fires.mjs`, `FIRMS_MAP_KEY`,
   writes an empty snapshot rather than failing the build when the key is
   absent), then to a labeled empty state. That three-tier degradation is now
   recorded in CLAUDE.md as the house pattern for any new feed. EONET already
   covers wildfires, severe storms, volcanoes and floods, so feed family 3
   ("Earth storms and disasters") is an expansion of working code, not a new
   integration.
2. **The app is not a static export anymore.** `next.config.mjs` runs Vercel
   on-demand rendering; ISR is live on `/taxon/[...slug]` (`revalidate =
   86400`). Server routes are therefore available for any feed needing a hidden
   key or a CORS proxy — there are currently zero `src/app/api/*` routes. The
   comment in `fireData.ts` claiming "static-export friendly: no server routes"
   is stale doctrine, harmless but no longer a constraint.

## Stale docs corrected

`CLAUDE.md` claimed static export in three places (Two Surfaces, Tech Stack,
Build & Run) and would have handed the wrong constraint to the next session.
All three now describe Vercel on-demand rendering, with the 2.7GB-export /
1GB-GitHub-Pages history that caused the move. Added a **Live data feeds**
section recording the Fire Watch pattern and pointing at the idea doc.

## Open, deliberately not decided

- **Placement** of the live surface: dedicated route, landing-page band beside
  Fire Watch, or folded into `/dashboard`.
- **Client poll vs server route**, per feed.
- **Trends need persistence and nothing here stores time series.** The species
  pattern (build-time SQLite artifact from hand-authored TS) does not fit
  continuously arriving data. This is the real architectural question and it
  should be answered before any trend UI is designed.
- **No live public API is known for Jovian or Martian storm state.** That feed
  is probably curated slow-cadence content, and the UI should say so rather
  than implying a live wire.

Candidate sources (JPL Horizons, NASA DONKI, NOAA SWPC, USGS quakes, NOAA/NHC)
are recorded in the idea doc as **unverified leads** — none were fetched or
CORS-tested this session.
