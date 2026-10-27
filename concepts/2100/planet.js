/* The 2100 planet: one WebGL2 fragment shader, no meshes.
   A model planet drawn as an instrument: elevation contours, graticule, polar
   ice as latitude hatching, fires as points, an atmosphere rim, and a dial of
   74 year ticks (2026 to 2100) around it. Uniforms carry the state:
   heat 0..1 (warming / 4.6 C, ink shifts with polar amplification), sea 0..1
   (sea rise in metres, exaggerated for display), ice 1..0 (cap extent),
   prog 0..1 (year arc), intro 0..1 (scan-in). Exposes window.Planet.create. */
(() => {
  const VERT = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;

uniform vec2 uRes;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uDpr;
uniform float uTime;
uniform float uHeat;
uniform float uSea;
uniform float uIce;
uniform float uProg;
uniform float uIntro;
uniform vec2 uLook;

const float PI = 3.14159265;
const float CAM = 3.4;
const float FOCAL = 1.9;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x),
                 mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
                 mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * noise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s;
}
vec3 rx(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z); }
vec3 ry(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }

// 1px line where f crosses an integer; fw is f's screen derivative
float isoLine(float f, float fw) {
  float d = abs(fract(f + 0.5) - 0.5);
  return clamp(1.0 - d / max(fw, 1e-5), 0.0, 1.0);
}

vec3 heatInk(float k) {
  vec3 cool = vec3(0.50, 0.84, 0.56);
  vec3 warm = vec3(0.97, 0.65, 0.24);
  vec3 hot  = vec3(1.00, 0.34, 0.20);
  return k < 0.5 ? mix(cool, warm, k * 2.0) : mix(warm, hot, k * 2.0 - 1.0);
}

