// ANBU Marbles showroom — vanilla JS, localStorage cart/saves, WhatsApp deep links.
(() => {
"use strict";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const INR = n => "₹" + n.toLocaleString("en-IN");
const wa = msg => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const store = {
  get(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
};
let cart = store.get("anbu-cart", {});   // {id: qty}
let saved = store.get("anbu-saved", []); // [id]

// ---------- render ----------
const catGrid = $("#catGrid");
catGrid.innerHTML = CATEGORIES.map(c => `
  <figure class="cat-card reveal" data-cat="${c.key}" tabindex="0" role="button" aria-label="Browse ${c.key}">
    <img loading="lazy" src="${c.img}" alt="${c.key}">
    <figcaption><b>${c.key}</b><span>${c.tag}</span></figcaption>
  </figure>`).join("");

const TYPES = ["All", ...new Set(PRODUCTS.map(p => p.type))];
const FINISHES = ["All finishes", ...new Set(PRODUCTS.map(p => p.finish))];
let fType = "All", fFinish = "All finishes";

function chips(el, items, active, onPick) {
  el.innerHTML = items.map(i => `<button class="chip${i === active ? " active" : ""}" data-v="${i}">${i}</button>`).join("");
  $$(".chip", el).forEach(b => b.onclick = () => onPick(b.dataset.v));
}
function renderFilters() {
  chips($("#typeChips"), TYPES, fType, v => { fType = v; renderFilters(); renderProducts(); });
  chips($("#finishChips"), FINISHES, fFinish, v => { fFinish = v; renderFilters(); renderProducts(); });
}
function renderProducts() {
  const list = PRODUCTS.filter(p =>
    (fType === "All" || p.type === fType) &&
    (fFinish === "All finishes" || p.finish === fFinish));
  $("#productGrid").innerHTML = list.length ? list.map(p => `
    <article class="product-card reveal in" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      <div class="pc-media"><img loading="lazy" src="${p.img}" alt="${p.name}"></div>
      <div class="pc-body">
        <p class="pc-type">${p.type.toUpperCase()}</p>
        <h3 class="pc-name">${p.name}</h3>
        <div class="pc-row">
          <span class="pc-price">${INR(p.price)} / ${p.unit}</span>
          <button class="pc-add" data-add="${p.id}">+ ADD</button>
        </div>
      </div>
    </article>`).join("")
    : `<p class="empty-msg">No stones match this filter — try another combination.</p>`;
}
renderFilters(); renderProducts();

// category card → filter collection
catGrid.addEventListener("click", e => {
  const card = e.target.closest(".cat-card");
  if (!card) return;
  const t = TYPES.includes(card.dataset.cat) ? card.dataset.cat : "All";
  fType = t; fFinish = "All finishes";
  renderFilters(); renderProducts();
  $("#collection").scrollIntoView({ behavior: "smooth" });
});

// ---------- product modal ----------
const modal = $("#productModal");
let current = null;
function openProduct(p) {
  current = p;
  $("#mImg").src = p.img; $("#mImg").alt = p.name; $("#mImg").classList.remove("zoomed");
  $("#mType").textContent = p.type.toUpperCase();
  $("#mName").textContent = p.name;
  $("#mPrice").textContent = `${INR(p.price)} / ${p.unit}`;
  $("#mSpec").innerHTML = [["Size", p.size], ["Finish", p.finish], ["Best for", p.use], ["Material", p.type]]
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  $("#mWa").href = wa(`Hi ANBU Marbles! I'm interested in *${p.name}* (${p.type}, ${p.finish}, ${INR(p.price)}/${p.unit}). Please share more details.`);
  $("#mSave").classList.toggle("on", saved.includes(p.id));
  modal.hidden = false; document.body.style.overflow = "hidden";
}
function closeOverlays() {
  modal.hidden = true; drawer.hidden = true; document.body.style.overflow = "";
}
$("#productGrid").addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) { addToCart(add.dataset.add); return; }
  const card = e.target.closest(".product-card");
  if (card) openProduct(PRODUCTS.find(p => p.id === card.dataset.id));
});
$("#mImg").onclick = e => e.target.classList.toggle("zoomed");
$("#mAdd").onclick = () => { if (current) { addToCart(current.id); closeOverlays(); openCart(); } };
$("#mSave").onclick = () => {
  if (!current) return;
  saved = saved.includes(current.id) ? saved.filter(i => i !== current.id) : [...saved, current.id];
  store.set("anbu-saved", saved);
  $("#mSave").classList.toggle("on", saved.includes(current.id));
  updateBadges();
  toast(saved.includes(current.id) ? "Saved to your list ♡" : "Removed from saved");
};
document.addEventListener("click", e => { if (e.target.matches("[data-close]")) closeOverlays(); });
// keyboard activation for card "buttons"
document.addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const el = e.target.closest?.('[role="button"][data-id], [role="button"][data-cat]');
  if (el) { e.preventDefault(); el.click(); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeOverlays(); });

