# 2026-10-26 2100 homepage concept

**Directed:** look at the latest multipli-site work and Ryan's recent commits, then
produce a "2100-level", awards-grade spin on the EcoSurge homepage: scientific and
intuitive, inspiring but alarming.

**Read first:** Multipli hero-lab "Forty-Five" (today): one SDF fragment shader hero,
night ground, hairline rules with registration marks, mono labels, one paper section,
SplitText words,chars, Lenis. That system is the house style this concept extends.

**Shipped (uncommitted):** `concepts/2100/` (index.html, 2100.css, 2100.js, planet.js,
vendored gsap 3.15 + SplitText + lenis, Inter, Geist Mono, DX Grafik SemiBold).
Serve: `python3 -m http.server 4931 --bind 127.0.0.1 --directory concepts`, open `/2100/`.

- Hook: "2100 is one lifetime away." A child born this year turns 74 in 2100; global
  life expectancy is 73.3 (UN WPP 2024). Live countdown to 1 Jan 2100 UTC in the nav.
- Hero: one WebGL2 fragment shader. A model planet drawn as an instrument (terrain
  contours, graticule, ice as latitude hatching, fire points, atmosphere rim) inside a
  dial of 74 year ticks. Load runs the year 1850 to 2026 while it scans in; scroll runs
  2026 to 2100 under the chosen IPCC AR6 scenario (five-button dial, SSP1-1.9 to
  SSP5-8.5). Ink warms harder toward the poles (polar amplification), ice retreats
  north first, fires multiply, sea rise is exaggerated and labeled so.
- Sections: 01 lifetime ruler 1850 to 2100; 02 ledger of six measured figures;
  03 the fork (SSP1-1.9 vs SSP2-4.5 table, "locked in either way" row, AR6 heatwave
  dots 1x to 9.4x); 04 recovery is measurable (ozone, humpbacks, solar cost, 30x30);
  05 divisions with honest status (Archive and Watch live, Field building, Machines
  prototype, Genome research); 06 paper thesis; join form (posts nowhere); 16 sources.

**Decided:** every number cites a numbered source; scenario readouts show only AR6
endpoint values, never interpolated figures (the year is the only thing that scrolls).
Division names (Field, Machines, Genome) are labels for this concept, not settled.

**Checked:** headless smoke (swiftshader) at 1440x900 and 390x844: shader compiles,
no console errors or failed requests, zero horizontal overflow, scroll lands on 2100,
dial and form work. Layout measured at five viewports: no hero or ruler collisions.
Visual judgment is Ryan's.

**Open:** ticket 1c182317 (font license, figure re-verification, /archive link).
Not yet decided: whether this replaces `index.html` or lands as the Next.js `/` route.

Session: http://127.0.0.1:4173/log.html#s=d1f93811-d933-4a59-a24b-8225f28fbfca
