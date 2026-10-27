/* EcoSurge 2100: smooth scroll, reveals, the countdown, the hero planet
   (load runs 1850 to 2026, scroll runs 2026 to 2100 under the chosen
   scenario), ledger count-ups, the heatwave dots and the join form. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = !!window.gsap;
  if (!hasGsap) document.documentElement.classList.add("reveal-all");
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
  const lerp = (a, b, t) => a + (b - a) * t;

  // Smooth scroll ----------------------------------------------------------
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const el = document.querySelector(a.getAttribute("href"));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: el.id === "top" ? 0 : -48, duration: 1.6 });
      else el.scrollIntoView();
    });
  });

  // Countdown to 1 Jan 2100, 00:00 UTC --------------------------------------
  const TARGET = Date.UTC(2100, 0, 1);
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  const clocks = [...document.querySelectorAll("[data-countdown]")];
  function tick() {
    const now = new Date();
    let years = 2100 - now.getUTCFullYear();
    const anniv = (y) => Date.UTC(now.getUTCFullYear() + y, now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    while (years > 0 && anniv(years) > TARGET) years--;
    let ms = Math.max(TARGET - anniv(years), 0);
    const days = Math.floor(ms / 864e5); ms -= days * 864e5;
    const h = Math.floor(ms / 36e5); ms -= h * 36e5;
    const m = Math.floor(ms / 6e4); ms -= m * 6e4;
    const s = Math.floor(ms / 1e3);
    const text = `${years}y ${pad(days, 3)}d ${pad(h)}:${pad(m)}:${pad(s)}`;
    clocks.forEach((c) => { c.textContent = text; });
  }
  tick();
  setInterval(tick, 1000);

  // Reveals ----------------------------------------------------------------
  function countUp(el) {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const fmt = (v) => v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.8, ease: "expo.out", onUpdate: () => { el.textContent = fmt(o.v); } });
  }

  function reveal(el, delay) {
    if (el.hasAttribute("data-split") && window.SplitText) {
      document.fonts.ready.then(() => {
        const split = SplitText.create(el, { type: "words,chars", mask: "words", wordsClass: "split-word", charsClass: "split-char" });
        gsap.set(el, { visibility: "visible" });
        gsap.from(split.chars, { yPercent: 100, y: "0.3em", duration: 1.1, ease: "expo.out", stagger: 0.02, delay });
      });
      return;
    }
    gsap.fromTo(el, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1.1, ease: "expo.out", delay });
    el.querySelectorAll("[data-count]").forEach(countUp);
    if (el.classList.contains("heat")) fillHeat(delay + 0.3);
  }

  // Hero copy waits for the planet's intro; everything else reveals on view
  const heroCopy = [...document.querySelectorAll(".hero-copy [data-split], .hero-copy [data-reveal]")];
  if (!reduce && hasGsap) {
    const io = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((e, i) => {
        io.unobserve(e.target);
        reveal(e.target, i * 0.08);
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll("[data-split], [data-reveal]").forEach((el) => {
      if (!heroCopy.includes(el)) io.observe(el);
    });
  }

  // Heatwave dots (IPCC AR6 WG1 SPM, Figure SPM.6: 10-year hot extremes) -----
  const HEAT = [
    { level: "1850 to 1900", note: "Baseline", times: 1, hotter: 0 },
    { level: "+1 °C", note: "Today's climate", times: 2.8, hotter: 1.2 },
    { level: "+1.5 °C", note: "Paris line", times: 4.1, hotter: 1.9 },
    { level: "+2 °C", note: "", times: 5.6, hotter: 2.6 },
    { level: "+4 °C", note: "", times: 9.4, hotter: 5.1 },
  ];
  const heatList = document.querySelector(".heat-rows");
  if (heatList) {
    heatList.innerHTML = HEAT.map((r, i) => {
      const dots = Array.from({ length: 10 }, (_, d) => {
        const f = clamp(r.times - d, 0, 1);
        return `<span class="heat-dot"><span class="heat-dot-fill" style="--f: ${f}; --t: ${i / (HEAT.length - 1)}"></span></span>`;
      }).join("");
      const hotter = r.hotter ? ` <span>· ${r.hotter.toFixed(1)} °C hotter</span>` : " <span>· per decade</span>";
      return `<li class="heat-row">
        <span class="heat-level">${r.level}${r.note ? `<small>${r.note}</small>` : ""}</span>
        <span class="heat-dots" aria-hidden="true">${dots}</span>
        <span class="heat-value">${r.times.toFixed(1)}×${hotter}</span>
      </li>`;
    }).join("");
  }
  function fillHeat(delay) {
    const fills = document.querySelectorAll(".heat-dot-fill");
    gsap.from(fills, { scaleX: 0, duration: 0.5, ease: "power2.out", stagger: 0.025, delay });
  }

  // Join form (concept: posts nowhere) --------------------------------------
  const form = document.querySelector(".join-form");
  if (form) {
    const input = form.querySelector(".join-input");
    const status = form.querySelector(".join-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.classList.remove("join-status--ok", "join-status--error");
      if (!input.value.trim() || !input.checkValidity()) {
        status.textContent = "That address doesn't look complete.";
        status.classList.add("join-status--error");
        input.focus();
        return;
      }
      status.textContent = "You're on the list. The first dispatch goes out when the next instrument goes live.";
      status.classList.add("join-status--ok");
      form.querySelector(".join-field").setAttribute("hidden", "");
    });
  }

  // Hero planet --------------------------------------------------------------
  // IPCC AR6 WG1 SPM: warming 2081 to 2100 vs 1850 to 1900 (best, likely range);
  // global mean sea level rise by 2100 vs 1995 to 2014 (likely range).
  const SCEN = [
    { code: "SSP1-1.9", name: "Very low", path: "Net zero CO₂ around 2050", dT: 1.4, lo: 1.0, hi: 1.8, slr: [0.28, 0.55] },
    { code: "SSP1-2.6", name: "Low", path: "Net zero CO₂ after 2050", dT: 1.8, lo: 1.3, hi: 2.4, slr: [0.32, 0.62] },
    { code: "SSP2-4.5", name: "Intermediate", path: "Near today's until 2050", dT: 2.7, lo: 2.1, hi: 3.5, slr: [0.44, 0.76] },
    { code: "SSP3-7.0", name: "High", path: "Doubles by 2100", dT: 3.6, lo: 2.8, hi: 4.6, slr: [0.55, 0.90] },
    { code: "SSP5-8.5", name: "Very high", path: "Doubles by 2050", dT: 4.4, lo: 3.3, hi: 5.7, slr: [0.63, 1.01] },
  ];
  const NOW_DT = 1.45; // display anchor for 2026, not a reported figure
  const HEAT_SCALE = 4.6;

  const hero = document.querySelector(".hero-section");
  const stage = document.querySelector(".hero-stage");
  const canvas = document.querySelector(".hero-canvas");
  const orbEl = document.querySelector(".hero-orb");
  const yearEl = document.querySelector(".hero-year");
  const R = {};
  document.querySelectorAll("[data-r]").forEach((el) => { R[el.dataset.r] = el; });
  const buttons = [...document.querySelectorAll(".hero-dial-btn")];

  const sim = { intro: reduce ? 1 : 0, endDT: SCEN[2].dT, endSLR: (SCEN[2].slr[0] + SCEN[2].slr[1]) / 2 };
  const look = { x: 0, y: 0, tx: 0, ty: 0 };
  let progress = 0;
  let lastYear = 0;

  function setScenario(i, animate) {
    const s = SCEN[i];
    buttons.forEach((b, j) => b.setAttribute("aria-pressed", String(i === j)));
    R.code.textContent = s.code;
    R.name.textContent = s.name;
    R.dt.textContent = `+${s.dT.toFixed(1)} °C`;
    R.range.textContent = `likely ${s.lo.toFixed(1)} to ${s.hi.toFixed(1)}`;
    R.slr.textContent = `+${s.slr[0].toFixed(2)} to ${s.slr[1].toFixed(2)} m`;
    R.path.textContent = s.path;
    const to = { endDT: s.dT, endSLR: (s.slr[0] + s.slr[1]) / 2 };
    if (animate && hasGsap && !reduce) gsap.to(sim, { ...to, duration: 1.4, ease: "expo.out" });
    else Object.assign(sim, to);
  }
  buttons.forEach((b) => b.addEventListener("click", () => setScenario(+b.dataset.scenario, true)));

  function readProgress() {
    const top = hero.offsetTop;
    const span = hero.offsetHeight - innerHeight;
    progress = span > 0 ? clamp((scrollY - top) / span, 0, 1) : 0;
  }

  function apply(planet) {
    const k = sim.intro;
    const p = progress;
    const dT = NOW_DT * k + (sim.endDT - NOW_DT) * p;
    const st = planet.state;
    st.heat = clamp(dT / HEAT_SCALE, 0, 1);
    st.sea = sim.endSLR * p;
    st.ice = clamp(1 - dT / 4.3, 0.03, 1);
    st.prog = p;
    st.intro = Math.min(1, k * 1.15);
    look.x += (look.tx - look.x) * 0.04;
    look.y += (look.ty - look.y) * 0.04;
    st.lookX = look.x;
    st.lookY = look.y;

    const year = Math.round(p > 0 ? 2026 + 74 * p : 1850 + 176 * k);
    if (year !== lastYear) {
      yearEl.textContent = String(year);
      lastYear = year;
    }
    stage.classList.toggle("hero-stage--arrived", p > 0.995);
  }

  function placeOrb(planet) {
    const c = canvas.getBoundingClientRect();
    const o = orbEl.getBoundingClientRect();
    const r = Math.min(o.width, o.height) / 2 / 1.25;
    planet.setOrb(o.left - c.left + o.width / 2, o.top - c.top + o.height / 2, Math.max(r, 40));
    planet.resize();
  }

  setScenario(2, false);
  readProgress();

  const planet = window.Planet && canvas ? Planet.create(canvas, { frozen: reduce, onFrame: () => { readProgress(); apply(planet); } }) : null;
  if (!planet) {
    stage.classList.add("hero-stage--flat");
    yearEl.textContent = "2026";
  } else {
    placeOrb(planet);
    new ResizeObserver(() => placeOrb(planet)).observe(stage);
    if (matchMedia("(hover: hover)").matches && !reduce) {
      addEventListener("pointermove", (e) => {
        look.tx = (e.clientX / innerWidth - 0.5) * 2;
        look.ty = (e.clientY / innerHeight - 0.5) * 2;
      }, { passive: true });
    }
    const vis = new IntersectionObserver(([e]) => { if (e.isIntersecting) planet.start(); else planet.stop(); });
    vis.observe(hero);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) planet.stop();
      else if (hero.getBoundingClientRect().bottom > 0) planet.start();
    });
  }

  // Load sequence: the ring and planet scan in while the year runs 1850 to 2026,
  // then the headline sets. Reduced motion lands at rest.
  if (!reduce && hasGsap) {
    gsap.to(sim, { intro: 1, duration: 3.2, ease: "power2.inOut", delay: 0.2 });
    heroCopy.forEach((el, i) => setTimeout(() => reveal(el, 0), 1700 + i * 220));
  }
})();
