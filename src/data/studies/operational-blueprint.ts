import { type Study } from './types'

export const operationalBlueprint: Study = {
  slug: 'operational-blueprint',
  title: 'Operational Blueprint: Initial Initiatives',
  subtitle: 'Bio-Dome, Ocean Rebirth, and Zero-Waste Nexus — a generative roadmap.',
  tag: 'Strategy',
  date: '2025-08-01',
  authors: ['EcoSurge Strategy Office'],
  abstract:
    'EcoSurge deploys capital against a portfolio of three flagship initiatives — Bio-Dome regenerative agriculture, Ocean Rebirth blue-carbon restoration, and the Zero-Waste Nexus circular-materials network. This blueprint sets the phased-deployment logic, the levelized-cost and learning-curve model that governs when each initiative scales, and the cumulative carbon-drawdown trajectory the portfolio must hit by 2050. We treat cost decline as an engineered outcome of cumulative production, not a hope, and we gate every dollar behind demonstrated physics.',
  keywords: [
    'strategy',
    'levelized cost',
    'learning curve',
    'Wright’s law',
    'carbon drawdown',
    'regenerative agriculture',
    'blue carbon',
    'circular economy',
  ],
  featured: true,
  blocks: [
    {
      type: 'lead',
      text: 'EcoSurge does not fund experiments in search of a mission. It funds a mission and instruments the experiments. The initial portfolio is three initiatives chosen because each attacks a distinct planetary carbon reservoir — soil, ocean, and the linear-waste economy — and because each rides a cost curve steep enough to become self-financing within a decade.',
    },
    {
      type: 'heading',
      text: 'The Portfolio Thesis',
    },
    {
      type: 'paragraph',
      text: 'A single technology cannot decarbonize a planet, but a *portfolio* can hedge scientific and market risk while sharing a common operating discipline. Each initiative is a business with a physical drawdown mandate: it must remove or avoid carbon at a cost that falls predictably as it scales. We deliberately span three independent risk domains — terrestrial biology, marine biogeochemistry, and industrial material flows — so that a setback in one does not stall the whole.',
    },
    {
      type: 'table',
      caption: 'The three flagship initiatives at a glance.',
      columns: ['Initiative', 'Mechanism', '2035 Target', 'Status'],
      rows: [
        [
          'Bio-Dome',
          'Sealed regenerative-agriculture domes: engineered soil microbiomes and cover-crop rotations that lock carbon as recalcitrant soil organic matter.',
          '40 Mt CO₂e/yr sequestered across 1,200 domes',
          'Pilot',
        ],
        [
          'Ocean Rebirth',
          'Blue-carbon restoration — kelp forests, seagrass, and mangrove belts — coupled to alkalinity enhancement for durable marine carbon storage.',
          '90 Mt CO₂e/yr; 500,000 ha restored',
          'Prototype',
        ],
        [
          'Zero-Waste Nexus',
          'Circular-materials network: enzymatic depolymerization and biorefining that displaces virgin petrochemical feedstock and avoids landfill methane.',
          '120 Mt CO₂e/yr avoided; 30 regional nodes',
          'Research',
        ],
      ],
    },
    {
      type: 'heading',
      text: 'Cost Is an Engineered Quantity',
    },
    {
      type: 'paragraph',
      text: 'The decision to scale is not sentimental — it is triggered when the **levelized cost of carbon removal** crosses below the prevailing carbon price plus co-product revenue. Levelized cost spreads lifetime capital and operating expenditure over lifetime tonnes removed, discounted to present value, so that a dome, a kelp array, and a biorefinery can be compared on one axis.',
    },
    {
      type: 'equation',
      display: 'LCCR = ( Σₜ ( CAPEXₜ + OPEXₜ ) / (1+r)ᵗ ) / ( Σₜ Rₜ / (1+r)ᵗ )',
      note: 'Levelized cost of carbon removal: net present cost per net present tonne removed. Co-product revenue is netted into OPEX before levelization.',
      where: [
        'LCCR = levelized cost of carbon removal (USD per tonne CO₂e)',
        'CAPEXₜ, OPEXₜ = capital and operating outlays in year t',
        'Rₜ = net CO₂e removed in year t (tonnes)',
        'r = real discount rate (EcoSurge uses 6%)',
        't = year index over the asset lifetime',
      ],
    },
    {
      type: 'paragraph',
      text: 'What makes the portfolio bankable is that LCCR is not fixed. It falls along a *learning curve*: every doubling of cumulative deployment drives cost down by a fixed fraction. This is Wright’s law, observed empirically across solar PV, lithium cells, and wind for over half a century, and there is no physical reason regenerative infrastructure should be exempt.',
    },
    {
      type: 'equation',
      display: 'C(x) = C₀ · x⁻ᵇ ,  b = −log₂(1 − LR)',
      note: 'Wright’s law. With a 20% learning rate (LR = 0.20), b ≈ 0.322, so each doubling of cumulative units x cuts unit cost to 80% of its prior value.',
      where: [
        'C(x) = unit cost at cumulative production x',
        'C₀ = cost of the first unit',
        'x = cumulative units produced (domes, hectares, tonnes of throughput)',
        'b = learning exponent',
        'LR = learning rate (fractional cost reduction per doubling)',
      ],
    },
    {
      type: 'stats',
      items: [
        { value: '18–22%', label: 'Assumed learning rate across the portfolio' },
        { value: '~72%', label: 'Modeled LCCR decline after 6 doublings' },
        { value: '$41/t', label: 'Target blended LCCR at 2035 scale' },
        { value: '6%', label: 'Real discount rate' },
      ],
    },
    {
      type: 'heading',
      text: 'The Drawdown Trajectory',
    },
    {
      type: 'paragraph',
      text: 'Summed across the three initiatives and compounded by learning-driven scale-up, the portfolio traces a convex cumulative-drawdown curve to mid-century. Early years are dominated by slow, expensive pilots; the inflection arrives once Ocean Rebirth and the Zero-Waste Nexus clear their cost gates and deployment doublings accelerate.',
    },
    {
      type: 'figure',
      viz: 'carbon-drawdown',
      caption: 'Cumulative Gt CO₂e removed and avoided by the combined portfolio, 2025–2050. The convex shape is the signature of Wright’s-law-driven scale-up.',
    },
    {
      type: 'heading',
      text: 'Phase Gates: How Capital Advances',
    },
    {
      type: 'paragraph',
      text: 'No initiative jumps straight to scale. Each passes through four gates, and capital is released only when the prior gate’s evidence — physical, biological, and economic — is in hand. The gate discipline is what separates an EcoSurge initiative from a moonshot.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Research',
          text: 'Establish the mechanism in the lab and the literature. Quantify the theoretical carbon flux, identify rate-limiting steps, and bound LCCR with a first-principles model. Exit criterion: a defensible physical pathway and a costed hypothesis.',
        },
        {
          title: 'Prototype',
          text: 'Build the smallest system that exercises the full mechanism end to end. Measure real fluxes against the model and calibrate C₀. Exit criterion: measured removal within 2× of prediction and no unforeseen physics.',
        },
        {
          title: 'Pilot',
          text: 'Deploy a field-representative unit at commercial geometry. Validate durability, monitoring, and the first points on the learning curve. Exit criterion: measured learning rate ≥ 15% and permanence verified by independent MRV.',
        },
        {
          title: 'Scale',
          text: 'Replicate aggressively to force cumulative doublings and ride LCCR down the curve. Reinvest co-product and carbon revenue. Exit criterion: self-financing at target LCCR.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'The 2050 Mandate',
      text: 'If the portfolio holds its learning rates, the three initiatives together clear their cost gates before 2035 and compound into multi-gigatonne annual drawdown by mid-century. The blueprint is not a forecast of luck — it is a schedule of doublings, and every doubling is something we build.',
    },
  ],
}
