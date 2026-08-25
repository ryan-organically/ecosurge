// EcoSurge Zen Gardener ("roombot") — top-deck compute + sensor plate
// -------------------------------------------------------------------
// Parts (render one at a time with -D 'part="..."'):
//   plate        : central deck plate, 170x170 (fits a 180x180 A1 mini bed),
//                  standoff holes for a Raspberry Pi 5 (or Orange Pi 5 / Jetson
//                  Orin Nano dev kit via `sbc`), a LIDAR pedestal footprint,
//                  a camera-mast socket, battery strap slots, cable slots,
//                  and strap/VHB attachment to a Roomba top cover.
//   wing         : optional side wing (x2) that dovetails onto the plate to
//                  reach the Roomba's 340 mm diameter for extra payload.
//   lidar_pedestal : riser with the RPLIDAR A1 / C1 hole pattern, keeps the
//                  scan plane above the camera mast and the Pi's cables.
//   mast         : camera mast + tilt head (see camera-mast.scad; included here
//                  only for the "all" preview).
//
// Frame: X = robot forward, Y = robot left, Z = up. Origin = plate center.

part = "plate";        // "plate" | "wing" | "lidar_pedestal" | "all"
sbc  = "pi5";          // "pi5" | "opi5" | "jetson" | "none"
lidar = "a1";          // "a1" | "c1" | "none"

// ---------- plate ----------
plate_w   = 170;       // X
plate_d   = 170;       // Y
plate_t   = 3.2;       // thickness (4 perimeters @0.4 nozzle, 0.2 layers → 16 layers)
plate_r   = 12;        // corner radius
rib_h     = 4;         // stiffening rib height under the plate
rib_w     = 2.4;
lightening = true;     // hex lightening pattern
hex_d     = 14;        // hex flat-to-flat
hex_wall  = 3.2;

// Roomba attachment: 4 strap slots (velcro / zip tie through the Roomba's
// handle recess) + 4 VHB pads. Roomba 600/i-series top covers have no screw
// pattern; Create 3 has a documented faceplate grid (set create3 = true).
strap_slot_w = 22; strap_slot_h = 5;
create3 = false;
create3_hole_d = 3.4;          // M3 clearance
create3_pitch  = 20;           // TODO verify against iRobot Create 3 faceplate drawing

// ---------- SBC standoffs ----------
standoff_h  = 8;               // clearance under the board for airflow / the AI HAT+ underside
standoff_od = 6.5;
insert_d_m25 = 3.5;            // heat-set insert bore for M2.5 (Ruthex/CNC Kitchen M2.5: 3.4-3.6)
insert_d_m3  = 4.0;            // M3 insert bore
sbc_offset = [-22, 0];         // where the SBC sits on the plate (X,Y)

// Raspberry Pi 5: 85x56, holes 58x49 pitch, 2.7 mm, 3.5 mm from the corner
pi5_holes = [[-29, -24.5], [29, -24.5], [-29, 24.5], [29, 24.5]];
// Orange Pi 5: 100x62, holes ~ 93.5x55 pitch (verify)
opi5_holes = [[-46.75, -27.5], [46.75, -27.5], [-46.75, 27.5], [46.75, 27.5]];
// Jetson Orin Nano dev kit carrier: 100x79, 4x M3 (verify)
jetson_holes = [[-43, -32], [43, -32], [-43, 32], [43, 32]];

// ---------- LIDAR pedestal ----------
lidar_offset = [40, 0];        // forward of center so the scan is not shadowed by the mast
ped_h    = 35;                 // pedestal height; scan plane must clear the camera head
ped_wall = 2.4;
// RPLIDAR A1: base 70 x 98.5 mm footprint, 4 mounting holes — hole pitch is a
// PARAMETER, verify against the A1M8 datasheet drawing before printing.
a1_holes = [[-30, -20], [30, -20], [-30, 20], [30, 20]];
a1_hole_d = 2.8;               // M2.5 clearance
// RPLIDAR C1: circular base, 3 or 4 holes on a bolt circle — verify.
c1_bolt_circle = 46; c1_hole_n = 4; c1_hole_d = 2.8;

// ---------- camera mast socket ----------
mast_offset = [72, 0];         // front edge, centered
mast_socket = [14, 14];        // square socket for the 12x12 mast (camera-mast.scad)
mast_socket_depth = 3.2;       // through the plate + rib
mast_screw_d = 3.4;

// ---------- battery ----------
bat_offset = [-55, 0];         // rearward, low: lowers CoM (build doc §2)
bat_slot_pitch = 70;           // two strap slots for a 12V LiFePO4 6-10 Ah pack

// ---------- wing ----------
wing_w = 70; wing_d = 120;
dt_w = 12; dt_h = 8; dt_tol = 0.12;   // puzzle-tab neck / depth / fit

$fn = 48;

