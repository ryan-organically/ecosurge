import { type Study } from './types'

export const restorationRobotics: Study = {
  slug: 'restoration-robotics',
  title: 'Autonomous Fleets for Planetary Restoration',
  subtitle: 'Reef-seeding AUVs, cryosphere guardians, and terrestrial pollinator swarms.',
  tag: 'Robotics',
  date: '2026-03-05',
  authors: ['EcoSurge Autonomous Systems Division'],
  abstract:
    'Restoration at planetary scale is a coverage problem constrained by energy. A single vessel replanting a reef, a lone crew re-icing a glacier, or a beekeeper hand-pollinating an orchard cannot close the gap between damage rate and repair rate. EcoSurge answers with heterogeneous autonomous fleets — three robot classes governed by a common decentralized control law, energy-autonomous through solar and wave harvesting, and scaled logistically to roughly 12,000 units by 2040. This study derives the stigmergic potential-field controller that keeps a swarm coordinated without a central brain, the duty-cycle inequality that guarantees indefinite operation, and the coverage-rate scaling that turns unit count into planetary throughput.',
  keywords: ['swarm robotics', 'stigmergy', 'potential fields', 'energy autonomy', 'reef restoration', 'cryosphere', 'pollinators'],
  featured: true,
  blocks: [
    {
      type: 'lead',
      text: 'Nature repairs itself continuously and in parallel — every reef polyp, every root tip, every foraging bee is an autonomous agent acting on local information. To match the pace of planetary damage we build machines that work the same way: many, cheap, self-powered, and coordinated by the environment itself rather than by a command center.',
    },
    {
      type: 'heading',
      text: 'Three Platforms, One Control Law',
    },
    {
      type: 'paragraph',
      text: 'EcoSurge fields three robot classes tuned to three collapsing biomes. *Reef-seeding AUVs* navigate degraded coral substrate and deposit larval-primed ceramic plugs. *Cryosphere guardians* are ice-anchored crawlers that pump brine to thicken sea ice and deploy reflective aerosol-free surface treatments. *Pollinator microdrones* forage terrestrial orchards and wildflower corridors where insect populations have crashed. The platforms differ in body plan and medium, but they share one thing: a decentralized controller so that no single failure and no communications blackout can stall the mission.',
    },
    {
      type: 'table',
      caption: 'The three restoration platforms and their nominal operating envelopes.',
      columns: ['Platform', 'Domain', 'Mass', 'Energy source', 'Task', 'Coverage / unit'],
      rows: [
        ['Reef-seeding AUV', 'Shallow tropical sea', '18 kg', 'Wave + solar surface dock', 'Larval plug deposition', '0.9 ha·day⁻¹'],
        ['Cryosphere guardian', 'Polar sea ice', '140 kg', 'Solar + thermal gradient', 'Ice thickening / albedo hold', '2.4 ha·day⁻¹'],
        ['Pollinator microdrone', 'Temperate/tropical land', '0.04 kg', 'Solar micro-cell + perch charge', 'Directed pollination', '0.15 ha·day⁻¹'],
      ],
    },
    {
      type: 'heading',
      text: 'Coordination Without a Commander',
    },
    {
      type: 'paragraph',
      text: 'Each agent computes its own velocity command from two ingredients: a *goal gradient* pulling it toward unserviced work, and a *social potential* that repels it from neighbors so the swarm spreads to cover area rather than clumping. The social term is stigmergic — mediated by fields the robots themselves write into the environment (deposited markers, acoustic pings, or a shared occupancy grid), so agents that never directly communicate still avoid re-servicing the same patch.',
    },
    {
      type: 'equation',
      display: 'u_i = −∇_i ( Σ_{j≠i} φ(r_ij) ) − k_g ∇_i Ψ(x_i)',
      note: 'The first term is the pairwise social potential summed over neighbors j; the second is descent on the task-need field Ψ. With φ pairwise-repulsive and Ψ a smooth potential, the closed-loop swarm is provably bounded and free of inter-agent collision.',
      where: [
        '**u_i** — commanded velocity of agent i (m·s⁻¹)',
        '**r_ij** — distance ‖x_i − x_j‖ between agents i and j (m)',
        '**φ(r)** — pairwise potential, repulsive as r→0, decaying as r→∞',
        '**Ψ(x)** — task-need field, low where restoration is complete',
        '**k_g** — goal gain weighting task pull against spacing (s⁻¹)',
      ],
    },
    {
      type: 'paragraph',
      text: 'A convenient choice is the Lennard-Jones-like well φ(r) = ε[(σ/r)¹² − 2(σ/r)⁶], whose minimum at r = σ sets the equilibrium inter-agent spacing directly. Choosing σ equal to a single unit’s effective service radius makes the swarm self-tile the workspace: agents settle into a hexagonal lattice of spacing σ, the densest packing, so coverage per unit approaches its geometric maximum with no central allocator.',
    },
    {
      type: 'figure',
      viz: 'robotics-fleet',
      caption: 'Logistic deployment ramp of the combined fleet. Production-limited early growth gives way to a saturating approach toward the ~12,000-unit standing fleet around 2040.',
    },
    {
      type: 'heading',
      text: 'Energy Autonomy: The Duty-Cycle Inequality',
    },
    {
      type: 'paragraph',
      text: 'A fleet that must be recovered and recharged by crews is not autonomous — it is a labor multiplier at best. Persistence requires that each unit harvest at least as much energy over a cycle as it spends. For a solar/wave harvester with capture area A and conversion efficiency η operating at duty cycle δ (fraction of the cycle spent actively working), the persistence condition is a simple energy-balance inequality.',
    },
    {
      type: 'equation',
      display: 'η · Ā · ⟨P_in⟩ · (1 − δ) ≥ δ · P_work + P_idle',
      note: 'Left: energy banked while parked at the harvesting dock. Right: energy drawn while working plus baseline hotel load. Solving for the sustainable duty cycle gives δ_max = (η Ā ⟨P_in⟩ − P_idle) / (P_work + η Ā ⟨P_in⟩).',
      where: [
        '**η** — harvest-to-battery conversion efficiency (dimensionless)',
        '**Ā** — effective capture area, solar panel or wave float (m²)',
        '**⟨P_in⟩** — time-averaged incident power density (W·m⁻²)',
        '**δ** — active-work duty cycle (dimensionless, 0–1)',
        '**P_work, P_idle** — active and baseline power draw (W)',
      ],
    },
    {
      type: 'paragraph',
      text: 'For a reef AUV with Ā ≈ 0.6 m², η ≈ 0.22, and a tropical surface budget ⟨P_in⟩ ≈ 240 W·m⁻² averaged over the diel cycle, the harvest rate is ≈ 32 W. Against P_work ≈ 45 W and P_idle ≈ 4 W, the sustainable duty cycle is δ_max ≈ 0.36 — the unit works roughly nine hours a day, indefinitely, with no tender vessel. Cryosphere guardians run leaner duty cycles in polar winter and bank energy across the summer albedo season.',
    },
    {
      type: 'heading',
      text: 'The Autonomy Stack',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Perceive',
          text: 'On-board vision, sonar, or chemosensing builds a local state estimate — substrate health, ice thickness, or floral density — and reads the shared stigmergic field written by prior visitors.',
        },
        {
          title: 'Plan',
          text: 'The agent evaluates the potential-field controller u_i, blending neighbor spacing against the task-need gradient Ψ, and checks the duty-cycle budget before committing to an action window.',
        },
        {
          title: 'Act',
          text: 'It executes the task — deposit a coral plug, pump brine, transfer pollen — and writes the completed patch back into the environmental field so no sibling repeats the work.',
        },
        {
          title: 'Learn',
          text: 'Outcome telemetry (survival, thickness gain, fruit set) updates a fleet-wide model at the next dock rendezvous, refining φ, Ψ, and site priors for the following cycle.',
        },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: '~12,000', label: 'standing fleet by 2040' },
        { value: '3', label: 'robot classes, one control law' },
        { value: '0.36', label: 'sustainable duty cycle, reef AUV' },
        { value: '≈ 4.9M ha·yr⁻¹', label: 'peak fleet coverage throughput' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Coverage scales as C ≈ N · c̄ · δ, the product of unit count, per-unit coverage rate, and duty cycle. Because the potential-field controller keeps c̄ near its geometric ceiling regardless of N, throughput is very nearly linear in fleet size — every unit added buys its full share of restored area rather than fighting its neighbors for it. A 12,000-unit fleet at a blended c̄ ≈ 1.1 ha·day⁻¹ and δ ≈ 0.34 clears on the order of 4.9 million hectares per year.',
    },
    {
      type: 'divider',
    },
    {
      type: 'callout',
      title: 'Engineering the repair rate above the damage rate',
      text: 'The fleet is not a demonstration — it is the first machinery whose repair throughput can overtake the rate at which ecosystems are lost. Decentralized control makes it robust, energy autonomy makes it persistent, and linear coverage scaling makes it a lever we can simply keep pulling. By 2040 the swarm should be re-seeding faster than the sea can bleach and the ice can thin. That is the number that matters.',
    },
  ],
}
