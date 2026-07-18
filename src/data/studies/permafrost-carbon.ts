import { type Study } from './types'

export const permafrostCarbon: Study = {
  slug: 'permafrost-carbon',
  title: 'Managing the Permafrost Carbon Feedback',
  subtitle: 'Turning a 1.6-trillion-tonne liability into a managed sink.',
  tag: 'Research',
  date: '2026-04-14',
  authors: ['EcoSurge Cryosphere Intervention Unit'],
  abstract:
    'Northern permafrost holds roughly 1,600 Gt of organic carbon — about twice the carbon currently in the atmosphere. As it thaws, microbial respiration converts that carbon to CO₂ and CH₄, a self-amplifying feedback governed by the Arrhenius temperature dependence of enzyme kinetics. This study frames the feedback quantitatively, then presents EcoSurge’s intervention thesis: suppress the temperature term to slow decomposition while engineering managed capture at the thaw front, driving the net flux from source to sink.',
  keywords: [
    'permafrost',
    'carbon feedback',
    'Arrhenius kinetics',
    'Q10',
    'microbial respiration',
    'cryosphere',
    'methane',
    'carbon sink',
  ],
  featured: true,
  blocks: [
    {
      type: 'lead',
      text: 'The Arctic keeps the planet’s largest terrestrial carbon store frozen not by chemistry but by cold. Remove the cold and the chemistry runs. The permafrost carbon feedback is the single most dangerous positive feedback in the climate system precisely because it is a temperature-controlled reaction with an enormous substrate reservoir waiting behind it.',
    },
    {
      type: 'heading',
      text: 'The Size of the Liability',
    },
    {
      type: 'paragraph',
      text: 'Permafrost soils across the northern circumpolar region sequester on the order of **1,600 Gt of organic carbon** in the top three metres and deeper yedoma deposits — roughly double the ~875 Gt carbon in today’s atmosphere. This carbon accumulated over tens of thousands of years because freezing arrested microbial decay. It represents a liability only if it thaws faster than we can manage it.',
    },
    {
      type: 'stats',
      items: [
        { value: '~1,600 Gt', label: 'Organic carbon stored in northern permafrost' },
        { value: '2×', label: 'Permafrost carbon relative to the atmosphere' },
        { value: '~1,460 Gt', label: 'Held below 0°C, thaw-vulnerable this century' },
        { value: '2.3–4×', label: 'Arctic warming rate vs the global mean' },
      ],
    },
    {
      type: 'heading',
      text: 'Why Thaw Accelerates: Arrhenius Kinetics',
    },
    {
      type: 'paragraph',
      text: 'Microbial respiration is enzyme-catalyzed, and enzyme reaction rates obey the Arrhenius law. As soil warms past 0°C, the rate constant for decomposition climbs exponentially, not linearly. That exponential is the engine of the feedback: warming releases carbon, which drives more warming, which releases more carbon.',
    },
    {
      type: 'equation',
      display: 'k = A · e^(−Ea / R·T)',
      note: 'Arrhenius equation for the temperature dependence of the microbial decomposition rate constant. Ea for soil organic-matter respiration is typically 50–70 kJ/mol.',
      where: [
        'k = rate constant for microbial respiration',
        'A = pre-exponential (frequency) factor',
        'Ea = activation energy of decomposition (J/mol)',
        'R = universal gas constant, 8.314 J/(mol·K)',
        'T = absolute temperature (K)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Field ecologists usually summarize this sensitivity with the dimensionless *Q10* — the factor by which respiration rises per 10 K of warming. For permafrost carbon, Q10 sits between roughly 2 and 2.5, meaning respiration doubles or more with each 10-degree step. The two descriptions are the same physics: Q10 is just the Arrhenius rate ratio evaluated over a 10 K interval.',
    },
    {
      type: 'equation',
      display: 'Q₁₀ = k(T+10) / k(T) = exp[ (Ea · 10) / (R · T · (T+10)) ]',
      note: 'The empirical Q10 factor derived directly from the Arrhenius law. With Ea ≈ 60 kJ/mol near 273 K, this yields Q10 ≈ 2.3, consistent with observation.',
      where: [
        'Q₁₀ = respiration multiplier per 10 K temperature rise',
        'k(T) = Arrhenius rate constant at temperature T',
        'Ea = activation energy (J/mol)',
        'R = gas constant, 8.314 J/(mol·K)',
        'T = reference absolute temperature (K)',
      ],
    },
    {
      type: 'heading',
      text: 'From Source to Managed Sink',
    },
    {
      type: 'paragraph',
      text: 'The net flux from a parcel of thawing permafrost is the balance of three terms: heterotrophic respiration releasing CO₂ and CH₄, autotrophic uptake as tundra and shrub vegetation re-greens on the warmer active layer, and — the EcoSurge addition — engineered capture at the thaw front. Left alone, the respiration term dominates and the parcel is a source. Intervene on both temperature and capture, and the same parcel crosses zero and becomes a sink.',
    },
    {
      type: 'equation',
      display: 'F_net = R_hetero(T) − U_veg − C_eng',
      note: 'Positive F_net is a net source to the atmosphere; negative is a managed sink. R_hetero carries the Arrhenius temperature dependence, so suppressing T shrinks the source term nonlinearly.',
      where: [
        'F_net = net CO₂e flux (positive = source, negative = sink)',
        'R_hetero(T) = heterotrophic (microbial) respiration, Arrhenius-controlled',
        'U_veg = autotrophic uptake by re-greening vegetation',
        'C_eng = engineered capture at the thaw front (EcoSurge intervention)',
      ],
    },
    {
      type: 'figure',
      viz: 'permafrost-carbon',
      caption: 'Managed permafrost carbon flux: the microbial source term, the combined vegetation-plus-engineered sink term, and the net flux crossing from source to sink once intervention is applied.',
    },
    {
      type: 'heading',
      text: 'The Intervention Protocol',
    },
    {
      type: 'paragraph',
      text: 'EcoSurge attacks both levers in the flux equation. We depress the Arrhenius temperature term to slow the reaction, and we install capture to collect what still evolves. The protocol is staged so that each site is instrumented before it is engineered and verified after.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Map and Instrument',
          text: 'Airborne LiDAR and ground-penetrating radar delineate ice-rich yedoma and thermokarst-prone terrain. Deploy a sensor mesh logging soil temperature profiles, active-layer depth, and eddy-covariance CO₂/CH₄ flux to establish the baseline F_net.',
        },
        {
          title: 'Suppress the Temperature Term',
          text: 'Restore insulating cover — engineered snow-fence albedo management, reflective ground treatments, and reintroduced grazing megafauna that compact snow and lower winter soil temperatures. Each fraction of a degree removed shrinks R_hetero exponentially via the Arrhenius law.',
        },
        {
          title: 'Capture at the Thaw Front',
          text: 'At active thermokarst edges, channel evolved gas through biofilters and mineralization beds: methanotroph-seeded soil caps oxidize CH₄ to CO₂, which is then fixed into carbonate through enhanced-weathering basalt amendment (C_eng).',
        },
        {
          title: 'Verify and Reprice',
          text: 'Continuous MRV confirms F_net has crossed below zero and quantifies permanence. Verified negative flux is issued as durable removal credits, funding the next site and driving LCCR down the deployment learning curve.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'The Feedback Runs Both Ways',
      text: 'A positive feedback is only a threat while its sign is fixed. The same Arrhenius exponential that makes thaw self-amplifying makes cooling self-reinforcing: every degree we hold back suppresses respiration nonlinearly, buying margin for the next degree. Managed correctly, the Arctic’s greatest liability becomes the planet’s largest engineered carbon sink.',
    },
  ],
}
