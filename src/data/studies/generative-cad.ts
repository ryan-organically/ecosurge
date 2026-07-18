import { type Study } from './types'

export const generativeCad: Study = {
  slug: 'generative-cad',
  title: 'Advancing CAD: Generative, Differentiable, Biomimetic Design',
  subtitle:
    'From parametric constraint-solving to topology optimization to gradient-driven shape search — how CAD stops drawing parts and starts discovering them, the way bone does.',
  tag: 'Research',
  date: '2026-07-18',
  authors: ['EcoSurge Labs — Design Systems'],
  featured: false,
  abstract:
    'Conventional CAD records a designer’s decisions; the next generation makes them. We trace the arc from parametric, constraint-based modeling through density-based topology optimization (SIMP) to fully differentiable CAD, where a geometry’s parameters carry gradients of the physics they must satisfy. We give the compliance-minimization program, the SIMP material interpolation and its adjoint sensitivity, the optimality-criteria update, and the Gibson–Ashby scaling law that governs the porous, load-adaptive lattices this machinery converges toward — the same law that shapes trabecular bone. The output is not a part someone drew, but the part the loads demanded.',
  keywords: ['CAD', 'topology optimization', 'SIMP', 'differentiable design', 'generative design', 'biomimetic', 'lattice', 'compliance'],
  blocks: [
    {
      type: 'lead',
      text: 'For fifty years, CAD has been a very precise pencil. You decide the shape; the software remembers it. But the shape a load-bearing part *should* be is rarely the shape a human would draw — it is the shape a femur grows into, all struts and voids, material exactly where the stress flows and nowhere else. The task ahead is a CAD that finds that shape for you.',
    },
    {
      type: 'heading',
      text: 'Layer one: parametric and constraint-based modeling',
    },
    {
      type: 'paragraph',
      text: 'Modern CAD is already more than a pencil. A parametric model is a program: dimensions are variables, features depend on earlier features, and a geometric-constraint solver keeps a sketch consistent — this line stays tangent to that arc, these two faces stay perpendicular — as parameters change. The solver is doing real mathematics, finding the configuration that satisfies a system of geometric equations. This is the substrate everything generative builds on.',
    },
    {
      type: 'list',
      items: [
        '**Parameters** — the free variables: lengths, radii, angles, counts.',
        '**Constraints** — equations the geometry must satisfy: tangency, coincidence, symmetry, dimension.',
        '**Features** — a dependency graph of operations (extrude, fillet, pattern) rebuilt when parameters move.',
        '**Solver** — finds a geometry consistent with all constraints, or reports the system is over/under-determined.',
      ],
    },
    {
      type: 'heading',
      text: 'Layer two: topology optimization with SIMP',
    },
    {
      type: 'paragraph',
      text: 'Now stop specifying the shape at all. Fill the design domain with a density field and let physics carve it. In the SIMP method (Solid Isotropic Material with Penalization), each element gets a density between void and solid, and we minimize *compliance* — the structure’s total flexibility under load, which is exactly the strain energy — subject to a budget on how much material we may spend.',
    },
    {
      type: 'equation',
      display: 'min_ρ  c(ρ) = uᵀ K(ρ) u    s.t.  K(ρ) u = f,   Σₑ ρₑ vₑ ≤ V · V₀,   0 < ρ_min ≤ ρₑ ≤ 1',
      where: [
        '**ρ** — the element density field (the design variable)',
        '**c(ρ)** — compliance = uᵀKu; minimizing it maximizes stiffness',
        '**K(ρ), u, f** — global stiffness matrix, displacement, and load',
        '**Σ ρₑvₑ ≤ V·V₀** — volume-fraction budget: spend at most fraction V of the domain',
      ],
      note: 'Compliance is uᵀKu — the same convex quadratic form that appears whenever a physical system stores elastic energy. Minimizing it is asking: where should material go to resist this load with the least give?',
    },
    {
      type: 'paragraph',
      text: 'The penalization is what forces a manufacturable answer. Raw densities would smear material into a gray mush; SIMP interpolates stiffness as density raised to a power *p* > 1, which makes intermediate densities structurally inefficient and pushes every element toward crisp solid or crisp void.',
    },
    {
      type: 'equation',
      display: 'Eₑ(ρₑ) = E_min + ρₑᵖ (E₀ − E_min),   p ≈ 3',
      where: [
        '**Eₑ** — Young’s modulus assigned to element e',
        '**E₀** — modulus of the solid material; **E_min** — a tiny floor for numerical stability',
        '**p** — penalization exponent (typically 3): makes gray density stiffness-inefficient',
      ],
      note: 'Raising density to the third power for a linear volume cost is the whole reason SIMP converges to black-and-white designs a machine can actually cut or print.',
    },
    {
      type: 'heading',
      text: 'Layer three: differentiability — the gradient is the design',
    },
    {
      type: 'paragraph',
      text: 'What makes this optimization tractable at millions of elements is that we can compute the gradient of compliance with respect to every density *cheaply*, via the adjoint method. For compliance the adjoint is self-adjoint — the sensitivity has a closed form — so one extra solve is not even required. That gradient is the design signal: it points, element by element, toward the material layout the load wants.',
    },
    {
      type: 'equation',
      display: '∂c/∂ρₑ = − p ρₑᵖ⁻¹ (E₀ − E_min) uₑᵀ k₀ uₑ ≤ 0',
      where: [
        '**∂c/∂ρₑ** — sensitivity of compliance to element e’s density',
        '**uₑ** — element displacement vector; **k₀** — unit-density element stiffness',
        'The form uₑᵀk₀uₑ is element strain energy — always ≥ 0, so the sensitivity is ≤ 0',
      ],
      note: 'Every sensitivity is non-positive: adding material anywhere reduces compliance. The art is spending a *fixed* volume where each unit buys the most stiffness — the constrained optimum below.',
    },
    {
      type: 'paragraph',
      text: 'With gradients in hand, the density field is updated by the classic optimality-criteria scheme — a multiplicative step that moves material from where its strain energy is low to where it is high, then rescales to hold the volume budget exactly. This is differentiable CAD in miniature: geometry parameters carrying gradients of the physics they must satisfy, marched to an optimum.',
    },
    {
      type: 'equation',
      display: 'ρₑ ← clip[ ρₑ · ( −∂c/∂ρₑ / (λ vₑ) )^η ],   λ set so  Σₑ ρₑ vₑ = V · V₀',
      where: [
        '**λ** — Lagrange multiplier tuned each step to meet the volume constraint',
        '**η** — a damping/move-limit exponent for stable updates',
        '**clip[·]** — projection back into [ρ_min, 1] with a move limit',
      ],
      note: 'λ is a shadow price of material — the design analog of the carbon price in our convex-optimization work: at the optimum, every element earns the same marginal stiffness per unit volume.',
    },
    {
      type: 'figure',
      viz: 'topopt-pareto',
      caption: 'Compliance falls as the volume-fraction budget grows — a convex, diminishing-returns frontier. Past V ≈ 0.3 each extra kilogram of material buys steeply less stiffness.',
    },
    {
      type: 'heading',
      text: 'Layer four: generative search over designs',
    },
    {
      type: 'paragraph',
      text: 'Gradient descent finds one optimum for one load case. Generative design widens the aperture: it explores *many* configurations — different load cases, materials, and manufacturing methods — and returns a Pareto set of candidates trading mass against stiffness against cost. Gradient-based topology optimization is the fast inner loop; a generative outer loop samples the boundary conditions and manufacturing constraints the designer actually cares about.',
    },
    {
      type: 'stats',
      items: [
        { value: 'uᵀKu', label: 'compliance — the objective being minimized' },
        { value: 'p ≈ 3', label: 'SIMP penalization that yields crisp geometry' },
        { value: 'V ≈ 0.3', label: 'volume-fraction knee of the stiffness frontier' },
        { value: 'n ≈ 2', label: 'Gibson–Ashby exponent for bending-dominated lattice' },
      ],
    },
    {
      type: 'heading',
      text: 'Where it converges: biomimetic lattices',
    },
    {
      type: 'paragraph',
      text: 'Run this machinery on a load-bearing bracket and it does not return a solid block. It returns struts and shells and graded porosity — a structure indistinguishable in principle from trabecular bone, which nature optimized by the same objective (stiffness per gram) over evolutionary time. The relative stiffness of such a porous lattice follows the Gibson–Ashby scaling law: a power of relative density, with the exponent revealing whether the struts carry load by stretching or by bending.',
    },
    {
      type: 'equation',
      display: 'E* / Eₛ = C ( ρ* / ρₛ )ⁿ',
      where: [
        '**E*, ρ*** — effective modulus and density of the lattice',
        '**Eₛ, ρₛ** — modulus and density of the solid strut material',
        '**n** — scaling exponent: n ≈ 2 for bending-dominated, n ≈ 1 for stretch-dominated cells',
        '**C** — a cell-geometry constant of order 1',
      ],
      note: 'Design the lattice topology to be stretch-dominated (n → 1) and you get far more stiffness per gram at low density — the difference between a strong-light part and a heavy one is which exponent you engineer toward.',
    },
    {
      type: 'figure',
      viz: 'lattice-density',
      caption: 'A SIMP density field ρ(x) rendered as a lattice: dense struts trace the load path corner to corner, thinning to near-void where no stress flows — the geometry the physics demanded, not one anyone drew.',
    },
    {
      type: 'callout',
      title: 'Design as an engineering response',
      text: 'This is our stance on hardware: we do not promise a part will be light and strong — we let the loads, the material, and the manufacturing constraints write the geometry, then we build it. Differentiable, biomimetic CAD turns every bracket, housing, and reef-anchor in the EcoSurge fleet into a solved optimization rather than a drawn guess.',
    },
    {
      type: 'quote',
      text: 'Nature never draws a part. It grows material toward stress and dissolves it away from calm, until the shape is nothing but the load made visible. The next CAD does the same — and hands us the femur we would never have thought to draw.',
      attribution: 'EcoSurge Labs — Design Systems',
    },
  ],
}
