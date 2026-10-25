/* Renders the menu page: category chips, product cards, search and scroll-spy. */
(function () {
  "use strict";
  const { tl, img, esc, chipPill, t, mi, mc } = window.ARAFF;
  const zoom = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
  const norm = (s) => s.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i");

  function card(it, cat, i) {
    const m = mi(it), cm = mc(cat);
    // search matches the current language and the Turkish original
    const hay = [m.name, m.desc, cm.name, it.name, it.desc, cat.name].join(" ");
    return `<button type="button" class="product" data-id="${it.id}" data-search="${esc(norm(hay))}" data-reveal style="--d:${(i % 4) * 70}ms">
      <div class="pic"><img src="${img(it.id)}" alt="${esc(m.name)}" loading="lazy" width="800" height="800"><span class="zoom">${zoom}</span></div>
      <div class="info">
        <div class="name">${esc(m.name)}</div>
        <div class="desc">${esc(m.desc)}</div>
        <div class="row"><span class="price">${tl(it.price)}${it.fee ? `<small>+${tl(it.fee)} ${t("servis")}</small>` : ""}</span></div>
      </div>
    </button>`;
  }

  window.ARAFF.catalog = function ({ chips, list, scroller, search, empty, prefix = "" }) {
    const data = window.ARAFF_MENU;
    chips.innerHTML = data.map((c, i) => `<button class="chip${i === 0 ? " active" : ""}" role="tab" data-target="${prefix}${c.id}">${esc(mc(c).name)}</button>`).join("");
    list.innerHTML = data.map((c) => `
      <section class="menu-cat" id="${prefix}${c.id}">
        <div class="menu-cat-head">
          <h2 class="h2" data-split>${esc(mc(c).name)}</h2>
          ${mc(c).note ? `<span class="note">${esc(mc(c).note)}</span>` : ""}
          <span class="count">${t("{n} çeşit", { n: c.items.length })}</span>
        </div>
        <div class="product-grid">${c.items.map((it, i) => card(it, c, i)).join("")}</div>
      </section>`).join("");
    window.ARAFF.splitText(list);
    window.ARAFF.observeReveals(list);
    requestAnimationFrame(() => chipPill(chips));
    window.addEventListener("resize", () => chipPill(chips));

    const isWin = scroller === window;
    const offset = () => (isWin ? 150 : 90);
    const scrollTop = () => (isWin ? window.scrollY : scroller.scrollTop);
    const topOf = (el) => (isWin ? el.getBoundingClientRect().top + window.scrollY : el.offsetTop);
    let lock = false;

    function setActive(id) {
      const b = chips.querySelector(`[data-target="${id}"]`);
      if (!b || b.classList.contains("active")) return;
      chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
      chipPill(chips);
      chips.scrollTo({ left: b.offsetLeft - chips.clientWidth / 2 + b.offsetWidth / 2, behavior: "smooth" });
    }

    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      const sec = document.getElementById(b.dataset.target);
      lock = true; setActive(b.dataset.target);
      (isWin ? window : scroller).scrollTo({ top: topOf(sec) - offset() + 10, behavior: "smooth" });
      clearTimeout(lock._t); lock._t = setTimeout(() => (lock = false), 900);
    });

    let tick = false;
    (isWin ? window : scroller).addEventListener("scroll", () => {
      if (tick || lock) return; tick = true;
      requestAnimationFrame(() => {
        tick = false;
        const y = scrollTop() + offset() + 20;
        let cur = list.querySelector(".menu-cat:not([hidden])");
        list.querySelectorAll(".menu-cat:not([hidden])").forEach((s) => { if (topOf(s) <= y) cur = s; });
        if (cur) setActive(cur.id);
      });
    }, { passive: true });

    if (search) {
      search.addEventListener("input", () => {
        const q = norm(search.value.trim());
        let any = false;
        list.querySelectorAll(".menu-cat").forEach((sec) => {
          let n = 0;
          sec.querySelectorAll(".product").forEach((p) => {
            const hit = !q || p.dataset.search.includes(q);
            p.classList.toggle("hide", !hit);
            if (hit) { n++; p.classList.add("in"); }
          });
          sec.hidden = n === 0; any = any || n > 0;
        });
        if (empty) empty.classList.toggle("show", !any);
      });
    }

    // deep link: menu.html#nargile
    const hash = location.hash.slice(1);
    if (hash && document.getElementById(prefix + hash)) {
      setTimeout(() => chips.querySelector(`[data-target="${prefix}${hash}"]`).click(), 700);
    }
  };
})();
