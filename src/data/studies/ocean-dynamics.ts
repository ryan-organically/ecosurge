import { type Study } from './types'

export const oceanDynamics: Study = {
  slug: 'ocean-dynamics',
  title: 'On the Plausibility of Harnessing Ocean Dynamics',
  subtitle: 'Bio-Integrated Wave Energy Converters and self-sustaining Rebirth Pods.',
  tag: 'Research',
  date: '2025-07-17',
  authors: ['EcoSurge Ocean Systems Group'],
  featured: true,
  abstract:
    'The open ocean is the largest untapped mechanical reservoir on Earth: a continuous, gravity-fed flywheel storing wind energy as swell. We present the design basis for the EcoSurge Bio-WEC — a point-absorber wave energy converter whose hull is a living artificial reef and whose mooring line hosts self-powered Rebirth Pods. We derive the deep-water wave power flux, size the absorber to resonate with the dominant sea state, and show that a modest array can deliver firm power to roughly 12,000 homes while accreting habitat rather than displacing it. Energy extraction and ecological gain are engineered as a single system, not a trade.',
  keywords: [
    'wave energy',
    'point absorber',
    'capture-width ratio',
    'artificial reef',
    'piezoelectric nanogenerators',
    'marine renewables',
  ],
  blocks: [
    {
      type: 'lead',
      text: 'Wind blows across ten thousand kilometres of fetch and deposits its energy into the ocean surface as swell. That swell then propagates for days with almost no loss. A wave converter is not a generator so much as a *withdrawal* from an account the atmosphere has already funded — and if the withdrawal itself grows a reef, the ledger runs in both directions.',
    },
    {
      type: 'heading',
      text: 'The resource: power carried by a deep-water wave',
    },
    {
      type: 'paragraph',
      text: 'A progressive gravity wave in deep water transports energy at the group velocity, which for the dominant spectral period T equals gT/4π. Integrating the kinetic and potential energy density of a linear (Airy) wave and multiplying by that group velocity yields the time-averaged power crossing a vertical plane one metre wide, oriented along the crest. The result is the workhorse of the field.',
    },
    {
      type: 'equation',
      display: 'P = (ρ·g²/64π)·H²·T   ≈  0.49·H²·T   [kW·m⁻¹]',
      note: 'Power per metre of wave crest in deep water. A 2 m, 8 s sea delivers ≈ 15.7 kW for every metre of frontage — a swell 100 m wide carries more than a megawatt.',
      where: [
        '**P** — wave power flux per unit crest length (W·m⁻¹)',
        '**ρ** — seawater density, ≈ 1025 kg·m⁻³',
        '**g** — gravitational acceleration, 9.81 m·s⁻²',
        '**H** — significant wave height (m)',
        '**T** — energy period of the sea state (s)',
      ],
    },
    {
      type: 'paragraph',
      text: 'No device captures all of that. A point absorber — a buoy small compared with the wavelength — intercepts a crest far wider than its own diameter because it radiates a counter-wave that interferes with the incoming field. We quantify performance not as an efficiency but as a **capture-width ratio**: the equivalent width of ocean the device effectively harvests, divided by its physical width.',
    },
    {
      type: 'equation',
      display: 'CWR = P_abs / (P · b),   P_abs = ½·B_PTO·ω²·|ẑ|²',
      note: 'The absorbed power peaks when the buoy heaves in resonance with the sea and the power take-off damping is matched to the radiation damping — classic impedance matching.',
      where: [
        '**CWR** — capture-width ratio (dimensionless; can exceed 1)',
        '**P_abs** — mechanically absorbed power (W)',
        '**b** — characteristic width of the absorber (m)',
        '**B_PTO** — power take-off damping coefficient (N·s·m⁻¹)',
        '**ω** — wave angular frequency, 2π/T (rad·s⁻¹)',
        '**|ẑ|** — heave velocity amplitude of the float (m·s⁻¹)',
      ],
    },
    {
      type: 'figure',
      viz: 'wave-energy',
      caption:
        'Capture-width ratio of a heaving Bio-WEC point absorber against wave period. The peak marks resonance, where the float’s natural heave period matches the incoming swell; the hydraulic PTO is tuned to broaden this band across the local wave climate.',
    },
    {
      type: 'heading',
      text: 'Tuning the absorber to the sea',
    },
    {
      type: 'paragraph',
      text: 'Resonance is the whole game. The float behaves as a damped mass-spring oscillator whose stiffness is hydrostatic buoyancy and whose mass includes the entrained water dragged along with the hull (the added mass). Set the natural period equal to the site’s energy period and the heave amplitude — and therefore absorbed power — is maximised.',
    },
    {
      type: 'equation',
      display: 'T₀ = 2π·√( (m + m_a) / (ρ·g·A_w) )',
      note: 'For a 6 m-waterplane-diameter float on a Bio-WEC, matching a 9 s North-Atlantic swell drives the ballast and added-mass targets that set the whole mechanical design.',
      where: [
        '**T₀** — natural heave period of the float (s)',
        '**m** — structural + ballast mass (kg)',
        '**m_a** — hydrodynamic added mass of entrained water (kg)',
        '**A_w** — waterplane area of the float (m²)',
        '**ρ, g** — as defined above',
      ],
    },
    {
      type: 'paragraph',
      text: 'A hydraulic power take-off converts the slow, high-force heave into useful electricity: the relative motion between float and reaction plate drives a piston, pressurising fluid through an accumulator that smooths the pulsing input, then a hydraulic motor spins a generator at near-constant speed. The accumulator is what turns a chaotic sea into grid-quality power.',
    },
    {
      type: 'heading',
      text: 'The living hull: reef as reaction structure',
    },
    {
      type: 'paragraph',
      text: 'Conventional WECs treat biofouling as a maintenance liability. We invert the premise. The Bio-WEC’s submerged reaction plate and mooring collar are cast from a calcareous, pH-buffered aggregate seeded with coral larvae and calcifying invertebrates. Accreted carbonate adds structural mass and hydrodynamic damping exactly where the physics wants it, while the array becomes a de-facto marine protected area — trawling is impossible inside a mooring field.',
    },
    {
      type: 'callout',
      title: 'Rebirth Pods',
      text: 'Along the mooring line, Rebirth Pods carry piezoelectric nanogenerator lattices that flex with vortex-induced strumming of the tether. Milliwatt-scale harvest is trivial beside the megawatt hull, but it is *local* and *perpetual* — enough to run the pod’s environmental sensors, larval-release timers, and acoustic beacons with no battery to replace and no cable to run. Each pod is an autonomous seed of habitat.',
    },
    {
      type: 'stats',
      items: [
        { value: '15.7 kW·m⁻¹', label: 'Resource in a 2 m / 8 s sea state' },
        { value: '≈ 1.3', label: 'Capture-width ratio at resonance' },
        { value: '40 units', label: 'Absorbers per commercial array' },
        { value: '~12,000', label: 'Homes powered, firm annual output' },
      ],
    },
    {
      type: 'table',
      columns: ['Parameter', 'Single Bio-WEC', '40-unit array'],
      rows: [
        ['Rated capacity', '750 kW', '30 MW'],
        ['Capacity factor', '38%', '38%'],
        ['Mean delivered power', '285 kW', '11.4 MW'],
        ['Annual energy', '2.5 GWh', '100 GWh'],
        ['Reef area accreted', '~0.02 ha', '~0.8 ha'],
      ],
      caption:
        'Nameplate and delivered figures for a North-Atlantic shelf site (energy period 8–10 s, H ≈ 2–2.5 m). Firm output assumes accumulator smoothing and array spatial averaging across the swell field.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Characterise the sea',
          text: 'Deploy a spectral wave buoy for a full year to resolve the joint distribution of H and T; the design sea state is chosen to maximise annual energy, not peak power.',
        },
        {
          title: 'Tune the resonator',
          text: 'Set float geometry, ballast, and added mass so T₀ lands in the most energetic band, then widen the response with adaptive PTO damping.',
        },
        {
          title: 'Seed the hull',
          text: 'Cast reaction structures from buffered carbonate aggregate and inoculate with local calcifiers before immersion so accretion begins on day one.',
        },
        {
          title: 'Array and smooth',
          text: 'Space absorbers beyond their hydrodynamic interaction radius, aggregate through a shared DC bus, and firm the output with hydraulic accumulation and short-duration storage.',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'quote',
      text: 'The ocean has been running a power plant for four billion years and asking nothing in return. Our only task is to build a turbine polite enough to be invited in — one that leaves more life behind it than it found.',
      attribution: 'EcoSurge Ocean Systems Group',
    },
  ],
}
