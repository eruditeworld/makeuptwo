/* ===== EDIT THESE SECTIONS — see README.txt ===== */

const businessInfo = {
  name: "Tuba Khan",
  title: "International Makeup Artist & Hair Artist | Trainer",
  phone: "8097290518",        // digits only, no spaces
  whatsapp: "8097290518",     // digits only, no spaces
  countryCode: "91",
  location: "Mumbra, Mumbai Based"
};

// Replace "" with real profile links. Empty links are hidden.
const socialLinks = {
  instagram: "",  // e.g. "https://instagram.com/yourhandle"
  facebook: "",
  youtube: ""
};

// Services. Set price to "" to hide the price. Add a line to add a service.
const services = [
  { name: "Bridal Makeup", price: "₹4,000", text: "A bridal look designed around your style, outfit and the day.", msg: "bridal makeup" },
  { name: "Sider Makeup", price: "₹1,300", text: "Polished makeup for family functions and smaller occasions.", msg: "sider makeup" },
  { name: "Party Makeup", price: "₹2,000", text: "Glamorous, camera-ready looks for parties and events.", msg: "party makeup" },
  { name: "Baby Shower Makeup", price: "₹2,000", text: "Soft, radiant makeup for your baby shower celebration.", msg: "baby shower makeup" },
  { name: "Hair Styling", price: "", text: "Custom styling to complement the overall makeup and occasion.", msg: "hair styling" }
];

// Course announcement. Change values here; pages update automatically.
const courseInfo = {
  admissionsOpen: true,
  startDate: "1 August 2026",
  earlyBirdOffer: true,
  offerText: "Early Bird Discount for First 10 Admissions",
  fee: ""   // leave empty to show "Enquire for Current Details"
};

// Top banner on every page. Set show:false to turn it OFF.
const promoBanner = { show: true, text: "Special Offer: Early Bird Discount for First 10 Admissions" };

// GALLERY: add new photos to images/gallery/ and add one entry below.
// category must be one of: bridal, makeup, hair, party, editorial
const galleryImages = [
  { image: "images/gallery/bridal-01.jpg", category: "bridal", title: "Bridal Look" },
  { image: "images/gallery/party-01.jpg", category: "party", title: "Party Makeup" },
  { image: "images/gallery/makeup-01.jpg", category: "makeup", title: "Makeup" },
  { image: "images/gallery/hair-01.jpg", category: "hair", title: "Hair Styling" },
  { image: "images/gallery/editorial-01.jpg", category: "editorial", title: "Editorial" },
  { image: "images/gallery/bridal-02.jpg", category: "bridal", title: "Bridal Look" },
  { image: "images/gallery/bridal-03.jpg", category: "bridal", title: "Bridal Look" },
];

/* ===== SITE CODE (no need to edit below) ===== */
const $ = (s, r = document) => r.querySelector(s);
const wa = m => `https://wa.me/${businessInfo.countryCode}${businessInfo.whatsapp}?text=${encodeURIComponent(m)}`;
const tel = `tel:+${businessInfo.countryCode}${businessInfo.phone}`;
const MSG = {
  general: "Hello Tuba Khan, I would like to enquire about your makeup services. Please share the details, pricing and availability.",
  course: "Hello Tuba Khan, I am interested in your professional makeup course. Please share the current course details, fees, batch dates and admission information.",
  svc: s => `Hello Tuba Khan, I would like to book ${s}. Please share availability and pricing.`
};
const here = location.pathname.split("/").pop() || "index.html";
const home = here === "course.html" ? "index.html" : "";

// Shared header, footer, mobile bar
const nav = [["Home", home || "#top"], ["About", home + "#about"], ["Services", home + "#services"], ["Gallery", home + "#gallery"], ["Course", "course.html"], ["Contact", home + "#contact"]];
$("#site-header").innerHTML = (promoBanner.show ? `<div class="promo">${promoBanner.text}</div>` : "") +
  `<header><div class="wrap nav"><a class="brand" href="index.html"><b>TUBA KHAN</b><small>MAKEUP ARTIST • HAIR ARTIST • TRAINER</small></a>
  <nav id="nav"><ul>${nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("")}</ul></nav>
  <div class="cta2"><a class="btn" href="course.html">Join Course</a><a class="btn fill" href="${wa(MSG.general)}">Book Now</a>
  <button class="burger" aria-label="Menu" aria-expanded="false">&#9776;</button></div></div></header>`;
$(".burger").onclick = e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
$("#nav").onclick = e => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); };

