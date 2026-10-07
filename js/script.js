/* ===== EDIT THESE SECTIONS — see README.txt ===== */

const businessInfo = {
  name: "Tuba Khan",
  title: "International Makeup Artist & Hair Artist | Trainer",
  phone: "8097290518",        // digits only, no spaces
  whatsapp: "8097290518",     // digits only, no spaces
  countryCode: "91",
  location: "Mumbra, Mumbai Based",
  upiId: "tubak479-2@okicici",                  // <-- ADD Tuba's UPI ID here, e.g. "tubakhan@upi"
  upiName: "Tuba Khan",       // name shown in the UPI app
  advancePercent: 50          // advance payment percentage
};

// Time slots offered on the booking form
const slots = ["Slot 1: 3:00 PM to 5:30 PM", "Slot 2: 6:00 PM to 8:00 PM"];

// Replace "" with real profile links. Empty links are hidden.
const socialLinks = {
  instagram: "",  // e.g. "https://instagram.com/yourhandle"
  facebook: "",
  youtube: ""
};

// Services. price is a number (no commas). Add a line to add a service.
const services = [
  { name: "Sider Makeup", price: 1500, text: "Polished makeup for family functions." },
  { name: "HD Sider Makeup", price: 2000, text: "HD finish for sider occasions. Lenses and lashes included." },
  { name: "Baby Shower Makeup", price: 3000, text: "Soft, radiant makeup for your baby shower." },
  { name: "Engagement Makeup / Semi Bride", price: 3500, text: "A refined look for your engagement or semi-bridal event." },
  { name: "Pakistani Bridal / Reception Bridal Makeup", price: 6000, text: "Bridal look for your reception. Lenses and lashes included." },
  { name: "Hijabi Bridal Makeup", price: 5500, text: "Bridal makeup designed for hijabi brides. Lenses and lashes included." },
  { name: "Haldi / Mehendi Makeup", price: 3000, text: "Fresh, camera-ready makeup for your Haldi or Mehendi." },
  { name: "HD Nawabi / HD Pakistani Nikah / Reception Makeup", price: 7000, text: "HD bridal look for Nikah or Reception. Lenses and lashes included." },
  { name: "Royal Nikah Bridal / Royal Reception Makeup", price: 8000, text: "Our most statement bridal look. Lenses and lashes included." }
];
const inr = n => "₹" + Number(n).toLocaleString("en-IN");

// Course announcement. Change values here; pages update automatically.
const courseInfo = {
  duration: "30 to 35 Days",
  fee: 25000,              // number, no commas
  location: "Mumbra",
  seatAmount: "",          // OPTIONAL seat-booking amount (e.g. 5000). Leave "" to offer only the full fee.
  admissionsOpen: true,
  startDate: "",           // e.g. "1 November 2026". Leave "" to show "ask for current batch dates"
  earlyBirdOffer: false,
  offerText: "Early Bird Discount for First 10 Admissions"
};

// Top banner on every page. Set show:false to turn it OFF.
const promoBanner = { show: false, text: "Special Offer: Early Bird Discount for First 10 Admissions" };

