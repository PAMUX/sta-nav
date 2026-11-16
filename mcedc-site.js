/*!
 * MCEDC shared header + footer v1.3.0 (one file)
 * Mora County Economic Development Corporation
 *
 * Use on every page:
 *   <div data-mcedc-header data-active="About"></div>
 *   <script src="https://pamux.github.io/sta-nav/mcedc-site.js"></script>
 *   ... page content ...
 *   <div data-mcedc-footer></div>
 *
 * Load this file ONCE per page (no separate footer script needed).
 * The header renders where its placeholder is; the footer renders into
 * <div data-mcedc-footer></div> as soon as the page has loaded.
 * Site settings (menu links, phone, email, address) are in the SITE SETTINGS block below.
 * Page links are live addresses ('/' for Home, '/about'). The LINKS block makes the same
 * links work on local files and on the GHL preview address, on every link in the page.
 */
(function () {
  if (window.__mcedcSiteLoaded) return;
  window.__mcedcSiteLoaded = true;

/* ===================== LINKS =====================
   Page links are written as live addresses: '/' for Home, '/about', '/events#news'.
   This block turns them into the right address for where the page is open:
     live site (moracountyedc.org/about)   ->  '/about'      Home -> '/'
     local file (about.html in a folder)   ->  'about.html'  Home -> 'home.html'
     GHL preview (/preview/<page id>)      ->  '/preview/<id of that page>'
   Old-style links (about.html, index.html) are understood too, so a page that still
   has them keeps working. If a page is added in GHL, add its name and page id below. */
  var MC_PAGE_IDS = {
    'home': 'ikM9Ec1QXNuUwLghyX04',
    'about': 'jjzHsht4jbyQM9rNb9uN',
    'board': '2OwXlRNbFNNlb8vpT9fj',
    'classes': 'cL7eC1tCKMe2Au8QIFKK',
    'contact': 'BCMnJGud1y4rIeUxVGh2',
    'directory': 'AnkBY6M9kxN0d36QtiVi',
    'donate': '7IoT3C8UJsQikATf8mun',
    'events': 'GB1Y4VNcLvclWga8YpHi',
    'grants': 'I1Qt35KwFalP09j7EYe3',
    'living-in-mora': 'tgScPLNCa6ElF5aJZUBg',
    'membership': 'Up7UdBSBCuYhLYlMmqxh',
    'partner-application': 'KgSE97JluTGlTOejnJjP',
    'sponsors': 'lY2flm3BGnjLczuLYxLn',
    'starting-a-business': 'OlSb9CVKn2NEcCkeOn1Y',
    'success-stories': 'VjFVBgWtix1puivdP3X0',
    'sustainability': 'uhgLy3GK1w5dLtlVHfgR'
  };
  var MC_LINK_RE = new RegExp('^(?:\\./|/)?(index|' + Object.keys(MC_PAGE_IDS).sort(function (a, b) { return b.length - a.length; }).join('|') + ')?(?:\\.html?)?/?(#.*)?$', 'i');
  var MC_MODE = (function () {
    var p = location.pathname;
    if (location.protocol === 'file:' || /\.html?$/i.test(p)) return 'local';
    if (/^\/preview\/[A-Za-z0-9]+\/?$/.test(p)) return 'preview';
    return 'live';
  })();
  function mcLink(href) {
    if (!href || href.charAt(0) === '#') return href;
    var m = MC_LINK_RE.exec(href);
    if (!m) return href;
    var page = (m[1] || 'home').toLowerCase(), frag = m[2] || '';
    if (page === 'index') page = 'home';
    if (MC_MODE === 'local') return page + '.html' + frag;
    if (MC_MODE === 'preview') return MC_PAGE_IDS[page] ? '/preview/' + MC_PAGE_IDS[page] + frag : href;
    return (page === 'home' ? '/' : '/' + page) + frag;
  }
  function mcFixLinks() {
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var h = as[i].getAttribute('href'), n = mcLink(h);
      if (n !== h) as[i].setAttribute('href', n);
    }
  }
  window.MCEDC_LINK = mcLink;
  /* every link in the page: fix now, when the page has loaded, and as a last check on click */
  mcFixLinks();
  document.addEventListener('DOMContentLoaded', mcFixLinks);
  window.addEventListener('load', mcFixLinks);
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var h = a.getAttribute('href'), n = mcLink(h);
    if (n !== h) a.setAttribute('href', n);
  }, true);