void main() {
  vec2 px = gl_FragCoord.xy;
  vec3 col = vec3(0.0118, 0.0235, 0.0196); // --night #030605

  float K = FOCAL / sqrt(CAM * CAM - 1.0);   // silhouette radius on the view plane
  vec2 rel = px - uCenter;
  float dpx = length(rel);                    // px from planet centre
  float rn = dpx / uRadius;                   // 1.0 at the limb
  vec2 uv = rel / uRadius * K;

  vec3 atmo = mix(vec3(0.36, 0.78, 0.64), vec3(1.0, 0.46, 0.22), smoothstep(0.2, 0.95, uHeat));

  // Star dust, very faint
  if (rn > 1.05) {
    vec2 sg = floor(px / (3.0 * uDpr));
    float st = hash(vec3(sg, 7.0));
    col += step(0.9988, st) * (0.10 + 0.10 * sin(uTime * 0.6 + st * 90.0));
  }

  // Atmosphere halo outside the limb
  if (rn > 1.0) {
    float g = exp(-(rn - 1.0) * 16.0);
    col += atmo * g * 0.30 * uIntro;
  }

  // Year dial: 74 ticks, 2026 at twelve o'clock, clockwise to 2100
  float r1 = uRadius * 1.17;
  float ang = atan(rel.y, rel.x);
  float ca = fract(0.25 - ang / (2.0 * PI));
  float shown = step(ca, uIntro);
  float ring = 1.0 - smoothstep(0.0, 1.0 * uDpr, abs(dpx - r1));
  col += vec3(0.91, 0.93, 0.91) * ring * 0.16 * shown;

  float tf = ca * 74.0;
  float tickD = abs(fract(tf + 0.5) - 0.5) / 74.0 * 2.0 * PI * dpx;
  float idx = floor(tf + 0.5);
  float yr = 2026.0 + idx;
  float decade = 1.0 - step(0.5, abs(mod(yr + 0.5, 10.0) - 0.5));
  decade = max(decade, step(73.5, idx) + step(idx, 0.5)); // 2026 and 2100 share twelve o'clock
  float tlen = mix(5.0, 13.0, decade) * uDpr;
  float inTick = step(r1, dpx) * step(dpx, r1 + tlen);
  float tick = (1.0 - smoothstep(0.35 * uDpr, 1.2 * uDpr, tickD)) * inTick;
  float passed = step(ca, uProg);
  vec3 tickCol = mix(vec3(0.91, 0.93, 0.91) * mix(0.22, 0.5, decade), heatInk(clamp(uHeat * 1.1, 0.0, 1.0)) * 0.95, passed);
  col += tickCol * tick * shown;

  // Progress arc just inside the ring, and its cursor
  float arcR = r1 - 6.0 * uDpr;
  float arc = (1.0 - smoothstep(0.6 * uDpr, 1.6 * uDpr, abs(dpx - arcR))) * passed * step(0.002, uProg);
  col += heatInk(clamp(uHeat * 1.1, 0.0, 1.0)) * arc * 0.9;
  float ea = (0.25 - uProg) * 2.0 * PI;
  vec2 cur = uCenter + vec2(cos(ea), sin(ea)) * arcR;
  float curD = length(px - cur);
  col += heatInk(clamp(uHeat * 1.1, 0.0, 1.0)) * (1.0 - smoothstep(2.0 * uDpr, 3.4 * uDpr, curD)) * step(0.002, uProg);

  // Planet surface (computed a little past the limb so derivatives stay sane)
  if (length(uv) < K * 1.03) {
    vec3 ro = vec3(0.0, 0.0, CAM);
    vec3 rd = normalize(vec3(uv, -FOCAL));
    float b = dot(ro, rd);
    float c = dot(ro, ro) - 1.0;
    float h = max(b * b - c, 0.0);
    float t = -b - sqrt(h);
    vec3 n = normalize(ro + rd * t);

    float spin = uTime * 0.035 + uLook.x * 0.5;
    vec3 q = ry(rx(n, -0.45 - uLook.y * 0.18), spin);

    float lat = asin(clamp(q.y, -1.0, 1.0));
    float lon = atan(q.z, q.x);
    float lon2 = atan(-q.z, -q.x);
    float lonFw = min(fwidth(lon), fwidth(lon2));
    float latFw = fwidth(lat);

    // Terrain and sea level
    float e = fbm(q * 1.55 + vec3(3.1, 0.0, 1.7));
    float sea = 0.515 + uSea * 0.034;
    float eFw = fwidth(e);
    float land = smoothstep(sea - eFw, sea + eFw, e);

    float lv = (e - sea) * 36.0;
    float lvFw = fwidth(lv);
    float contour = isoLine(lv, lvFw) * (1.0 - smoothstep(0.25, 0.5, lvFw));
    float bv = (sea - e) * 12.0;
    float bathy = isoLine(bv, fwidth(bv)) * (1.0 - smoothstep(0.25, 0.5, fwidth(bv)));
    float coast = clamp(1.0 - abs(e - sea) / max(eFw, 1e-5) * 0.55, 0.0, 1.0);

    // Graticule every 15 degrees; meridians fade at the poles
    float step15 = PI / 12.0;
    float gLat = isoLine(lat / step15, latFw / step15);
    float gLon = isoLine(lon / step15, lonFw / step15) * (1.0 - smoothstep(0.82, 0.96, abs(q.y)));
    float grat = max(gLat, gLon);

    // Polar ice: the north (sea ice) goes first, the south holds longer
    float wob = (noise(q * 6.0) - 0.5) * 0.05;
    float edgeN = mix(0.985, 0.80, uIce) + wob;
    float edgeS = mix(0.93, 0.80, mix(1.0, uIce, 0.45)) + wob;
    float iceN = smoothstep(edgeN - 0.004, edgeN + 0.004, q.y);
    float iceS = smoothstep(edgeS - 0.004, edgeS + 0.004, -q.y);
    float ice = max(iceN, iceS);
    float hatchF = q.y * 150.0;
    float hatch = isoLine(hatchF, fwidth(hatchF)) * (1.0 - smoothstep(0.3, 0.6, fwidth(hatchF)));
    float iceEdge = max(
      clamp(1.0 - abs(q.y - edgeN) / max(fwidth(q.y), 1e-5) * 0.6, 0.0, 1.0),
      clamp(1.0 - abs(-q.y - edgeS) / max(fwidth(q.y), 1e-5) * 0.6, 0.0, 1.0));

    // Fires: one candidate point per ~6 degree cell, more of them as heat rises
    vec2 gc = vec2(lon, lat) * (30.0 / PI);
    vec2 gfw = vec2(lonFw, latFw) * (30.0 / PI);
    vec2 gi = floor(gc);
    vec2 gf = fract(gc);
    float hr = hash(vec3(gi, 3.0));
    vec2 off = vec2(hash(vec3(gi, 5.0)), hash(vec3(gi, 9.0))) * 0.6 + 0.2;
    float dd = length((gf - off) / max(gfw, vec2(1e-5)));
    float density = 0.015 + smoothstep(0.12, 1.0, uHeat) * 0.42;
    float fireable = land * (1.0 - ice) * (1.0 - smoothstep(0.85, 1.0, abs(lat)));
    float fireOn = step(hr, density) * fireable;
    float flicker = 0.55 + 0.45 * sin(uTime * 2.6 + hr * 70.0);
    float fireDot = (1.0 - smoothstep(0.9 * uDpr, 2.1 * uDpr, dd)) * fireOn;
    float fireGlow = (1.0 - smoothstep(0.0, 10.0 * uDpr, dd)) * fireOn;

    // Light
    vec3 L = normalize(vec3(-0.55, 0.42, 0.72));
    float ndl = dot(n, L);
    float day = smoothstep(-0.3, 0.55, ndl);
    float lit = mix(0.14, 1.0, day);
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);

    // Ink: warming shows harder toward the poles (polar amplification)
    float hk = clamp(uHeat * (0.72 + 0.95 * abs(q.y)) + (e - 0.5) * 0.25, 0.0, 1.0);
    vec3 ink = heatInk(hk);

    vec3 ocean = vec3(0.010, 0.030, 0.036);
    vec3 ground = mix(vec3(0.020, 0.040, 0.026), vec3(0.060, 0.032, 0.014), uHeat * 0.8);
    vec3 s = mix(ocean, ground, land) * (0.55 + 0.7 * day);
    s += ink * contour * 0.55 * land * lit;
    s += vec3(0.34, 0.62, 0.70) * bathy * 0.10 * (1.0 - land) * lit;
    s += mix(vec3(0.62, 0.86, 0.70), ink, 0.55) * coast * 0.85 * mix(0.35, 1.0, day);
    s += vec3(0.85, 0.92, 0.95) * grat * 0.075 * lit;
    vec3 iceCol = vec3(0.80, 0.90, 0.95) * (0.10 + hatch * 0.55) * lit;
    s = mix(s, iceCol, ice * 0.92);
    s += vec3(0.86, 0.94, 0.98) * iceEdge * 0.55 * lit;
    s += vec3(1.0, 0.42, 0.14) * (fireDot * flicker * 1.1 + fireGlow * 0.12) * (1.25 - 0.55 * day);
    s += atmo * fres * 0.55;

    // Scan-in from the south pole on load
    float scan = smoothstep(uIntro * 2.3 - 1.25, uIntro * 2.3 - 1.15, q.y * 0.5 + 0.5 - 0.05);
    s = mix(s, vec3(0.012, 0.024, 0.020) + atmo * fres * 0.4 * uIntro, scan);
    float scanLine = (1.0 - smoothstep(0.0, 0.012, abs(q.y * 0.5 + 0.5 - 0.05 - (uIntro * 2.3 - 1.2)))) * (1.0 - step(0.999, uIntro));
    s += atmo * scanLine * 0.6;

    float inside = clamp((K - length(uv)) / K * uRadius / 1.2, 0.0, 1.0);
    col = mix(col, s, inside);
  }

  fragColor = vec4(col, 1.0);
}`;

  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(sh));
      return null;
    }
    return sh;
  }

  function create(canvas, opts = {}) {
    const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, powerPreference: "high-performance" });
    if (!gl) return null;
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return null;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const U = {};
    ["uRes", "uCenter", "uRadius", "uDpr", "uTime", "uHeat", "uSea", "uIce", "uProg", "uIntro", "uLook"]
      .forEach((n) => { U[n] = gl.getUniformLocation(prog, n); });

    const state = { heat: 0, sea: 0, ice: 1, prog: 0, intro: 0, lookX: 0, lookY: 0 };
    const orb = { x: 0, y: 0, r: 100 };
    let dpr = 1;
    let running = false;
    let frozen = !!opts.frozen;
    const t0 = performance.now();

    function resize() {
      const cap = innerWidth < 760 ? 1.5 : 1.75;
      dpr = Math.min(devicePixelRatio || 1, cap);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
    }

    // Planet centre and limb radius, in CSS px relative to the canvas box
    function setOrb(cx, cy, r) {
      orb.x = cx; orb.y = cy; orb.r = r;
    }

    function draw(now) {
      const t = frozen ? 40 : (now - t0) / 1000;
      gl.uniform2f(U.uRes, canvas.width, canvas.height);
      gl.uniform2f(U.uCenter, orb.x * dpr, canvas.height - orb.y * dpr);
      gl.uniform1f(U.uRadius, Math.max(orb.r * dpr, 1));
      gl.uniform1f(U.uDpr, dpr);
      gl.uniform1f(U.uTime, t);
      gl.uniform1f(U.uHeat, state.heat);
      gl.uniform1f(U.uSea, state.sea);
      gl.uniform1f(U.uIce, state.ice);
      gl.uniform1f(U.uProg, state.prog);
      gl.uniform1f(U.uIntro, state.intro);
      gl.uniform2f(U.uLook, state.lookX, state.lookY);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function loop(now) {
      if (!running) return;
      if (opts.onFrame) opts.onFrame(now);
      draw(now);
      requestAnimationFrame(loop);
    }

    return {
      state,
      resize,
      setOrb,
      draw: () => draw(performance.now()),
      start() { if (!running) { running = true; requestAnimationFrame(loop); } },
      stop() { running = false; },
      freeze(v) { frozen = v; },
    };
  }

  window.Planet = { create };
})();
