/*!
 * Buford Roofing & Construction - Google Reviews slider
 * v1.2.0
 *
 * USAGE
 *   <div data-buford-reviews></div>
 *   <script src="https://cdn.jsdelivr.net/gh/PAMUX/sta-nav@main/buford-reviews.js" defer></script>
 *
 *   Anything inside the placeholder is kept as a fallback until the script loads, then replaced.
 *
 * OPTIONS (data attributes on the placeholder, all optional)
 *   data-title="What our customers say"     section heading
 *   data-subtitle="..."                      text under the heading
 *   data-theme="dark"                        dark (navy section, default) | light
 *
 * WHAT IT SHOWS
 *   Real 5-star Google reviews for Buford Roofing & Construction Inc, shuffled on every page load,
 *   sliding left to right on their own (arrows, dots and swipe also work).
 *   "Read more" opens the full review in a popup.
 *
 * KEEPING REVIEWS UP TO DATE
 *   Option A (automatic): create a Review Widget in HighLevel (Reputation > Widgets, source Google),
 *   copy its embed code and paste it into ghlEmbed below. New Google reviews then appear by themselves.
 *   Option B (manual): add new reviews to the top of REVIEWS below (name, date, rating, text).
 */
(function () {
  "use strict";
  if (window.__bufordReviewsLoaded) return;
  window.__bufordReviewsLoaded = true;

  /* ================= CONFIG ================= */
  var PLACE_ID = "ChIJ6bkDnT4rTIYRVImtQShY7bQ"; // Buford Roofing & Construction, Inc on Google
  var SITE = {
    rating: 4.9,
    ratingCount: null, // e.g. 250 to show "Based on 250 reviews"
    googleUrl: "https://search.google.com/local/reviews?placeid=" + PLACE_ID,
    writeReviewUrl: "https://search.google.com/local/writereview?placeid=" + PLACE_ID,
    autoplaySeconds: 5,
    shuffle: true,
    minRating: 5,
    ghlEmbed: ``
  };

  // Real Google reviews, newest first. Add new ones at the top.
  var REVIEWS = [
    { name: "Natalie Egan", date: "2025-12-10", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocLR9qmJcrht5-rMvFQuRd2Y5GzcQQGEaA0xaJc2K3CUSJXzCQ=w80-h80-c-rp-mo-br100",
      text: "Bryce was recommended to us by our neighbor to replace our roof and we are so satisfied with the service we received. Bryce and his crew documented everything in minute detail for insurance and continued to follow up with them repeatedly to ensure we were able to replace all the items needing attention. Bryce and his crew completed the job on time and as expected. Communication was top notch! Bryce proactively communicated through the entire process and multiple contractor visits. He was respectful of our property and animals as well. Having had a roof previously replaced, Bryce and team delivered a completely different experience this time, in a fantastic way. Would give 10 stars if we could!" },
    { name: "Scott Klimm", date: "2025-12-04", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocJO-en5s-xdIonSf_KKnvgoe9FY09I6Vib5zfCQWWe8kkIsBA=w80-h80-c-rp-mo-br100",
      text: "My roof looks so good! I appreciate Kyle for taking the time with me when I was trying to decide on what color roof I wanted. He helped me out so much. Also, when my insurance pushed against me for months to not pay for my roof, Kyle was able to get Allstate to agree and pay for my roof." },
    { name: "George Berry", date: "2025-11-22", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocI9R0-SNLt5Tk9unKBiMp3gFEo2lRJXHFi0_X5SjM6BGjM-Dw=w80-h80-c-rp-mo-br100",
      text: "New Hardie board siding applied with lightening speed and accuracy by the team at Buford Construction. Big thank you to Bryce, Jose and Fernando." },
    { name: "Cheryl Reyes", date: "2025-11-19", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocLJ5IuHZDZgo-UsH7TBrw7DFrFPI7BCBL3Z2fkrDwPacFkaLw=w80-h80-c-rp-mo-br100",
      text: "We had a great experience with Bryce and all the contractors and workers that completed the job. We had roof repair, fence staining, garage door replacement and polycal pergola roof replacement. The work was completed in a timely manner with outstanding results." },
    { name: "Stacey Quaglieri", date: "2025-11-10", rating: 5,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjUDv-y6KLBymn6l3sjhz9UWRjMDQ5arm7ob0DEfeoxr_NKIZ-nF=w80-h80-c-rp-mo-br100",
      text: "Good service, very reasonable and reliable." },
    { name: "Jon Cargo", date: "2025-11-06", rating: 5,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjXqaynP8w-YqmzarlpGg02e--7AKH0EDrLaaCSB4beI2IY2sKs=w80-h80-c-rp-mo-ba2-br100",
      text: "Their team did a great job locating the source of our roof leak and making the repair in a timely fashion. Very professional. I highly recommend them." },
    { name: "Trevor A", date: "2025-11-06", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocLbqOpz7L6pOqMiILeOHiXiWsF_JZr3E26ltSmI5R_s9071cg=w80-h80-c-rp-mo-ba4-br100",
      text: "Redid my chimney after storm damage. Quick response and scheduling and great work!" },
    { name: "Ethan Frye", date: "2025-11-06", rating: 5,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjUf7Rcxvq6lQJJUa4oxvyG2wZg7XuQo_jW38japcVy1PPocFD7j=w80-h80-c-rp-mo-ba2-br100",
      text: "Bryce worked with us on a solar project on our roof and did a great job on everything. He was attentive and knowledgeable about the process of getting a new roof with solar. His solar team did a great job detaching and resetting the solar. Would definitely use Buford again." },
    { name: "Keri Sullivan", date: "2025-11-05", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocKTm2NHfM-KtAVEaJ1_TXWxemp4Fqli73lfadrgEKx85gT9qQ=w80-h80-c-rp-mo-ba2-br100",
      text: "Bryce is very professional. On time. Efficient. Roof repairs were affordable and done in a timely manner." },
    { name: "Jeff Greene", date: "2025-11-05", rating: 5,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocJkfUb_hpqyFrCGpbeIPLQwRizJbcvYbRp_sAWKiAh46W0q2Q=w80-h80-c-rp-mo-br100",
      text: "I recently worked with Kim as my contact at Buford for a complete roof replacement in North Texas. I couldn't have been more pleased the whole process (visit, quote/roof selection process, professionalism and onsite crew). The roof installation exceeded my expectations and looks great! On a personal note, Kim was the first one on site (6:00 AM) on day the crew showed up and stayed onsite all day to ensure the tear-off and new roof was completed correctly. Kim came back the next day to answer any questions and make sure the clean up met my expectations. Great people and wonderful service! Thank you! Jeff" }
  ];

  var user = (window.BufordSiteConfig && window.BufordSiteConfig.reviews) || {};
  Object.keys(user).forEach(function (k) {
    if (k === "list") REVIEWS = user.list; else SITE[k] = user[k];
  });

  /* ================= HELPERS ================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function titleCase(s) { return String(s).replace(/\b([a-z])/g, function (m) { return m.toUpperCase(); }); }
  function ago(iso) {
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return "";
    var days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days < 1) return "Today";
    if (days < 7) return days + (days === 1 ? " day ago" : " days ago");
    if (days < 30) { var w = Math.floor(days / 7); return w + (w === 1 ? " week ago" : " weeks ago"); }
    if (days < 365) { var m = Math.floor(days / 30); return m + (m === 1 ? " month ago" : " months ago"); }
    var y = Math.floor(days / 365); return y + (y === 1 ? " year ago" : " years ago");
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  var AVATAR_COLORS = ["#6d4c41", "#5e35b1", "#00897b", "#3949ab", "#e64a19", "#546e7a", "#8e24aa", "#43a047", "#1e88e5", "#d81b60", "#f4511e", "#7cb342"];
  function avatarColor(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  var GOOGLE_G = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
  var STAR = '<svg class="brv-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.8l3.05 6.52 7.1.86-5.25 4.87 1.39 7.03L12 17.6l-6.29 3.48 1.39-7.03L1.85 9.18l7.1-.86z"/></svg>';
  var VERIFIED = '<svg class="brv-verified" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69z"/><path fill="#fff" d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/></svg>';
  var ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
  var ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';

  /* ================= STYLES ================= */
  var CSS = [
    ".brv{--brv-navy-900:#081a33;--brv-navy-800:#0c2747;--brv-red:#bf0d3e;--brv-red-2:#d61f4a;",
    "position:relative;overflow:hidden;padding:clamp(64px,8vw,110px) 0;font-family:'Plus Jakarta Sans','Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.6;text-align:left}",
    ".brv *,.brv *::before,.brv *::after{box-sizing:border-box}",
    ".brv[data-theme='dark']{background:var(--brv-navy-800);color:#fff}",
    ".brv[data-theme='dark']::before{content:'';position:absolute;inset:0;background:radial-gradient(700px 400px at 12% 0,rgba(36,102,173,.35),transparent 60%);pointer-events:none}",
    ".brv[data-theme='light']{background:#f5f8fc;color:#0d1b2a}",
    ".brv-container{position:relative;max-width:1240px;margin:0 auto;padding-inline:clamp(16px,5vw,56px)}",
    ".brv-head{display:flex;justify-content:space-between;align-items:flex-end;gap:28px;flex-wrap:wrap;margin-bottom:40px}",
    ".brv-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#9cc2ef}",
    ".brv[data-theme='light'] .brv-eyebrow{color:var(--brv-red)}",
    ".brv-eyebrow::before{content:'';width:30px;height:2px;background:currentColor}",
    ".brv h2{font-size:clamp(30px,4.4vw,50px);line-height:1.1;font-weight:800;letter-spacing:-.02em;margin:10px 0 8px;color:inherit}",
    ".brv[data-theme='light'] h2{color:#0c2747}",
    ".brv-sub{margin:0;color:#cdd9ea;font-size:17px;max-width:560px}",
    ".brv[data-theme='light'] .brv-sub{color:#475569}",
    /* rating summary */
    ".brv-summary{display:flex;align-items:center;gap:16px;background:#fff;color:#1f1f1f;border-radius:16px;padding:16px 20px;box-shadow:0 18px 50px -20px rgba(0,0,0,.45);font-family:'Poppins','Plus Jakarta Sans',sans-serif}",
    ".brv-summary .brv-g{width:40px;height:40px;flex:0 0 auto}",
    ".brv-summary .brv-score{font-size:34px;font-weight:700;line-height:1}",
    ".brv-summary .brv-stars{display:flex;gap:2px;margin-bottom:4px}",
    ".brv-summary .brv-star{width:20px;height:20px}",
    ".brv-summary small{display:block;color:#70757a;font-size:13px;font-weight:500}",
    ".brv-summary .brv-links{display:flex;gap:8px;margin-left:8px;flex-wrap:wrap}",
    ".brv-btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:999px;font-weight:600;font-size:13px;text-decoration:none;white-space:nowrap;transition:transform .25s,background .25s}",
    ".brv-btn.primary{background:var(--brv-red);color:#fff}.brv-btn.primary:hover{background:var(--brv-red-2);transform:translateY(-2px)}",
    ".brv-btn.ghost{background:#f1f3f4;color:#1f1f1f}.brv-btn.ghost:hover{background:#e3e6e8;transform:translateY(-2px)}",
    /* slider */
    ".brv-viewport{overflow:hidden;margin:0 -12px;padding:10px 0 14px;touch-action:pan-y}",
    ".brv-track{display:flex;align-items:flex-start;transition:transform .8s cubic-bezier(.22,.8,.22,1);will-change:transform}",
    ".brv-slide{flex:0 0 calc(100% / var(--brv-per,3));padding:0 12px;display:flex}",
    /* card, matches the Google review card style */
    ".brv-card{flex:1;display:flex;flex-direction:column;background:#fff;color:#1f1f1f;border-radius:14px;padding:22px 24px 20px;min-height:292px;font-family:'Poppins','Plus Jakarta Sans',sans-serif;box-shadow:0 12px 34px -18px rgba(0,0,0,.45);transition:transform .35s,box-shadow .35s}",
    ".brv[data-theme='light'] .brv-card{box-shadow:0 1px 3px rgba(60,64,67,.15),0 8px 24px -12px rgba(60,64,67,.25)}",
    ".brv-card:hover{transform:translateY(-4px);box-shadow:0 22px 44px -20px rgba(0,0,0,.5)}",
    ".brv-top{display:flex;align-items:center;gap:14px}",
    ".brv-av{width:48px;height:48px;border-radius:50%;flex:0 0 auto;display:grid;place-items:center;color:#fff;font-size:22px;font-weight:500;line-height:1}",
    ".brv-who{min-width:0;flex:1}",
    ".brv-who b{display:block;font-size:18px;font-weight:600;line-height:1.25;color:#1f1f1f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".brv-who span{display:block;font-size:14.5px;color:#70757a;margin-top:2px}",
    ".brv-src{width:28px;height:28px;flex:0 0 auto;align-self:flex-start}",
    ".brv-rate{display:flex;align-items:center;gap:1px;margin:16px 0 12px}",
    ".brv-star{width:24px;height:24px;fill:#fbbc04}",
    ".brv-verified{width:21px;height:21px;margin-left:7px}",
    ".brv-text{margin:0;font-size:16.5px;line-height:1.6;color:#1f1f1f;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",
    ".brv-more{align-self:flex-start;background:none;border:0;padding:0;margin-top:14px;font:inherit;font-size:15px;color:#70757a;cursor:pointer}",
    ".brv-more:hover{color:#1f1f1f;text-decoration:underline}",
    ".brv-more[hidden]{display:none}",
    /* controls */
    ".brv-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:22px;flex-wrap:wrap}",
    ".brv-dots{display:flex;gap:8px;flex-wrap:wrap}",
    ".brv-dot{width:10px;height:10px;border-radius:999px;border:0;padding:0;cursor:pointer;transition:width .3s,background .3s}",
    ".brv[data-theme='dark'] .brv-dot{background:rgba(255,255,255,.25)}",
    ".brv[data-theme='light'] .brv-dot{background:#cbd5e1}",
    ".brv-dot.on{width:30px;background:var(--brv-red)!important}",
    ".brv-arrows{display:flex;gap:10px}",
    ".brv-arrow{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;cursor:pointer;transition:background .25s,transform .25s;border:1px solid}",
    ".brv[data-theme='dark'] .brv-arrow{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2);color:#fff}",
    ".brv[data-theme='light'] .brv-arrow{background:#fff;border-color:#e4e9f1;color:#0c2747}",
    ".brv-arrow:hover{background:var(--brv-red)!important;border-color:var(--brv-red)!important;color:#fff!important;transform:translateY(-2px)}",
    ".brv-arrow svg{width:20px;height:20px}",
    ".brv-attr{font-size:12px;opacity:.7;display:flex;align-items:center;gap:6px}",
    ".brv-attr svg{width:14px;height:14px}",
    /* popup */
    ".brv-modal{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:20px;font-family:'Poppins','Plus Jakarta Sans',sans-serif;visibility:hidden;opacity:0;transition:opacity .25s,visibility 0s .25s}",
    ".brv-modal.is-open{visibility:visible;opacity:1;transition:opacity .25s,visibility 0s}",
    ".brv-modal *,.brv-modal *::before,.brv-modal *::after{box-sizing:border-box}",
    ".brv-modal-backdrop{position:absolute;inset:0;background:rgba(8,20,42,.72);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}",
    ".brv-modal-card{position:relative;width:min(640px,100%);max-height:min(86vh,760px);display:flex;flex-direction:column;background:#fff;color:#1f1f1f;border-radius:18px;padding:30px 32px 22px;box-shadow:0 40px 90px -30px rgba(0,0,0,.6);transform:translateY(16px) scale(.97);transition:transform .3s cubic-bezier(.22,.8,.22,1)}",
    ".brv-modal.is-open .brv-modal-card{transform:none}",
    ".brv-modal-close{position:absolute;top:12px;right:12px;width:40px;height:40px;border-radius:50%;border:0;background:#f1f3f4;color:#1f1f1f;font-size:26px;line-height:1;cursor:pointer;display:grid;place-items:center;transition:background .2s}",
    ".brv-modal-close:hover{background:#e3e6e8}",
    ".brv-modal .brv-top{padding-right:48px}",
    ".brv-modal .brv-av{width:56px;height:56px;font-size:25px}",
    ".brv-modal .brv-who b{font-size:20px;white-space:normal}",
    ".brv-modal .brv-rate{margin:18px 0 14px}",
    ".brv-modal-body{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}",
    ".brv-modal-body .brv-top,.brv-modal-body .brv-rate{flex-shrink:0}",
    ".brv-modal-text{flex:1 1 auto;min-height:0;overflow-y:auto;font-size:17px;line-height:1.7;color:#1f1f1f;padding-right:6px;white-space:pre-line;overscroll-behavior:contain}",
    ".brv-modal-foot{flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid #e8eaed;flex-wrap:wrap}",
    ".brv-modal-nav{display:flex;align-items:center;gap:10px;font-size:14px;color:#70757a}",
    ".brv-modal-nav button{width:38px;height:38px;border-radius:50%;border:1px solid #dadce0;background:#fff;color:#1f1f1f;cursor:pointer;display:grid;place-items:center;transition:background .2s,border-color .2s}",
    ".brv-modal-nav button:hover{background:#f1f3f4;border-color:#c4c7c5}",
    ".brv-modal-nav svg{width:18px;height:18px}",
    ".brv-modal-link{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:#1a73e8;text-decoration:none}",
    ".brv-modal-link:hover{text-decoration:underline}",
    ".brv-modal-link svg{width:18px;height:18px}",
    ".brv-modal button:focus-visible,.brv-modal a:focus-visible,.brv-more:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}",
    "@media(max-width:640px){.brv-modal{padding:14px}.brv-modal-card{padding:24px 20px 18px;max-height:88vh}.brv-modal-text{font-size:16px}}",
    ".brv-ghl{background:#fff;border-radius:18px;padding:12px;min-height:200px}",
    ".brv-ghl iframe{width:100%;border:0;display:block}",
    "@media(max-width:1000px){.brv-slide{--brv-per:2}}",
    "@media(max-width:640px){.brv-slide{--brv-per:1}.brv-summary{width:100%;flex-wrap:wrap}.brv-summary .brv-links{margin-left:0;width:100%}.brv-arrow{width:42px;height:42px}.brv-card{min-height:0}}",
    "@media(prefers-reduced-motion:reduce){.brv-track{transition:none}}"
  ].join("\n");

  function injectAssets() {
    if (!document.getElementById("brv-styles")) {
      var st = document.createElement("style");
      st.id = "brv-styles";
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!document.querySelector('link[href*="family=Poppins"]')) {
      var ln = document.createElement("link");
      ln.rel = "stylesheet";
      ln.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
      document.head.appendChild(ln);
    }
    if (!document.querySelector('link[href*="Plus+Jakarta+Sans"]')) {
      var l2 = document.createElement("link");
      l2.rel = "stylesheet";
      l2.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(l2);
    }
  }

  function starsHTML(n) {
    var out = "";
    for (var i = 0; i < Math.round(n); i++) out += STAR;
    return out;
  }

  function topHTML(r, idSuffix) {
    var name = titleCase(r.name);
    return '<div class="brv-top"><div class="brv-av" style="background:' + avatarColor(name) + '" aria-hidden="true">' + esc(name.charAt(0)) + '</div>' +
      '<div class="brv-who"><b' + (idSuffix ? ' id="brv-m-name' + idSuffix + '"' : '') + '>' + esc(name) + '</b><span>' + esc(ago(r.date)) + '</span></div>' +
      '<span class="brv-src" title="Posted on Google">' + GOOGLE_G + '</span></div>' +
      '<div class="brv-rate" aria-label="' + (r.rating || 5) + ' out of 5 stars">' + starsHTML(r.rating || 5) + VERIFIED + '</div>';
  }

  function cardHTML(r, i) {
    var name = titleCase(r.name);
    return '<div class="brv-slide"><article class="brv-card" data-i="' + i + '" aria-label="Review by ' + esc(name) + '">' +
      '<div class="brv-top"><div class="brv-av" style="background:' + avatarColor(name) + '" aria-hidden="true">' + esc(name.charAt(0)) + '</div>' +
      '<div class="brv-who"><b>' + esc(name) + '</b><span>' + esc(ago(r.date)) + '</span></div>' +
      '<span class="brv-src" title="Posted on Google">' + GOOGLE_G + '</span></div>' +
      '<div class="brv-rate" aria-label="' + (r.rating || 5) + ' out of 5 stars">' + starsHTML(r.rating || 5) + VERIFIED + '</div>' +
      '<p class="brv-text">' + esc(r.text) + '</p>' +
      '<button class="brv-more" type="button" aria-haspopup="dialog" hidden>Read more</button>' +
      '</article></div>';
  }

  function headHTML(host) {
    var title = host.getAttribute("data-title") || "What our customers say";
    var sub = host.getAttribute("data-subtitle") || "Real 5-star Google reviews from homeowners and businesses across Dallas-Fort Worth.";
    var count = SITE.ratingCount ? "Based on " + SITE.ratingCount + " Google reviews" : "Google rating";
    var links = '<a class="brv-btn ghost" href="' + esc(SITE.googleUrl) + '" target="_blank" rel="noopener">See all reviews</a>' +
      (SITE.writeReviewUrl ? '<a class="brv-btn primary" href="' + esc(SITE.writeReviewUrl) + '" target="_blank" rel="noopener">Write a review</a>' : "");
    return '<div class="brv-head">' +
      '<div><span class="brv-eyebrow">Google Reviews</span><h2>' + esc(title) + '</h2><p class="brv-sub">' + esc(sub) + '</p></div>' +
      '<div class="brv-summary"><span class="brv-g">' + GOOGLE_G + '</span>' +
      '<div><div class="brv-stars">' + starsHTML(5) + '</div><div style="display:flex;align-items:baseline;gap:8px"><span class="brv-score">' + esc(Number(SITE.rating).toFixed(1)) + '</span><small>' + esc(count) + '</small></div></div>' +
      '<div class="brv-links">' + links + '</div></div>' +
      '</div>';
  }

  function runScripts(container) {
    container.querySelectorAll("script").forEach(function (old) {
      var s = document.createElement("script");
      Array.prototype.forEach.call(old.attributes, function (a) { s.setAttribute(a.name, a.value); });
      s.text = old.text;
      old.parentNode.replaceChild(s, old);
    });
  }

  function mountOne(host) {
    var theme = (host.getAttribute("data-theme") || "dark").toLowerCase();
    var sec = document.createElement("section");
    sec.className = "brv";
    sec.setAttribute("data-theme", theme === "light" ? "light" : "dark");
    sec.setAttribute("aria-label", "Google reviews");

    if (SITE.ghlEmbed && String(SITE.ghlEmbed).trim()) {
      sec.innerHTML = '<div class="brv-container">' + headHTML(host) + '<div class="brv-ghl"></div></div>';
      var box = sec.querySelector(".brv-ghl");
      box.innerHTML = SITE.ghlEmbed;
      host.innerHTML = "";
      host.appendChild(sec);
      runScripts(box);
      return;
    }

    var list = REVIEWS.filter(function (r) { return (r.rating || 5) >= SITE.minRating && r.text; });
    if (SITE.shuffle) list = shuffle(list);
    var n = list.length;
    if (!n) return;

    // Three copies of the list so the slider can loop forever in both directions
    var loop = n > 1;
    var cards = list.map(function (r, i) { return cardHTML(r, i); }).join("");
    var trackHTML = loop ? cards + cards + cards : cards;

    sec.innerHTML = '<div class="brv-container">' + headHTML(host) +
      '<div class="brv-viewport"><div class="brv-track">' + trackHTML + '</div></div>' +
      '<div class="brv-foot"><div class="brv-dots" role="tablist" aria-label="Choose review"></div>' +
      '<span class="brv-attr">' + GOOGLE_G + 'Verified reviews from Google</span>' +
      '<div class="brv-arrows"><button class="brv-arrow" type="button" data-dir="-1" aria-label="Previous review">' + ARROW_L + '</button>' +
      '<button class="brv-arrow" type="button" data-dir="1" aria-label="Next review">' + ARROW_R + '</button></div></div>' +
      '</div>';
    host.innerHTML = "";
    host.appendChild(sec);

    var track = sec.querySelector(".brv-track");
    var slides = track.children;
    var dotsBox = sec.querySelector(".brv-dots");
    var index = loop ? n : 0, timer = null, paused = false, busy = false;

    var dh = "";
    for (var i = 0; i < n; i++) dh += '<button class="brv-dot" type="button" role="tab" aria-label="Review ' + (i + 1) + '" data-i="' + i + '"></button>';
    dotsBox.innerHTML = dh;

    function slideW() { return slides[0].getBoundingClientRect().width; }
    function place(animate) {
      track.style.transition = animate ? "" : "none";
      track.style.transform = "translateX(" + (-index * slideW()) + "px)";
      if (!animate) { void track.offsetWidth; track.style.transition = ""; }
      var active = ((index % n) + n) % n;
      Array.prototype.forEach.call(dotsBox.children, function (d, k) {
        d.classList.toggle("on", k === active);
        d.setAttribute("aria-selected", k === active ? "true" : "false");
      });
    }
    function normalize() {
      if (loop && (index >= 2 * n || index < n)) { index = n + (((index % n) + n) % n); place(false); }
      busy = false;
    }
    function go(i) {
      if (busy) { var d = i - index; normalize(); i = index + d; }
      index = i;
      if (!loop) index = Math.max(0, Math.min(i, Math.max(0, n - 1)));
      busy = loop;
      place(true);
      if (!loop) busy = false;
    }
    track.addEventListener("transitionend", function (e) {
      if (e.target !== track) return;
      busy = false;
      if (!loop) return;
      if (index >= 2 * n) { index -= n; place(false); }
      else if (index < n) { index += n; place(false); }
    });
    // Safety: never stay locked if a transition event is missed
    setInterval(function () { if (busy) normalize(); }, 2500);

    function start() {
      stop();
      if (SITE.autoplaySeconds > 0) timer = setInterval(function () { if (!paused && !document.hidden) go(index + 1); }, SITE.autoplaySeconds * 1000);
    }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function markLong() {
      sec.querySelectorAll(".brv-card").forEach(function (c) {
        var p = c.querySelector(".brv-text"), b = c.querySelector(".brv-more");
        b.hidden = p.scrollHeight <= p.clientHeight + 2;
      });
    }

    sec.querySelectorAll(".brv-arrow").forEach(function (b) {
      b.addEventListener("click", function () { go(index + Number(b.getAttribute("data-dir"))); start(); });
    });
    dotsBox.addEventListener("click", function (e) {
      var d = e.target.closest(".brv-dot"); if (!d) return;
      var target = Number(d.getAttribute("data-i"));
      go(loop ? n + target : target); start();
    });
    /* ---------- popup with the full review ---------- */
    var uid = Math.random().toString(36).slice(2, 7);
    var modal = document.createElement("div");
    modal.className = "brv-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "brv-m-name" + uid);
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = '<div class="brv-modal-backdrop" data-close></div>' +
      '<div class="brv-modal-card"><button class="brv-modal-close" type="button" aria-label="Close review" data-close>&times;</button>' +
      '<div class="brv-modal-body"></div>' +
      '<div class="brv-modal-foot"><div class="brv-modal-nav"><button type="button" data-step="-1" aria-label="Previous review">' + ARROW_L + '</button>' +
      '<span class="brv-modal-count"></span><button type="button" data-step="1" aria-label="Next review">' + ARROW_R + '</button></div>' +
      '<a class="brv-modal-link" href="' + esc(SITE.googleUrl) + '" target="_blank" rel="noopener">' + GOOGLE_G + 'See all reviews on Google</a></div></div>';
    document.body.appendChild(modal);
    var mBody = modal.querySelector(".brv-modal-body"), mCount = modal.querySelector(".brv-modal-count"), mClose = modal.querySelector(".brv-modal-close");
    var mIndex = 0, lastFocus = null, isOpen = false, hover = false;

    function fill(i) {
      mIndex = ((i % n) + n) % n;
      var r = list[mIndex];
      mBody.innerHTML = topHTML(r, uid) + '<div class="brv-modal-text">' + esc(r.text) + '</div>';
      mCount.textContent = (mIndex + 1) + " of " + n;
    }
    function openModal(i, trigger) {
      lastFocus = trigger || document.activeElement;
      fill(i);
      isOpen = true; paused = true;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      mClose.focus({ preventScroll: true });
      setTimeout(function () { if (isOpen && !modal.contains(document.activeElement)) mClose.focus({ preventScroll: true }); }, 60);
    }
    function closeModal() {
      if (!isOpen) return;
      isOpen = false;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      paused = hover;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    modal.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) { closeModal(); return; }
      var st = e.target.closest("[data-step]");
      if (st) fill(mIndex + Number(st.getAttribute("data-step")));
    });
    document.addEventListener("keydown", function (e) {
      if (!isOpen) return;
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key === "ArrowRight") fill(mIndex + 1);
      if (e.key === "ArrowLeft") fill(mIndex - 1);
      if (e.key === "Tab") {
        var f = modal.querySelectorAll("button, a[href]"), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    sec.addEventListener("click", function (e) {
      var b = e.target.closest(".brv-more"); if (!b) return;
      openModal(Number(b.closest(".brv-card").getAttribute("data-i")), b);
    });
    sec.addEventListener("mouseenter", function () { hover = true; paused = true; });
    sec.addEventListener("mouseleave", function () { hover = false; if (!isOpen) paused = false; });
    sec.addEventListener("focusin", function () { paused = true; });
    sec.addEventListener("focusout", function () { if (!isOpen && !hover) paused = false; });

    var x0 = null;
    track.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; paused = true; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      x0 = null; paused = false; start();
    });

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { place(false); markLong(); }, 120);
    });

    place(false);
    markLong();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { markLong(); place(false); });
    start();
  }

  function mount() {
    injectAssets();
    var hosts = document.querySelectorAll("[data-buford-reviews], #buford-reviews");
    Array.prototype.forEach.call(hosts, function (h) {
      if (h.__brv) return;
      h.__brv = true;
      mountOne(h);
    });
    window.BufordReviews = { config: SITE, reviews: REVIEWS };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
