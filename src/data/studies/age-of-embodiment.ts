import { type Study } from './types'

export const ageOfEmbodiment: Study = {
  slug: 'age-of-embodiment',
  title: 'The Age of Embodiment',
  subtitle:
    'On the global climate crisis, the failure of fragmented action, and the rise of a new model for planetary stewardship.',
  tag: 'Whitepaper',
  date: '2025-07-01',
  authors: ['EcoSurge Founding Office'],
  featured: true,
  abstract:
    'The climate crisis is not a knowledge problem; it is a coordination problem. For three decades the world has known what must be done and has failed to do it at scale, because responsibility was diffused across ten thousand disconnected actors. This whitepaper argues for embodiment: the consolidation of capital, biology, robotics, and data into a single operating engine that treats planetary restoration as an engineering program with owners, deadlines, and physics — not a portfolio of promises.',
  keywords: ['climate', 'strategy', 'biotechnology', 'planetary stewardship', 'systems'],
  blocks: [
    {
      type: 'lead',
      text: 'The planet does not need another promise. It needs an engineering response — owned, funded, measured, and deployed.',
    },
    {
      type: 'heading',
      text: 'I. The failure was never technical',
    },
    {
      type: 'paragraph',
      text: 'We already possess the science to arrest and reverse ecological collapse. Photosynthesis, calcification, mineral weathering, and microbial metabolism are, between them, capable of moving carbon at planetary scale — they have done so for billions of years. What we have lacked is not mechanism but *coordination*. Climate action fractured into a diffuse cloud of pledges, pilots, and papers, each too small to bend a curve, none accountable for the whole.',
    },
    {
      type: 'stats',
      items: [
        { value: '1.5°C', label: 'warming already locked toward' },
        { value: '68%', label: 'monitored wildlife decline since 1970' },
        { value: '1.6T', label: 'tonnes carbon in thawing permafrost' },
        { value: '$2.7T', label: 'annual cost of environmental degradation' },
      ],
    },
    {
      type: 'paragraph',
      text: 'These are not projections. They are the present tense. And they compound: every fragmented effort that under-delivers raises the height of the wall the next effort must climb.',
    },
    {
      type: 'heading',
      text: 'II. Coordination as the binding constraint',
    },
    {
      type: 'paragraph',
      text: 'Consider the abatement problem as an optimization. A civilization has a budget of capital, attention, and time, and a menu of interventions each with a marginal cost of removal. The globally optimal program deploys interventions in ascending order of marginal cost until the carbon target is met. Fragmentation destroys exactly this ordering: ten thousand actors each solve a local problem, and the aggregate ignores the marginal-cost curve entirely.',
    },
    {
      type: 'equation',
      display: 'min Σᵢ cᵢ(xᵢ)   subject to   Σᵢ xᵢ ≥ X*,   xᵢ ≥ 0',
      where: [
        '**xᵢ** — carbon removed by intervention *i* (Gt CO₂e·yr⁻¹)',
        '**cᵢ(xᵢ)** — total cost of operating intervention *i* at level *xᵢ*',
        '**X\\*** — the binding planetary removal target',
      ],
      note: 'Because each cost curve cᵢ is convex, the optimum equalizes marginal cost across all active interventions — a condition no uncoordinated market of pledges can satisfy. A single engine can.',
    },
    {
      type: 'callout',
      title: 'The thesis',
      text: 'Biology is the most advanced technology on Earth. The task is not to replace it but to *conduct* it — to organize living systems, robotics, and capital into one coherent instrument.',
    },
    {
      type: 'heading',
      text: 'III. Embodiment',
    },
    {
      type: 'paragraph',
      text: 'By *embodiment* we mean the opposite of abstraction. A pledge is disembodied — it names an intention with no body to enact it. EcoSurge is the body: physical hardware in the ocean and on the ice, living organisms doing structural and metabolic work, autonomous fleets extending human reach, and a data spine that measures every tonne moved. Four organs, one organism.',
    },
    {
      type: 'list',
      items: [
        '**Ocean systems** — Bio-Integrated Wave Energy Converters and Rebirth Pods that generate power while building reef.',
        '**Cryosphere intervention** — biomineralized lattices that slow basal melt at glacier grounding lines.',
        '**Terrestrial restoration** — Bio-Domes and pollinator fleets that rebuild productive, biodiverse land.',
        '**Biodiversity intelligence** — the Species Archive, a living record that turns 8.7 million species into a navigable, measurable dataset.',
      ],
    },
    {
      type: 'heading',
      text: 'IV. What accountability requires',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Own the outcome',
          text: 'Every initiative has a single accountable owner for a measurable planetary quantity — tonnes of carbon, hectares restored, melt-rate reduced — not merely activity.',
        },
        {
          title: 'Instrument everything',
          text: 'No intervention ships without a measurement plan. If a tonne cannot be counted, it does not count.',
        },
        {
          title: 'Compound the learning',
          text: 'Deploy along a learning curve: each generation of hardware and organism is cheaper and more effective than the last, by design.',
        },
        {
          title: 'Publish in the open',
          text: 'Methods, data, and failures are released so the whole field advances — coordination scales only when knowledge is shared.',
        },
      ],
    },
    {
      type: 'quote',
      text: 'The century will not be saved by the sum of good intentions. It will be built — deliberately, physically, and at scale — by those willing to treat the living world as the most sophisticated engineering partner we have ever had.',
      attribution: 'EcoSurge Founding Office',
    },
    {
      type: 'divider',
    },
    {
      type: 'paragraph',
      text: 'The chapters that follow this whitepaper are not manifestos. They are procedures, equations, and deployment plans. The age of promises is over. The age of embodiment has begun.',
    },
  ],
}
