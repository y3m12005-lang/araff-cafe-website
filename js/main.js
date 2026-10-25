/* Araff — shared layout, motion and helpers (every page loads this) */
(function () {
  "use strict";

  const PHONE = "+902222190202";
  const PHONE_LABEL = "0222 219 02 02";
  const ADDRESS = "Çankaya Mah. Şht. Mustafa Yıldız Sk. No:2/1, 26240 Odunpazarı / Eskişehir";
  const INSTAGRAM = "https://www.instagram.com/araffcafe/";
  const FACEBOOK = "https://www.facebook.com/araffcafe/";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const I = window.ARAFF_I18N;
  const t = I.t;

  const icon = {
    arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg>'
  };

  const pages = [
    ["index.html", "Ana Sayfa"],
    ["menu.html", "Menü"],
    ["cafemiz.html", "Cafemiz"],
    ["konum.html", "Konum"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* ---------- layout injection ---------- */
  function buildLayout() {
    const navLinks = pages.map(([h, n]) =>
      `<a href="${h}"${h === here ? ' aria-current="page"' : ""}>${t(n)}</a>`).join("");
    const langItems = Object.entries(I.LANGS).map(([k, v]) =>
      `<li><button type="button" data-l="${k}" role="option" aria-selected="${k === I.lang}" lang="${k}"><b>${v.code}</b>${v.name}</button></li>`).join("");
    const globe = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9z"/></svg>';

    document.body.insertAdjacentHTML("afterbegin", `
      <div class="curtain" aria-hidden="true"><img src="assets/logo-ink.png" alt=""></div>
      <header class="header" id="header">
        <div class="wrap">
          <a class="brand" href="index.html" aria-label="${t("Araff ana sayfa")}">
            <img class="cream" src="assets/logo-cream.png" alt="Araff">
            <img class="ink" src="assets/logo-ink.png" alt="Araff">
          </a>
          <nav class="nav" aria-label="${t("Ana menü")}">${navLinks}</nav>
          <div class="hdr-right">
            <div class="lang">
              <button type="button" class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="${t("Dil seçin")}">${globe}<span>${I.LANGS[I.lang].code}</span></button>
              <ul class="lang-menu" role="listbox">${langItems}</ul>
            </div>
            <a class="btn cta" href="tel:${PHONE}" data-magnetic>${t("Hemen Ara")}</a>
            <button class="burger" aria-label="${t("Menüyü aç")}" aria-expanded="false"><span></span><span></span></button>
          </div>
        </div>
      </header>
      <div class="mobile-nav" aria-hidden="true">
        ${pages.map(([h, n]) => `<a class="big" href="${h}"><span>${t(n)}</span></a>`).join("")}
        <div class="lang-row">${Object.entries(I.LANGS).map(([k, v]) => `<button type="button" data-l="${k}" class="${k === I.lang ? "on" : ""}">${v.code}</button>`).join("")}</div>
        <div class="meta">${ADDRESS}<br><a href="tel:${PHONE}">${PHONE_LABEL}</a> · ${t("Her gün 08:00 – 01:00")}</div>
      </div>
      <div class="cursor" aria-hidden="true"></div>`);

    if (document.body.dataset.footer !== "none") {
      document.body.insertAdjacentHTML("beforeend", `
      <footer class="footer">
        <div class="wrap">
          <div class="footer-top">
            <div>
              <img class="logo" src="assets/logo-cream.png" alt="Araff">
              <p class="tag">${t("Kahve Araff'ta içilir.")}</p>
              <div class="socials">
                <a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">${icon.ig}</a>
                <a href="${FACEBOOK}" target="_blank" rel="noopener" aria-label="Facebook">${icon.fb}</a>
              </div>
            </div>
            <div><h4>${t("Adres")}</h4><p>${ADDRESS}</p></div>
            <div><h4>${t("Saatler")}</h4><ul><li>${t("Pazartesi 08:00 – 02:00")}</li><li>${t("Salı – Pazar 08:00 – 01:00")}</li><li>${t("Serpme kahvaltı her gün")}</li></ul></div>
            <div><h4>${t("İletişim")}</h4><ul>
              <li><a href="tel:${PHONE}" dir="ltr">${PHONE_LABEL}</a></li>
              <li><a href="konum.html">${t("Yol tarifi")}</a></li></ul></div>
          </div>
          <div class="footer-word" aria-hidden="true" dir="ltr">araff lounge</div>
          <div class="footer-bottom"><span>© ${new Date().getFullYear()} Araff Lounge &amp; Hookah · Eskişehir</span><span>${t("Lounge · Cafe · Bistro · Hookah")} · <a href="kaynaklar.html">${t("Görsel kaynakları")}</a></span></div>
        </div>
      </footer>`);
    }
  }

  /* ---------- page transitions ---------- */
  function curtainIn() {
    const c = document.querySelector(".curtain");
    if (reduced) { c.classList.add("up"); return; }
    setTimeout(() => c.classList.add("show-logo"), 20);
    setTimeout(() => { c.classList.add("up"); document.body.classList.add("ready"); }, 400);
  }
  function bindTransitions() {
    const c = document.querySelector(".curtain");
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || /^https?:/.test(href)) return;
      e.preventDefault();
      document.body.classList.remove("nav-open");
      if (reduced) { location.href = href; return; }
      c.classList.remove("up", "show-logo");
      c.classList.add("reset");
      void c.offsetWidth;
      c.classList.remove("reset");
      c.classList.add("down");
      setTimeout(() => { location.href = href; }, 720);
    });
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) { c.classList.remove("down"); c.classList.add("up"); }
    });
  }

  /* ---------- header behaviour ---------- */
  function bindHeader() {
    const h = document.getElementById("header");
    if (document.body.dataset.header === "light") h.classList.add("on-light");
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      h.classList.toggle("solid", y > 40);
      h.classList.toggle("hide", y > 500 && y > last && !document.body.classList.contains("nav-open"));
      document.body.classList.toggle("hdr-hidden", h.classList.contains("hide"));
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const lb = h.querySelector(".lang-btn"), lw = h.querySelector(".lang");
    lb.addEventListener("click", (e) => {
      e.stopPropagation();
      lb.setAttribute("aria-expanded", lw.classList.toggle("open"));
    });
    document.addEventListener("click", () => { lw.classList.remove("open"); lb.setAttribute("aria-expanded", "false"); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") lw.classList.remove("open"); });
    document.querySelectorAll("[data-l]").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.l !== I.lang) I.setLang(b.dataset.l);
    }));

    const burger = h.querySelector(".burger");
    const mnav = document.querySelector(".mobile-nav");
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open);
      mnav.setAttribute("aria-hidden", !open);
      document.documentElement.style.overflow = open ? "hidden" : "";
    });
  }

  /* ---------- split headings into words ---------- */
  function splitText(root = document) {
    root.querySelectorAll("[data-split]:not(.split)").forEach((el) => {
      let i = 0;
      const walk = (node) => {
        [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
              const w = document.createElement("span"); w.className = "w";
              const s = document.createElement("span"); s.textContent = part; s.style.setProperty("--i", i++);
              w.appendChild(s); frag.appendChild(w);
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
        });
      };
      walk(el);
      el.classList.add("split");
    });
  }

  /* ---------- reveal on scroll ---------- */
  let io;
  function observeReveals(root = document) {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    root.querySelectorAll("[data-reveal]:not(.in), .split:not(.in), .img-reveal:not(.in)").forEach((el) => io.observe(el));
  }

  /* ---------- counters ---------- */
  function bindCounters() {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target; cio.unobserve(el);
        const to = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
        let suf = el.dataset.suffix || "";
        if (/[a-zğüşıöç]/i.test(suf)) suf = " " + t(suf.trim());
        const fmt = (v) => v.toLocaleString(I.loc, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
        const t0 = performance.now(), dur = 1800;
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4);
          el.textContent = fmt(to * e);
          if (p < 1) requestAnimationFrame(tick);
        };
        reduced ? (el.textContent = fmt(to)) : requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
  }

  /* ---------- parallax ---------- */
  function bindParallax() {
    const els = [...document.querySelectorAll("[data-parallax]")];
    if (!els.length || reduced) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const k = parseFloat(el.dataset.parallax);
        const off = (r.top + r.height / 2 - vh / 2) * k;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- magnetic buttons + cursor ---------- */
  function bindPointer() {
    if (reduced || !window.matchMedia("(hover: hover)").matches) return;
    document.addEventListener("pointermove", (e) => {
      const m = e.target.closest("[data-magnetic]");
      document.querySelectorAll("[data-magnetic].mag").forEach((b) => { if (b !== m) { b.classList.remove("mag"); b.style.transform = ""; } });
      if (!m) return;
      const r = m.getBoundingClientRect();
      m.classList.add("mag");
      m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    const cur = document.querySelector(".cursor");
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    document.addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY; cur.classList.add("on");
      cur.classList.toggle("big", !!e.target.closest("a, button, .g-item, .product, label.ttype"));
    });
    document.addEventListener("pointerleave", () => cur.classList.remove("on"));
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- helpers shared by page scripts ---------- */
  const tl = (n) => n.toLocaleString(I.loc) + " ₺";
  function allItems() {
    const out = {};
    (window.ARAFF_MENU || []).forEach((c) => c.items.forEach((it) => {
      const m = I.mi(it);
      out[it.id] = Object.assign({ cat: c.id }, it, { name: m.name, desc: m.desc, trName: it.name });
    }));
    return out;
  }
  const img = (id) => `assets/menu/${id}.jpg`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Animated pill under the active chip (used by menu + sheet) */
  function chipPill(bar) {
    let pill = bar.querySelector(".chip-pill");
    if (!pill) { pill = document.createElement("span"); pill.className = "chip-pill"; bar.prepend(pill); }
    const a = bar.querySelector(".chip.active");
    if (!a) { pill.style.width = "0"; return; }
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  }

  window.ARAFF = { tl, allItems, img, esc, icon, chipPill, splitText, observeReveals, PHONE, PHONE_LABEL, ADDRESS, reduced,
    t, mi: I.mi, mc: I.mc, lang: I.lang, loc: I.loc };

  buildLayout();
  bindHeader();
  bindTransitions();
  splitText();
  observeReveals();
  bindCounters();
  bindParallax();
  bindPointer();
  // lift the curtain once the hero image is decoded (max 1.2s), not after every lazy image
  const heroImg = document.querySelector(".hero-media img");
  Promise.race([heroImg && heroImg.decode ? heroImg.decode().catch(() => {}) : Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]).then(curtainIn);
})();
