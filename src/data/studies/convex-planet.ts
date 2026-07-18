import { type Study } from './types'

export const convexPlanet: Study = {
  slug: 'convex-planet',
  title: 'The Convex Planet',
  subtitle:
    'On convexity as the hidden structure of planetary repair — and the physics of the natures we have not yet solved.',
  tag: 'Whitepaper',
  date: '2026-07-17',
  authors: ['EcoSurge Founding Office', 'EcoSurge Theory Group'],
  featured: true,
  abstract:
    'This whitepaper advances a single mathematical claim with enormous practical consequence: the Earth system is repairable precisely where its cost and response functions are convex, and it is dangerous precisely where they are not. We show how convexity governs the optimal allocation of restoration capital, why a centralized engine dominates a fragmented one by Jensen’s inequality, how climate tipping points are the loss of convexity, and how deliberately engineered convexity — antifragility — lets us profit from volatility instead of being destroyed by it. We close with the natures still unsolved, and the equations we intend to write.',
  keywords: ['convexity', 'optimization', 'tipping points', 'antifragility', 'physics', 'climate'],
  blocks: [
    {
      type: 'lead',
      text: 'A convex function has one honest property: it never surprises you to the downside. Find the convex structure of a problem and you can descend it to the global minimum. Lose convexity and the ground itself can give way. Planetary repair is the search for the convex path down.',
    },
    {
      type: 'heading',
      text: 'I. Why convexity is the whole game',
    },
    {
      type: 'paragraph',
      text: 'A set is convex if the line between any two of its points stays inside it; a function is convex if its graph never rises above that line. This sounds abstract until you notice what it buys you: for a convex objective over a convex feasible set, *every* local minimum is the global minimum, and gradient descent — the humblest possible algorithm — is guaranteed to find it. There is no false valley to trap you. The entire discipline of large-scale optimization is, in effect, the art of recognizing or manufacturing convexity.',
    },
    {
      type: 'equation',
      display: 'f(λx + (1−λ)y) ≤ λ f(x) + (1−λ) f(y),   ∀ λ ∈ [0, 1]',
      where: [
        '**f** — a cost, damage, or response function of the Earth system',
        '**x, y** — any two states or intervention levels',
        '**λ** — a mixing weight between them',
      ],
      note: 'When this inequality holds, the average of outcomes is never worse than the outcome of the average — the mathematical license to aggregate, to plan, and to descend safely.',
    },
    {
      type: 'heading',
      text: 'II. The abatement portfolio is a convex program',
    },
    {
      type: 'paragraph',
      text: 'Each removal technology — wave-built reef, biomineral ice lattice, restored soil, managed permafrost — has a marginal cost that rises with deployment: the easy sites go first, the hard ones cost more. Rising marginal cost *is* a convex total-cost curve. Minimizing the cost of hitting a removal target across a menu of such technologies is therefore a convex program, and it has a beautiful optimality condition.',
    },
    {
      type: 'equation',
      display: 'c₁′(x₁*) = c₂′(x₂*) = ⋯ = cₙ′(xₙ*) = μ',
      where: [
        '**cᵢ′** — marginal cost of the *i*-th intervention',
        '**xᵢ\\*** — its optimal deployment level',
        '**μ** — the shadow price of carbon (the Lagrange multiplier on the target)',
      ],
      note: 'At the optimum, every active lever is pushed until its marginal cost equals a single planetary carbon price μ. A market of disconnected pledges has no mechanism to equalize these margins. A conductor does.',
    },
    {
      type: 'figure',
      viz: 'carbon-drawdown',
      caption:
        'A convex-optimal portfolio deploys along the marginal-cost frontier; cumulative drawdown follows a logistic ramp far above the fragmented baseline.',
    },
    {
      type: 'heading',
      text: 'III. Jensen’s inequality: why the engine beats the crowd',
    },
    {
      type: 'paragraph',
      text: 'The deepest argument for centralization is not political; it is Jensen’s inequality. For a convex cost, the expected cost of scattered, uncertain, uncoordinated effort strictly exceeds the cost of the coordinated average. Fragmentation is not merely inefficient — it is provably, quantifiably more expensive, and the gap grows with the variance of the disorder.',
    },
    {
      type: 'equation',
      display: '𝔼[c(X)] ≥ c(𝔼[X]),   with gap ≈ ½ c″(𝔼[X]) · Var(X)',
      where: [
        '**X** — the distribution of dispersed, uncoordinated interventions',
        '**c″** — curvature of the cost function (how convex it is)',
        '**Var(X)** — variance introduced by fragmentation',
      ],
      note: 'The penalty for disorder scales with curvature times variance. The more convex the problem, the more a single coordinated engine wins.',
    },
    {
      type: 'heading',
      text: 'IV. Tipping points are the loss of convexity',
    },
    {
      type: 'paragraph',
      text: 'Where the Earth system is convex it is forgiving; where it is *concave* it is lethal. A tipping element — a collapsing ice sheet, a dieback forest flipping to savanna, a permafrost carbon bomb — is a region where the response function bends the wrong way, so that a small forcing produces a runaway, self-amplifying loss. In the language of dynamical systems, a stable basin loses its restoring curvature and the state falls through a saddle-node bifurcation.',
    },
    {
      type: 'equation',
      display: 'dx/dt = f(x, μ),   tipping at  ∂f/∂x = 0  with  ∂²f/∂x² ≠ 0',
      where: [
        '**x** — a slow Earth-system variable (ice mass, forest cover, soil carbon)',
        '**μ** — the control parameter (temperature, forcing)',
        '**∂f/∂x = 0** — the fold where the stable and unstable states collide',
      ],
      note: 'Critically, the approach to a fold announces itself: recovery from perturbation slows and variance rises — *critical slowing down*. Our mandate is to instrument these early-warning signals everywhere and intervene before the fold.',
    },
    {
      type: 'callout',
      title: 'The operating principle',
      text: 'Restore and defend convexity. Every EcoSurge system either descends a convex cost frontier or buttresses a basin of stability against the concave collapse next door — the ice lattice buttressing a grounding line is convexity, poured.',
    },
    {
      type: 'heading',
      text: 'V. Engineered convexity: antifragility',
    },
    {
      type: 'paragraph',
      text: 'There is a second, offensive use of convexity. A system whose payoff is *convex in volatility* gains more from the upside of disorder than it loses from the downside — it is antifragile. We design our biological and robotic systems to sit on the convex side of uncertainty: a reef that grows faster under the very storm energy that would destroy rigid infrastructure; a species portfolio where the recovery of one lineage compounds the resilience of the whole.',
    },
    {
      type: 'figure',
      viz: 'species-recovery',
      caption:
        'Logistic recovery is convex near the extinction floor and concave near carrying capacity — intervention buys the most where curvature is steepest.',
    },
    {
      type: 'heading',
      text: 'VI. The natures we have not yet solved',
    },
    {
      type: 'paragraph',
      text: 'Honesty compels a list of the open problems — the natures whose governing equations we do not yet possess in closed form, and which we intend to attack:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**The convex hull of the microbiome.** We cannot yet predict, from genome and environment alone, which microbial consortium maximizes carbon fixation per joule. The map from sequence to metabolic flux is high-dimensional and non-convex; we aim to find its convex relaxations.',
        '**Turbulent transport at the ice–ocean boundary.** Basal melt is governed by boundary-layer turbulence that resists closed form. Our lattices are, in part, an experiment to *impose* structure where the Navier–Stokes equations refuse to simplify.',
        '**The stability manifold of a restored ecosystem.** We can grow biomass; we cannot yet guarantee the assembled community sits in a deep basin rather than a shallow one. Ecology’s Lyapunov functions remain unwritten.',
        '**Coupled human–Earth dynamics.** The largest non-convexity of all is us. Feedback between policy, capital, and physics has no accepted equation of motion. We treat it as the ultimate control problem.',
      ],
    },
    {
      type: 'quote',
      text: 'To solve a nature is to find the coordinates in which its cruelty becomes a convex bowl — a shape you can descend, deliberately, to the bottom. That search is our science, and its object is the survival of the living world.',
      attribution: 'EcoSurge Theory Group',
    },
    {
      type: 'divider',
    },
    {
      type: 'paragraph',
      text: 'The convex planet is not a description of the Earth we inherited. It is the Earth we intend to engineer: a system re-shaped, coordinate by coordinate, until the path down to a living future is one anyone can descend.',
    },
  ],
}
