#!/bin/bash
# Render every roombot part to STL. Requires `openscad` on PATH
# (this box: ~/.local/bin/openscad → extracted AppImage 2021.01).
set -e
cd "$(dirname "$0")"; mkdir -p stl
export QT_QPA_PLATFORM=offscreen
for p in plate wing lidar_pedestal; do openscad -q -D "part=\"$p\"" -o "stl/deck-$p.stl" roombot-deck.scad; echo "stl/deck-$p.stl"; done
openscad -q -D 'part="mast"' -o stl/camera-mast.stl camera-mast.scad; echo stl/camera-mast.stl
for c in picam3 xiao; do openscad -q -D 'part="head"' -D "cam=\"$c\"" -o "stl/camera-head-$c.stl" camera-mast.scad; echo "stl/camera-head-$c.stl"; done
