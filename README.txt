TUBA KHAN WEBSITE — HOW TO EDIT
Almost everything you change lives at the top of js/script.js. Open it in any text editor (Notepad is fine). Keep the quotation marks and commas.

SET UPI ID (IMPORTANT): businessInfo -> upiId (e.g. "tubakhan@upi"). Until it is filled, the Pay Now button sends the booking on WhatsApp instead of opening a UPI app.
CHANGE ADVANCE %: businessInfo -> advancePercent (50). CHANGE SLOTS: edit the slots list.

CHANGE PHONE NUMBER:      businessInfo -> phone   (digits only)
CHANGE WHATSAPP NUMBER:   businessInfo -> whatsapp (digits only). Country code is set in countryCode ("91").

ADD A GALLERY IMAGE:
  1. Copy the photo into images/gallery/
  2. In script.js find galleryImages and add one line:
     { image: "images/gallery/my-photo.jpg", category: "bridal", title: "Bridal Look" },
  Categories: bridal, makeup, hair, party, editorial. New categories get a filter button automatically.
REMOVE A GALLERY IMAGE: delete its line in galleryImages (and the file, if you like).

ADD A SERVICE: in services, copy one line and change name, price, text, msg.
CHANGE SERVICE PRICE: in services, change price as a plain number (e.g. 4500). The booking form updates automatically.

UPDATE COURSE FEE / DURATION / START DATE: courseInfo -> fee (number), duration, startDate (leave "" if no fixed date). Optional seatAmount lets students pay a smaller seat-booking amount on the enrol page. Also: admissionsOpen (true/false), offerText, fee ("" shows "Enquire for Current Details").

TURN OFFERS ON/OFF:
  - Early-bird line on the course page: courseInfo -> earlyBirdOffer: true / false
  - Top banner on every page:          promoBanner -> show: true / false

UPDATE SOCIAL LINKS: socialLinks -> paste full profile URLs. Empty ones stay hidden.

PHOTOS TO ADD: images/hero/hero.jpg (main photo), images/artist/tuba-khan.jpg (portrait), images/course/course.jpg (course page). Until then, elegant placeholders show.
BEFORE LAUNCH: replace https://YOUR-DOMAIN.com in the canonical tags of index.html and course.html; add real testimonials (search "Replace with verified").
