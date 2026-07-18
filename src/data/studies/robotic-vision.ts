import { type Study } from './types'

export const roboticVision: Study = {
  slug: 'robotic-vision',
  title: 'Machine Sight: Robotic Vision for Ecological Fieldwork',
  subtitle:
    'How a field robot turns photons into decisions — pinhole geometry, promptable segmentation, monocular depth, and LIDAR–RGB fusion into a semantic occupancy map it can actually act on.',
  tag: 'Robotics',
  date: '2026-07-18',
  authors: ['EcoSurge Labs — Perception Group'],
  featured: false,
  abstract:
    'A robot that works in a living ecosystem must do more than avoid walls — it must know a seedling from a weed, a pollinator from a pest, a wet leaf from a puddle. We lay out the perception stack that gives our field robots that discrimination: the pinhole projection that anchors pixels to metric rays, Meta’s Segment Anything for zero-shot promptable masks, monocular and stereo depth with an honest error model, inverse-variance fusion of LIDAR and RGB, and a semantic occupancy grid carrying per-cell class and uncertainty. The same stack that lets the Zen Gardener rake around a chair leg lets a pollinator drone tell a flower from a flag. We give the mathematics, the failure modes, and the calibration procedure that keeps them in check.',
  keywords: ['robotic vision', 'segmentation', 'SAM', 'monocular depth', 'sensor fusion', 'LIDAR', 'occupancy', 'calibration'],
  blocks: [
    {
      type: 'lead',
      text: 'A camera does not see objects. It sees a grid of numbers — the amount of light that fell on each well of a sensor over a few milliseconds. Everything a robot *knows* about the living world in front of it must be reconstructed from that grid. Machine sight is the discipline of doing that reconstruction correctly, in real time, on a machine that has to move next.',
    },
    {
      type: 'heading',
      text: 'From photons to rays: the pinhole model',
    },
    {
      type: 'paragraph',
      text: 'The bedrock of all of it is the pinhole camera. A point *X* in the world, expressed in homogeneous coordinates, projects to a pixel *u* through the camera’s intrinsic matrix *K* and its pose in the world — a rotation *R* and translation *t*. This single equation is the bridge in both directions: it tells us where a known 3D point lands on the image, and, run backward, it turns a pixel into a metric ray the robot can reason about.',
    },
    {
      type: 'equation',
      display: 's · [u v 1]ᵀ = K [R | t] [X Y Z 1]ᵀ,   K = [[fₓ 0 cₓ], [0 f_y c_y], [0 0 1]]',
      where: [
        '**u, v** — pixel coordinates; **s** — the projective depth scale',
        '**K** — intrinsics: focal lengths fₓ, f_y and principal point cₓ, c_y',
        '**[R | t]** — extrinsics: camera pose (rotation R, translation t) in the world',
        '**X Y Z** — the world point in homogeneous coordinates',
      ],
      note: 'Everything downstream — depth, fusion, occupancy — is meaningless without an accurate K and a calibrated camera→LIDAR extrinsic. Perception failures in the field are, nine times in ten, calibration failures.',
    },
    {
      type: 'heading',
      text: 'What is it? Promptable segmentation with SAM',
    },
    {
      type: 'paragraph',
      text: 'Geometry tells the robot where surfaces are; it says nothing about what they are. Meta’s Segment Anything Model (SAM) closes that gap without task-specific training: given a prompt — a point, a box, or a coarse mask — it returns a clean object mask. This is the right primitive for an open ecosystem, where the robot meets species and objects no fixed classifier was trained on. A distilled encoder (MobileSAM / EfficientSAM class) runs at interactive rates on the robot itself.',
    },
    {
      type: 'paragraph',
      text: 'Promptability is the quiet superpower. The planner can drop a prompt exactly where LIDAR flagged an obstacle, or where an optical-flow blob suggested motion, and get back a pixel-precise mask to classify. Mask quality against ground truth is measured by intersection-over-union, and it climbs fast with the number of prompts — one or two well-placed clicks already carry most of the fidelity.',
    },
    {
      type: 'equation',
      display: 'IoU(A, B) = |A ∩ B| / |A ∪ B|',
      where: [
        '**A** — predicted mask; **B** — ground-truth region',
        '**A ∩ B** — pixels both agree on; **A ∪ B** — pixels either claims',
      ],
      note: 'We treat IoU ≥ 0.90 as field-usable: above it, the class label and the depth statistics pooled inside the mask are trustworthy enough to act on.',
    },
    {
      type: 'figure',
      viz: 'sam-iou',
      caption: 'Mask IoU rises steeply with point prompts and saturates near 0.97 — the planner rarely needs more than two prompts per object to clear the 0.90 field-usable line.',
    },
    {
      type: 'heading',
      text: 'How far? Monocular depth and its honest error',
    },
    {
      type: 'paragraph',
      text: 'A single image is depth-ambiguous — a small near object and a large far one can paint identical pixels. Learned monocular depth networks resolve most of that ambiguity from context and give a dense depth per pixel, and a stereo pair or structured motion recovers metric scale by triangulation. But triangulated depth carries a brutal error law: uncertainty grows with the *square* of range. Doubling the distance to a target quadruples the depth error.',
    },
    {
      type: 'equation',
      display: 'σ_Z = (Z² / (f · B)) · σ_d',
      where: [
        '**σ_Z** — 1σ uncertainty in recovered depth Z',
        '**Z** — range to the target; **f** — focal length (px); **B** — stereo baseline',
        '**σ_d** — disparity-matching noise (subpixel)',
      ],
      note: 'The Z² term is why a robot that trusts far-field monocular depth will misjudge a distant seedling by tens of centimetres. The fix is not a better network — it is a second, metric sensor.',
    },
    {
      type: 'heading',
      text: 'Fusing LIDAR and RGB',
    },
    {
      type: 'paragraph',
      text: 'LIDAR measures range directly and its error barely grows with distance; RGB is dense, cheap, and carries all the semantics. Fuse them and each covers the other’s weakness. The principled fusion of two Gaussian estimates of the same quantity is inverse-variance weighting — the maximum-likelihood combination, which always lands nearer the more confident sensor and yields a variance smaller than either input.',
    },
    {
      type: 'equation',
      display: 'x̂ = (Σ_c⁻¹ + Σ_l⁻¹)⁻¹ (Σ_c⁻¹ x_c + Σ_l⁻¹ x_l),   Σ̂⁻¹ = Σ_c⁻¹ + Σ_l⁻¹',
      where: [
        '**x_c, Σ_c** — camera/monocular depth estimate and its covariance',
        '**x_l, Σ_l** — LIDAR range estimate and its (much tighter) covariance',
        '**x̂, Σ̂** — the fused estimate and its covariance',
      ],
      note: 'Because Σ_l is small at range where Σ_c blows up as Z², the fused depth tracks the LIDAR far away and the dense camera up close — the best of both, automatically weighted.',
    },
    {
      type: 'figure',
      viz: 'depth-uncertainty',
      caption: 'Monocular depth error grows as Z² and is unusable past ~15 m; fusing a LIDAR return collapses it back to a near-constant few-centimetre floor across the whole working range.',
    },
    {
      type: 'heading',
      text: 'The semantic occupancy grid',
    },
    {
      type: 'paragraph',
      text: 'Perception has to hand the planner one structure, not three point clouds. We accumulate everything into a semantic occupancy grid: each cell carries a probability of being occupied, a class distribution (free, plant, obstacle, water, animal, no-go), and — crucially — an uncertainty. We keep the uncertainty explicit as the entropy of the class distribution, and the planner is allowed to treat a high-entropy cell as a reason to look again before committing.',
    },
    {
      type: 'equation',
      display: 'H(p) = − Σ_c p_c · log p_c ,    act if H(p) < H*',
      where: [
        '**p_c** — posterior probability the cell belongs to class c',
        '**H(p)** — Shannon entropy of the class distribution (the cell’s confusion)',
        '**H*** — an action threshold: below it the label is confident enough to act on',
      ],
      note: 'A robot that acts only under low entropy and re-observes under high entropy is a robot that fails safely — it stops or looks twice instead of raking through a seedling it was unsure about.',
    },
    {
      type: 'callout',
      title: 'One stack, many robots',
      text: 'This is the same perception spine the Zen Gardener runs to tell a rug from a dust pile, and that a pollinator drone runs to tell a flower from a flag. Promptable segmentation, honest depth, inverse-variance fusion, and an uncertainty-aware occupancy grid are platform-independent — build them once, deploy them across the fleet.',
    },
    {
      type: 'heading',
      text: 'Field calibration procedure',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Intrinsics',
          text: 'Recover K and lens distortion from a checkerboard sweep at multiple depths and angles; verify reprojection error stays below half a pixel RMS before trusting any depth.',
        },
        {
          title: 'Extrinsics',
          text: 'Solve the camera→LIDAR rigid transform by matching a shared target — a board visible to both sensors. This is the alignment every fused estimate depends on.',
        },
        {
          title: 'Depth validation',
          text: 'Drive known ranges and fit σ_Z against the Z² law; if measured error exceeds the model, the baseline or disparity noise is wrong, not the network.',
        },
        {
          title: 'Segmentation priming',
          text: 'Cache SAM embeddings per keyframe so repeated prompts on the same frame are near-free; classify masks into the ecosystem ontology the grid expects.',
        },
        {
          title: 'Uncertainty audit',
          text: 'Log per-cell entropy over a full run; tune H* so the robot re-observes exactly the cells a human would have looked at twice, and no more.',
        },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: 'Z²', label: 'how monocular depth error grows with range' },
        { value: '≥0.90', label: 'mask IoU we treat as field-usable' },
        { value: '<0.5 px', label: 'reprojection error required after intrinsic calibration' },
        { value: 'H<H*', label: 'entropy gate before the robot acts on a cell' },
      ],
    },
    {
      type: 'quote',
      text: 'The measure of a seeing machine is not how much it perceives, but how well it knows the limits of what it perceives. A robot that acts only where it is certain — and looks again where it is not — can be trusted in a living world.',
      attribution: 'EcoSurge Labs — Perception Group',
    },
  ],
}