// ======================================================================
module rrect(w, d, h, r) { hull() for (x=[-w/2+r, w/2-r], y=[-d/2+r, d/2-r]) translate([x, y, 0]) cylinder(r=r, h=h); }
module hexgrid(w, d, hd, wall, h) {
  pitch = hd + wall; rowp = pitch * 0.866;
  for (i=[-w/pitch/2-1 : w/pitch/2+1], j=[-d/rowp/2-1 : d/rowp/2+1]) {
    x = i*pitch + (j%2==0 ? 0 : pitch/2); y = j*rowp;
    if (abs(x) < w/2 - hd && abs(y) < d/2 - hd) translate([x, y, -1]) cylinder(d=hd/0.866, h=h+2, $fn=6);
  }
}
// flat puzzle tab in the XY plane: neck width w at y=0, flares to w+h at y=h. +Y = into the receiving part.
module puzzle_tab(w, h, t, tol) { linear_extrude(t) polygon([[-w/2-tol, -0.01-tol], [w/2+tol, -0.01-tol], [w/2+h*0.5+tol, h+tol], [-w/2-h*0.5-tol, h+tol]]); }
tab_xs = [-40, 40];

function sbc_holes() = sbc=="pi5" ? pi5_holes : sbc=="opi5" ? opi5_holes : sbc=="jetson" ? jetson_holes : [];
module keepout_sbc() { s = sbc=="pi5" ? [85,56] : sbc=="opi5" ? [100,62] : [100,79]; translate([sbc_offset[0], sbc_offset[1], 0]) square([s[0]+6, s[1]+6], center=true); }

// ======================================================================
module plate() {
  difference() {
    union() {
      rrect(plate_w, plate_d, plate_t, plate_r);
      // perimeter rib underneath
      translate([0, 0, -rib_h]) difference() { rrect(plate_w, plate_d, rib_h, plate_r); translate([0,0,-1]) rrect(plate_w-2*rib_w, plate_d-2*rib_w, rib_h+2, plate_r-rib_w); }
      // cross ribs
      for (a=[0, 90]) rotate([0,0,a]) translate([-plate_w/2, -rib_w/2, -rib_h]) cube([plate_w, rib_w, rib_h]);
      // SBC standoffs
      for (h = sbc_holes()) translate([sbc_offset[0]+h[0], sbc_offset[1]+h[1], 0]) cylinder(d=standoff_od, h=plate_t + standoff_h);
      // lidar pedestal footprint boss
      translate([lidar_offset[0], lidar_offset[1], 0]) for (h = (lidar=="a1" ? a1_holes : [])) translate(h) cylinder(d=standoff_od, h=plate_t+2);
      if (lidar=="c1") translate([lidar_offset[0], lidar_offset[1], 0]) for (i=[0:c1_hole_n-1]) rotate([0,0,i*360/c1_hole_n]) translate([c1_bolt_circle/2, 0, 0]) cylinder(d=standoff_od, h=plate_t+2);
      // mast socket boss
      translate([mast_offset[0], mast_offset[1], -rib_h]) rrect(mast_socket[0]+2*3, mast_socket[1]+2*3, rib_h+plate_t+6, 2);
    }
    // SBC insert bores
    for (h = sbc_holes()) translate([sbc_offset[0]+h[0], sbc_offset[1]+h[1], plate_t + standoff_h - 5]) cylinder(d=insert_d_m25, h=6);
    // lidar insert bores
    translate([lidar_offset[0], lidar_offset[1], 0]) {
      if (lidar=="a1") for (h = a1_holes) translate([h[0], h[1], -rib_h-1]) cylinder(d=insert_d_m25, h=plate_t+rib_h+4);
      if (lidar=="c1") for (i=[0:c1_hole_n-1]) rotate([0,0,i*360/c1_hole_n]) translate([c1_bolt_circle/2, 0, -rib_h-1]) cylinder(d=insert_d_m25, h=plate_t+rib_h+4);
      // lidar cable pass-through
      translate([0, 0, -rib_h-1]) cylinder(d=14, h=plate_t+rib_h+4);
    }
    // mast socket + two set-screw bores
    translate([mast_offset[0], mast_offset[1], -rib_h-1]) rrect(mast_socket[0], mast_socket[1], rib_h+plate_t+8, 1);
    translate([mast_offset[0], mast_offset[1], plate_t+3]) rotate([0,90,0]) cylinder(d=mast_screw_d, h=40, center=true);
    // lightening hexes, excluding the SBC, lidar, battery, mast, strap zones
    if (lightening) difference() {
      hexgrid(plate_w-2*hex_wall-6, plate_d-2*hex_wall-6, hex_d, hex_wall, plate_t);
      translate([0,0,-2]) linear_extrude(plate_t+4) {
        keepout_sbc();
        translate([lidar_offset[0], lidar_offset[1]]) square([80, 60], center=true);
        translate([mast_offset[0], mast_offset[1]]) square([30, 30], center=true);
        translate([bat_offset[0], bat_offset[1]]) square([bat_slot_pitch+20, 60], center=true);
        for (x=[-1,1], y=[-1,1]) translate([x*(plate_w/2-18), y*(plate_d/2-18)]) square([32, 16], center=true);
        for (x=[-1,1]) translate([x*(plate_w/2-6), 0]) square([14, 60], center=true);
      }
    }
    // battery strap slots (2, through-plate)
    for (x=[-1,1]) translate([bat_offset[0]-strap_slot_w/2, bat_offset[1] + x*bat_slot_pitch/2 - strap_slot_h/2, -rib_h-1]) cube([strap_slot_w, strap_slot_h, plate_t+rib_h+4]);
    // Roomba attachment strap slots at the 4 corners
    for (x=[-1,1], y=[-1,1]) translate([x*(plate_w/2-18)-strap_slot_w/2, y*(plate_d/2-18)-strap_slot_h/2, -rib_h-1]) cube([strap_slot_w, strap_slot_h, plate_t+rib_h+4]);
    // Create 3 faceplate grid (optional)
    if (create3) for (i=[-3:3], j=[-3:3]) translate([i*create3_pitch, j*create3_pitch, -rib_h-1]) cylinder(d=create3_hole_d, h=plate_t+rib_h+4);
    // SBC cable slot (USB/HDMI edge faces -Y on a Pi 5 when the SD slot faces -X)
    translate([sbc_offset[0]-30, sbc_offset[1]-34-3, -rib_h-1]) cube([60, 6, plate_t+rib_h+4]);
    // wing puzzle-tab slots on ±Y edges (tab enters from the edge, flares inward)
    for (s=[-1,1], x=tab_xs) translate([x, s*(plate_d/2), -rib_h-1]) rotate([0,0,s>0?180:0]) puzzle_tab(dt_w, dt_h, plate_t+rib_h+2, dt_tol);
  }
}

