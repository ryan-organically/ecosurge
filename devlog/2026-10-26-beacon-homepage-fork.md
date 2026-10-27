# 2026-10-26 Beacon homepage (fork of the 2100 concept)

**Directed:** "fine. not convincing. let's fork." EcoSurge as a beacon for green tech
innovation that people contribute to, a section on a Fall 2026 Community Release and
community engagement, Unsplash lifestyle and conservation photography, intense
dolphin and rare-species photos.

**Shipped (uncommitted):** `concepts/beacon/` (index.html, beacon.css, beacon.js,
32 photos in `photos/` with `credits.json`, vendor and fonts copied from `2100/`).
`concepts/2100/` is untouched. Serve: `python3 -m http.server 4931 --bind 127.0.0.1
--directory concepts`, open `/beacon/`.

- Hero: three dolphins in deep water, dimmed, with a beacon beam (a soft wedge of
  the full-brightness photo) sweeping from a light above the surface. Idle it swings
  on a 15 s period; on desktop it follows the pointer. Transform only: the masked
  wrapper rotates and its photo counter-rotates so the scene stays put.
  Stats row: 3,218 species, 14 biomes, 50 structures, code public (counted from the
  repo; the GitHub repo is public).
- 01 The signal: pinned horizontal gallery of ten threatened species with IUCN status
  chips (orangutan, western gorilla, axolotl CR; pangolins all eight threatened;
  tiger, whale shark, red panda, sea otter EN; snow leopard, polar bear VU).
- Interlude: full-bleed leaping dolphin, "The Maui dolphin is down to about 54"
  (NZ DOC 2021), captioned as a dolphin in open ocean, not a Maui dolphin.
- 02 Fall 2026 Community Release (the paper section): season bar from equinox to
  solstice with today marked and weeks left; what ships in Release 01 (Archive,
  Fire Watch and the feed pattern, structure zoo, open hardware), four ways in
  (add a species, wire a feed, print a part, host a field day), engagement formats
  (field days, species sprints, open bench, release call), a lifestyle collage.
- Join the release: role chips and email over a deep-water dolphin photo (posts nowhere).
- 03 Divisions with a sticky photo that swaps as each row reaches mid-screen.
- 04 Proof: humpback recovery 450 to 25,000 full-bleed, plus ozone, solar cost, 30x30.
- 05 Contribute, then sources and all 30 photographers credited.

**How the photos were sourced:** Unsplash's API needs a key and its site blocks
headless browsers, so candidates came from the public search pages (free-license
only, Unsplash+ excluded), curated from contact sheets (captive and AI-looking shots
dropped), downloaded as WebP under the Unsplash License.

**Checked:** headless smoke at 1440x900, 1280x720, 390x844: no console errors,
failed requests or broken images, zero overflow, gallery pins and translates on
desktop and falls back to swipe on mobile, divisions swap, form works. Visual
judgment is Ryan's.

**Open:** ticket 4d2836f7 (set the release date and engagement calendar), ticket
1c8064dc (pre-ship gates: facts re-verify, form backend, Unsplash approach), ticket
1c182317 (DX Grafik license).

Session: http://127.0.0.1:4173/log.html#s=d1f93811-d933-4a59-a24b-8225f28fbfca

## Descender clipping fix (same session)

Measured ink vs. every clipping box (canvas glyph bounds against each text run's
nearest `overflow: hidden|clip` ancestor) on both concepts, after all reveals ran.
Only SplitText's word masks clipped, and they stay in place after the reveal: display
line-heights of 0.85 to 0.95 plus -0.035 to -0.06em tracking let DX Grafik's ink
overshoot the line box. Beacon at 1440 lost up to 8.6px of descenders ("Keep the
light on."), 8px of cap, ascender and dot tops, and 6.2px off the last letter of words;
51 to 79 clipped glyph runs per page and width.

Fix in `beacon.css` and `2100.css`: `.split-word-mask` padding 0.14em 0.1em 0.18em with
matching negative margins. Re-measured: 0 clipped runs at 1440 and 390 on both pages,
0px shift across 231 / 247 heading and char boxes, and with the char tweens pinned at
time zero no letter shows inside its mask before it rises. Multipli hero-lab
01-forty-five measured 0 clipped runs with the same probe, so nothing to carry there.

## Hero spotlight removed (same session)

Ryan asked to remove the spotlight. The beam markup, its CSS (mask wedge, lit photo, glow) and the beam script (geometry, pointer follow, idle sweep) are gone. The hero photo was dimmed to 0.42 only so the beam would read; it now sits at brightness 0.8, saturation 0.95, with the existing bottom shade carrying text contrast. Smoke at 1440, 1280, 390: no errors, no overflow, gallery pin intact.
