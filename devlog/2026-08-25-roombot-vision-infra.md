# Roombot vision infra decided, deck blueprints drawn

**Date:** 2026-08-25

Ryan: local SAM2 and friends "are for big beefy GPUs, but how do we solve
for ecosurge vision robotics?", plus a 3D-printer spec for the roombot, the
cheapest camera + inference infra, and blueprints. Session ran from the
claude-glasses repo (the OLED HUD half is logged there).

## Inventory first

This box: RTX 4060 8 GB, no SAM checkpoints anywhere (HF cache holds DINO,
Parakeet/Nemotron speech, TripoSR, Hunyuan3D-2mini, SD 1.5). The pooled
rail (`~/Documents/pooled-compute-protocol.md`) adds the 7187's 4070 Ti. The
2026-08-24 landscape devlog had already said SAM 3.1 is 848M / 3.5 GB /
PyTorch-only; the research this session found its VRAM is UNVERIFIED (Meta
benchmarks it on H100/H200 only) and plausibly 6-10 GB, not "<4 GB".

## The decision: thin robot, fat desktop

`docs/roombot-vision-infra.md` is the decision doc. Split perception by
latency, not by camera location: reflexes (bumper, cliff, e-stop, PWM) on
an ESP32 reading the Roomba OI; geometry (LIDAR SLAM, coverage) on the
desktop in v1, a Pi 5 in v2; semantics (masks, OCR, depth) on the 4060 over
WiFi, always. A WiFi dropout degrades to LIDAR-only coverage with the rake
up, never to a collision. Clearpath's production WiFi numbers (60 Mbps
worst case; MJPEG 640x480 at 10-15 FPS is 4-8 Mbps) make bandwidth a
non-issue; the reflex split is the answer to jitter.

Cheapest infra, priced 2026-08-25: **Tier 0** is a XIAO ESP32S3 Sense
($14.90) streaming MJPEG plus a second ESP32 for the OI loop, ~$45 of new
electronics, zero on-robot inference. **Tier 1** is Pi 5 4 GB ($110 after
the Feb 2026 DRAM hike, was $60) + Cam 3 ($25) + optional AI HAT+ ($70-130),
where FastSAM-s at 37.6 FPS is the only SAM-family model with an official
Hailo-8L number. **Jetson Orin Nano Super is $399 now** (was $249, July
2026 NVIDIA hike) and not worth it with a 4060 on the LAN. Dead ends listed
in the doc so nobody re-researches them: Coral (discontinued, repo archived
2026-04-19), OAK-D Lite ($269), RealSense ($272-334), open-vocab detectors
on Pi/Hailo (none viable).

Chassis: **Create 3 is gone** (iRobot Chapter 11 2025-12-15, being bought
by its contract manufacturer; Adafruit "no longer stocked"). Buy a used
500/600/700/800-series Roomba for the 7-pin mini-DIN OI (a 694 was $54.99
on eBay); i-series OI presence is UNVERIFIED, j-series presumed not.

## Blueprints

`hardware/roombot/`: `roombot-deck.scad` (170x170 plate for a 180 bed,
Pi 5 / Orange Pi 5 / Jetson standoffs by `sbc`, LIDAR pedestal footprint,
mast socket, battery + Roomba strap slots, hex lightening, puzzle-tab wings
to reach the 340 mm diameter, optional Create 3 12 mm grid), `camera-mast.scad`
(12 mm mast, serrated M3 tilt head for Pi Cam 3 or XIAO Sense), `render.sh`
→ `stl/` (gitignored). All parts render headless in OpenSCAD 2021.01
(AppImage at `~/.local/opt/openscad`). Two bugs caught from PNG previews
before anything printed: the wing dovetail was oriented across the wing
(replaced with flat puzzle tabs in the plate's plane), and centered-cube
slots only nicked the plate top (now full through-cuts).

Settled by research: Create 3 faceplate = 12 mm grid, 3 mm holes; XIAO =
21 x 17.8; Pi Cam 3 = 25 x 24 x 11.5. Still placeholders, flagged in the
.scad and README: RPLIDAR A1 hole pitch (4x M2.5 confirmed, spacing not),
C1 hole pattern, LIDAR clear height (datasheet PDFs would not text-extract;
URLs are in the file). `ped_h` is 30 for A1 and 45 for C1 so the scan plane
clears the ~60 mm camera head either way.

## Tickets (EcoSurge)

- Perception bench on the 4060 (YOLO26n, EfficientViT-SAM L0, SAM 2.1
  tiny, Depth Anything V2 Small, PP-OCRv6 Tiny, then SAM 3.1), due 09-08.
  No consumer-GPU FPS number exists publicly for any of these.
- Tier 0 BOM order (Roomba 600, XIAO Sense, ESP32 + TTL adapter, RPLIDAR
  C1 whose price the research did not pin), due 09-05.
- Deck: set the LIDAR hole patterns from the datasheets, test-print plate +
  mast, due 09-12.

Commits (local only, per Ryan): `cbb2d15` blueprints + infra doc, then the
README/parameter follow-up.
