/* Menu page: catalog + quick view */
(function () {
  "use strict";
  const A = window.ARAFF;
  A.catalog({
    chips: document.getElementById("chips"),
    list: document.getElementById("menu"),
    scroller: window,
    search: document.getElementById("q"),
    empty: document.getElementById("empty")
  });

  const items = A.allItems();
  const cats = Object.fromEntries(window.ARAFF_MENU.map((c) => [c.id, A.mc(c).name]));
  const qv = document.getElementById("qv");
  let lastFocus;

  function open(id) {
    const it = items[id];
    document.getElementById("qv-img").src = A.img(id);
    document.getElementById("qv-img").alt = it.name;
    document.getElementById("qv-cat").textContent = cats[it.cat];
    document.getElementById("qv-name").textContent = it.name;
    document.getElementById("qv-desc").textContent = it.desc;
    document.getElementById("qv-price").innerHTML = A.tl(it.price) + (it.fee ? ` <small>+${A.tl(it.fee)} ${A.t("servis")}</small>` : "");
    lastFocus = document.activeElement;
    qv.classList.add("open"); qv.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    qv.querySelector(".close-x").focus();
  }
  function close() {
    qv.classList.remove("open"); qv.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById("menu").addEventListener("click", (e) => {
    const p = e.target.closest(".product"); if (p) open(p.dataset.id);
  });
  qv.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && qv.classList.contains("open")) close(); });
})();
