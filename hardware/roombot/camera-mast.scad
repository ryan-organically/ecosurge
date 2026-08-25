// EcoSurge roombot — camera mast + tilt head
// ------------------------------------------
// mast : 12x12 mm square post, socketed into roombot-deck.scad's mast socket
//        (mast_socket 14x14 with 0.15 tol → 13.7 effective; post is 12 + 2*0.85 ribs)
// head : serrated tilt hinge on an M3 bolt; holds EITHER
//        cam="picam3"  Raspberry Pi Camera Module 3 (25x24 board, holes 21 x 12.5 pitch, 2.2 mm)
//        cam="xiao"    Seeed XIAO ESP32S3 Sense (21 x 17.5 board, camera daughterboard on top)
// The scan plane of the LIDAR sits at plate + pedestal (35) + ~25 mm; keep
// mast_h + head below that or move the mast further forward.

part = "all";     // "mast" | "head" | "all"
cam  = "picam3";  // "picam3" | "xiao"

mast_h   = 45;    // post height above the plate top
mast_s   = 12;    // post square
mast_tol = 0.15;
sock_s   = 14;    // must match roombot-deck.scad mast_socket
sock_depth = 7.4; // rib_h + plate_t + ... (see deck)
serr_n   = 24;    // hinge serrations
hinge_d  = 14;
hinge_t  = 4;
bolt_d   = 3.4;   // M3 clearance
nut_af   = 5.6;   // M3 nut across flats (captive)
nut_t    = 2.5;

picam_b = [25, 24];  picam_holes = [[-10.5, -6.25], [10.5, -6.25], [-10.5, 6.25], [10.5, 6.25]]; picam_hole_d = 2.2;
picam_lens = [0, 4.7];   // lens center offset from board center (verify, ~ 9.5 mm from top edge on CM3)
xiao_b  = [21, 17.5]; xiao_t = 1.2;

$fn = 40;
module rrect(w, d, h, r) { hull() for (x=[-w/2+r, w/2-r], y=[-d/2+r, d/2-r]) translate([x, y, 0]) cylinder(r=r, h=h); }
module serrations(d, n, h) { for (i=[0:n-1]) rotate([0,0,i*360/n]) translate([d/2-0.6, 0, 0]) rotate([0,0,45]) cube([0.9, 0.9, h], center=true); }

module mast() {
  // socket tongue
  translate([0,0,-sock_depth]) rrect(sock_s-2*mast_tol, sock_s-2*mast_tol, sock_depth+0.01, 1);
  // post with a cable channel down the back
  difference() {
    rrect(mast_s, mast_s, mast_h, 1.5);
    translate([-mast_s/2-1, -2.5, 4]) cube([3.5, 5, mast_h]);  // rear cable channel
  }
  // hinge knuckle (female) at the top, axis along Y
  translate([0, 0, mast_h]) difference() {
    hull() { rotate([90,0,0]) cylinder(d=hinge_d, h=mast_s, center=true); translate([0,0,-hinge_d/2]) rrect(mast_s, mast_s, 1, 1.5); }
    rotate([90,0,0]) cylinder(d=bolt_d, h=mast_s+2, center=true);
    // captive nut pocket on the -Y face
    translate([0, -mast_s/2+nut_t-0.01, 0]) rotate([90,0,0]) cylinder(d=nut_af/0.866, h=nut_t+1, $fn=6);
    // clearance for the head's fork
    translate([0, mast_s/2 - hinge_t - 0.3, 0]) cube([hinge_d+2, hinge_t+0.6, hinge_d+2], center=true);
    translate([0, -mast_s/2 + hinge_t + 0.3, 0]) cube([hinge_d+2, hinge_t+0.6, hinge_d+2], center=true);
  }
  translate([0, mast_s/2 - hinge_t - 0.3, mast_h]) rotate([-90,0,0]) serrations(hinge_d, serr_n, 0.8);
  translate([0, -mast_s/2 + hinge_t + 0.3, mast_h]) rotate([90,0,0]) serrations(hinge_d, serr_n, 0.8);
}

module head() {
  // fork: two ears straddling the knuckle, joined by a bridge that carries the camera plate
  ear_gap = mast_s - 2*(hinge_t + 0.3);   // knuckle width the ears embrace
  for (s=[-1,1]) translate([0, s*(ear_gap/2 + hinge_t/2), 0]) difference() {
    rotate([90,0,0]) cylinder(d=hinge_d, h=hinge_t, center=true);
    rotate([90,0,0]) cylinder(d=bolt_d, h=hinge_t+2, center=true);
    translate([0, -s*hinge_t/2, 0]) rotate([s*90,0,0]) serrations(hinge_d, serr_n, 0.8);
  }
  // bridge above the knuckle → camera plate facing +X (forward)
  translate([hinge_d/2 - 1, 0, 0]) difference() {
    union() {
      translate([0, -(ear_gap+2*hinge_t)/2, -hinge_d/2]) cube([3, ear_gap+2*hinge_t, hinge_d]);
      // camera plate, standing vertically, 2.4 thick, facing forward
      if (cam=="picam3") translate([0, 0, 0]) rotate([90,0,90]) translate([0,0,0]) rrect(picam_b[0]+6, picam_b[1]+6, 2.4, 3);
      if (cam=="xiao")   rotate([90,0,90]) rrect(xiao_b[0]+6, xiao_b[1]+8, 2.4, 3);
    }
    if (cam=="picam3") {
      for (h=picam_holes) translate([-1, h[0], h[1]]) rotate([0,90,0]) cylinder(d=picam_hole_d, h=6);   // M2 self-tap
      translate([-1, 0, 0]) rotate([0,90,0]) cylinder(d=10, h=6);   // rear window for the ribbon/lens back
    }
    if (cam=="xiao") {
      // pocket for the XIAO, USB-C facing down, camera daughterboard forward
      translate([2.4-xiao_t-0.3, -xiao_b[0]/2-0.2, -xiao_b[1]/2-0.2]) cube([xiao_t+1, xiao_b[0]+0.4, xiao_b[1]+0.4]);
      translate([-1, 0, -xiao_b[1]/2-6]) cube([6, 10, 8], center=true);  // USB-C exit
    }
  }
}

if (part=="mast") mast();
if (part=="head") head();
if (part=="all") { mast(); translate([0,0,mast_h]) rotate([0,-15,0]) head(); }
