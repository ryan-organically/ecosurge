# Zen Gardener — Build Runbook

A stair-climbing autonomous floor robot that vacuums dust and rakes the floor
into a Zen-garden pattern. Built on a **spare x86 motherboard** + a Roomba-class
chassis. Companion study: `/blog/zen-gardener`.

> This is a hobby/maker spec. Anything that climbs stairs can fall down them —
> test on the ground, tether during stair trials, and keep a hardware e-stop.

## 1. Bill of materials

| Group | Part | Notes |
|-------|------|-------|
| Brain | Spare x86 motherboard + CPU, 16 GB RAM, NVMe | Runs Linux + ROS 2 + perception |
| Power | LiFePO4 pack + DC-DC to board/motor rails | Mount **low and rearward** (CoM) |
| Real-time MCU | ESP32 or STM32 | Motor PWM, encoders, rake servo, e-stop |
| Drive | 2× geared motors + encoders | Differential drive |
| Stair kit | Tri-star (wheg) wheel clusters | Climb rise ≈ 2× wheel radius |
| LIDAR | 360° 2D LIDAR (RPLIDAR A1/C1-class) | SLAM + obstacle ranging |
| Camera | USB/CSI RGB (optional depth) | SAM segmentation + OCR |
| Clean/rake | Vacuum intake + servo-liftable comb | Tine spacing Δ = intake width w |
| Safety | Physical e-stop, wheel-drop + cliff sensors | Cliff sensors are mandatory near stairs |

## 2. Wiring & mechanical

1. Tri-star clusters onto the drive motors; encoders → MCU.
2. Motherboard mounted **low, toward the rear** — this lowers the center of
   mass and widens the tip-over margin on ascent (`x_CoM < d_support`).
3. LIDAR at a clear 360° height (no chassis occlusion).
4. Camera rigidly fixed. Record **camera intrinsics** and the
   **camera→LIDAR extrinsics** — ground-plane projection accuracy depends on it.
5. Rake comb behind the intake on a servo so it can lift over rugs / no-go zones.
6. Hardware e-stop cutting motor power, owned by the MCU.

## 3. Software stack

- **OS/middleware:** Linux + ROS 2 (Humble/Jazzy). Reuse existing drivers.
- **SLAM:** `slam_toolbox` (2D LIDAR occupancy grid + scan matching + pose graph).
- **Perception:** distilled Segment Anything — **MobileSAM / EfficientSAM / FastSAM**
  for interactive-rate masks on modest hardware — plus a light OCR
  (PaddleOCR / Tesseract) for signage. Classify masks → {dust, obstacle, no-go,
  cable, pet, dock}. Project masks to the map through the calibrated camera.
- **Planning:** boustrophedon coverage over free space (`N_passes = W/(w(1−o))`),
  blended with distance-transform offset rings around obstacles for the rake
  pattern (`C_k = {x : d(x,∂O) = kΔ}`).
- **Control:** planner → MCU over serial; MCU runs the real-time drive + rake +
  e-stop loop so a slow perception frame never stalls a wheel command.

## 4. Bring-up order (don't skip)

1. **Teleop on flat floor** — verify drive, encoders, e-stop.
2. **LIDAR SLAM** — drive a room, confirm a clean occupancy map + stable pose.
3. **Perception** — confirm SAM masks + OCR reads on live camera; check map
   projection lands masks in the right place.
4. **Coverage only (rake up)** — validate complete dust coverage + no-go respect.
5. **Pattern (rake down)** — tune Δ to w so passes and rings align.
6. **Stairs last** — manual, tethered ascent first; enable autonomous climb only
   after cliff sensors and tip-over margin are verified.

## 5. Edge-inference note

Perception runs **on-device** — no cloud, works with the network unplugged. If a
discrete GPU is attached, apply the 24/7 inference discipline from
`docs/local-model-lab.md` (VRAM budgeting, watchdog, propose-only guardrails).

## 6. Safety checklist

- [ ] Cliff/wheel-drop sensors active and tested near every drop.
- [ ] Hardware e-stop cuts motor power directly (not via the x86 board).
- [ ] Stair trials tethered until repeatable.
- [ ] Rake auto-lifts on obstacle/no-go/rug and on loss of localization.
- [ ] Battery secured; thermal headroom on the compute board under load.
