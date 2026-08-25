# Roombot deck: 3D-printed sensor + compute plate for a Roomba-class chassis

Parametric OpenSCAD, three files, one script. Companion decision doc:
`docs/roombot-vision-infra.md`; build runbook: `docs/zen-gardener-build.md`.

```
roombot-deck.scad   plate (170x170), wings, LIDAR pedestal
camera-mast.scad    12 mm mast + serrated tilt head (Pi Cam 3 or XIAO ESP32S3 Sense)
render.sh           renders every part to stl/ (needs `openscad` on PATH)
```

`stl/` is a build artifact; regenerate it, do not hand-edit it.

## Parts and print settings

| Part | Material | Layer | Walls | Infill | Supports | Orientation |
|---|---|---|---|---|---|---|
| deck-plate | PETG | 0.2 | 4 | 25% gyroid | none | ribs down (plate top faces the bed) |
| deck-wing (x2, mirror one) | PETG | 0.2 | 4 | 25% | none | same |
| deck-lidar_pedestal | PETG | 0.2 | 3 | 20% | none | flange down |
| camera-mast | PETG | 0.2 | 4 | 30% | none | socket tongue down, stands vertically |
| camera-head-picam3 / -xiao | PETG | 0.16 | 3 | 25% | yes (under the fork ears) | camera plate flat on the bed |

PETG over PLA because the deck sits over a battery and a warm SBC; PLA creeps
at 55 C. Every part fits a **180x180** bed (Bambu A1 mini class); the plate
is 170x170 by design and the wings (70x120) reach the Roomba's 340 mm
diameter when the payload outgrows the center.

## Hardware

- Heat-set inserts: M2.5 for the SBC standoffs and the LIDAR (bore 3.5 mm,
  `insert_d_m25`), M3 for the mast set screws (`mast_screw_d` 3.4 clearance).
- Attachment to the Roomba: four 20 mm hook-and-loop straps through the
  corner slots, plus 3M VHB pads under the rib ring. No holes in the Roomba.
  For an iRobot Create 3 set `create3 = true` and verify `create3_pitch`
  against iRobot's faceplate drawing before printing (marked TODO in the
  file; Create 3 is discontinued, see the infra doc).
- Battery straps through the two rear slots (`bat_offset`, `bat_slot_pitch`);
  the pack goes rearward and low per the build doc's CoM rule.

## Parameters you must check before printing

Marked in the .scad with `verify`:

| Parameter | Default | Verify against |
|---|---|---|
| `a1_holes` | 60 x 40 pitch | RPLIDAR A1M8 datasheet mounting drawing |
| `c1_bolt_circle`, `c1_hole_n` | 46 / 4 | RPLIDAR C1 datasheet |
| `opi5_holes`, `jetson_holes` | approximate | the board's mechanical drawing |
| `picam_lens` (camera-mast.scad) | (0, 4.7) | Camera Module 3 drawing |
| `create3_pitch` | 20 | iRobot Create 3 faceplate drawing |

Pi 5 (58 x 49 pitch, 2.7 mm holes) and Camera Module 3 (21 x 12.5 pitch,
2.2 mm) are from the official drawings and need no check.

## Render

```bash
./render.sh                                   # all parts → stl/
openscad -D 'sbc="opi5"' -D 'lidar="c1"' -o stl/deck-plate.stl roombot-deck.scad
openscad -D 'part="all"' roombot-deck.scad    # GUI preview with a ghost Roomba + Pi
```

On this box `openscad` is the extracted 2021.01 AppImage at
`~/.local/opt/openscad` (launcher `~/.local/bin/openscad`); set
`QT_QPA_PLATFORM=offscreen` for headless renders.
