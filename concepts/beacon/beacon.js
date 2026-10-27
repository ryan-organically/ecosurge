/* EcoSurge Beacon: smooth scroll, reveals, photo parallax, the pinned
   rare-species gallery, the Fall 2026 season bar, the divisions photo swap
   and the join form. Only transform and opacity move. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = !!window.gsap;
  if (!hasGsap) document.documentElement.classList.add("reveal-all");
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
  const navH = () => document.querySelector(".nav").offsetHeight;

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
      if (lenis) lenis.scrollTo(el, { offset: el.id === "top" ? 0 : -navH(), duration: 1.6 });
      else el.scrollIntoView();
    });
  });

  // Reveals ----------------------------------------------------------------
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
  }
  if (!reduce && hasGsap) {
    const io = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((e, i) => {
        io.unobserve(e.target);
        reveal(e.target, 0.1 + i * 0.09);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-split], [data-reveal]").forEach((el) => io.observe(el));
  }

  // Pinned rare-species gallery --------------------------------------------
  const pin = document.querySelector(".signal-pin");
  const stage = document.querySelector(".signal-stage");
  const track = document.querySelector(".signal-track");
  const fill = document.querySelector(".signal-progress-fill");
  const narrow = matchMedia("(max-width: 900px)");
  let pinExtra = 0;
  function layoutPin() {
    const isStatic = reduce || narrow.matches;
    pin.classList.toggle("signal-pin--static", isStatic);
    if (isStatic) {
      pin.style.height = "";
      track.style.transform = "";
      pinExtra = 0;
      return;
    }
    pinExtra = Math.max(0, track.scrollWidth - stage.clientWidth);
    pin.style.height = `${stage.offsetHeight + pinExtra}px`;
  }
  function updatePin() {
    if (!pinExtra) return;
    const r = pin.getBoundingClientRect();
    const span = pin.offsetHeight - stage.offsetHeight;
    const p = span > 0 ? clamp((navH() - r.top) / span, 0, 1) : 0;
    track.style.transform = `translate3d(${-p * pinExtra}px, 0, 0)`;
    fill.style.transform = `scaleX(${p})`;
  }
  if (pin) {
    layoutPin();
    addEventListener("resize", layoutPin);
  }

  // Photo parallax ----------------------------------------------------------
  const drift = reduce ? [] : [...document.querySelectorAll("img[data-parallax]")];
  function updateParallax() {
    const vh = innerHeight;
    drift.forEach((img) => {
      const frame = img.parentElement.getBoundingClientRect();
      if (frame.bottom < -100 || frame.top > vh + 100) return;
      const p = (frame.top + frame.height / 2 - vh / 2) / (vh + frame.height);
      img.style.transform = `translate3d(0, ${(-p * frame.height * 0.14).toFixed(1)}px, 0)`;
    });
  }

  // One scroll loop for the scroll-driven parts
  let lastY = -1;
  const tick = () => {
    if (scrollY !== lastY) {
      lastY = scrollY;
      updatePin();
      updateParallax();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // Fall 2026 season bar: equinox Sep 22 to solstice Dec 21 ------------------
  const START = new Date(2026, 8, 22).getTime();
  const END = new Date(2026, 11, 21).getTime();
  const now = Date.now();
  const sp = clamp((now - START) / (END - START), 0, 1);
  document.querySelectorAll(".season-fill, .season-today").forEach((el) => el.style.setProperty("--p", sp.toFixed(3)));
  const left = document.querySelector("[data-season-left]");
  if (left) {
    const days = Math.ceil((END - now) / 864e5);
    if (now < START) left.textContent = "Opens Sep 22";
    else if (days <= 0) left.textContent = "Season closed";
    else if (days < 14) left.textContent = `${days} days of fall left`;
    else left.textContent = `${Math.round(days / 7)} weeks of fall left`;
  }

  // Divisions: the sticky photo follows the row in the middle of the screen --
  const rows = [...document.querySelectorAll(".beacon-row")];
  const photos = [...document.querySelectorAll(".beacon-photo")];
  const count = document.querySelector("[data-beacon-count]");
  function setRow(i) {
    rows.forEach((r, j) => r.classList.toggle("beacon-row--on", i === j));
    photos.forEach((p, j) => p.classList.toggle("beacon-photo--on", i === j));
    if (count) count.textContent = String(i + 1).padStart(2, "0");
  }
  if (rows.length) {
    setRow(0);
    const rio = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((e) => setRow(rows.indexOf(e.target)));
    }, { rootMargin: "-45% 0px -45% 0px" });
    rows.forEach((r) => rio.observe(r));
  }

  // Join the release (concept: posts nowhere) --------------------------------
  const form = document.querySelector(".join-form");
  if (form) {
    form.querySelectorAll(".join-role").forEach((b) => b.addEventListener("click", () => {
      b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true"));
    }));
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
      const roles = [...form.querySelectorAll('.join-role[aria-pressed="true"]')].map((b) => b.textContent.toLowerCase());
      status.textContent = roles.length
        ? `You're in for Release 01 as ${roles.join(", ")}. Dates come to you first.`
        : "You're in for Release 01. Dates come to you first.";
      status.classList.add("join-status--ok");
      form.querySelector(".join-field").setAttribute("hidden", "");
    });
  }
})();
