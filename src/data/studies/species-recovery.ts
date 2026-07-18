import { type Study } from './types'

export const speciesRecovery: Study = {
  slug: 'species-recovery',
  title: 'Modeling Species Recovery Under Managed Intervention',
  subtitle: 'Logistic dynamics, minimum viable populations, and the economics of return.',
  tag: 'Research',
  date: '2026-02-11',
  authors: ['EcoSurge Biodiversity Intelligence Lab'],
  abstract:
    'The Species Archive tracks roughly 41,000 threatened species. For each one the operational question is the same: given a starting population and a candidate intervention, how fast does it recover, and does it clear the thresholds below which recovery is not merely slow but impossible? This study lays out the mathematics EcoSurge uses to answer that — the logistic model and its closed-form solution, how reduced mortality raises the effective growth rate, the minimum-viable-population and Allee thresholds that create a floor beneath which populations spiral to extinction, and a worked comparison of two intervention scenarios. The result is a decision tool: not a promise of recovery, but a quantified map of which populations can be returned and how much intervention it takes.',
  keywords: ['logistic growth', 'minimum viable population', 'Allee effect', 'extinction risk', 'conservation', 'population dynamics'],
  featured: true,
  blocks: [
    {
      type: 'lead',
      text: 'A population is not a stockpile to be topped up — it is a dynamical system with its own momentum. Recovery is governed by rates and thresholds, and the difference between a species that returns and one that vanishes often comes down to a few parameters we can actually change.',
    },
    {
      type: 'heading',
      text: 'The Logistic Engine of Recovery',
    },
    {
      type: 'paragraph',
      text: 'The workhorse of population dynamics is logistic growth: reproduction is proportional to numbers when the species is rare, but self-limits as it fills the carrying capacity of its habitat. The instantaneous rate is the product of an intrinsic growth rate and a crowding brake.',
    },
    {
      type: 'equation',
      display: 'dN/dt = r·N·(1 − N/K)',
      note: 'Growth is fastest near N = K/2 and vanishes at N = K. The inflection point is where restoration effort yields the greatest marginal return per individual.',
      where: [
        '**N** — population size (individuals)',
        '**r** — intrinsic per-capita growth rate (yr⁻¹)',
        '**K** — carrying capacity of restored habitat (individuals)',
        '**t** — time (yr)',
      ],
    },
    {
      type: 'paragraph',
      text: 'This equation has a closed-form solution, which is what lets us forecast rather than merely simulate. Integrating from an initial population N₀ gives a sigmoid trajectory whose entire shape is fixed by r, K, and N₀.',
    },
    {
      type: 'equation',
      display: 'N(t) = K / ( 1 + ((K − N₀)/N₀)·e^{−r·t} )',
      note: 'The time to reach a target fraction p of carrying capacity follows directly: t = (1/r)·ln[ (p/(1−p)) · ((K−N₀)/N₀) ]. Halving r doubles every recovery timescale.',
      where: [
        '**N₀** — population at t = 0 (individuals)',
        '**p** — target fraction of K (dimensionless)',
        '**e** — base of the natural logarithm',
      ],
    },
    {
      type: 'heading',
      text: 'Intervention Raises the Effective Growth Rate',
    },
    {
      type: 'paragraph',
      text: 'The intrinsic rate r is a balance of births and deaths, r = b − d. Conservation does not conjure new biology; it shifts this balance. Habitat restoration and captive breeding raise the birth term b; anti-poaching, disease management, and corridor connectivity lower the mortality term d. Each averted death per capita adds directly to the effective growth rate, and because every recovery timescale goes as 1/r, small mortality reductions compound into dramatically shorter returns.',
    },
    {
      type: 'figure',
      viz: 'species-recovery',
      caption: 'Logistic recovery under two interventions. The r = 0.28 scenario (habitat restoration plus captive breeding) reaches viable numbers in roughly half the time of the r = 0.12 protection-only scenario.',
    },
    {
      type: 'table',
      caption: 'Two intervention scenarios for a founder population of N₀ = 400 toward K = 20,000. Times from the closed-form solution.',
      columns: ['Scenario', 'Effective r (yr⁻¹)', 'Levers', 'Years to N = 2,000 (MVP)', 'Years to 0.5·K'],
      rows: [
        ['Habitat + captive breeding', '0.28', 'Raise b and lower d', '≈ 6.1 yr', '≈ 13.9 yr'],
        ['Protection only', '0.12', 'Lower d', '≈ 14.1 yr', '≈ 32.4 yr'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The arithmetic is unforgiving and clarifying. At r = 0.28 the population crosses a 2,000-individual viability mark in about six years; at r = 0.12 the same milestone takes more than fourteen. The extra births bought by breeding and habitat are not a luxury — they are the difference between a recovery that outruns stochastic risk and one that lingers for decades in the danger zone.',
    },
    {
      type: 'heading',
      text: 'The Floor: Minimum Viable Population and Allee Effects',
    },
    {
      type: 'paragraph',
      text: 'Plain logistic growth is optimistic in one crucial respect: it predicts positive growth for any N above zero. Real small populations face the opposite — mates become hard to find, cooperative behaviors break down, and inbreeding erodes fitness. Below a threshold the per-capita growth rate turns *negative*, and the population falls even under perfect protection. This is the strong Allee effect, and it defines the true extinction boundary.',
    },
    {
      type: 'equation',
      display: 'dN/dt = r·N·(1 − N/K)·(N/A − 1)',
      note: 'For 0 < N < A the last factor is negative: growth is negative and the population declines to zero. A is the Allee threshold — the unstable equilibrium separating collapse from recovery. Only interventions that push N above A convert a doomed founder group into a self-rescuing one.',
      where: [
        '**A** — Allee (extinction) threshold, 0 < A < K (individuals)',
        '**N/A − 1** — sign flips negative below A, positive above',
      ],
    },
    {
      type: 'paragraph',
      text: 'This is why EcoSurge sizes founder releases and captive-breeding pulses to clear A with margin rather than to minimize animals handled. A release of 400 into a system with an Allee threshold of 250 recovers; the same investment split into two releases of 200 may leave both below A and both collapse. The minimum viable population — the count at which extinction risk over a fixed horizon drops below an accepted level — sits above A and folds in demographic and environmental stochasticity as a safety buffer.',
    },
    {
      type: 'stats',
      items: [
        { value: '41,000', label: 'threatened species in the Archive' },
        { value: '2.3×', label: 'faster recovery at r = 0.28 vs 0.12' },
        { value: '< A', label: 'the zone where protection alone fails' },
        { value: '1/r', label: 'scaling of every recovery timescale' },
      ],
    },
    {
      type: 'heading',
      text: 'From Model to Intervention Plan',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Estimate parameters',
          text: 'Fit r, K, and the Allee threshold A from the Archive’s demographic records and analogues from related taxa, propagating uncertainty as parameter ranges rather than point values.',
        },
        {
          title: 'Locate the population',
          text: 'Place current N against A and the minimum viable population. A population below A is in freefall and needs an augmentation pulse before any slow-acting habitat measure will bite.',
        },
        {
          title: 'Choose the lever',
          text: 'Decide whether to raise b (breeding, habitat) or lower d (protection) — or both — to reach the effective r that meets the recovery deadline set by co-occurring threats.',
        },
        {
          title: 'Size and schedule',
          text: 'Use the closed-form solution to compute release size and timing that clear A with margin and hit the viability target within the funded horizon, then monitor and refit.',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'quote',
      text: 'Extinction is not a moment; it is a slope. The mathematics tells us exactly where the slope turns downward — and exactly how much force it takes to turn it back up. Across 41,000 species, that is not despair. It is a work order.',
      attribution: 'EcoSurge Biodiversity Intelligence Lab',
    },
  ],
}