// GALLERY: add new photos to images/gallery/ and add one entry below.
// category must be one of: bridal, makeup, hair, party, editorial
const galleryImages = [
  { image: "images/gallery/bridal-01.jpg", category: "bridal", title: "Bridal Look" },
  { image: "images/gallery/bridal-02.jpg", category: "bridal", title: "Bridal Look" },
  { image: "images/gallery/bridal-03.jpg", category: "bridal", title: "Bridal Look" },
  { image: "images/gallery/party-01.jpg", category: "party", title: "Party Makeup" },
  { image: "images/gallery/makeup-01.jpg", category: "makeup", title: "Makeup" },
  { image: "images/gallery/makeup-02.jpeg", category: "makeup", title: "Makeup" },
  { image: "images/gallery/makeup-03.jpeg", category: "makeup", title: "Makeup" },
  { image: "images/gallery/hair-01.jpg", category: "hair", title: "Hair Styling" },
  { image: "images/gallery/hair-02.jpeg", category: "hair", title: "Hair Styling" },
  { image: "images/gallery/hair-03.jpeg", category: "hair", title: "Hair Styling" },
  { image: "images/gallery/editorial-01.jpg", category: "editorial", title: "Editorial" }
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
const home = (here === "index.html" || here === "") ? "" : "index.html";

// Shared header, footer, mobile bar
const nav = [["Home", home || "#top"], ["About", home + "#about"], ["Services", home + "#services"], ["Gallery", home + "#gallery"], ["Course", "course.html"], ["Contact", home + "#contact"]];
$("#site-header").innerHTML = (promoBanner.show ? `<div class="promo">${promoBanner.text}</div>` : "") +
  `<header><div class="wrap nav"><a class="brand" href="index.html"><b>TUBA KHAN</b><small>MAKEUP ARTIST • HAIR ARTIST • TRAINER</small></a>
  <nav id="nav"><ul>${nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("")}</ul></nav>
  <div class="cta2"><a class="btn" href="enroll.html">Join Course</a><a class="btn fill" href="book.html">Book Now</a>
  <button class="burger" aria-label="Menu" aria-expanded="false">&#9776;</button></div></div></header>`;
const menu = open => { $("#nav").classList.toggle("open", open); document.body.classList.toggle("menu", open); $(".burger").setAttribute("aria-expanded", open); $(".burger").innerHTML = open ? "&times;" : "&#9776;"; };
$(".burger").onclick = () => menu(!$("#nav").classList.contains("open"));
$("#nav").onclick = e => { if (e.target.tagName === "A") menu(false); };
addEventListener("keydown", e => { if (e.key === "Escape") menu(false); });

const soc = Object.entries(socialLinks).filter(e => e[1]).map(e => `<a href="${e[1]}" target="_blank" rel="noopener">${e[0]}</a>`).join(" · ");
$("#site-footer").innerHTML = `<footer><div class="wrap"><div class="logo">TUBA KHAN</div><small class="lbl">MAKEUP ARTIST • HAIR ARTIST • TRAINER</small>
  <p class="big" style="font-size:1.6rem;margin:auto">Where Beauty Becomes Art, and Passion Becomes Profession.</p>
  <ul>${nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("")}</ul>
  <p>${businessInfo.phone} · ${businessInfo.location}</p>
  <div class="btns" style="justify-content:center"><a class="btn fill" href="book.html">Book Now</a><a class="btn" href="enroll.html">Join Course</a></div>
  <p class="note">${soc} <a href="${wa(MSG.general)}">WhatsApp</a></p>
  <!-- Social links: add real URLs in socialLinks at the top of script.js -->
  <p class="note">© ${new Date().getFullYear()} Tuba Khan</p></div></footer>
  <div class="bar"><a href="${tel}">Call</a><a href="${wa(MSG.general)}">WhatsApp</a><a href="book.html">Book</a></div>
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
if (sv) sv.innerHTML = services.map((s, i) => `<article class="card"><h3>${s.name}</h3><div class="price">${inr(s.price)}</div><p>${s.text}</p><div class="btns"><a class="btn" href="book.html?service=${i}">Book Now</a></div></article>`).join("");

// Course admission card + offer
const ad = $("#admission");
if (ad) ad.innerHTML = courseInfo.admissionsOpen
  ? `<span class="lbl">Admissions Open</span><h3>${courseInfo.startDate ? "Next Batch: " + courseInfo.startDate : "Ask for Current Batch Dates"}</h3>${courseInfo.earlyBirdOffer ? `<p style="margin:10px auto">${courseInfo.offerText}</p>` : ""}<p style="margin:10px auto">Course Fee: ${inr(courseInfo.fee)} · ${courseInfo.duration}</p><div class="btns" style="justify-content:center"><a class="btn fill" href="enroll.html">Enroll Now</a><a class="btn" data-wa="course" href="#">Ask on WhatsApp</a></div>`
  : `<span class="lbl">Admissions</span><h3>Currently Closed</h3><p style="margin:auto">Message us on WhatsApp for the next batch.</p>`;
const fx = $("#facts");
if (fx) fx.innerHTML = [["Duration", courseInfo.duration], ["Course Fee", inr(courseInfo.fee)], ["Location", courseInfo.location], ["Certification", "Provided"]].map(f => `<div class="card"><span class="lbl">${f[0]}</span><div class="price">${f[1]}</div></div>`).join("");
const cf = $("#course-fee"); if (cf) cf.textContent = `Course Fee: ${inr(courseInfo.fee)} · ${courseInfo.duration}`;
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


// ===== BOOKING FORM (book.html) =====
const bf = $("#book-form");
if (bf) {
  const sel = $("#f-service"), slotSel = $("#f-slot"), paySel = () => bf.pay.value;
  sel.innerHTML = services.map((s, i) => `<option value="${i}">${s.name}: ${inr(s.price)}</option>`).join("");
  slotSel.innerHTML = slots.map(t => `<option>${t}</option>`).join("");
  const q = new URLSearchParams(location.search).get("service");
  if (q !== null && services[q]) sel.value = q;
  $("#f-date").min = new Date().toISOString().split("T")[0];
  const upi = (amt, note) => `upi://pay?pa=${encodeURIComponent(businessInfo.upiId)}&pn=${encodeURIComponent(businessInfo.upiName)}&am=${amt}&cu=INR&tn=${encodeURIComponent(note)}`;
  let qr;
  const calc = () => {
    const s = services[sel.value], adv = Math.round(s.price * businessInfo.advancePercent / 100), amt = paySel() === "full" ? s.price : adv;
    $("#sum").innerHTML = `<p><b>Service:</b> ${s.name}</p><p><b>Price:</b> ${inr(s.price)}</p><p><b>${businessInfo.advancePercent}% advance:</b> ${inr(adv)}</p><p class="big" style="font-size:2rem">Pay now: ${inr(amt)}</p>`;
    const box = $("#qr");
    if (!businessInfo.upiId) { box.innerHTML = "<p>Online payment is being set up. Tap Pay Now to send your booking on WhatsApp and get payment details.</p>"; return amt; }
    box.innerHTML = ""; qr = new QRCode(box, { text: upi(amt, "Booking " + s.name), width: 180, height: 180 });
    $("#upi-id").textContent = `UPI ID: ${businessInfo.upiId} · Amount: ${inr(amt)}`;
    return amt;
  };
  bf.addEventListener("change", calc); calc();
  bf.onsubmit = e => {
    e.preventDefault();
    const s = services[sel.value], amt = calc(), f = bf;
    const msg = `Hello Tuba Khan, I want to book:\nService: ${s.name} (${inr(s.price)})\nDate: ${f.date.value}\n${f.slot.value}\nName: ${f.cname.value}\nPhone: ${f.phone.value}\nPayment: ${paySel() === "full" ? "Full amount" : businessInfo.advancePercent + "% advance"} ${inr(amt)}\nAddress: ${f.notes.value || "-"}\nI will send the payment screenshot here.`;
    $("#after").hidden = false;
    $("#send-wa").href = wa(msg);
    if (businessInfo.upiId) location.href = upi(amt, "Booking " + s.name);
    else location.href = wa(msg);
  };
}