// ---------- cart ----------
const drawer = $("#cartDrawer");
function addToCart(id) {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  store.set("anbu-cart", cart); updateBadges(); renderCart();
  toast("Added to your selection");
}
function setQty(id, q) {
  const next = { ...cart };
  if (q <= 0) delete next[id]; else next[id] = q;
  cart = next; store.set("anbu-cart", cart); updateBadges(); renderCart();
}
function renderCart() {
  // prune ids that no longer exist in the catalog (data.js was edited)
  const stale = Object.keys(cart).filter(id => !PRODUCTS.some(p => p.id === id));
  if (stale.length) {
    cart = Object.fromEntries(Object.entries(cart).filter(([id]) => !stale.includes(id)));
    store.set("anbu-cart", cart); updateBadges();
  }
  const ids = Object.keys(cart);
  const wrap = $("#cartItems");
  if (!ids.length) {
    wrap.innerHTML = `<p class="empty-cart">Your selection is empty.<br>Explore the collection ✦</p>`;
    $("#cartTotal").textContent = INR(0);
    $("#checkoutWa").href = wa("Hi ANBU Marbles! I'd like to place an order.");
    return;
  }
  let total = 0;
  wrap.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id); const q = cart[id];
    total += p.price * q;
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}">
      <div><b>${p.name}</b><small>${INR(p.price)} / ${p.unit}</small><br>
        <span class="qty"><button data-q="${id}:-1">−</button>${q}<button data-q="${id}:1">+</button>
        <button class="remove" data-q="${id}:0">remove</button></span></div>
      <span>${INR(p.price * q)}</span></div>`;
  }).join("");
  $("#cartTotal").textContent = INR(total);
  const lines = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return `• ${p.name} — ${cart[id]} × ${INR(p.price)}/${p.unit}`;
  }).join("\n");
  $("#checkoutWa").href = wa(`Hi ANBU Marbles! I'd like to order:\n${lines}\nEstimated total: ${INR(total)}\nPlease confirm availability and delivery.`);
}
$("#cartItems").addEventListener("click", e => {
  const b = e.target.closest("[data-q]"); if (!b) return;
  const [id, d] = b.dataset.q.split(":");
  setQty(id, d === "0" ? 0 : (cart[id] || 0) + Number(d));
});
function openCart() { renderCart(); drawer.hidden = false; document.body.style.overflow = "hidden"; }
$("#cartBtn").onclick = openCart;
$("#savedBtn").onclick = () => {
  if (!saved.length) { toast("No saved products yet — tap ♡ on any stone"); return; }
  fType = "All"; fFinish = "All finishes"; renderFilters(); renderProducts();
  toast(`${saved.length} saved: ${saved.map(id => PRODUCTS.find(p => p.id === id)?.name).join(", ")}`);
  $("#collection").scrollIntoView({ behavior: "smooth" });
};
function updateBadges() {
  const n = Object.values(cart).reduce((a, b) => a + b, 0);
  $("#cartCount").textContent = n; $("#cartCount").hidden = !n;
  $("#savedCount").textContent = saved.length; $("#savedCount").hidden = !saved.length;
}
updateBadges();

// ---------- quote form ----------
$("#quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = (f.get("name") || "").toString().trim();
  const phone = (f.get("phone") || "").toString().trim();
  if (!name || !phone) return;
  window.open(wa(
    `Hi ANBU Marbles! Quote request:\nName: ${name}\nPhone: ${phone}\nLooking for: ${f.get("need")}\nDetails: ${f.get("details") || "-"}`
  ), "_blank", "noopener");
});

// ---------- whatsapp links ----------
$("#waFab").href = wa("Hi ANBU Marbles! I visited your digital showroom and would like to know more.");
$("#footerWa").href = $("#waFab").href;

// ---------- header / menu / reveal / loader ----------
const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("solid", scrollY > 40), { passive: true });
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
$$("#nav a").forEach(a => a.onclick = () => $("#nav").classList.remove("open"));

const io = new IntersectionObserver(es => es.forEach(x => {
  if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(t._h); t._h = setTimeout(() => t.hidden = true, 2200);
}
addEventListener("load", () => setTimeout(() => $("#loader").classList.add("done"), 400));
setTimeout(() => $("#loader").classList.add("done"), 2500); // fallback if images stall
})();
