# Roombot vision: cheapest camera + inference infra

Decision doc for the Zen Gardener chassis (`zen-gardener-build.md`) and any
EcoSurge floor robot that follows. Written 2026-08-25 against live prices;
numbers are cited to the source that was fetched that day. Anything the
research could not pin down is marked UNVERIFIED rather than rounded.

## 1. The constraint, stated plainly

SAM-class segmentation is datacenter-shaped. SAM 3.1 is an 848M-parameter,
3.5 GB PyTorch checkpoint with no ONNX or TensorRT export and benchmarks
published only on H100/H200. SAM 2.1 tiny is small (39 MB) but its published
FPS is on an A100. Nothing in the SAM family has a measured number on a
Raspberry Pi, and only one variant (FastSAM-s) has an official Hailo-8L
figure. On-robot SAM is therefore not a hardware purchase, it is a research
project, and the board that could plausibly run it (Jetson Orin Nano Super)
went from $249 to **$399** in the July 2026 NVIDIA price hike, for a card that
still could not run full SAM 2 above ~2 FPS (AGX Orin, a stronger part,
reports ~2 FPS).

Meanwhile we already own two idle Ada GPUs on the LAN: the RTX 4060 (8 GB)
and the 4070 Ti (12 GB), with the pooled rail documented in
`~/Documents/pooled-compute-protocol.md`. The 4060 sits idle whenever the
coder runs solo on the 7187 (per the 2026-08-24 landscape devlog).

## 2. The solve: thin robot, fat desktop

Split perception by the latency it needs, not by where the camera is.

| Loop | Needs | Runs on | Link |
|---|---|---|---|
| Reflexes: bumper, cliff, wheel-drop, e-stop, motor PWM | < 10 ms, must survive WiFi loss | ESP32 on the robot, reading Roomba OI sensor packets | serial (OI, 115200 8N1, 5 V TTL) |
| Geometry: LIDAR SLAM, obstacle ranging, coverage planning | 5-10 Hz, tolerates 100 ms | desktop (ROS 2 + `slam_toolbox`) in v1; Pi 5 on-robot in v2 | LIDAR scans over WiFi (UDP) |
| Semantics: dust / cable / pet / no-go / dock masks, OCR, depth | 2-10 Hz, tolerates 100-400 ms | **desktop GPU** (4060) | MJPEG 640x480 over WiFi |

The robot's semantic loop is allowed to be slow and allowed to drop out. A
WiFi stall degrades the robot to "LIDAR coverage with the rake up" (build doc
§4 step 4), never to a collision, because the reflex loop never left the
MCU. Clearpath's production numbers back the budget: worst-case house WiFi
measured 60 Mbps UDP, and 640x480 MJPEG at 10-15 FPS is ~4-8 Mbps
(docs.clearpathrobotics.com, video_over_wifi). Bandwidth is not the risk;
jitter is, and the reflex split is the answer to jitter.

Verdict on SAM on the desktop: run **EfficientViT-SAM L0/L1** or
**SAM 2.1 hiera-tiny** as the promptable mask model on the 4060, prompted by
YOLO boxes. Bench SAM 3.1 text-prompting ("the cable", "the dock") on the
4060 as an experiment, not a dependency: its VRAM under PyTorch is
UNVERIFIED and plausibly 6-10 GB, which is the whole card. No consumer-GPU
FPS number exists for any of these; the first task on the perception ticket
is to measure them here.

## 3. Camera + on-robot compute, three tiers

Prices fetched 2026-08-25 unless noted.

### Tier 0, "penny": ESP32 only, ~$45 of new electronics

| Part | Price | Source |
|---|---|---|
| Seeed XIAO ESP32S3 Sense (OV2640 camera, mic, WiFi/BLE, 21x17.5 mm) | $14.90 | seeedstudio.com |
| ESP32 dev board for the OI / motor / e-stop loop | ~$6-8 | UNVERIFIED (commodity) |
| 5 V TTL serial adapter or level shifter for the OI mini-DIN | ~$5-10 | UNVERIFIED (FT232RL cable class) |
| 7-pin mini-DIN pigtail | ~$5 | UNVERIFIED |
| Optional: InnoMaker U20CAM-720P UVC webcam if a USB host exists | $12.99-13.99 | inno-maker.com |