module wing() {
  difference() {
    union() {
      translate([-wing_d/2, 0, 0]) cube([wing_d, wing_w, plate_t]);
      // puzzle tabs along the inner edge (Y=0), pointing -Y into the plate
      for (x=tab_xs) translate([x, 0, 0]) rotate([0,0,180]) puzzle_tab(dt_w, dt_h, plate_t, 0);
      translate([-wing_d/2, 0, -rib_h]) difference() { cube([wing_d, wing_w, rib_h]); translate([rib_w, rib_w, -1]) cube([wing_d-2*rib_w, wing_w-2*rib_w, rib_h+2]); }
    }
    if (lightening) translate([0, wing_w/2, 0]) hexgrid(wing_d-12, wing_w-12, hex_d, hex_wall, plate_t);
    for (x=[-1,1]) translate([x*(wing_d/2-18)-strap_slot_w/2, wing_w-14-strap_slot_h/2, -rib_h-1]) cube([strap_slot_w, strap_slot_h, plate_t+rib_h+4]);
  }
}

module lidar_pedestal() {
  // hollow riser: A1 rectangular / C1 round, open sides for the cable
  if (lidar=="a1") {
    difference() {
      rrect(72, 48, ped_h, 4);
      translate([0,0,-1]) rrect(72-2*ped_wall, 48-2*ped_wall, ped_h+2, 4-ped_wall);
      for (a=[0,180]) rotate([0,0,a]) translate([36, 0, ped_h/2+2]) cube([10, 24, ped_h], center=true);
    }
    // top flange with A1 holes + bottom flange matching the plate bosses
    for (z=[0, ped_h-3]) translate([0,0,z]) difference() {
      rrect(72, 48, 3, 4);
      for (h=a1_holes) translate([h[0], h[1], -1]) cylinder(d=a1_hole_d, h=5);
      translate([0,0,-1]) cylinder(d=14, h=5);
    }
  }
  if (lidar=="c1") {
    difference() {
      cylinder(d=c1_bolt_circle+12, h=ped_h);
      translate([0,0,-1]) cylinder(d=c1_bolt_circle+12-2*ped_wall, h=ped_h+2);
      for (a=[0,180]) rotate([0,0,a]) translate([(c1_bolt_circle+12)/2, 0, ped_h/2+2]) cube([10, 20, ped_h], center=true);
    }
    for (z=[0, ped_h-3]) translate([0,0,z]) difference() {
      cylinder(d=c1_bolt_circle+12, h=3);
      for (i=[0:c1_hole_n-1]) rotate([0,0,i*360/c1_hole_n]) translate([c1_bolt_circle/2, 0, -1]) cylinder(d=c1_hole_d, h=5);
      translate([0,0,-1]) cylinder(d=14, h=5);
    }
  }
}

// ======================================================================
if (part=="plate") plate();
if (part=="wing") wing();
if (part=="lidar_pedestal") lidar_pedestal();
if (part=="all") {
  plate();
  translate([lidar_offset[0], lidar_offset[1], plate_t+2]) lidar_pedestal();
  for (s=[-1,1]) translate([0, s*(plate_d/2), 0]) mirror([0, s<0?1:0, 0]) wing();
  // SBC ghost
  %translate([sbc_offset[0], sbc_offset[1], plate_t+standoff_h]) translate([-42.5,-28,0]) cube([85,56,1.6]);
  // Roomba ghost (340 mm dia, 92 mm tall, top at z=0)
  %translate([0,0,-92-rib_h]) cylinder(d=340, h=92, $fn=96);
}
