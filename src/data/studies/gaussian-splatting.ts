import { type Study } from './types'

export const gaussianSplatting: Study = {
  slug: 'gaussian-splatting',
  title: 'Streaming Reality: 3D Gaussian Splatting from a Roving Robot',
  subtitle:
    'A Roomba-class robot builds a live radiance field of a room as it drives — millions of anisotropic Gaussians, rasterized in real time and streamed to a viewer under a fixed bandwidth budget.',
  tag: 'Research',
  date: '2026-07-18',
  authors: ['EcoSurge Labs — Perception Group'],
  featured: false,
  abstract:
    'We describe an on-robot capture pipeline that reconstructs a space as a 3D Gaussian splat field and streams it live to a remote viewer. Each primitive is an anisotropic Gaussian carrying a mean, a covariance factored into rotation and scale, an opacity, and view-dependent color as spherical harmonics. Rendering is differentiable rasterization: project each Gaussian to a screen-space ellipse and alpha-composite front to back. We give the splat model, the EWA projection, the compositing equation, the PSNR-vs-count trade-off that sets a streaming knee, and a level-of-detail scheme that holds bandwidth inside a modest wireless link as a roving robot maps a habitat.',
  keywords: ['gaussian splatting', 'radiance fields', 'real-time rendering', 'streaming', 'level of detail', 'robotics', 'reconstruction'],
  blocks: [
    {
      type: 'lead',
      text: 'Send a cheap robot into a room and let it look around. Minutes later, anyone on Earth can fly a virtual camera through that room — every surface, every glint, every soft shadow — reconstructed not as a mesh but as a cloud of a million glowing ellipsoids, rasterized sixty times a second. This is what 3D Gaussian splatting makes ordinary.',
    },
    {
      type: 'heading',
      text: 'The primitive: an anisotropic Gaussian',
    },
    {
      type: 'paragraph',
      text: 'A splat scene is not a mesh and not a neural network you query per ray. It is an explicit set of 3D Gaussians. Each one is a soft, oriented blob of light defined by a mean *μ* (where it sits), a covariance *Σ* (its shape and orientation), an opacity, and a color that changes with viewing angle. The covariance is never optimized directly — it is factored into a rotation and a scale so it stays a valid, positive-definite ellipsoid throughout training.',
    },
    {
      type: 'equation',
      display: 'G(x) = exp( −½ (x − μ)ᵀ Σ⁻¹ (x − μ) ),   Σ = R S Sᵀ Rᵀ',
      where: [
        '**μ** — the Gaussian’s center in world space',
        '**Σ** — its 3×3 covariance (shape + orientation)',
        '**R** — rotation (unit quaternion); **S** — diagonal scale matrix',
        'Factoring Σ = R S Sᵀ Rᵀ keeps it positive semi-definite under gradient updates',
      ],
      note: 'Anisotropy is the whole trick: a thin, flat Gaussian tiles a wall with a handful of primitives where an isotropic point cloud would need thousands.',
    },
    {
      type: 'paragraph',
      text: 'Color is stored as spherical-harmonic coefficients rather than a single RGB, so each splat can be a different color depending on where you look at it from — that is what reproduces specular highlights and the sheen of a wet leaf. Evaluating the SH basis in the view direction gives the emitted color for the current camera.',
    },
    {
      type: 'heading',
      text: 'Projection: EWA splatting to the screen',
    },
    {
      type: 'paragraph',
      text: 'To draw a Gaussian, project it to the image plane. A 3D Gaussian under the perspective camera maps (to first order) to a 2D Gaussian — a screen-space ellipse. The 2D covariance is the world covariance pushed through the view transform and the local linearization of the projection, the classic elliptical weighted-average splat.',
    },
    {
      type: 'equation',
      display: "Σ' = J W Σ Wᵀ Jᵀ",
      where: [
        "**Σ'** — the 2D screen-space covariance (the drawn ellipse)",
        '**W** — the world-to-camera view transform (rotation)',
        '**J** — Jacobian of the perspective projection at the splat center',
        '**Σ** — the 3D covariance of the Gaussian',
      ],
      note: 'The Jacobian J is why the same Gaussian draws as a bigger ellipse near the camera and a tiny one far away — projection is local-linearized per splat, every frame.',
    },
    {
      type: 'heading',
      text: 'Compositing: front-to-back alpha blending',
    },
    {
      type: 'paragraph',
      text: 'With every visible Gaussian projected to an ellipse and assigned an effective opacity, the pixel color is an ordered alpha composite: sort splats by depth, and accumulate color front to back, each splat attenuated by the transmittance left over from everything in front of it. This is the volumetric rendering integral, discretized over splats — and because every operation is differentiable, the whole scene is trained by gradient descent against captured photos.',
    },
    {
      type: 'equation',
      display: 'C = Σᵢ cᵢ αᵢ Πⱼ₍ⱼ<ᵢ₎ (1 − αⱼ)',
      where: [
        '**C** — final rendered color at the pixel',
        '**cᵢ** — color of the i-th Gaussian (SH evaluated in view direction)',
        '**αᵢ** — its effective opacity (base opacity × the 2D Gaussian falloff at the pixel)',
        '**Πⱼ₍ⱼ<ᵢ₎ (1 − αⱼ)** — transmittance: light surviving the splats in front',
      ],
      note: 'Sorted, differentiable, and embarrassingly parallel — this is what makes splatting rasterize in real time on a GPU where neural radiance fields crawl.',
    },
    {
      type: 'heading',
      text: 'Fidelity vs. splat count',
    },
    {
      type: 'paragraph',
      text: 'Reconstruction quality, measured as PSNR against held-out views, rises with the number of Gaussians and then saturates — densification adds detail with diminishing returns. For a roving robot streaming its map, that saturation is a gift: there is a knee past which more splats cost bandwidth without buying visible quality, and we park the on-wire scene right at it.',
    },
    {
      type: 'equation',
      display: 'PSNR = 10 · log₁₀ ( MAX² / MSE ),   bytes ≈ N · b_splat',
      where: [
        '**MAX** — peak pixel value; **MSE** — mean-squared error vs a reference view',
        '**N** — number of Gaussians transmitted',
        '**b_splat** — bytes per compressed splat (mean, quaternion, scale, opacity, SH)',
      ],
      note: 'PSNR is logarithmic, so each extra dB costs exponentially more splats — the argument for stopping at the knee rather than the peak.',
    },
    {
      type: 'figure',
      viz: 'splat-psnr',
      caption: 'PSNR climbs quickly then saturates near 38 dB; the streaming knee at ≈ 1.1M Gaussians captures nearly all the fidelity at a fraction of the transmitted bytes.',
    },
    {
      type: 'heading',
      text: 'Streaming under a bandwidth budget',
    },
    {
      type: 'paragraph',
      text: 'The robot captures on-board and compresses splats — quantizing quaternions, pruning near-transparent Gaussians, and truncating spherical-harmonic bands — then streams them to a viewer over an ordinary wireless link. The lever that keeps it inside budget is level-of-detail: a splat’s screen footprint shrinks as the inverse square of the viewer’s distance, so distant clusters are sent coarse and only densify as the virtual camera approaches.',
    },
    {
      type: 'equation',
      display: 'rate(d) ≈ N_vis(d) · b_splat · fps,   N_vis(d) ∝ 1/d²',
      where: [
        '**rate(d)** — bytes per second at viewer distance d',
        '**N_vis(d)** — visible/streamed splats, falling as 1/d² with distance',
        '**fps** — frame rate; **b_splat** — compressed bytes per splat',
      ],
      note: 'Because the footprint law is 1/d², halving how close the viewer looks quarters the splats that need to be fresh — LOD turns an unbounded scene into a bounded stream.',
    },
    {
      type: 'figure',
      viz: 'lod-bandwidth',
      caption: 'Streamed rate falls as 1/d² with viewer distance; the LOD scheduler keeps the live splat stream comfortably inside a 12 Mbit·s⁻¹ link as the robot maps.',
    },
    {
      type: 'stats',
      items: [
        { value: '~1.1M', label: 'Gaussians at the streaming knee' },
        { value: '60 fps', label: 'real-time rasterization target' },
        { value: '1/d²', label: 'level-of-detail footprint falloff' },
        { value: '12 Mb/s', label: 'wireless link budget held by LOD' },
      ],
    },
    {
      type: 'heading',
      text: 'On-robot capture loop',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Rove + capture',
          text: 'Drive a coverage path while grabbing posed keyframes; robot odometry and visual tracking supply the camera poses that anchor every Gaussian.',
        },
        {
          title: 'Initialize',
          text: 'Seed Gaussians from a sparse structure-from-motion point cloud — one splat per point, isotropic, opaque enough to receive gradients.',
        },
        {
          title: 'Optimize + densify',
          text: 'Gradient-descend μ, R, S, opacity, and SH against captured frames; clone/split Gaussians in under-reconstructed regions and prune transparent ones.',
        },
        {
          title: 'Compress',
          text: 'Quantize rotations, prune low-opacity splats, and drop high SH bands to hit the per-splat byte budget with negligible PSNR loss.',
        },
        {
          title: 'Stream by LOD',
          text: 'Send coarse tiles first, then densify the region the viewer’s camera is approaching — 1/d² scheduling keeps the live feed inside the link.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters for the field',
      text: 'A habitat that can be walked once by a cheap robot and then explored forever by anyone, in full radiance, is a new instrument for ecology. Restoration crews inspect a reef or a canopy remotely; the same live splat map becomes the shared world model our other robots plan against. Capture reality once — stream it to everyone.',
    },
    {
      type: 'quote',
      text: 'The future does not download the world as it was rendered for it. It captures the world as it is, a million points of light at a time, and hands the whole living scene to whoever wants to look.',
      attribution: 'EcoSurge Labs — Perception Group',
    },
  ],
}