What it gives: 640x480 MJPEG at 10-14 FPS over WiFi (a classic ESP32-CAM
sustains 14.19 FPS at 640x480 over 6 hours, arxiv 2505.24081); the S3 does
at least that. Zero on-robot inference; every semantic frame goes to the
4060. The LIDAR (RPLIDAR A1/C1) plugs into the second ESP32's UART and its
scans are forwarded as UDP packets to the desktop's ROS 2 graph. The whole
ROS 2 stack, SLAM included, runs on the desktop.

This is the recommended starting tier. Everything the Zen Gardener needs to
prove (teleop, SLAM map, masks landing on the map, coverage, rake pattern)
can be proved here, and nothing bought is wasted by the next tier.

### Tier 1, "pi": on-robot ROS 2, optional NPU, ~$135-230

| Part | Price | Source |
|---|---|---|
| Raspberry Pi 5, 4 GB | $110 | pishop.us (Feb 2026 DRAM hike; was $60) |
| Camera Module 3 (or Wide, $35) | $25 | raspberrypi.com |
| AI HAT+ 13 TOPS (Hailo-8L), optional | $70 | raspberrypi.com, pre-hike price, UNVERIFIED current |
| AI HAT+ 26 TOPS (Hailo-8), optional | $110 | same caveat |
| AI HAT+ 2 (Hailo-10H, 8 GB, 40 TOPS INT4), optional | $130 | raspberrypi.com, launched 2026-01-15 |

Move here when the WiFi tether hurts: SLAM and planning run on the Pi, the
robot keeps mapping through a dropout, and the desktop only receives frames
for semantics. With a Hailo-8L, on-robot **YOLO11n-seg / YOLO26n** at 30+ FPS
and **FastSAM-s at 37.6 FPS** (batch 1, 640x640, official Hailo model zoo,
the only SAM-family number that exists for this HAT) cover the reflex-adjacent
"is that a cable" question locally, with SAM-quality masks still coming from
the desktop. Pi 5 CPU-only YOLO26n is ~39 ms/frame on x86 ONNX; on the Pi's
ARM cores expect well under 10 FPS, UNVERIFIED.

Skip the Pi Zero 2 W ($15) as a camera streamer: the XIAO does the same job
for the same money with a camera already attached and no SD card to corrupt.

### Tier 2, "jetson": not recommended for this robot