// ===== COURSE ENROLMENT (enroll.html) =====
const ef = $("#enroll-form");
if (ef) {
  const opts = [["full", "Pay the full course fee", courseInfo.fee]];
  if (courseInfo.seatAmount) opts.unshift(["seat", "Pay seat-booking amount", courseInfo.seatAmount]);
  $("#pay-opts").innerHTML = opts.map((o, i) => `<label class="chk"><input type="radio" name="pay" value="${o[0]}" ${i === 0 ? "checked" : ""}> ${o[1]}: ${inr(o[2])}</label>`).join("");
  const amt = () => Number(opts.find(o => o[0] === ef.pay.value)[2]);
  const link = a => `upi://pay?pa=${encodeURIComponent(businessInfo.upiId)}&pn=${encodeURIComponent(businessInfo.upiName)}&am=${a}&cu=INR&tn=${encodeURIComponent("Makeup course enrolment")}`;
  const draw = () => {
    const a = amt();
    $("#sum").innerHTML = `<p><b>Course:</b> Makeup &amp; Hair, ${courseInfo.duration}</p><p><b>Location:</b> ${courseInfo.location}</p><p><b>Course fee:</b> ${inr(courseInfo.fee)}</p><p class="big" style="font-size:2rem">Pay now: ${inr(a)}</p>`;
    const box = $("#qr");
    if (!businessInfo.upiId) { box.innerHTML = "<p>Online payment is being set up. Tap Pay Now to send your enrolment on WhatsApp and get payment details.</p>"; return; }
    box.innerHTML = ""; new QRCode(box, { text: link(a), width: 180, height: 180 });
    $("#upi-id").textContent = `UPI ID: ${businessInfo.upiId} · Amount: ${inr(a)}`;
  };
  ef.addEventListener("change", draw); draw();
  ef.onsubmit = e => {
    e.preventDefault();
    const a = amt(), msg = `Hello Tuba Khan, I want to enrol in the Makeup & Hair course (${courseInfo.duration}, ${inr(courseInfo.fee)}).\nName: ${ef.cname.value}\nPhone: ${ef.phone.value}\nCity: ${ef.city.value || "-"}\nPayment: ${inr(a)}\nNotes: ${ef.notes.value || "-"}\nI will send the payment screenshot here.`;
    $("#after").hidden = false; $("#send-wa").href = wa(msg);
    location.href = businessInfo.upiId ? link(a) : wa(msg);
  };
}
