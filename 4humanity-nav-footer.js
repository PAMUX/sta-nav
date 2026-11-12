/* =====================================================================
   4HUMANITY MENU AND FOOTER  (one file for every page)

   Every page loads this file. It draws the top menu and the footer, so a
   change here shows on all pages. No page has to be edited or re-pasted.

   TO CHANGE THE MENU OR FOOTER: edit section 1 below, save, and upload the
   file to the git repo again. Pages pick up the new file within about
   10 minutes (GitHub Pages cache).

   Common changes
     Add a menu item      add a line to MENU. Use a page key from ROUTES,
                          or url: "https://..." for an outside link.
     Remove a menu item   delete its line from MENU.
     Reorder the menu     move the lines.
     Rename a menu item   change label.
     Change the button    edit BUTTON (its text and the page it opens).
     New page             add its address to ROUTES first, then use its key.
   ===================================================================== */
(function () {
  "use strict";

  /* ================= 1. EDIT HERE ================= */

  // Address of each page on the live site.
  var ROUTES = {
    home:       "/",
    daily:      "/daily-story",
    categories: "/categories",
    category:   "/category-detail",
    video:      "/video",
    archive:    "/archive",
    mission:    "/mission",
    dashboard:  "/dashboard",
    contact:    "/contact",
    optin:      "/opt-in"
  };

  // Top menu, left to right. icon is a name from ICONS (section 2).
  var MENU = [
    { key: "home",       label: "Home",        icon: "house" },
    { key: "daily",      label: "Daily Story", icon: "user" },
    { key: "categories", label: "Categories",  icon: "grid" },
    { key: "dashboard",  label: "Impact",      icon: "chart" },
    { key: "mission",    label: "Mission",     icon: "target" },
    { key: "optin",      label: "Opt In",      icon: "mail" }
  ];

  // The highlighted button at the right end of the menu.
  var BUTTON = { key: "contact", label: "Connect" };

  // "Important Links" list in the footer. hash jumps to a section of the page.
  var FOOTER_LINKS = [
    { label: "How It Works",           key: "home", hash: "how-it-works" },
    { label: "Why This Portal Exists", key: "mission", hash: "why-portal-exists" },
    { label: "Opt In",                 key: "optin", hash: "partner" },
    { label: "Search and Archive",     key: "archive" },
    { label: "Impact Dashboard",       key: "dashboard" },
    { label: "Contact",                key: "contact" }
  ];

  // Footer wording and outside links.
  var FOOTER = {
    tagline:   "A dedicated space for stories that uplift, inspire, and remind us of our shared humanity.",
    email:     "info@4humanity.net",
    copyright: "© 2026 4Humanity. All rights reserved.",
    facebook:  "https://facebook.com",
    x:         "https://x.com",
    instagram: "https://instagram.com",
    youtube:   "https://youtube.com/@glenn-e1s"
  };

  // Pages that are not in the menu: which menu item to light up on them
  // (page key from ROUTES : menu key). Leave a page out for no highlight.
  var HIGHLIGHT = { category: "categories" };

  // Styles for the top bar: link sizes, the divider and the glowing button.
  var EXTRA_CSS = ".fhn-bar{background:rgba(4,9,22,.86);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.09)}.fhn-in{display:flex;align-items:center;height:64px;padding:0 16px}.fhn-links{display:none;align-items:center;margin-left:auto;gap:10px}.fhn-link{position:relative;display:inline-flex;align-items:center;gap:7px;padding:8px 2px;font-size:14px;font-weight:500;line-height:1.2;color:rgba(255,255,255,.9);white-space:nowrap;text-decoration:none;transition:color .2s}.fhn-link svg{display:none;width:18px;height:18px;flex-shrink:0;transition:color .2s}.fhn-link:hover{color:#fff}.fhn-link:hover svg{color:#38bdf8}.fhn-link.is-on{color:#38bdf8}.fhn-link.is-on::after{content:\"\";position:absolute;left:2px;right:2px;bottom:-5px;height:2px;border-radius:2px;background:linear-gradient(90deg,rgba(56,189,248,0),#38bdf8,rgba(56,189,248,0));box-shadow:0 0 10px rgba(56,189,248,.8)}.fhn-link:focus-visible,.fhn-cta:focus-visible,.fhn-mlink:focus-visible{outline:2px solid #7dd3fc;outline-offset:4px;border-radius:8px}.fhn-sep{display:none;flex-shrink:0;width:1px;height:42px;background:rgba(255,255,255,.16)}.fhn-cta{position:relative;display:none;flex-shrink:0;align-items:center;justify-content:center;gap:8px;height:42px;margin-left:12px;padding:0 14px;border:2px solid transparent;border-radius:999px;font-size:15px;font-weight:700;line-height:1;color:#fff;white-space:nowrap;text-decoration:none;background:linear-gradient(90deg,#1838c9 0%,#1d4ed8 40%,#2a6bf2 100%) padding-box,linear-gradient(100deg,#7385ff 0%,#38bdf8 45%,#8be9ff 100%) border-box;box-shadow:0 0 22px rgba(56,189,248,.5),0 0 54px rgba(37,99,235,.38),inset 0 0 14px rgba(125,211,252,.22);transition:transform .2s,box-shadow .2s,filter .2s}.fhn-cta svg{flex-shrink:0;width:18px;height:18px}.fhn-cta .fhn-cta-c{display:none;color:#a5ecff;transition:transform .2s}.fhn-cta:hover{transform:translateY(-1px);filter:brightness(1.08);box-shadow:0 0 28px rgba(56,189,248,.7),0 0 70px rgba(37,99,235,.5),inset 0 0 16px rgba(125,211,252,.3)}.fhn-cta:hover .fhn-cta-c{transform:translateX(3px)}.fhn-cta.is-on{box-shadow:0 0 30px rgba(56,189,248,.8),0 0 70px rgba(37,99,235,.5),inset 0 0 16px rgba(125,211,252,.3)}.fhn-burger{margin-left:auto;padding:8px;color:rgba(255,255,255,.85);background:transparent;border:0;cursor:pointer}.fhn-burger svg{display:block;width:22px;height:22px}.fhn-mob{background:rgba(4,9,22,.98);border-bottom:1px solid rgba(255,255,255,.08)}.fhn-mob-in{display:flex;flex-direction:column;gap:4px;padding:12px 16px 18px}.fhn-mlink{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:10px;font-size:15px;font-weight:500;color:rgba(255,255,255,.88);text-decoration:none;transition:background .2s,color .2s}.fhn-mlink svg{width:18px;height:18px;flex-shrink:0}.fhn-mlink:hover{background:rgba(255,255,255,.05);color:#fff}.fhn-mlink.is-on{background:rgba(56,189,248,.1);color:#38bdf8}.fhn-mob .fhn-cta{display:flex;height:50px;margin:10px 0 0;font-size:17px;gap:10px}.fhn-mob .fhn-cta .fhn-cta-c{display:block}@media (max-width:1279px){.fhn-logo>span{font-size:20px}}@media (min-width:768px){.fhn-in{height:76px;padding:0 24px}.fhn-links{display:flex}.fhn-cta{display:inline-flex}.fhn-burger{display:none}.fhn-mob{display:none!important}}@media (min-width:768px) and (max-width:899px){.fhn-in{padding:0 16px}.fhn-logo>span{font-size:18px}}@media (min-width:900px){.fhn-links{gap:18px}.fhn-link{font-size:15px}.fhn-cta{margin-left:22px}}@media (min-width:1024px){.fhn-in{padding:0 32px}.fhn-links{gap:22px}.fhn-sep{display:block;margin:0 22px}.fhn-cta{margin-left:0;height:50px;padding:0 20px;border-width:3px;font-size:17px;gap:10px}.fhn-cta svg{width:20px;height:20px}.fhn-cta .fhn-cta-c{display:block}}@media (min-width:1280px){.fhn-in{padding:0 48px}.fhn-links{gap:24px}.fhn-link{font-size:16px}.fhn-link svg{display:block}.fhn-sep{margin:0 24px 0 28px}.fhn-cta{height:54px;font-size:18px}}@media (min-width:1440px){.fhn-links{gap:32px}.fhn-sep{margin:0 40px 0 48px}.fhn-cta{height:58px;padding:0 26px 0 28px;font-size:19px;gap:12px}.fhn-cta svg{width:22px;height:22px}}@media (min-width:1600px){.fhn-links{gap:40px}.fhn-sep{margin:0 54px 0 80px}}@media (prefers-reduced-motion:reduce){.fhn-link,.fhn-cta,.fhn-cta .fhn-cta-c,.fhn-mlink{transition:none}.fhn-cta:hover{transform:none}}";

  /* ================= 2. ICONS (the drawing inside each menu icon) ================= */
  var ICONS = {
    house:    "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"></path><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>",
    send:     "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>",
    chevrons: "<path d=\"m6 17 5-5-5-5\"></path><path d=\"m13 17 5-5-5-5\"></path>",
    earth:    "<path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"></path><path d=\"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17\"></path><path d=\"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"></path><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
    user:     "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
    grid:     "<rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"14\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"14\"></rect>",
    chart:    "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path><path d=\"M18 17V9\"></path><path d=\"M13 17V5\"></path><path d=\"M8 17v-3\"></path>",
    target:   "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
    mail:     "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"></path><rect height=\"16\" rx=\"2\" width=\"20\" x=\"2\" y=\"4\"></rect>",
    message:  "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path>"
  };

  /* ================= 3. LAYOUT (no need to edit below this line) ================= */
  var FOOT_LINK = "text-white/70 hover:text-primary transition-colors";
  var SVG = ' fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">';
  var NAV_HTML = "<nav class=\"fixed top-0 w-full z-50 fhn\"><div class=\"fhn-bar\"><div class=\"fhn-in\"><a class=\"flex items-center gap-2 sm:gap-3 group flex-shrink-0 fhn-logo\" href=\"/\" data-route=\"home\"><div class=\"relative\"><div class=\"absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all duration-500\"></div><svg aria-hidden=\"true\" class=\"lucide lucide-heart w-6 h-6 sm:w-8 sm:h-8 text-primary relative z-10 fill-primary/20\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path></svg></div><span class=\"font-display font-bold text-lg sm:text-2xl tracking-tight text-white group-hover:text-primary transition-colors whitespace-nowrap\">4Humanity.net</span></a><div class=\"fhn-links\">{{DESKTOP}}</div><span class=\"fhn-sep\" aria-hidden=\"true\"></span>{{BUTTON}}<button aria-expanded=\"false\" aria-label=\"Toggle menu\" class=\"fhn-burger\" id=\"mobile-menu-btn\" type=\"button\"><svg aria-hidden=\"true\" class=\"lucide lucide-menu w-5 h-5\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path></svg></button></div></div><div class=\"fhn-mob\" id=\"mobile-menu\" style=\"display:none\"><div class=\"fhn-mob-in\">{{MOBILE}}{{BUTTON_MOBILE}}</div></div></nav>";
  var FOOT_HTML = "<footer class=\"relative bg-[#0A1628] border-t border-primary/20 py-6 mt-10\"><div class=\"absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none\"></div><div class=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"><div class=\"grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16\"><div class=\"col-span-1\"><a class=\"flex items-center gap-2 mb-2 group w-fit\" href=\"/\" data-route=\"home\"><svg aria-hidden=\"true\" class=\"lucide lucide-heart w-6 h-6 text-primary fill-primary/20\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path></svg><span class=\"font-display font-bold text-xl text-white\">4Humanity</span></a><a class=\"inline-block text-primary hover:text-primary/80 font-medium text-base mb-4 transition-colors\" href=\"/mission\" data-route=\"mission\">Learn more</a><p class=\"text-white/70 leading-relaxed mb-1\">{{tagline}}</p><div class=\"flex items-center gap-3\"><a class=\"p-2 rounded-lg bg-white/10 hover:bg-primary/30 text-white/80 hover:text-primary transition-all border border-white/10\" href=\"{{facebook}}\" rel=\"noopener noreferrer\" target=\"_blank\"><svg aria-hidden=\"true\" class=\"lucide lucide-facebook w-5 h-5\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg></a><a class=\"p-2 rounded-lg bg-white/10 hover:bg-primary/30 text-white/80 hover:text-primary transition-all border border-white/10\" href=\"{{x}}\" rel=\"noopener noreferrer\" target=\"_blank\"><svg class=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L2.882 2.25h6.6l4.67 6.169L18.244 2.25zM17.41 20.452h1.828L6.84 3.75H4.897l12.513 16.702z\"></path></svg></a><a class=\"p-2 rounded-lg bg-white/10 hover:bg-primary/30 text-white/80 hover:text-primary transition-all border border-white/10\" href=\"{{instagram}}\" rel=\"noopener noreferrer\" target=\"_blank\"><svg aria-hidden=\"true\" class=\"lucide lucide-instagram w-5 h-5\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"20\" rx=\"5\" ry=\"5\" width=\"20\" x=\"2\" y=\"2\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line></svg></a><a class=\"p-2 rounded-lg bg-white/10 hover:bg-primary/30 text-white/80 hover:text-primary transition-all border border-white/10\" href=\"{{youtube}}\" rel=\"noopener noreferrer\" target=\"_blank\"><svg aria-hidden=\"true\" class=\"lucide lucide-youtube w-5 h-5\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\"></path><path d=\"m10 15 5-3-5-3z\"></path></svg></a></div><a class=\"ft-mail\" href=\"mailto:{{email}}\"><svg aria-hidden=\"true\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"></path><rect height=\"16\" rx=\"2\" width=\"20\" x=\"2\" y=\"4\"></rect></svg>{{email}}</a></div><div class=\"hidden md:block\"></div><div class=\"col-span-1\"><h4 class=\"font-bold text-white mb-4\">Important Links</h4><ul class=\"space-y-3\">{{LINKS}}</ul></div></div><div class=\"mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4\"><p class=\"text-sm text-white/60\">{{copyright}}</p><p class=\"text-sm text-white/60 flex items-center gap-1\">Built with <svg aria-hidden=\"true\" class=\"lucide lucide-heart w-3 h-3 text-red-500 fill-red-500\" fill=\"none\" height=\"24\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path></svg> for the world.</p></div></div></footer>";
  var MENU_ICON = '<svg aria-hidden="true" class="w-5 h-5"' + SVG + '<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>';
  var CLOSE_ICON = '<svg aria-hidden="true" class="w-5 h-5"' + SVG + '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // a page's own settings win (the local copies use file names such as "mission.html")
  function routes() {
    var r = {}, own = (window.FH_CONFIG && window.FH_CONFIG.routes) || {}, k;
    for (k in ROUTES) r[k] = ROUTES[k];
    for (k in own) if (own[k]) r[k] = own[k];
    return r;
  }
  function href(R, item) {
    if (item.url) return item.url;
    return (R[item.key] || "#") + (item.hash ? "#" + item.hash : "");
  }
  function attrs(R, item) {
    var a = ' href="' + esc(href(R, item)) + '"';
    if (item.url) return a + (/^https?:/i.test(item.url) ? ' target="_blank" rel="noopener noreferrer"' : "");
    return a + ' data-route="' + esc(item.key) + '"' + (item.hash ? ' data-hash="' + esc(item.hash) + '"' : "");
  }
  function clean(p) {
    p = String(p || "").split("#")[0].split("?")[0].replace(/\/+$/, "").toLowerCase();
    p = p.substring(p.lastIndexOf("/") + 1);
    return p === "" || p === "home" || p === "index.html" ? "/" : p;
  }
  // which menu item is the current page
  function activeKey(R, oldNav, slot) {
    var k = (slot && slot.getAttribute("data-active")) || document.documentElement.getAttribute("data-fh-page") || "";
    if (!k && oldNav) {
      var on = oldNav.querySelector('a[data-route].is-on, a[data-route][class*="drop-shadow"]');
      if (on) k = on.getAttribute("data-route");
    }
    if (!k) {
      var here = clean(location.pathname);
      for (var key in R) if (clean(R[key]) === here) { k = key; break; }
    }
    return HIGHLIGHT[k] || k;
  }

  function build() {
    var R = routes();
    var oldNav = document.querySelector("#root > nav, body > nav, nav.fixed");
    var navSlot = document.getElementById("fh-nav");
    var oldFoot = document.querySelector("#root > footer, body > footer, footer");
    var footSlot = document.getElementById("fh-footer");
    var root = document.getElementById("root") || document.body;
    var active = activeKey(R, oldNav, navSlot);

    var desk = "", mob = "";
    MENU.forEach(function (m) {
      var on = !m.url && m.key === active, ic = '<svg aria-hidden="true"' + SVG + (ICONS[m.icon] || "") + '</svg>';
      var rest = attrs(R, m) + (on ? ' aria-current="page"' : "") + '>' + ic + '<span>' + esc(m.label) + '</span></a>';
      desk += '<a class="fhn-link' + (on ? " is-on" : "") + '"' + rest;
      mob += '<a class="fhn-mlink' + (on ? " is-on" : "") + '"' + rest;
    });
    var bOn = !BUTTON.url && BUTTON.key === active;
    var button = '<a class="fhn-cta' + (bOn ? " is-on" : "") + '"' + attrs(R, BUTTON) + (bOn ? ' aria-current="page"' : "") + '>' +
      '<svg aria-hidden="true"' + SVG + ICONS.send + '</svg><span>' + esc(BUTTON.label) + '</span>' +
      '<svg aria-hidden="true" class="fhn-cta-c"' + SVG + ICONS.chevrons + '</svg></a>';
    var links = "";
    FOOTER_LINKS.forEach(function (l) {
      links += '<li><a class="' + FOOT_LINK + '"' + attrs(R, l) + '>' + esc(l.label) + '</a></li>';
    });

    var box = document.createElement("div");
    box.innerHTML = NAV_HTML.replace("{{DESKTOP}}", function () { return desk; }).replace("{{MOBILE}}", function () { return mob; })
      .replace("{{BUTTON}}", function () { return button; }).replace("{{BUTTON_MOBILE}}", function () { return button; });
    var nav = box.firstElementChild;
    box = document.createElement("div");
    box.innerHTML = FOOT_HTML.replace("{{LINKS}}", function () { return links; })
      .replace(/\{\{(\w+)\}\}/g, function (_, k) { return esc(FOOTER[k]); });
    var foot = box.firstElementChild;

    // the frame's own links (logo, "Learn more") follow the routes too
    [nav, foot].forEach(function (el) {
      el.querySelectorAll("a[data-route]").forEach(function (a) {
        var r = a.getAttribute("data-route"), h = a.getAttribute("data-hash");
        if (R[r]) a.setAttribute("href", R[r] + (h ? "#" + h : ""));
      });
    });

    if (oldNav) oldNav.parentNode.replaceChild(nav, oldNav);
    else if (navSlot) navSlot.parentNode.replaceChild(nav, navSlot);
    else root.insertBefore(nav, root.firstChild);
    if (oldFoot) oldFoot.parentNode.replaceChild(foot, oldFoot);
    else if (footSlot) footSlot.parentNode.replaceChild(foot, footSlot);
    else root.appendChild(foot);

    // a page may carry a copy of these styles for its built-in menu: this file's styles replace it
    var old = document.getElementById("fh-nav-fallback-css");
    if (old) old.parentNode.removeChild(old);
    if (EXTRA_CSS && !document.getElementById("fh-nav-css")) {
      var st = document.createElement("style"); st.id = "fh-nav-css"; st.textContent = EXTRA_CSS;
      document.head.appendChild(st);
    }

    // phone menu: open and close
    var btn = nav.querySelector("#mobile-menu-btn"), panel = nav.querySelector("#mobile-menu");
    function setMenu(open) {
      panel.style.display = open ? "block" : "none";
      btn.innerHTML = open ? CLOSE_ICON : MENU_ICON;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (btn && panel) {
      btn.addEventListener("click", function () { setMenu(panel.style.display !== "block"); });
      panel.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
      window.addEventListener("resize", function () { if (window.innerWidth >= 768) setMenu(false); });
    }
  }

  // tells the page script that this file runs the menu
  window.FH_NAV = { version: "2026-11-13c", menu: MENU, routes: ROUTES };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