/* ===================== HEADER ===================== */
/*!
 * MCEDC shared top navigation v1.0.0
 * Mora County Economic Development Corporation
 *
 * Use on every page, where the header should appear:
 *   <div data-mcedc-header data-active="About"></div>
 *   <script src="https://YOUR-CDN/mcedc-header.js"></script>
 *
 * data-active is optional: Home, Events, About, Living in Mora, Business & Community or Get Involved.
 * Without it, the menu item is picked from the page address.
 * This file also holds the site settings (links, phone, email) used by mcedc-footer.js.
 */
(function () {
  'use strict';

  /* ================= SITE SETTINGS =================
     Edit these once and every page updates. Links are the live page addresses:
     '/' is Home, '/about' is the about page, '/events#news' is a section on a page.
     mcedc-footer.js reads the same settings, so there is nothing to change there. */
  var CONFIG = {
    home: '/',
    logo: 'https://assets.cdn.filesafe.space/tWoxbvtjMGP2F9AtZotx/media/6ab446dc25d854bb6501bd90.webp',
    logoAlt: 'Mora County Economic Development Corporation',
    donate: '/donate',
    menu: [
      { label: 'Home', href: '/' },
      { label: 'Events', items: [
        ['Events Calendar', '/events'],
        ['News & Announcements', '/events#news'] ] },
      { label: 'About', items: [
        ['About MCEDC', '/about'],
        ['Board & Leadership', '/board'],
        ['Sponsors & Partners', '/sponsors'],
        ['Mora Sustainability Initiative', '/sustainability'] ] },
      { label: 'Living in Mora', items: [
        ['Community Stories', '/living-in-mora#stories'],
        ['Photos & Video', '/living-in-mora#photos'],
        ['Quality of Life', '/living-in-mora#quality'] ] },
      { label: 'Business & Community', items: [
        ['Local Business Directory', '/directory'],
        ['Starting a Business in Mora', '/starting-a-business'],
        ['Grants & Incentives', '/grants'],
        ['Classes & Workforce Training', '/classes'],
        ['Success Stories', '/success-stories'] ] },
      { label: 'Get Involved', items: [
        ['Membership', '/membership'],
        ['Donate', '/donate'],
        ['Partner Application', '/partner-application'],
        ['Contact', '/contact'] ] }
    ],
    footerLinks: [
      ['About', '/about'],
      ['Events', '/events'],
      ['Business Directory', '/directory'],
      ['Business Resources', '/starting-a-business'],
      ['Living in Mora', '/living-in-mora'],
      ['Membership', '/membership'],
      ['Contact', '/contact']
    ],
    tagline: 'Building a stronger, more sustainable Mora County through community, collaboration, and opportunity.',
    address: ['PO Box 171', 'Mora, NM 87732'],
    phone: '(505) 718-5140',
    tel: '+15057185140',
    email: 'juliarogers215@gmail.com',
    /* swap '#' for the real profile links; set one to '' to hide that icon */
    social: { facebook: '#', instagram: '#', youtube: '#', linkedin: '#' },
    privacy: '#',
    terms: '#',
    /* paste a GHL form webhook (or other URL) to collect newsletter signups; empty = thank-you message only */
    newsletterEndpoint: ''
  };

  var CSS = ".mc-header{--yellow:#FDC316;--yellow-hover:#FFD03F;--orange:#F5A50F;--olive:#282A1B;--olive-deep:#23251A;--blue:#0B78BD;--cream:#FBFAF6;--cream-2:#F4F1EA;--ink:#141414;--text:#4A4A48;--line:#E7E2D8;font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}\n.mc-header *,.mc-header *::before,.mc-header *::after{box-sizing:border-box}\n.mc-header :where(img){max-width:100%;display:block}\n.mc-header :where(a){color:inherit;text-decoration:none}\n.mc-header :where(h1,h2,h3,h4,p,ul){margin:0}\n.mc-header :where(ul){padding:0;list-style:none}\n.mc-header :where(svg){flex-shrink:0}\n.mc-header .mc-container{max-width:1280px;margin:0 auto;padding:0 32px}\n@media (max-width:900px){.mc-header .mc-container{padding:0 24px}}\n@media (max-width:640px){.mc-header .mc-container{padding:0 18px}}\n.mc-header{position:sticky;top:0;z-index:60;background:#fff;transition:box-shadow .25s ease}\n.mc-header.is-scrolled{box-shadow:0 6px 24px -10px rgba(0,0,0,.18)}\n.mc-header__inner{display:flex;align-items:center;justify-content:space-between;height:104px}\n.mc-logo{display:flex;align-items:center;color:#161616}\n.mc-logo__crop{display:block;overflow:hidden;height:90px}\n.mc-logo__crop img{height:99px;width:auto;max-width:none}\n.mc-nav{display:flex;align-items:center;gap:30px}\n.mc-nav__list{display:flex;align-items:center;gap:28px}\n.mc-nav__item{position:relative}\n.mc-nav__link{display:flex;align-items:center;gap:7px;font-size:15.5px;font-weight:500;color:#1D1D1D;padding:39px 0;position:relative;background:none;border:0;font-family:inherit;cursor:pointer}\n.mc-nav__link svg{width:15px;height:15px;transition:transform .2s ease}\n.mc-nav__link::after{content:\"\";position:absolute;left:-7px;right:-7px;bottom:28px;height:4px;border-radius:3px;background:var(--yellow);transform:scaleX(0);transition:transform .25s ease}\n.mc-nav__link:hover::after,.mc-nav__link.is-active::after{transform:scaleX(1)}\n.mc-nav__link.is-active{font-weight:700}\n.mc-nav__item:hover .mc-nav__link svg{transform:rotate(180deg)}\n.mc-dropdown{position:absolute;top:calc(100% - 14px);left:-20px;min-width:250px;background:#fff;border-radius:12px;box-shadow:0 24px 48px -12px rgba(30,30,15,.22),0 0 0 1px rgba(0,0,0,.04);padding:10px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,visibility .2s}\n.mc-nav__item:hover .mc-dropdown,.mc-nav__item:focus-within .mc-dropdown{opacity:1;visibility:visible;transform:none}\n.mc-dropdown a{display:block;padding:11px 14px;border-radius:8px;font-size:14.5px;font-weight:500;color:#222;white-space:nowrap;transition:background .15s ease,color .15s ease}\n.mc-dropdown a:hover{background:var(--cream-2);color:#000}\n.mc-donate{background:var(--yellow);color:var(--ink);font-weight:700;font-size:16px;padding:15px 30px;border-radius:6px;transition:background .2s ease,transform .2s ease;white-space:nowrap}\n.mc-donate:hover{background:#F5B800;transform:translateY(-1px)}\n.mc-burger{display:none;width:46px;height:46px;border:0;border-radius:8px;background:var(--cream-2);cursor:pointer;align-items:center;justify-content:center}\n.mc-burger span,.mc-burger span::before,.mc-burger span::after{display:block;width:22px;height:2.5px;border-radius:2px;background:var(--ink);position:relative;transition:transform .25s ease,background .25s ease}\n.mc-burger span::before,.mc-burger span::after{content:\"\";position:absolute;left:0}\n.mc-burger span::before{top:-7px}\n.mc-burger span::after{top:7px}\n.mc-header.is-open .mc-burger span{background:transparent}\n.mc-header.is-open .mc-burger span::before{transform:translateY(7px) rotate(45deg)}\n.mc-header.is-open .mc-burger span::after{transform:translateY(-7px) rotate(-45deg)}\n@media (max-width:1280px){\n.mc-nav{gap:22px}\n.mc-nav__list{gap:20px}\n.mc-nav__link{font-size:15px}\n}\n@media (max-width:1200px){\n.mc-header__inner{height:84px}\n.mc-logo__crop{height:68px}\n.mc-logo__crop img{height:75px}\n.mc-burger{display:flex}\n.mc-nav{position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;align-items:stretch;gap:0;padding:8px 24px 24px;box-shadow:0 20px 30px -18px rgba(0,0,0,.25);max-height:calc(100vh - 84px);overflow-y:auto;opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .25s ease,transform .25s ease,visibility .25s}\n.mc-header.is-open .mc-nav{opacity:1;visibility:visible;transform:none}\n.mc-nav__list{flex-direction:column;align-items:stretch;gap:0}\n.mc-nav__item{border-bottom:1px solid var(--line)}\n.mc-nav__link{width:100%;justify-content:space-between;padding:16px 2px;font-size:16px}\n.mc-nav__link::after{display:none}\n.mc-nav__link.is-active{color:#B88700}\n.mc-nav__item:hover .mc-nav__link svg{transform:none}\n.mc-nav__item.is-open .mc-nav__link svg{transform:rotate(180deg)}\n.mc-dropdown a{white-space:normal}\n.mc-dropdown{position:static;opacity:1;visibility:visible;transform:none;box-shadow:none;min-width:0;padding:0 0 10px 10px;display:none;border-radius:0}\n.mc-nav__item:hover .mc-dropdown,.mc-nav__item:focus-within .mc-dropdown{transform:none}\n.mc-nav__item.is-open .mc-dropdown{display:block}\n.mc-donate{margin-top:20px;text-align:center}\n}\n@media (max-width:640px){\n.mc-header__inner{height:74px}\n.mc-logo__crop{height:60px}\n.mc-logo__crop img{height:66px}\n.mc-nav{max-height:calc(100vh - 74px);padding:4px 18px 22px}\n}\nhtml{scroll-padding-top:112px}\n.mc-header{position:fixed!important;top:0;left:0;right:0;z-index:1000}\n.mc-header-space{height:104px}\n@media (max-width:1200px){.mc-header-space{height:84px}html{scroll-padding-top:92px}}\n@media (max-width:640px){.mc-header-space{height:74px}html{scroll-padding-top:82px}}\n@media (prefers-reduced-motion:reduce){.mc-header *{transition:none!important}}";
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

  function merge(a, b) { for (var k in b) { if (Object.prototype.hasOwnProperty.call(b, k)) a[k] = b[k]; } return a; }
  var C = window.MCEDC_CONFIG = merge(CONFIG, window.MCEDC_CONFIG || {});

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function path(u) {
    var a = document.createElement('a'); a.href = u;
    return a.pathname.replace(/\/index\.html?$/i, '/').replace(/\.html?$/i, '').replace(/\/+$/, '').toLowerCase();
  }
  function hash(u) { var i = u.indexOf('#'); return i > -1 ? u.slice(i) : ''; }

  /* ---------- styles + font (added once) ---------- */
  if (!document.getElementById('mcedc-header-css')) {
    var st = document.createElement('style'); st.id = 'mcedc-header-css'; st.textContent = CSS;
    document.head.appendChild(st);
  }
  if (!document.querySelector('link[href*="family=Montserrat"]')) {
    var fl = document.createElement('link'); fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(fl);
  }

  /* ---------- which menu item is active ---------- */
  var host = document.querySelector('[data-mcedc-header]');
  var forced = host ? (host.getAttribute('data-active') || '') : '';
  var here = path(location.href), hereHash = location.hash;

  function isHere(href) { return path(mcLink(href).split('#')[0]) === here; }

  /* ---------- markup ---------- */
  var items = C.menu.map(function (m) {
    if (!m.items) {
      var on = forced ? forced === m.label : isHere(m.href);
      return '<li class="mc-nav__item"><a href="' + esc(mcLink(m.href)) + '" class="mc-nav__link' + (on ? ' is-active' : '') + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(m.label) + '</a></li>';
    }
    var any = false, currentMarked = false;
    var links = m.items.map(function (it) {
      var cur = false;
      if (!currentMarked && isHere(it[1])) {
        var h = hash(it[1]);
        if (!h || h === hereHash) { cur = true; currentMarked = true; }
        any = true;
      }
      return '<li><a href="' + esc(mcLink(it[1])) + '"' + (cur ? ' aria-current="page"' : '') + '>' + esc(it[0]) + '</a></li>';
    }).join('');
    var on2 = forced ? forced === m.label : any;
    return '<li class="mc-nav__item mc-has-drop"><button type="button" class="mc-nav__link' + (on2 ? ' is-active' : '') + '" aria-expanded="false">' + esc(m.label) + ' ' + CHEV + '</button><ul class="mc-dropdown">' + links + '</ul></li>';
  }).join('');

  var html =
    '<header class="mc-header" id="mcHeader">' +
      '<div class="mc-container mc-header__inner">' +
        '<a href="' + esc(mcLink(C.home)) + '" class="mc-logo" aria-label="Mora County Economic Development home"><span class="mc-logo__crop"><img src="' + esc(C.logo) + '" alt="' + esc(C.logoAlt) + '" width="500" height="380"></span></a>' +
        '<nav class="mc-nav" id="mcNav" aria-label="Main"><ul class="mc-nav__list">' + items + '</ul>' +
          '<a href="' + esc(mcLink(C.donate)) + '" class="mc-donate">Donate</a></nav>' +
        '<button type="button" class="mc-burger" id="mcBurger" aria-label="Open menu" aria-expanded="false" aria-controls="mcNav"><span></span></button>' +
      '</div>' +
    '</header>' +
    '<div class="mc-header-space" aria-hidden="true"></div>';

  if (host) { host.insertAdjacentHTML('afterend', html); host.parentNode.removeChild(host); }
  else if (document.currentScript) { document.currentScript.insertAdjacentHTML('beforebegin', html); }
  else { document.body.insertAdjacentHTML('afterbegin', html); }

  /* ---------- behaviour ---------- */
  var header = document.getElementById('mcHeader');
  var burger = document.getElementById('mcBurger');
  var mq = window.matchMedia('(max-width: 1200px)');

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () { setOpen(!header.classList.contains('is-open')); });

  Array.prototype.forEach.call(header.querySelectorAll('.mc-has-drop > .mc-nav__link'), function (btn) {
    btn.addEventListener('click', function () {
      if (!mq.matches) return;
      var open = btn.parentElement.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  Array.prototype.forEach.call(header.querySelectorAll('.mc-nav a'), function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && header.classList.contains('is-open')) { setOpen(false); burger.focus(); } });
  document.addEventListener('click', function (e) { if (header.classList.contains('is-open') && !header.contains(e.target)) setOpen(false); });
})();

/* ===================== FOOTER ===================== */
  function mcedcFooter() {
/*!
 * MCEDC shared footer v1.0.0
 * Mora County Economic Development Corporation
 *
 * Use on every page, where the footer should appear:
 *   <div data-mcedc-footer></div>
 *   <script src="https://YOUR-CDN/mcedc-footer.js"></script>
 *
 * Links, phone, email and address come from the settings in mcedc-header.js.
 */
(function () {
  'use strict';

  var CSS = ".mc-footer{--yellow:#FDC316;--yellow-hover:#FFD03F;--orange:#F5A50F;--olive:#282A1B;--olive-deep:#23251A;--blue:#0B78BD;--cream:#FBFAF6;--cream-2:#F4F1EA;--ink:#141414;--text:#4A4A48;--line:#E7E2D8;font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}\n.mc-footer *,.mc-footer *::before,.mc-footer *::after{box-sizing:border-box}\n.mc-footer :where(img){max-width:100%;display:block}\n.mc-footer :where(a){color:inherit;text-decoration:none}\n.mc-footer :where(h1,h2,h3,h4,p,ul){margin:0}\n.mc-footer :where(ul){padding:0;list-style:none}\n.mc-footer :where(svg){flex-shrink:0}\n.mc-footer .mc-container{max-width:1280px;margin:0 auto;padding:0 32px}\n@media (max-width:900px){.mc-footer .mc-container{padding:0 24px}}\n@media (max-width:640px){.mc-footer .mc-container{padding:0 18px}}\n.mc-logo{display:flex;align-items:center;color:#161616}\n.mc-logo__crop{display:block;overflow:hidden;height:90px}\n.mc-logo__crop img{height:99px;width:auto;max-width:none}\n.mc-footer{background:var(--olive-deep);color:#E6E5DC;padding:72px 0 34px}\n.mc-footer__grid{display:grid;grid-template-columns:1.45fr .8fr 1fr 1.05fr;gap:40px}\n.mc-footer .mc-logo{color:#fff}\n.mc-footer__logo{display:inline-flex;background:#FBFAF6;border-radius:12px;padding:10px 14px}\n.mc-footer .mc-footer__logo .mc-logo__crop{height:90px}\n.mc-footer .mc-footer__logo .mc-logo__crop img{height:99px}\n.mc-footer__about p{font-size:16px;line-height:1.55;margin:14px 0 26px;max-width:320px}\n.mc-social{display:flex;gap:14px}\n.mc-social a{width:44px;height:44px;border-radius:50%;background:var(--yellow);color:#1E1E14;display:flex;align-items:center;justify-content:center;transition:transform .2s ease,background .2s ease}\n.mc-social a:hover{transform:translateY(-3px);background:#fff}\n.mc-social svg{width:21px;height:21px}\n.mc-footer h4{font-size:19px;font-weight:700;color:#fff;margin:22px 0 22px}\n.mc-flinks{display:grid;gap:14px}\n.mc-flinks a{font-size:16.5px;transition:color .2s ease,padding .2s ease}\n.mc-flinks a:hover{color:var(--yellow);padding-left:4px}\n.mc-contact{display:grid;gap:22px;padding-right:30px;border-right:1px solid rgba(255,255,255,.28)}\n.mc-contact li{display:flex;gap:26px;align-items:flex-start;font-size:16.5px;line-height:1.5}\n.mc-contact svg{width:26px;height:26px;color:var(--yellow);margin-top:1px}\n.mc-contact a:hover{color:var(--yellow)}\n.mc-subscribe p{font-size:16px;line-height:1.55;margin-bottom:20px}\n.mc-subscribe input{width:100%;height:52px;border-radius:6px;border:0;padding:0 18px;font-family:inherit;font-size:15.5px;color:#222;background:#fff;outline:none}\n.mc-subscribe input:focus{box-shadow:0 0 0 3px rgba(253,195,22,.6)}\n.mc-subscribe button{width:100%;height:52px;margin-top:10px;border-radius:6px;border:0;background:var(--yellow);font-family:inherit;font-weight:600;font-size:16.5px;color:#1E1E14;cursor:pointer;transition:background .2s ease}\n.mc-subscribe button:hover{background:var(--yellow-hover)}\n.mc-subscribe__form{margin:0 -3px}\n.mc-subscribe__form iframe{width:100%;border:0;display:block;background:transparent}\n.mc-footer__bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;border-top:1px solid rgba(255,255,255,.3);margin-top:56px;padding-top:30px;font-size:15px}\n.mc-footer__legal{display:flex;gap:18px;align-items:center}\n.mc-footer__legal a:hover{color:var(--yellow)}\n@media (max-width:1200px){\n.mc-logo__crop{height:68px}\n.mc-logo__crop img{height:75px}\n.mc-footer__grid{grid-template-columns:1fr 1fr;gap:44px 40px}\n.mc-contact{border-right:0;padding-right:0}\n}\n@media (max-width:640px){\n.mc-logo__crop{height:60px}\n.mc-logo__crop img{height:66px}\n.mc-footer{padding:56px 0 28px}\n.mc-footer__grid{grid-template-columns:1fr;gap:10px}\n.mc-footer .mc-footer__logo .mc-logo__crop{height:80px}\n.mc-footer .mc-footer__logo .mc-logo__crop img{height:88px}\n.mc-footer h4{margin:26px 0 16px}\n.mc-contact li{gap:18px}\n.mc-footer__bottom{flex-direction:column;align-items:flex-start;margin-top:40px;font-size:14px}\n}\n@media (prefers-reduced-motion:reduce){.mc-footer *{transition:none!important}}";
  var ICON = {"facebook": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.6 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.6V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.3H7.7v3.2h2.7v8z\"/></svg>", "instagram": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3.5\" y=\"3.5\" width=\"17\" height=\"17\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.2\" cy=\"6.8\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/></svg>", "youtube": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z\"/></svg>", "linkedin": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.6 9h3.3v11H4.6z\"/><circle cx=\"6.25\" cy=\"5.6\" r=\"1.95\"/><path d=\"M10.2 9h3.1v1.5c.5-.9 1.7-1.8 3.4-1.8 3.4 0 4 2.2 4 5V20h-3.3v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3.2z\"/></svg>", "pin": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z\"/></svg>", "phone": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z\"/></svg>", "mail": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"><rect x=\"2.5\" y=\"5\" width=\"19\" height=\"14\" rx=\"1.5\"/><path d=\"M3 5.8l9 7 9-7M3 18.4l7-6.3M21 18.4l-7-6.3\"/></svg>"};

  /* settings come from mcedc-header.js; these are only used if that file is missing */
  var C = window.MCEDC_CONFIG || {
    home: '/', logo: 'https://assets.cdn.filesafe.space/tWoxbvtjMGP2F9AtZotx/media/6ab446dc25d854bb6501bd90.webp', logoAlt: 'Mora County Economic Development Corporation',
    footerLinks: [['About', '/about'], ['Events', '/events'], ['Business Directory', '/directory'], ['Contact', '/contact']],
    tagline: 'Building a stronger, more sustainable Mora County through community, collaboration, and opportunity.',
    address: ['PO Box 171', 'Mora, NM 87732'], phone: '(505) 718-5140', tel: '+15057185140', email: 'juliarogers215@gmail.com',
    social: {}, privacy: '#', terms: '#', newsletterEndpoint: ''
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  if (!document.getElementById('mcedc-footer-css')) {
    var st = document.createElement('style'); st.id = 'mcedc-footer-css'; st.textContent = CSS;
    document.head.appendChild(st);
  }
  if (!document.querySelector('link[href*="family=Montserrat"]')) {
    var fl = document.createElement('link'); fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(fl);
  }

  var names = { facebook: 'Facebook', instagram: 'Instagram', youtube: 'YouTube', linkedin: 'LinkedIn' };
  var social = Object.keys(names).filter(function (k) { return C.social && C.social[k]; }).map(function (k) {
    return '<a href="' + esc(C.social[k]) + '" aria-label="' + names[k] + '" target="_blank" rel="noopener">' + ICON[k] + '</a>';
  }).join('');
  var links = C.footerLinks.map(function (l) { return '<li><a href="' + esc(mcLink(l[1])) + '">' + esc(l[0]) + '</a></li>'; }).join('');
  var year = new Date().getFullYear();

  var html =
    '<footer class="mc-footer" id="mc-footer">' +
      '<div class="mc-container">' +
        '<div class="mc-footer__grid">' +
          '<div class="mc-footer__about">' +
            '<a href="' + esc(mcLink(C.home)) + '" class="mc-logo mc-footer__logo" aria-label="Mora County Economic Development home"><span class="mc-logo__crop"><img src="' + esc(C.logo) + '" alt="' + esc(C.logoAlt) + '" width="500" height="380" loading="lazy"></span></a>' +
            '<p>' + esc(C.tagline) + '</p>' +
            (social ? '<div class="mc-social">' + social + '</div>' : '') +
          '</div>' +
          '<div><h4>Quick Links</h4><ul class="mc-flinks">' + links + '</ul></div>' +
          '<div><h4>Contact</h4><ul class="mc-contact">' +
            '<li>' + ICON.pin + '<span>' + C.address.map(esc).join('<br>') + '</span></li>' +
            '<li>' + ICON.phone + '<a href="tel:' + esc(C.tel) + '">' + esc(C.phone) + '</a></li>' +
            '<li>' + ICON.mail + '<a href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a></li>' +
          '</ul></div>' +
          '<div class="mc-subscribe"><h4>Stay Connected</h4><p>Get the latest news, events, and opportunities.</p>' +
            '<div class="mc-subscribe__form"><iframe src="https://staai.scalethroughautomation.io/widget/form/mdWEsOBaUj9vIWiyN3zU" style="width:100%;height:126px;border:none;display:block" id="inline-mdWEsOBaUj9vIWiyN3zU" data-layout="{\'id\':\'INLINE\'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="MCEDC Newsletter Signup" data-height="126" data-layout-iframe-id="inline-mdWEsOBaUj9vIWiyN3zU" data-form-id="mdWEsOBaUj9vIWiyN3zU" title="MCEDC Newsletter Signup" loading="lazy"></iframe></div>' +
          '</div>' +
        '</div>' +
        '<div class="mc-footer__bottom">' +
          '<span>&copy; ' + year + ' Mora County Economic Development Corporation. All Rights Reserved.</span>' +
          '<span class="mc-footer__legal"><a href="' + esc(C.privacy) + '">Privacy Policy</a><span aria-hidden="true">|</span><a href="' + esc(C.terms) + '">Terms of Use</a></span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var host = document.querySelector('[data-mcedc-footer]');
  if (host) { host.insertAdjacentHTML('afterend', html); host.parentNode.removeChild(host); }
  else if (document.currentScript) { document.currentScript.insertAdjacentHTML('beforebegin', html); }
  else { document.body.insertAdjacentHTML('beforeend', html); }

  /* ---------- newsletter form (GHL form "MCEDC Newsletter Signup") ----------
     GHL's form_embed.js sizes the form. Load it once if the page has not already. */
  if (!document.querySelector('script[src*="form_embed.js"]')) {
    var fe = document.createElement('script');
    fe.src = 'https://staai.scalethroughautomation.io/js/form_embed.js';
    document.body.appendChild(fe);
  }
})();
  }
  if (document.querySelector('[data-mcedc-footer]') || document.readyState !== 'loading') { mcedcFooter(); }
  else { document.addEventListener('DOMContentLoaded', mcedcFooter); }
})();
