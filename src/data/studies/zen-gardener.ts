import { type Study } from './types'

export const zenGardener: Study = {
  slug: 'zen-gardener',
  title: 'The Zen Gardener: A Stair-Climbing Robot That Rakes the Floor',
  subtitle:
    'Repurposing a spare motherboard into an autonomous cleaner that maps with LIDAR, sees with Meta’s SAM, solves dust, and leaves the floor raked like a karesansui garden.',
  tag: 'Robotics',
  date: '2026-07-18',
  authors: ['EcoSurge Autonomous Systems Division'],
  featured: false,
  abstract:
    'We specify a low-cost autonomous floor robot built on a repurposed x86 motherboard and a Roomba-class chassis, extended with a tri-star wheel cluster for stair climbing, a 2D LIDAR for SLAM, and a camera running Meta’s Segment Anything Model plus lightweight OCR for semantic perception. Its objective function is dual: complete dust coverage and an aesthetic constraint borrowed from the Japanese dry garden — every pass leaves a deliberate raked pattern, straight lines across open floor and concentric rings flowing around obstacles. We give the locomotion, mapping, perception, and path-planning mathematics, a bill of materials, and a build procedure.',
  keywords: ['robotics', 'SLAM', 'LIDAR', 'segment anything', 'coverage planning', 'edge AI', 'zen garden'],
  blocks: [
    {
      type: 'lead',
      text: 'A vacuum removes dust and leaves nothing behind. This robot removes dust and leaves *order* behind — a floor raked into the calm geometry of a Zen garden, obstacles wrapped in concentric rings, open ground combed into parallel lines. Cleaning as a contemplative act, executed by a machine.',
    },
    {
      type: 'heading',
      text: 'The concept',
    },
    {
      type: 'paragraph',
      text: 'Start with a spare motherboard and a Roomba-class differential-drive chassis. Add three things: a wheel cluster that can climb stairs, a sensor suite that can *understand* a room rather than merely bump around it, and a trailing micro-rake. The result is a robot whose task is not just coverage but composition — it solves dust as a coverage problem and beauty as a constraint on the path it takes to do so.',
    },
    {
      type: 'stats',
      items: [
        { value: 'x86', label: 'repurposed motherboard as the brain' },
        { value: '360°', label: '2D LIDAR for SLAM + obstacle avoidance' },
        { value: 'SAM', label: 'Meta segmentation for camera perception' },
        { value: '~2R', label: 'climbable step rise with a tri-star cluster' },
      ],
    },
    {
      type: 'heading',
      text: 'System architecture',
    },
    {
      type: 'paragraph',
      text: 'Five subsystems, one control loop. The motherboard hosts perception and planning; a microcontroller owns the real-time motor and rake control so the loop never misses a wheel command while a segmentation model is thinking.',
    },
    {
      type: 'table',
      columns: ['Subsystem', 'Hardware', 'Function'],
      rows: [
        ['Compute', 'Spare x86 board + NVMe + 16 GB RAM', 'SLAM, SAM/OCR inference, path planning'],
        ['Real-time MCU', 'ESP32 / STM32', 'Motor PWM, encoder odometry, rake servo, e-stop'],
        ['Locomotion', 'Differential drive + tri-star (wheg) cluster', 'Flat driving and stair climbing'],
        ['Ranging', '360° 2D LIDAR (e.g. RPLIDAR-class)', 'Mapping, localization, collision avoidance'],
        ['Vision', 'RGB camera (+ optional depth)', 'SAM segmentation, OCR, obstacle semantics'],
        ['Actuation', 'Vacuum intake + trailing micro-rake', 'Dust removal + pattern imprint'],
      ],
      caption: 'The rake is a passive, servo-liftable comb; lifting it mid-run lets the robot suppress the pattern where it is unwanted.',
    },
    {
      type: 'heading',
      text: 'Locomotion: climbing the stairs',
    },
    {
      type: 'paragraph',
      text: 'A single rigid wheel of radius *R* can only passively mount a step whose rise *s* is a fraction of its radius — the contact geometry limits it. A **tri-star cluster** (three wheels on a rotating carrier — a *wheg*) breaks that limit: when the leading wheel stalls against a riser, the whole carrier rotates, walking the cluster over steps up to roughly twice the wheel radius.',
    },
    {
      type: 'equation',
      display: 's_max = R(1 − cos φ_max)   →   tri-star:   s_max ≈ 2R',
      where: [
        '**s_max** — tallest step rise the robot can mount',
        '**R** — wheel radius; **φ_max** — max contact angle before slip',
        'Tri-star carrier rotation replaces the slip limit with a stepping gait',
      ],
      note: 'The binding constraint then shifts from geometry to torque and tipping stability, below.',
    },
    {
      type: 'paragraph',
      text: 'Two constraints gate a climb. **Torque:** each drive motor must supply enough to lift the machine’s weight over the step edge. **Stability:** the projection of the center of mass must stay within the support polygon throughout the gait, or the robot tips backward.',
    },
    {
      type: 'equation',
      display: 'τ ≥ m·g·R_eff / N_drive     and     x_CoM < d_support',
      where: [
        '**τ** — per-motor stall torque; **m** — robot mass; **g** — 9.81 m·s⁻²',
        '**R_eff** — effective lever from contact point to axle during the step',
        '**x_CoM** — horizontal CoM offset; **d_support** — rearward edge of the support base',
      ],
      note: 'Mount the battery low and rearward: it lowers the CoM and widens the stability margin on ascent.',
    },
    {
      type: 'figure',
      viz: 'stair-climb',
      caption: 'A rigid wheel jams against a riser at s ≈ R(1−cos φ); a tri-star cluster rotates its carrier and steps over rises up to ≈ 2R.',
    },
    {
      type: 'heading',
      text: 'Mapping: 2D LIDAR SLAM',
    },
    {
      type: 'paragraph',
      text: 'The LIDAR builds and localizes against an occupancy grid. Each scan return updates a cell’s log-odds of being occupied; accumulating evidence across many scans yields a crisp map even from noisy individual returns. Pose is recovered by *scan matching* — finding the rigid transform that best aligns the new scan to the map.',
    },
    {
      type: 'equation',
      display: 'l_t(m) = l_{t−1}(m) + log[ p(m | z_t) / (1 − p(m | z_t)) ] − l_0',
      where: [
        '**l_t(m)** — log-odds occupancy of cell *m* at time *t*',
        '**p(m | z_t)** — inverse-sensor-model probability from measurement *z_t*',
        '**l_0** — prior log-odds (unknown space)',
      ],
      note: 'Log-odds accumulation makes the update additive and numerically stable; the map is recovered as p(m) = 1 − 1/(1 + e^{l_t}).',
    },
    {
      type: 'equation',
      display: '(R*, t*) = argmin_{R,t}  Σᵢ ‖ R·pᵢ + t − qᵢ ‖²',
      where: [
        '**pᵢ** — current scan points; **qᵢ** — nearest map points',
        '**R, t** — the rigid rotation and translation of the robot pose',
      ],
      note: 'Iterated closest-point scan matching closes the localization loop; loop-closure corrections are folded back through a pose graph.',
    },
    {
      type: 'heading',
      text: 'Perception: Meta’s SAM + OCR on the edge',
    },
    {
      type: 'paragraph',
      text: 'LIDAR knows *where* things are; it does not know *what* they are. The camera closes that gap. **SAM (Segment Anything Model)** turns the frame into clean object masks with no task-specific training — furniture legs, a spilled pile, a rug edge, a pet. A distilled variant (MobileSAM / EfficientSAM / FastSAM) runs at interactive rates on modest hardware, and a lightweight **OCR** pass reads text the robot should obey.',
    },
    {
      type: 'list',
      items: [
        '**Segment** the frame with SAM → per-object masks, then classify each mask (dust pile, obstacle, no-go rug, cable, pet).',
        '**Localize** masks into the map by projecting through the calibrated camera onto the LIDAR ground plane.',
        '**Read** signage/labels with OCR — a printed “no-go” card, a room label, a charging-dock marker — and turn text into policy.',
        '**Act** on semantics: vacuum dust piles first, rake around obstacles, lift the rake over rugs, never cross a no-go boundary.',
      ],
    },
    {
      type: 'callout',
      title: 'Edge-inference budget',
      text: 'Perception runs locally — no cloud. A distilled SAM encoder plus a small OCR model fits comfortably in a few GB; if a discrete GPU is attached, the same 24/7 inference discipline from our always-on lab applies. Propose-perceive-act stays on-device so the robot works with the network unplugged.',
    },
    {
      type: 'heading',
      text: 'Coverage that solves dust',
    },
    {
      type: 'paragraph',
      text: 'Dust removal is a *coverage* problem: the intake footprint of width *w* must sweep every reachable cell at least once. Boustrophedon (back-and-forth) decomposition guarantees complete coverage of each obstacle-free cell; the free space is split into such cells and stitched by a travelling path between them.',
    },
    {
      type: 'equation',
      display: 'N_passes = W / (w·(1 − o)),     T_cover ≈ A / (v·w·η)',
      where: [
        '**W** — width of a coverage cell; **w** — intake width; **o** — pass overlap fraction',
        '**A** — free-floor area; **v** — drive speed; **η** — coverage efficiency (path overhead)',
      ],
      note: 'The same pass structure that guarantees coverage is exactly what the rake turns into a pattern — cleaning and composition share one path.',
    },
    {
      type: 'heading',
      text: 'The zen pattern',
    },
    {
      type: 'paragraph',
      text: 'Here is the elegant part. A Zen garden is raked in two motifs: straight parallel lines across open sand, and concentric rings around each rock. Both are *level sets*. Parallel lines are level sets of a linear field; rings around an obstacle are level sets of the distance field to that obstacle. Coverage planning already produces parallel passes — so we generate the rings as offset contours of the obstacle boundary and blend the two fields.',
    },
    {
      type: 'equation',
      display: 'C_k = { x : d(x, ∂O) = k·Δ },   k = 1, 2, 3, …',
      where: [
        '**C_k** — the *k*-th raked ring around obstacle *O*',
        '**d(x, ∂O)** — Euclidean distance from point *x* to the obstacle boundary',
        '**Δ** — rake tine spacing (the width of one raked line)',
      ],
      note: 'Offsetting the boundary by successive multiples of Δ yields nested rings; a distance-transform of the occupancy grid gives d(x, ∂O) directly, so the whole pattern is computed from the map the LIDAR already built.',
    },
    {
      type: 'figure',
      viz: 'zen-pattern',
      caption: 'Coverage passes rendered as raked sand: parallel lines over open floor, concentric rings flowing around each obstacle — full dust coverage and a karesansui pattern from a single plan.',
    },
    {
      type: 'heading',
      text: 'The autonomy loop',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Perceive',
          text: 'Fuse a LIDAR scan with a SAM-segmented, OCR-read camera frame into a semantic occupancy grid: free, dust, obstacle, no-go, dock.',
        },
        {
          title: 'Localize',
          text: 'Scan-match against the map to recover pose; update occupancy log-odds; correct drift at loop closures.',
        },
        {
          title: 'Plan',
          text: 'Compute a boustrophedon coverage path over free space and blend in distance-field rings around obstacles to satisfy the aesthetic constraint.',
        },
        {
          title: 'Act',
          text: 'Drive the path, vacuuming; hold the rake down on sand, lift it over rugs and no-go zones; climb stairs with the tri-star gait when a floor is finished.',
        },
        {
          title: 'Learn',
          text: 'Persist the map, the furniture semantics, and which patterns the human kept vs. undid — refine future compositions.',
        },
      ],
    },
    {
      type: 'heading',
      text: 'Build procedure',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Chassis + drive',
          text: 'Mount the tri-star clusters to the differential-drive motors; wire encoders to the MCU. Verify flat driving and a slow stair ascent under manual command before autonomy.',
        },
        {
          title: 'Compute + power',
          text: 'Fit the spare motherboard low and rearward (CoM!). Add a regulated battery, an NVMe with the OS + models, and a hardware e-stop on the MCU.',
        },
        {
          title: 'Sensors',
          text: 'Bolt the LIDAR at a clear 360° height; rigidly mount the camera and record its intrinsics and the camera→LIDAR extrinsics — projection accuracy depends on this calibration.',
        },
        {
          title: 'Stack',
          text: 'Run a SLAM node (occupancy grid + scan matching), a distilled SAM + OCR perception node, and a coverage/pattern planner. Bridge planner → MCU over serial.',
        },
        {
          title: 'Rake + tune',
          text: 'Attach the servo-liftable comb behind the intake. Tune tine spacing Δ to the intake width w so coverage and pattern align, then let it garden.',
        },
      ],
    },
    {
      type: 'quote',
      text: 'The most advanced machines will not announce themselves with noise. They will do their work and leave the world a little more ordered, a little more beautiful, than they found it — even the floor.',
      attribution: 'EcoSurge Autonomous Systems Division',
    },
  ],
}
