/*!
 * Buford Roofing & Construction - Site Navigation (top bar + header + mobile menu)
 * v1.0.0
 *
 * USAGE
 *   <div id="buford-nav"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/buford-nav.js" defer></script>
 *
 * OPTIONS (data attributes on the placeholder, all optional)
 *   data-active="services"   highlight a menu item: home | services | locations | about | gallery | contact
 *                            (if omitted, the script matches the current URL against the links below)
 *   data-mode="fixed"        fixed (default, works inside GHL custom code blocks) | sticky | static
 *   data-topbar="false"      hide the dark top bar
 *
 * LINKS
 *   Edit SITE.links below, or override on any page BEFORE this script loads:
 *   <script>window.BufordSiteConfig = { links: { home: "/", contact: "/contact" } };</script>
 *   The same window.BufordSiteConfig is read by buford-footer.js.
 */
(function () {
  "use strict";
  if (window.__bufordNavLoaded) return;
  window.__bufordNavLoaded = true;

  /* ================= CONFIG ================= */
  var GHL = "https://staai.scalethroughautomation.io/preview/";
  var SITE = {
    logo: "https://bufordroofing.com/wp-content/uploads/2025/12/Buford-Roofing.png",
    logoAlt: "Buford Roofing & Construction",
    phone: "(817) 329-7663",
    tel: "tel:817-329-7663",
    address: "402 E Northwest Hwy #200, Grapevine, TX",
    hours: "Mon-Fri 8:30-5:30 · Sat 9-12",
    badge: "GAF Master Elite · Top 2% Nationwide",
    hotlineLabel: "24/7 Hotline",
    ctaText: "Free Estimate",
    mobileCtaText: "Get a Free Estimate",
    links: {
      home: GHL + "WmEduBBAOuFAGT2EOf8c",
      services: GHL + "MVhWF4MbW9FqLENHYSjp",
      about: GHL + "Wagp4GXHeu0tkpGyHpr2",
      gallery: GHL + "nvJzANpXEmjZDrnoK2d0",
      contact: GHL + "vXBs3fjDxfMHf1rtFhXs",
      projects: "recent-projects.html",
      careers: "apply.html",
      privacy: "privacy-policy.html",
      locations: GHL + "WmEduBBAOuFAGT2EOf8c#locations",

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
    if (k === "links") Object.keys(user.links || {}).forEach(function (l) { SITE.links[l] = user.links[l]; });
    else SITE[k] = user[k];
  });
  var L = SITE.links;

  var SERVICES = [
    ["Residential Roofing", "residential"],
    ["Commercial Roofing", "commercial"],
    ["Roof Repair & Restoration", "repair"],
    ["Roof Replacement", "replacement"],
    ["Siding", "siding"],
    ["Roofing Financing", "financing"],
    ["Gutters & Downspouts", "gutters"]
  ];
  var LOCATIONS = [
    ["Colleyville", "colleyville"], ["Coppell", "coppell"], ["Flower Mound", "flowerMound"],
    ["Fort Worth", "fortWorth"], ["Grapevine", "grapevine"], ["Highland Park", "highlandPark"],
    ["Keller", "keller"], ["Roanoke", "roanoke"], ["Southlake", "southlake"],
    ["Trophy Club", "trophyClub"], ["University Park", "universityPark"], ["Westlake", "westlake"]
  ];
  var COMPANY = [
    ["About Us", "about"], ["Gallery", "gallery"], ["Recent Projects", "projects"],
    ["Careers", "careers"], ["Contact", "contact"]
  ];

  /* ================= HELPERS ================= */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function url(key) { return esc(L[key] || "#"); }
  function norm(u) {
    try {
      var a = new URL(u, location.href);
      return (a.origin + a.pathname).replace(/\/index\.html?$/, "/").replace(/\/$/, "").toLowerCase();
    } catch (e) { return ""; }
  }

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6 6.6.5-5 4.3 1.6 6.5L12 16l-6.1 3.3L7.5 12.8l-5-4.3 6.6-.5L12 2Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    chev: '<svg class="bnav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  };

  /* ================= STYLES ================= */
  var CSS = [
    ".bnav-root{--bn-navy-900:#081a33;--bn-navy-800:#0c2747;--bn-navy-700:#123a63;--bn-blue-400:#3d86d6;--bn-red-600:#bf0d3e;--bn-red-500:#d61f4a;--bn-line:#e4e9f1;--bn-soft:#f5f8fc;--bn-top-h:42px;--bn-head-h:84px;",
    "font-family:'Plus Jakarta Sans','Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;box-sizing:border-box;text-align:left}",
    ".bnav-root *,.bnav-root *::before,.bnav-root *::after{box-sizing:border-box}",
    ".bnav-root a{text-decoration:none;color:inherit}",
    ".bnav-root svg{display:inline-block;flex:0 0 auto}",
    ".bnav-wrap{z-index:9990;width:100%;transition:transform .35s cubic-bezier(.16,1,.3,1)}",
    ".bnav-root[data-mode='fixed'] .bnav-wrap{position:fixed;top:0;left:0;right:0}",
    ".bnav-root[data-mode='sticky'] .bnav-wrap{position:sticky;top:0}",
    ".bnav-root[data-mode='fixed'].bnav-scrolled .bnav-wrap{transform:translateY(calc(var(--bn-top-h) * -1))}",
    ".bnav-root[data-topbar='false'] .bnav-top{display:none}",
    ".bnav-root[data-topbar='false']{--bn-top-h:0px}",
    ".bnav-spacer{height:calc(var(--bn-top-h) + var(--bn-head-h))}",
    ".bnav-container{max-width:1240px;margin:0 auto;padding-inline:clamp(16px,5vw,56px)}",
    /* top bar */
    ".bnav-top{background:var(--bn-navy-900);color:#cdd9ea;font-size:13px}",
    ".bnav-top .bnav-container{display:flex;align-items:center;justify-content:space-between;height:var(--bn-top-h);gap:20px}",
    ".bnav-top a{color:#cdd9ea;transition:color .25s}.bnav-top a:hover{color:#fff}",
    ".bnav-tl,.bnav-tr{display:flex;align-items:center;gap:20px;min-width:0}",
    ".bnav-ti{display:inline-flex;align-items:center;gap:7px;white-space:nowrap}",
    ".bnav-ti svg{width:14px;height:14px;color:var(--bn-blue-400)}",
    ".bnav-badge{color:#ffd27a;font-weight:700}.bnav-badge svg{color:#ffd27a}",
    "@media(max-width:960px){.bnav-badge{display:none!important}}",
    "@media(max-width:880px){.bnav-hide-sm{display:none!important}}",
    "@media(max-width:600px){.bnav-top{font-size:12px}}",
    /* header */
    ".bnav-head{background:rgba(255,255,255,.95);-webkit-backdrop-filter:saturate(180%) blur(14px);backdrop-filter:saturate(180%) blur(14px);border-bottom:1px solid var(--bn-line);transition:box-shadow .3s}",
    ".bnav-scrolled .bnav-head{box-shadow:0 10px 30px -18px rgba(12,39,71,.35)}",
    ".bnav-bar{display:flex;align-items:center;justify-content:space-between;gap:24px;height:var(--bn-head-h)}",
    ".bnav-brand img{height:54px;width:auto;display:block;max-width:none}",
    ".bnav-menu{display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0}",
    ".bnav-menu>li{position:relative;margin:0;padding:0;list-style:none}",
    ".bnav-link{display:inline-flex;align-items:center;gap:6px;padding:12px 16px;border-radius:10px;font-weight:700;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--bn-navy-800)!important;background:none;border:0;cursor:pointer;font-family:inherit;transition:color .25s,background .25s}",
    ".bnav-link:hover,.bnav-link.is-active{color:var(--bn-red-600)!important;background:var(--bn-soft)}",
    ".bnav-chev{width:13px;height:13px;transition:transform .3s}",
    ".bnav-menu>li:hover .bnav-chev,.bnav-menu>li:focus-within .bnav-chev{transform:rotate(180deg)}",
    ".bnav-drop{position:absolute;top:calc(100% + 10px);left:0;min-width:540px;display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#fff;border:1px solid var(--bn-line);border-radius:16px;box-shadow:0 18px 50px -20px rgba(12,39,71,.35);padding:12px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .3s,transform .3s,visibility .3s;z-index:5}",
    ".bnav-drop::before{content:'';position:absolute;left:0;right:0;top:-12px;height:12px}",
    ".bnav-menu>li:hover .bnav-drop,.bnav-menu>li:focus-within .bnav-drop{opacity:1;visibility:visible;transform:none}",
    ".bnav-drop a{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;font-weight:600;font-size:15px;color:var(--bn-navy-800);transition:background .2s,color .2s}",
    ".bnav-drop a:hover,.bnav-drop a.is-active{background:var(--bn-soft);color:var(--bn-red-600)}",
    ".bnav-dot{width:7px;height:7px;border-radius:50%;background:var(--bn-red-500);opacity:.65;flex:0 0 auto}",
    ".bnav-cta{display:flex;align-items:center;gap:14px}",
    ".bnav-phone{display:inline-flex;align-items:center;gap:8px;font-weight:800;color:var(--bn-navy-800);font-size:15px;white-space:nowrap}",
    ".bnav-phone svg{width:17px;height:17px;color:var(--bn-red-600)}",
    ".bnav-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 26px;border-radius:999px;font-weight:800;font-size:15px;white-space:nowrap;background:var(--bn-red-600);color:#fff!important;box-shadow:0 14px 30px -12px rgba(191,13,62,.7);transition:transform .35s,background .3s,box-shadow .35s}",
    ".bnav-btn:hover{background:var(--bn-red-500);transform:translateY(-2px)}",
    ".bnav-burger{display:none;flex-direction:column;gap:5px;background:none;border:0;padding:8px;cursor:pointer}",
    ".bnav-burger:focus:not(:focus-visible),.bnav-close:focus:not(:focus-visible){outline:none}",
    ".bnav-burger span{display:block;width:26px;height:2.5px;background:var(--bn-navy-800);border-radius:2px}",
    "@media(max-width:1040px){.bnav-menu,.bnav-phone{display:none}.bnav-burger{display:flex}}",
    "@media(max-width:420px){.bnav-brand img{height:44px}.bnav-btn{padding:12px 18px;font-size:14px}}",
    /* mobile drawer */
    ".bnav-backdrop{position:fixed;inset:0;background:rgba(8,26,51,.55);opacity:0;visibility:hidden;transition:.3s;z-index:9998}",
    ".bnav-drawer{position:fixed;top:0;right:0;bottom:0;width:min(86vw,380px);background:var(--bn-navy-900);color:#fff;transform:translateX(100%);transition:transform .45s cubic-bezier(.16,1,.3,1);z-index:9999;padding:26px 26px 40px;overflow-y:auto;box-shadow:0 40px 80px -30px rgba(8,26,51,.6);visibility:hidden}",
    ".bnav-open .bnav-backdrop{opacity:1;visibility:visible}",
    ".bnav-open .bnav-drawer{transform:none;visibility:visible}",
    ".bnav-close{position:absolute;top:14px;right:14px;background:none;border:0;color:#fff;font-size:30px;line-height:1;cursor:pointer;padding:6px 10px}",
    ".bnav-drawer a{display:block;padding:11px 0;color:#dfe8f4;font-weight:600;border-bottom:1px solid rgba(255,255,255,.08)}",
    ".bnav-drawer a:hover,.bnav-drawer a.is-active{color:#fff}",
    ".bnav-drawer .bnav-m-top{font-size:17px;font-weight:800;color:#fff;margin-top:18px}",
    ".bnav-drawer details{border-bottom:1px solid rgba(255,255,255,.08)}",
    ".bnav-drawer summary{list-style:none;cursor:pointer;padding:13px 0;font-weight:800;font-size:17px;color:#fff;display:flex;justify-content:space-between;align-items:center}",
    ".bnav-drawer summary::-webkit-details-marker{display:none}",
    ".bnav-drawer summary .bnav-chev{width:16px;height:16px;color:#7fa8d8}",
    ".bnav-drawer details[open] summary .bnav-chev{transform:rotate(180deg)}",
    ".bnav-drawer details a{padding-left:14px;font-size:15px}",
    ".bnav-drawer details a:last-child{border-bottom:0;margin-bottom:8px}",
    ".bnav-drawer .bnav-btn{width:100%;margin-top:24px;border-bottom:0;padding:15px 20px}",
    ".bnav-m-phone{display:flex!important;align-items:center;gap:10px;margin-top:10px;border-bottom:0!important;color:#fff!important;font-weight:800!important;justify-content:center}",
    ".bnav-m-phone svg{width:18px;height:18px;color:#ffd27a}",
    "@media(min-width:1041px){.bnav-backdrop,.bnav-drawer{display:none}}"
  ].join("\n");

  function injectAssets() {
    if (!document.getElementById("bnav-styles")) {
      var st = document.createElement("style");
      st.id = "bnav-styles";
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

  /* ================= MARKUP ================= */
  function activeKey(host) {
    var forced = host && host.getAttribute("data-active");
    if (forced) return { top: forced.toLowerCase(), item: null };
    var here = norm(location.href);
    function match(list) {
      for (var i = 0; i < list.length; i++) if (L[list[i][1]] && norm(L[list[i][1]]) === here) return list[i][1];
      return null;
    }
    var s = match(SERVICES); if (s) return { top: "services", item: s };
    var l = match(LOCATIONS); if (l) return { top: "locations", item: l };
    var tops = ["home", "services", "about", "gallery", "contact"];
    for (var i = 0; i < tops.length; i++) if (L[tops[i]] && norm(L[tops[i]]) === here) return { top: tops[i], item: tops[i] };
    return { top: null, item: null };
  }

  function dropLinks(list, act) {
    return list.map(function (x) {
      return '<a href="' + url(x[1]) + '"' + (act.item === x[1] ? ' class="is-active" aria-current="page"' : "") + '><span class="bnav-dot"></span>' + esc(x[0]) + "</a>";
    }).join("");
  }
  function plainLinks(list, act) {
    return list.map(function (x) {
      return '<a href="' + url(x[1]) + '"' + (act.item === x[1] ? ' class="is-active" aria-current="page"' : "") + ">" + esc(x[0]) + "</a>";
    }).join("");
  }
  function topLink(label, key, act) {
    return '<li><a class="bnav-link' + (act.top === key ? " is-active" : "") + '" href="' + url(key) + '"' + (act.top === key ? ' aria-current="page"' : "") + ">" + esc(label) + "</a></li>";
  }

  function render(act) {
    var svcAll = '<a href="' + url("services") + '"><span class="bnav-dot"></span>View All Services</a>';
    return '' +
      '<div class="bnav-wrap">' +
        '<div class="bnav-top"><div class="bnav-container">' +
          '<div class="bnav-tl">' +
            '<span class="bnav-ti bnav-hide-sm">' + ICON.pin + esc(SITE.address) + '</span>' +
            '<span class="bnav-ti bnav-hide-sm">' + ICON.clock + esc(SITE.hours) + '</span>' +
            '<a class="bnav-ti" href="' + esc(SITE.tel) + '" style="display:none" data-bnav-phone-sm>' + ICON.phone + esc(SITE.phone) + '</a>' +
          '</div>' +
          '<div class="bnav-tr">' +
            '<span class="bnav-ti bnav-badge">' + ICON.star + esc(SITE.badge) + '</span>' +
            '<a class="bnav-ti" href="' + esc(SITE.tel) + '">' + ICON.phone + esc(SITE.hotlineLabel) + '</a>' +
          '</div>' +
        '</div></div>' +
        '<header class="bnav-head"><nav class="bnav-container bnav-bar" aria-label="Main">' +
          '<a class="bnav-brand" href="' + url("home") + '"><img src="' + esc(SITE.logo) + '" alt="' + esc(SITE.logoAlt) + '" width="120" height="54"></a>' +
          '<ul class="bnav-menu">' +
            topLink("Home", "home", act) +
            '<li><a class="bnav-link' + (act.top === "services" ? " is-active" : "") + '" href="' + url("services") + '" aria-haspopup="true">Services ' + ICON.chev + '</a>' +
              '<div class="bnav-drop">' + dropLinks(SERVICES, act) + svcAll + '</div></li>' +
            '<li><a class="bnav-link' + (act.top === "locations" ? " is-active" : "") + '" href="' + url("locations") + '" aria-haspopup="true">Locations ' + ICON.chev + '</a>' +
              '<div class="bnav-drop">' + dropLinks(LOCATIONS, act) + '</div></li>' +
            topLink("About Us", "about", act) +
            topLink("Gallery", "gallery", act) +
            topLink("Contact", "contact", act) +
          '</ul>' +
          '<div class="bnav-cta">' +
            '<a class="bnav-phone" href="' + esc(SITE.tel) + '">' + ICON.phone + esc(SITE.phone) + '</a>' +
            '<a class="bnav-btn" href="' + url("contact") + '">' + esc(SITE.ctaText) + '</a>' +
            '<button class="bnav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="bnav-drawer"><span></span><span></span><span></span></button>' +
          '</div>' +
        '</nav></header>' +
      '</div>' +
      '<div class="bnav-backdrop" data-bnav-close></div>' +
      '<aside class="bnav-drawer" id="bnav-drawer" aria-label="Mobile menu" aria-hidden="true">' +
        '<button class="bnav-close" type="button" aria-label="Close menu" data-bnav-close>&times;</button>' +
        '<a class="bnav-m-top' + (act.top === "home" ? " is-active" : "") + '" href="' + url("home") + '">Home</a>' +
        '<details' + (act.top === "services" ? " open" : "") + '><summary>Services ' + ICON.chev + '</summary>' + plainLinks(SERVICES, act) + '<a href="' + url("services") + '">View All Services</a></details>' +
        '<details' + (act.top === "locations" ? " open" : "") + '><summary>Locations ' + ICON.chev + '</summary>' + plainLinks(LOCATIONS, act) + '</details>' +
        '<details><summary>Company ' + ICON.chev + '</summary>' + plainLinks(COMPANY, act) + '</details>' +
        '<a class="bnav-btn" href="' + url("contact") + '">' + esc(SITE.mobileCtaText) + '</a>' +
        '<a class="bnav-m-phone" href="' + esc(SITE.tel) + '">' + ICON.phone + esc(SITE.phone) + '</a>' +
      '</aside>';
  }

  /* ================= MOUNT ================= */
  function mount() {
    injectAssets();
    var host = document.getElementById("buford-nav") || document.querySelector("[data-buford-nav]");
    if (!host) {
      host = document.createElement("div");
      host.id = "buford-nav";
      document.body.insertBefore(host, document.body.firstChild);
    }
    var mode = (host.getAttribute("data-mode") || "fixed").toLowerCase();
    var root = document.createElement("div");
    root.className = "bnav-root";
    root.setAttribute("data-mode", mode);
    root.setAttribute("data-topbar", host.getAttribute("data-topbar") === "false" ? "false" : "true");
    root.innerHTML = render(activeKey(host));

    if (mode === "fixed") {
      // Mount on <body> so transformed page-builder wrappers cannot break position:fixed.
      document.body.insertBefore(root, document.body.firstChild);
      var spacer = document.createElement("div");
      spacer.className = "bnav-root";
      spacer.setAttribute("data-topbar", root.getAttribute("data-topbar"));
      spacer.innerHTML = '<div class="bnav-spacer" aria-hidden="true"></div>';
      host.innerHTML = "";
      host.appendChild(spacer);
    } else {
      host.innerHTML = "";
      host.appendChild(root);
    }

    // Scroll state
    var onScroll = function () { root.classList.toggle("bnav-scrolled", window.pageYOffset > 12); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Drawer
    var burger = root.querySelector(".bnav-burger");
    var drawer = root.querySelector(".bnav-drawer");
    var lastFocus = null;
    function openNav() {
      lastFocus = document.activeElement;
      root.classList.add("bnav-open");
      burger.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      var c = drawer.querySelector(".bnav-close"); if (c) c.focus();
    }
    function closeNav() {
      if (!root.classList.contains("bnav-open")) return;
      root.classList.remove("bnav-open");
      burger.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    burger.addEventListener("click", openNav);
    root.querySelectorAll("[data-bnav-close]").forEach(function (el) { el.addEventListener("click", closeNav); });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1040) closeNav(); });

    // Show phone in the top bar on small screens (address/hours are hidden there)
    var smPhone = root.querySelector("[data-bnav-phone-sm]");
    var mq = window.matchMedia("(max-width:880px)");
    var syncPhone = function () { smPhone.style.display = mq.matches ? "inline-flex" : "none"; };
    if (mq.addEventListener) mq.addEventListener("change", syncPhone); else mq.addListener(syncPhone);
    syncPhone();

    window.BufordNav = { open: openNav, close: closeNav, config: SITE };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
