/*!
 * Buford Roofing & Construction - Site Footer
 * v1.0.0
 *
 * USAGE
 *   <div id="buford-footer"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/buford-footer.js" defer></script>
 *
 *   If no placeholder is found, the footer is added at the end of <body>.
 *
 * LINKS
 *   Edit SITE.links below, or override on any page BEFORE this script loads:
 *   <script>window.BufordSiteConfig = { links: { home: "/", contact: "/contact" } };</script>
 *   The same window.BufordSiteConfig is read by buford-nav.js.
 */
(function () {
  "use strict";
  if (window.__bufordFooterLoaded) return;
  window.__bufordFooterLoaded = true;

  /* ================= CONFIG ================= */
  var GHL = "https://staai.scalethroughautomation.io/preview/";
  var SITE = {
    logo: "https://bufordroofing.com/wp-content/uploads/2025/12/Buford-Roofing.png",
    logoAlt: "Buford Roofing & Construction",
    about: "Family-owned, faith-based roofing and general contracting serving the Dallas-Fort Worth Metroplex since 2005. GAF Master Elite Certified and BBB A+ Accredited.",
    phone: "(817) 329-7663",
    tel: "tel:817-329-7663",
    addressLine1: "402 E Northwest Hwy #200",
    addressLine2: "Grapevine, TX 76051",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=402+E+Northwest+Hwy+%23200+Grapevine+TX+76051",
    hoursLine1: "Mon-Fri 8:30-5:30",
    hoursLine2: "Sat 9:00-12:00 · Sun Closed",
    since: "2016",
    credentials: "GAF Master Elite® · Duro-Last® Certified · BBB A+ Accredited",
    social: {
      facebook: "https://facebook.com/bufordroofingandconstruction",
      yelp: "https://www.yelp.com/biz/buford-roofing-and-construction-grapevine-5",
      nextdoor: "https://nextdoor.com/pages/buford-roofing-construction-grapevine-tx"
    },
    links: {
      home: GHL + "WmEduBBAOuFAGT2EOf8c",
      services: GHL + "MVhWF4MbW9FqLENHYSjp",
      about: GHL + "Wagp4GXHeu0tkpGyHpr2",
      gallery: GHL + "nvJzANpXEmjZDrnoK2d0",
      contact: GHL + "vXBs3fjDxfMHf1rtFhXs",
      projects: "recent-projects.html",
      careers: "apply.html",
      privacy: "privacy-policy.html",

      residential: "residential-roofing.html",
      commercial: "commercial-roofing.html",
      repair: "roof-repair-restoration.html",
      replacement: "roof-replacement.html",
      siding: "siding.html",
      financing: "roofing-financing.html",
      gutters: "gutters.html",

      colleyville: "roofing-colleyville-tx.html",
      coppell: "roofing-coppell-tx.html",
      flowerMound: "roofing-flower-mound-tx.html",
      fortWorth: "roofing-fort-worth-tx.html",
      grapevine: "roofing-grapevine-tx.html",
      highlandPark: "roofing-highland-park-tx.html",
      keller: "roofing-keller-tx.html",
      roanoke: "roofing-roanoke-tx.html",
      southlake: "roofing-southlake-tx.html",
      trophyClub: "roofing-trophy-club-tx.html",
      universityPark: "roofing-university-park-tx.html",
      westlake: "roofing-westlake-tx.html"
    }
  };

  var user = window.BufordSiteConfig || {};
  Object.keys(user).forEach(function (k) {
    if (k === "links" || k === "social") Object.keys(user[k] || {}).forEach(function (l) { SITE[k][l] = user[k][l]; });
    else SITE[k] = user[k];
  });
  var L = SITE.links;

  var SERVICES = [
    ["Residential Roofing", "residential"], ["Commercial Roofing", "commercial"],
    ["Roof Repair & Restoration", "repair"], ["Roof Replacement", "replacement"],
    ["Siding", "siding"], ["Gutters & Downspouts", "gutters"], ["Roofing Financing", "financing"]
  ];
  var LOCATIONS = [
    ["Colleyville", "colleyville"], ["Coppell", "coppell"], ["Flower Mound", "flowerMound"],
    ["Fort Worth", "fortWorth"], ["Grapevine", "grapevine"], ["Highland Park", "highlandPark"],
    ["Keller", "keller"], ["Roanoke", "roanoke"], ["Southlake", "southlake"],
    ["Trophy Club", "trophyClub"], ["University Park", "universityPark"], ["Westlake", "westlake"]
  ];
  var COMPANY = [
    ["About Us", "about"], ["Gallery", "gallery"], ["Recent Projects", "projects"],
    ["Careers", "careers"], ["Contact", "contact"], ["Privacy Policy", "privacy"]
  ];

  /* ================= HELPERS ================= */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function list(items) {
    return items.map(function (x) { return '<li><a href="' + esc(L[x[1]] || "#") + '">' + esc(x[0]) + "</a></li>"; }).join("");
  }

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z"/></svg>',
    yelp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6 6.6.5-5 4.3 1.6 6.5L12 16l-6.1 3.3L7.5 12.8l-5-4.3 6.6-.5L12 2Z"/></svg>',
    nextdoor: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3L12 3Z"/></svg>'
  };
  var SOCIAL_LABEL = { facebook: "Facebook", yelp: "Yelp", nextdoor: "Nextdoor" };

  /* ================= STYLES ================= */
  var CSS = [
    ".bfoot{--bf-navy-900:#081a33;--bf-blue-400:#3d86d6;--bf-red-600:#bf0d3e;",
    "background:var(--bf-navy-900);color:#aebfd6;font-size:15px;line-height:1.6;padding-top:72px;font-family:'Plus Jakarta Sans','Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;text-align:left}",
    ".bfoot *,.bfoot *::before,.bfoot *::after{box-sizing:border-box}",
    ".bfoot a{text-decoration:none}",
    ".bfoot svg{display:inline-block;flex:0 0 auto}",
    ".bfoot-container{max-width:1240px;margin:0 auto;padding-inline:clamp(16px,5vw,56px)}",
    ".bfoot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;padding-bottom:52px}",
    ".bfoot-logo{display:inline-block;background:#fff;padding:10px 14px;border-radius:12px;margin-bottom:18px}",
    ".bfoot-logo img{height:40px;width:auto;display:block;max-width:none}",
    ".bfoot p{color:#9fb2cc;font-size:15px;margin:0 0 18px}",
    ".bfoot h4{color:#fff;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin:0 0 18px;line-height:1.3}",
    ".bfoot ul{list-style:none;margin:0;padding:0;display:grid;gap:11px}",
    ".bfoot li{margin:0;padding:0;list-style:none}",
    ".bfoot ul a{color:#aebfd6;transition:color .25s,padding .25s}",
    ".bfoot ul a:hover{color:#fff;padding-left:4px}",
    ".bfoot-contact{gap:13px!important}",
    ".bfoot-contact li{display:flex;gap:11px;align-items:flex-start}",
    ".bfoot-contact svg{width:17px;height:17px;color:var(--bf-blue-400);margin-top:3px}",
    ".bfoot-contact a,.bfoot-contact span{color:#cdd9ea}",
    ".bfoot-contact a:hover{color:#fff;padding-left:0!important}",
    ".bfoot-social{display:flex;gap:10px;margin-top:22px}",
    ".bfoot-social a{width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,.08);display:grid;place-items:center;color:#fff;transition:background .25s,transform .25s}",
    ".bfoot-social a:hover{background:var(--bf-red-600);transform:translateY(-3px)}",
    ".bfoot-social svg{width:18px;height:18px}",
    ".bfoot-bottom{border-top:1px solid rgba(255,255,255,.1);padding:22px 0;font-size:14px}",
    ".bfoot-bottom .bfoot-container{display:flex;justify-content:space-between;gap:10px 16px;flex-wrap:wrap}",
    "@media(max-width:900px){.bfoot-grid{grid-template-columns:1fr 1fr;gap:34px}.bfoot-brand{grid-column:1/-1}}",
    "@media(max-width:540px){.bfoot{padding-top:56px}.bfoot-grid{grid-template-columns:1fr 1fr;gap:30px 20px}.bfoot-company{grid-column:1/-1}}"
  ].join("\n");

  function injectAssets() {
    if (!document.getElementById("bfoot-styles")) {
      var st = document.createElement("style");
      st.id = "bfoot-styles";
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!document.querySelector('link[href*="Plus+Jakarta+Sans"]')) {
      var ln = document.createElement("link");
      ln.rel = "stylesheet";
      ln.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(ln);
    }
  }

  function render() {
    var social = Object.keys(SITE.social).filter(function (k) { return SITE.social[k] && ICON[k]; }).map(function (k) {
      return '<a href="' + esc(SITE.social[k]) + '" aria-label="' + SOCIAL_LABEL[k] + '" target="_blank" rel="noopener">' + ICON[k] + "</a>";
    }).join("");
    var year = new Date().getFullYear();
    return '' +
      '<div class="bfoot-container bfoot-grid">' +
        '<div class="bfoot-brand">' +
          '<a class="bfoot-logo" href="' + esc(L.home) + '"><img src="' + esc(SITE.logo) + '" alt="' + esc(SITE.logoAlt) + '" width="89" height="40"></a>' +
          '<p>' + esc(SITE.about) + '</p>' +
          '<ul class="bfoot-contact">' +
            '<li>' + ICON.pin + '<a href="' + esc(SITE.mapUrl) + '" target="_blank" rel="noopener">' + esc(SITE.addressLine1) + '<br>' + esc(SITE.addressLine2) + '</a></li>' +
            '<li>' + ICON.phone + '<a href="' + esc(SITE.tel) + '">' + esc(SITE.phone) + '</a></li>' +
            '<li>' + ICON.clock + '<span>' + esc(SITE.hoursLine1) + '<br>' + esc(SITE.hoursLine2) + '</span></li>' +
          '</ul>' +
        '</div>' +
        '<div><h4>Services</h4><ul>' + list(SERVICES) + '<li><a href="' + esc(L.services) + '">All Services</a></li></ul></div>' +
        '<div><h4>Service Areas</h4><ul>' + list(LOCATIONS) + '</ul></div>' +
        '<div class="bfoot-company"><h4>Company</h4><ul>' + list(COMPANY) + '</ul>' +
          (social ? '<div class="bfoot-social">' + social + '</div>' : '') +
        '</div>' +
      '</div>' +
      '<div class="bfoot-bottom"><div class="bfoot-container">' +
        '<span>&copy; ' + esc(SITE.since) + '-' + year + ' Buford Roofing &amp; Construction. All rights reserved.</span>' +
        '<span>' + esc(SITE.credentials) + '</span>' +
      '</div></div>';
  }

  function mount() {
    injectAssets();
    var host = document.getElementById("buford-footer") || document.querySelector("[data-buford-footer]");
    if (!host) {
      host = document.createElement("div");
      host.id = "buford-footer";
      document.body.appendChild(host);
    }
    var foot = document.createElement("footer");
    foot.className = "bfoot";
    foot.innerHTML = render();
    host.innerHTML = "";
    host.appendChild(foot);
    window.BufordFooter = { config: SITE };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
