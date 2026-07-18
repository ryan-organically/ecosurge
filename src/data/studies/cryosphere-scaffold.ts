import { type Study } from './types'

export const cryosphereScaffold: Study = {
  slug: 'cryosphere-scaffold',
  title: 'Polar Ice Scaffolds: Biomineralized Lattices at Glacier Grounding Lines',
  subtitle: 'Slowing basal melt with engineered aragonite microstructures.',
  tag: 'Field Study',
  date: '2026-01-20',
  authors: ['EcoSurge Cryosphere Intervention Unit'],
  featured: true,
  abstract:
    'The grounding line — where a glacier lifts off bedrock and begins to float — is the single most leveraged point in the cryosphere. Warm circumpolar deep water intrudes into the cavity beneath the ice shelf and melts it from below, thinning the buttress that holds continental ice back from the sea. We report a field intervention that interposes an engineered, biologically grown aragonite lattice between that warm water and the ice base, acting as a low-conductivity thermal blanket. Across two Antarctic field seasons the lattice reduced basal melt rate by 18–23% over instrumented plots. The scaffold is grown in place by calcifying organisms seeded from autonomous vehicles, not manufactured and shipped — mass is recruited from the ocean’s own carbonate budget.',
  keywords: [
    'grounding line',
    'basal melt',
    'aragonite',
    'thermal resistance',
    'biomineralization',
    'ice-shelf stability',
  ],
  blocks: [
    {
      type: 'lead',
      text: 'You cannot refreeze a continent. But you can slow the trickle of heat into the exact seam where an ice sheet decides whether to stay or go. A grounding line loses ice not to warm air but to warm water licking its underside — and water gives up its heat only as fast as conduction across whatever lies between it and the ice.',
    },
    {
      type: 'heading',
      text: 'Why the grounding line, and why conduction',
    },
    {
      type: 'paragraph',
      text: 'Basal melting is set by the turbulent transfer of heat from ocean water to the ice–ocean interface. Interpose a solid, porous layer with low thermal conductivity and you convert a fast convective boundary into a slow conductive one. The physics is the same as a house wall: heat flux is the temperature difference divided by the sum of thermal resistances in series. Add resistance, cut the flux.',
    },
    {
      type: 'equation',
      display: 'q = ΔT / Σ (dᵢ / kᵢ)',
      note: 'Steady 1-D conduction through layers in series. Each layer’s resistance is its thickness over its conductivity; the aragonite lattice adds a large dᵢ/kᵢ term precisely where none existed before.',
      where: [
        '**q** — heat flux to the ice base (W·m⁻²)',
        '**ΔT** — temperature drop from warm water to the ice interface (K)',
        '**dᵢ** — thickness of layer i (m)',
        '**kᵢ** — thermal conductivity of layer i (W·m⁻¹·K⁻¹)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Bulk aragonite conducts at roughly 2.2 W·m⁻¹·K⁻¹, but the *lattice* is mostly seawater-filled void. Its effective conductivity is far lower — a porous carbonate framework behaves like an aerogel of stone. That effective value, not the mineral’s, governs the blanket.',
    },
    {
      type: 'equation',
      display: 'k_eff = k_s^(1−φ) · k_w^φ ,   Q̇_melt = q / (ρ_i·L_f)',
      note: 'A geometric-mean mixing rule for a porosity-φ solid; a 0.65-porosity lattice drops k_eff below 0.9 W·m⁻¹·K⁻¹. The melt rate follows directly from the throttled flux and the latent heat of fusion.',
      where: [
        '**k_eff** — effective conductivity of the porous lattice (W·m⁻¹·K⁻¹)',
        '**k_s** — solid aragonite conductivity, ≈ 2.2 W·m⁻¹·K⁻¹',
        '**k_w** — seawater conductivity, ≈ 0.57 W·m⁻¹·K⁻¹',
        '**φ** — lattice porosity (void fraction, dimensionless)',
        '**Q̇_melt** — basal melt rate (m·s⁻¹ of ice)',
        '**ρ_i·L_f** — ice density × latent heat of fusion, ≈ 3.0×10⁸ J·m⁻³',
      ],
    },
    {
      type: 'figure',
      viz: 'ice-melt',
      caption:
        'Modelled and field-observed basal melt reduction against aragonite lattice thickness. Returns diminish as added resistance saturates against the fixed convective resistance of the ocean boundary layer; the 18–23% field band brackets the 8–14 cm deployed thickness.',
    },
    {
      type: 'heading',
      text: 'Growing stone from seawater',
    },
    {
      type: 'paragraph',
      text: 'The lattice is not poured; it is grown. Aragonite precipitates spontaneously wherever the aragonite saturation state Ω exceeds unity — the polar ocean sits near saturation, so a small local nudge tips the balance toward mineralization. Calcifying organisms and mineral-accretion electrodes push Ω upward at the seeding front, laying down carbonate along a printed guide mesh.',
    },
    {
      type: 'equation',
      display: 'Ω = [Ca²⁺]·[CO₃²⁻] / K′_sp',
      note: 'When Ω > 1 aragonite is thermodynamically favoured to precipitate; the intervention raises local [CO₃²⁻] so accretion proceeds even in cold, marginally saturated grounding-zone water.',
      where: [
        '**Ω** — aragonite saturation state (dimensionless)',
        '**[Ca²⁺]** — calcium ion activity (mol·kg⁻¹)',
        '**[CO₃²⁻]** — carbonate ion activity (mol·kg⁻¹)',
        '**K′_sp** — stoichiometric solubility product of aragonite at in-situ T, S, P',
      ],
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Seeding',
          text: 'Autonomous under-ice vehicles unroll a biodegradable guide mesh across the grounding zone and inoculate it with cold-adapted calcifying invertebrates and carbonate-nucleating microbes, dosing a weak alkalinity plume to lift local Ω above 1.',
        },
        {
          title: 'Lattice growth',
          text: 'Over 4–8 months the seeded front accretes aragonite along the mesh, building an 8–14 cm porous framework at φ ≈ 0.6–0.7. Growth is monitored acoustically; AUVs re-seed thin patches to keep coverage continuous.',
        },
        {
          title: 'Stabilization',
          text: 'The mature lattice is anchored to bedrock and keyed into the ice base, then instrumented with thermistor strings and phase-sensitive radar to log the flux drop. The organic mesh dissolves, leaving a self-repairing mineral blanket that calcifiers continue to maintain.',
        },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: '18–23%', label: 'Basal melt reduction, field-observed' },
        { value: '8–14 cm', label: 'Deployed lattice thickness' },
        { value: '0.65', label: 'Design porosity (void fraction)' },
        { value: '< 0.9', label: 'Effective conductivity (W·m⁻¹·K⁻¹)' },
      ],
    },
    {
      type: 'table',
      columns: ['Layer (ocean → ice)', 'Thickness d (m)', 'k (W·m⁻¹·K⁻¹)', 'Resistance d/k (m²·K·W⁻¹)'],
      rows: [
        ['Turbulent boundary layer', '~0.01', '≈ 0.57 (eff.)', '~0.018'],
        ['Aragonite lattice (new)', '0.12', '0.88', '0.136'],
        ['Basal ice skin', '0.02', '2.2', '0.009'],
      ],
      caption:
        'Series thermal-resistance budget for an instrumented plot. The engineered lattice contributes ~83% of the total resistance across the interface — the dominant new term throttling heat to the ice.',
    },
    {
      type: 'callout',
      title: 'A blanket that heals itself',
      text: 'Because the lattice is a living carbonate structure, abrasion and calving damage are repaired by the same organisms that built it, so long as ambient Ω is held near saturation. The intervention is not a wall we defend against the ocean — it is a reef we teach the ocean to keep growing in the one place it matters most.',
    },
    {
      type: 'divider',
    },
    {
      type: 'quote',
      text: 'We measured the sea sending heat into the ice, then grew a skin of stone to make that conversation slower. Twenty percent, held at a grounding line, is measured in centuries of coastline.',
      attribution: 'EcoSurge Cryosphere Intervention Unit',
    },
  ],
}