const soc = Object.entries(socialLinks).filter(e => e[1]).map(e => `<a href="${e[1]}" target="_blank" rel="noopener">${e[0]}</a>`).join(" · ");
$("#site-footer").innerHTML = `<footer><div class="wrap"><div class="logo">TUBA KHAN</div><small class="lbl">MAKEUP ARTIST • HAIR ARTIST • TRAINER</small>
  <p class="big" style="font-size:1.6rem;margin:auto">Where Beauty Becomes Art, and Passion Becomes Profession.</p>
  <ul>${nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("")}</ul>
  <p>${businessInfo.phone} · ${businessInfo.location}</p>
  <div class="btns" style="justify-content:center"><a class="btn fill" href="${wa(MSG.general)}">Book Now</a><a class="btn" href="course.html">Join Course</a></div>
  <p class="note">${soc} <a href="${wa(MSG.general)}">WhatsApp</a></p>
  <!-- Social links: add real URLs in socialLinks at the top of script.js -->
  <p class="note">© ${new Date().getFullYear()} Tuba Khan</p></div></footer>
  <div class="bar"><a href="${tel}">Call</a><a href="${wa(MSG.general)}">WhatsApp</a><a href="${wa(MSG.general)}">Book</a></div>
  <button class="top" aria-label="Back to top">↑</button>`;
const topBtn = $(".top");
topBtn.onclick = () => scrollTo({ top: 0 });
addEventListener("scroll", () => topBtn.style.display = scrollY > 700 ? "block" : "none", { passive: true });

// Links with data-wa="general|course" get the right pre-filled message
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa(MSG[a.dataset.wa]));
document.querySelectorAll("[data-tel]").forEach(a => a.href = tel);
const ph = (src, t) => `<div class="ph" data-t="${t}"><img src="${src}" alt="${t}" loading="lazy" onerror="this.remove()"></div>`;
document.querySelectorAll("[data-img]").forEach(el => el.innerHTML = ph(el.dataset.img, el.dataset.alt));

// Services
const sv = $("#service-list");
if (sv) sv.innerHTML = services.map(s => `<article class="card"><h3>${s.name}</h3>${s.price ? `<div class="price">${s.price}</div>` : ""}<p>${s.text}</p><div class="btns"><a class="btn" href="${wa(MSG.svc(s.msg))}">Book Now</a></div></article>`).join("");

// Course admission card + offer
const ad = $("#admission");
if (ad) ad.innerHTML = courseInfo.admissionsOpen
  ? `<span class="lbl">Admissions Open</span><h3>Course Start Date: ${courseInfo.startDate}</h3>${courseInfo.earlyBirdOffer ? `<p style="margin:10px auto">${courseInfo.offerText}</p>` : ""}<p style="margin:10px auto">Course Fee: ${courseInfo.fee || "Enquire for Current Details"}</p><div class="btns" style="justify-content:center"><a class="btn fill" data-wa="course" href="#">Get Course Details</a></div>`
  : `<span class="lbl">Admissions</span><h3>Currently Closed</h3><p style="margin:auto">Message us on WhatsApp for the next batch.</p>`;
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa(MSG[a.dataset.wa]));

// Gallery + lightbox
const gal = $("#gallery-grid");
if (gal) {
  let list = galleryImages, idx = 0;
  const lb = document.createElement("div");
  lb.className = "lb"; lb.innerHTML = `<button class="x" aria-label="Close">×</button><button class="p" aria-label="Previous">‹</button><img alt=""><button class="n" aria-label="Next">›</button>`;
  document.body.append(lb);
  const show = i => { idx = (i + list.length) % list.length; $("img", lb).src = list[idx].image; $("img", lb).alt = list[idx].title; lb.classList.add("on"); };
  const hide = () => lb.classList.remove("on");
  const draw = cat => {
    list = cat === "all" ? galleryImages : galleryImages.filter(g => g.category === cat);
    gal.innerHTML = list.map((g, i) => `<figure data-i="${i}"><img src="${g.image}" alt="${g.title}" loading="lazy" onerror="this.closest('figure').remove()"></figure>`).join("");
  };
  const cats = ["all", ...new Set(galleryImages.map(g => g.category))];
  $("#filters").innerHTML = cats.map(c => `<button data-c="${c}" class="${c === "all" ? "on" : ""}">${c}</button>`).join("");
  $("#filters").onclick = e => { if (!e.target.dataset.c) return; document.querySelectorAll("#filters button").forEach(b => b.classList.toggle("on", b === e.target)); draw(e.target.dataset.c); };
  gal.onclick = e => { const f = e.target.closest("figure"); if (f) show(+f.dataset.i); };
  $(".x", lb).onclick = hide; $(".p", lb).onclick = () => show(idx - 1); $(".n", lb).onclick = () => show(idx + 1);
  lb.onclick = e => { if (e.target === lb) hide(); };
  addEventListener("keydown", e => { if (!lb.classList.contains("on")) return; if (e.key === "Escape") hide(); if (e.key === "ArrowRight") show(idx + 1); if (e.key === "ArrowLeft") show(idx - 1); });
  let sx = 0; lb.ontouchstart = e => sx = e.touches[0].clientX;
  lb.ontouchend = e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(idx + (d < 0 ? 1 : -1)); };
  draw("all");
}
