import { type Study } from './types'

export const fireWatch: Study = {
  slug: 'fire-watch',
  title: 'Fire Watch: Reading the Planet’s Burning from Orbit',
  subtitle:
    'How thermal-anomaly satellites turn a smouldering forest into a pixel, how that pixel becomes fire radiative power, and how a live planetary fire map is assembled from EONET and FIRMS into a globe you can watch in real time.',
  tag: 'Field Study',
  date: '2026-07-18',
  authors: ['EcoSurge Labs — Earth Observation'],
  featured: false,
  abstract:
    'Every clear-sky minute, polar-orbiting radiometers sweep the Earth and flag pixels running hotter than their surroundings. From the ratio of mid- and thermal-infrared radiance, MODIS and VIIRS detect active fire and estimate its radiative power — a direct proxy for how much biomass is combusting and how much smoke and carbon it is venting. We walk the full chain: the physics of a thermal anomaly (brightness temperature and the fourth-power radiance law), fire radiative power and its link to smoke aerosol, the transport of that smoke across hemispheres, and the data pipeline that carries a detection from a satellite downlink through NASA FIRMS and EONET to the auto-rotating globe on the EcoSurge landing page. We close on why a live, planetary fire map is not a novelty but an instrument of planetary accountability.',
  keywords: [
    'wildfire',
    'remote sensing',
    'MODIS',
    'VIIRS',
    'fire radiative power',
    'smoke aerosol',
    'EONET',
    'FIRMS',
    'earth observation',
  ],
  blocks: [
    {
      type: 'lead',
      text: 'A forest fire is a local catastrophe with a planetary signature. From the ground it is heat and smoke; from 830 kilometres up it is a handful of pixels glowing in the mid-infrared, bright enough to pick out against the cool background of the land. The whole discipline of satellite fire detection rests on one fact: *fire is hot, and hot things radiate*. Read that radiation correctly and you can count the world’s fires from orbit, several times a day, for free.',
    },
    {
      type: 'heading',
      text: 'The pixel that catches fire',
    },
    {
      type: 'paragraph',
      text: 'The workhorses are polar-orbiting radiometers: **MODIS** on Aqua and Terra, and the newer, sharper **VIIRS** on Suomi-NPP and NOAA-20/21. Each sweeps a wide swath as the satellite crosses the poles, and each carries channels tuned to two infrared windows — a mid-infrared band near 4 µm and a thermal-infrared band near 11 µm. A pixel covering an active flame front runs anomalously hot in the 4 µm band, because Planck’s law makes short-wavelength radiance extraordinarily sensitive to temperature. A sub-pixel fire only a few tens of metres across can double the 4 µm signal of a 375 m VIIRS pixel while barely moving the 11 µm reading. That contrast — hot in the mid-IR, ordinary in the thermal-IR — is the fingerprint of combustion.',
    },
    {
      type: 'stats',
      items: [
        { value: '4 µm', label: 'mid-IR band where active fire lights up' },
        { value: '375 m', label: 'VIIRS I-band active-fire pixel resolution' },
        { value: '≥2×/day', label: 'revisits per satellite at mid-latitudes' },
        { value: '~1000 K', label: 'flaming-front temperature vs ~300 K land' },
      ],
    },
    {
      type: 'heading',
      text: 'Brightness temperature and the fourth-power law',
    },
    {
      type: 'paragraph',
      text: 'A sensor does not measure temperature; it measures radiance. To make it legible, radiance in a band is inverted through the Planck function into a **brightness temperature** — the temperature a perfect blackbody would need to emit that much radiance. Detection algorithms then threshold on the 4 µm brightness temperature and, crucially, on its *difference* from the 11 µm channel, which suppresses false alarms from warm bare soil, sun-glint, and desert.',
    },
    {
      type: 'paragraph',
      text: 'The reason a small fire is detectable at all is the steepness of blackbody emission with temperature. Total radiant exitance follows the Stefan–Boltzmann fourth-power law, so a patch at flaming temperature outshines the cool land around it out of all proportion to the area it covers. The measurable excess a fire injects into a pixel is the difference between what the fire fraction radiates and what that same fraction of background would have radiated.',
    },
    {
      type: 'equation',
      display: 'FRP  ∝  σ (T_fire⁴ − T_bg⁴)',
      where: [
        '**FRP** — fire radiative power, the rate of radiant energy release (megawatts)',
        '**σ** — the Stefan–Boltzmann constant, 5.67 × 10⁻⁸ W·m⁻²·K⁻⁴',
        '**T_fire** — effective temperature of the burning sub-pixel component',
        '**T_bg** — brightness temperature of the surrounding non-burning background',
      ],
      note: 'The fourth power is why detection works: at T_fire ≈ 1000 K against T_bg ≈ 300 K, the fire term dominates by two orders of magnitude, so even a sub-pixel flame front is unmistakable. Operational retrievals (the MODIS/VIIRS FRP products) use the mid-IR radiance form of this relation rather than solving for T_fire directly.',
    },
    {
      type: 'heading',
      text: 'From radiative power to smoke',
    },
    {
      type: 'paragraph',
      text: 'Fire radiative power is not just a brightness — it is a rate of biomass consumption. The radiant energy a fire emits is a near-linear proxy for the mass of vegetation it is burning per second, and therefore for the mass of smoke aerosol and CO₂ it is lofting. This is the hinge that turns a fire map into an emissions map: integrate FRP over the life of a fire to get fire radiative energy, multiply by an emission coefficient calibrated per biome, and you have an estimate of particulate and carbon output without ever visiting the ground.',
    },
    {
      type: 'table',
      columns: ['Quantity', 'Symbol', 'Typical scale', 'What it tells us'],
      rows: [
        ['Fire radiative power', 'FRP', '1–1000+ MW / pixel', 'Instantaneous combustion intensity'],
        ['Fire radiative energy', 'FRE = ∫FRP dt', 'GJ–TJ / event', 'Total biomass burned'],
        ['Aerosol optical depth', 'AOD', '0.1 (hazy) – 5 (dense)', 'Column smoke loading overhead'],
        ['Emission coefficient', 'ρ', '~0.3–0.7 kg / MJ', 'Biomass burned per unit radiant energy'],
      ],
      caption: 'The retrieval chain: a radiance anomaly becomes FRP, FRP integrates to energy, and energy scales to burned biomass and the smoke aerosol it releases.',
    },
    {
      type: 'heading',
      text: 'Smoke does not respect borders',
    },
    {
      type: 'paragraph',
      text: 'Once aloft, smoke becomes a problem of atmospheric transport. Pyroconvection can inject aerosol into the free troposphere and, in extreme fires, the lower stratosphere, where winds carry it thousands of kilometres. Canadian boreal smoke reddens skies over Europe; Siberian fires haze the Arctic and darken snow, lowering its albedo and accelerating melt. A fire map that stops at the flame front misses most of the story — the footprint of a Northern-Hemisphere fire season is continental, and its climate feedbacks are global. This is precisely why the EcoSurge globe is oriented on the Northern Hemisphere: that is where the boreal and temperate fuel loads, and the people downwind of them, are concentrated.',
    },
    {
      type: 'callout',
      title: 'Why the Northern Hemisphere',
      text: 'Boreal forests ring the top of the planet — Canada, Alaska, Scandinavia, Siberia — and hold an outsized share of the world’s terrestrial carbon in trees and the peat beneath them. Their fire season is lengthening as the high latitudes warm faster than the global mean. Watching that band burn, in real time, is watching one of Earth’s largest carbon stores begin to leak.',
    },
    {
      type: 'heading',
      text: 'The pipeline: satellite to globe',
    },
    {
      type: 'paragraph',
      text: 'The path from a burning pixel to the rotating globe on our homepage is a relay of open systems. Nothing here is proprietary; the entire chain runs on public NASA feeds and a static client.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Detect',
          text: 'MODIS and VIIRS flag thermal anomalies on each overpass, retrieving per-pixel fire radiative power and brightness temperature from the 4 µm / 11 µm channel pair.',
        },
        {
          title: 'Aggregate',
          text: 'NASA FIRMS ingests the active-fire products and republishes them within hours as downloadable CSV/GeoJSON — latitude, longitude, FRP, brightness, acquisition time, confidence.',
        },
        {
          title: 'Curate',
          text: 'EONET (the Earth Observatory Natural Event Tracker) groups related detections into named, human-legible wildfire *events* with geometry and status — a feed the browser can read directly, CORS-enabled and key-free.',
        },
        {
          title: 'Fetch',
          text: 'The client polls EONET every five minutes, normalizes each event’s latest point geometry to {id, title, lat, lon, date, intensity}, and stamps a “last updated” time. On failure it falls back to a build-time FIRMS snapshot, then to an empty labelled state — it never crashes.',
        },
        {
          title: 'Render',
          text: 'Each event becomes a glowing marker on a Three.js globe, sized and coloured by intensity, wrapped in a drifting smoke haze, with a side feed listing location, date, and title.',
        },
      ],
    },
    {
      type: 'heading',
      text: 'Reading the map honestly',
    },
    {
      type: 'paragraph',
      text: 'A live fire map is a powerful instrument, and like any instrument it has a bias structure worth naming. Polar orbiters see a place only at fixed overpass times, so a fire that flares and dies between passes can be missed. Thick cloud and dense smoke can hide the flame front from the infrared sensor. Small, cool, or smouldering fires fall below the detection threshold. The map is therefore a *lower bound* on what is burning, not a census — and honest visualization means never dressing an incomplete detection set as a complete one.',
    },
    {
      type: 'callout',
      title: 'Graceful by design',
      text: 'The globe degrades in tiers: live EONET first, a cached FIRMS snapshot if the live feed is unreachable, and finally an explicit empty-but-labelled state. A visitor is always told which tier they are seeing and when it was last updated. A monitoring tool that silently shows stale or absent data is worse than one that shows nothing — so we made silence impossible.',
    },
    {
      type: 'heading',
      text: 'Why a planetary fire map matters',
    },
    {
      type: 'paragraph',
      text: 'The same fourth-power physics that lets a satellite spot a sub-pixel flame lets us hold a hemisphere accountable. A public, real-time fire map turns an abstraction — “a bad fire year” — into something a person can watch unfold, tie to a place, and reason about: which forests, how intense, drifting toward whom. For EcoSurge that visibility is the point. You cannot restore, defend, or negotiate over a biosphere you cannot see burning. So we put the burning on the globe, live, for anyone.',
    },
    {
      type: 'quote',
      text: 'The planet has always kept its own fire record — in ash, in tree rings, in the carbon it exhales. Orbit lets us read that record as it is written, minute by minute, and refuse to look away.',
      attribution: 'EcoSurge Labs — Earth Observation',
    },
  ],
}