Jetson Orin Nano Super dev kit is $399 (was $249) and the bare 8 GB module is
also $399. It runs YOLO26n at ~219 FPS TensorRT FP16 and is the only edge
part with EfficientViT-SAM / NanoSAM TensorRT paths, but for a house robot
with a 4060 on the LAN it buys latency margin we do not need at the price
of the whole Tier 1 stack twice. Reconsider only for an outdoor/field robot
that leaves WiFi range (the `robotic-vision` study's fieldwork case).

### Dead ends, so nobody re-researches them

- **Google Coral USB**: discontinued, repo archived 2026-04-19, $160+ used.
- **OAK-D Lite**: $269 after Luxonis's July 2026 increase; its 4 TOPS runs
  MobileNet-class detectors, not SAM-class. Stereo depth is the only thing it
  adds, and the LIDAR already gives us metric range.
- **Intel RealSense D435i / D405**: $334 / $272; RealSense is an independent
  company now and still shipping, but same argument as OAK-D.
- **Raspberry Pi AI Camera (IMX500)**: $70, on-sensor classification and
  detection with no host NPU. Neat for a Pi Zero, irrelevant when the desktop
  does semantics.
- **Open-vocabulary detectors on the edge** (YOLO-World, OWLv2, Grounding
  DINO 1.5 Edge): none run acceptably on Pi 5 or Hailo-8L; Grounding DINO
  Edge does >10 FPS on an Orin NX only. Open-vocab is desktop-only here.
- **RK3588 boards** (Orange Pi 5 Plus $220, Rock 5B ~$60-100 street): RKNN
  has MobileSAM and YOLO26 demos, but the Pi 5 + HAT path has the better
  documented model zoo and the same price.

## 4. Chassis

- **iRobot Create 3 is gone.** iRobot filed Chapter 11 on 2025-12-15 and is
  being acquired by its contract manufacturer; Create 3 shows "no longer
  stocked" at Adafruit and the official shop link has been dead since
  2024-11. Do not plan around one.
- **Buy a used Roomba 500/600/700/800-series**, which carry the classic 7-pin
  mini-DIN Open Interface (115200 8N1, 0-5 V TTL). A 694 was $54.99 on eBay
  at research time. i-series and newer moved control to WiFi/MQTT
  (`dorita980`) and the mini-DIN presence there is UNVERIFIED; j-series and
  the 2024-25 LIDAR refreshes are presumed not OI-hackable.
- OI spec mirrors (the edu.irobot.com host failed DNS during research):
  `cdn-shop.adafruit.com/datasheets/create_2_Open_Interface_Spec.pdf`.
- Stair climbing (tri-star whegs) stays a later phase per the build doc; the
  used Roomba is the flat-floor development mule for perception and pattern
  work, and the deck plate in `hardware/roombot/` is designed to move to
  whatever chassis comes next (strap slots, not chassis-specific holes).

## 5. Model stack, by where it runs

| Job | Desktop 4060 (v1) | On-robot Hailo-8L (Tier 1, optional) |
|---|---|---|
| Detect (closed vocab: cable, pet, dock, rug, dust patch) | YOLO26n / YOLO11n-seg, fine-tuned on our floor | same models, Hailo-compiled, 30+ FPS |
| Promptable mask | EfficientViT-SAM L0/L1 or SAM 2.1 tiny, box-prompted by the detector | FastSAM-s (37.6 FPS official) |
| Text-prompted mask (experiment) | SAM 3.1, VRAM UNVERIFIED, bench first | none |
| Depth prior | Depth Anything V2 Small (25M; ~10 FPS on Orin NX, no 4060 number) | none; LIDAR is the metric source |
| OCR (signage, no-go labels) | PP-OCRv6 Tiny (1.5M, June 2026; RapidOCR default) | PP-OCRv6 Tiny on CPU, UNVERIFIED on ARM |

Bench order on the 4060, first ticket: YOLO26n, EfficientViT-SAM L0, SAM 2.1
tiny, Depth Anything V2 Small, PP-OCRv6 Tiny, then SAM 3.1 as the stretch.
Record ms/frame and VRAM at 640x480 in a devlog; those numbers do not exist
publicly for this class of card.

## 6. Wire protocol, v1 (Tier 0)

```
XIAO S3 Sense  --MJPEG/HTTP 640x480 @10-15 FPS-->  desktop  perception service (4060)
ESP32 (OI)     --UDP: LIDAR scans, OI sensors, odometry-->  desktop  ROS 2 (slam_toolbox, planner)
desktop        --UDP: velocity + rake commands, 10 Hz-->   ESP32   (MCU owns e-stop; 500 ms watchdog stops the wheels)
```

No turnkey OSS package does the "cheap camera on robot, inference on desktop
GPU" loop; the research found FogROS2 (general offload) and ROS 2
`compressed_image_transport` as the closest. The v1 plumbing is a few hundred
lines: the perception service consumes the MJPEG stream, publishes masks as
ROS 2 messages, and the planner projects them to the map through the
calibrated intrinsics (`robotic-vision` study). Use Zenoh RMW only if DDS
discovery over WiFi stutters; for one robot it should not.

## 7. Sources (fetched 2026-08-25)

Meta SAM 3.1 repo and HF checkpoint page; docs.ultralytics.com (YOLO26,
Jetson benchmarks); hailo.ai model zoo (FastSAM-s); mit-han-lab EfficientViT;
pishop.us and raspberrypi.com (Pi pricing, AI HAT+ 2); cnx-software.com
(Jetson July 2026 price change); seeedstudio.com; inno-maker.com;
shop.luxonis.com; store.intelrealsense.com; github.com/google-coral/edgetpu
issue 363; docs.clearpathrobotics.com video_over_wifi; arxiv 2505.24081
(ESP32-CAM sustained FPS); arxiv 2606.13108 (PP-OCRv6); iRobot Chapter 11
coverage and Adafruit Create 3 listing.
