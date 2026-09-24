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
     Edit these once and every page updates. When the pages move to GHL or WordPress,
     change the links to your page addresses (for example '/about' instead of 'about.html').
     mcedc-footer.js reads the same settings, so there is nothing to change there. */
  var CONFIG = {
    home: 'index.html',
    logo: 'https://assets.cdn.filesafe.space/tWoxbvtjMGP2F9AtZotx/media/6ab446dc25d854bb6501bd90.webp',
    logoAlt: 'Mora County Economic Development Corporation',
    donate: 'donate.html',
    menu: [
      { label: 'Home', href: 'index.html' },
      { label: 'Events', items: [
        ['Events Calendar', 'events.html'],
        ['News & Announcements', 'events.html#news'] ] },
      { label: 'About', items: [
        ['About MCEDC', 'about.html'],
        ['Board & Leadership', 'board.html'],
        ['Sponsors & Partners', 'sponsors.html'],
        ['Mora Sustainability Initiative', 'sustainability.html'] ] },
      { label: 'Living in Mora', items: [
        ['Community Stories', 'living-in-mora.html#stories'],
        ['Photos & Video', 'living-in-mora.html#photos'],
        ['Quality of Life', 'living-in-mora.html#quality'] ] },
      { label: 'Business & Community', items: [
        ['Local Business Directory', 'directory.html'],
        ['Starting a Business in Mora', 'starting-a-business.html'],
        ['Grants & Incentives', 'grants.html'],
        ['Classes & Workforce Training', 'classes.html'],
        ['Success Stories', 'success-stories.html'] ] },
      { label: 'Get Involved', items: [
        ['Membership', 'membership.html'],
        ['Donate', 'donate.html'],
        ['Partner Application', 'partner-application.html'],
        ['Contact', 'contact.html'] ] }
    ],
    footerLinks: [
      ['About', 'about.html'],
      ['Events', 'events.html'],
      ['Business Directory', 'directory.html'],
      ['Business Resources', 'starting-a-business.html'],
      ['Living in Mora', 'living-in-mora.html'],
      ['Membership', 'membership.html'],
      ['Contact', 'contact.html']
    ],
    tagline: 'Building a stronger, more sustainable Mora County through community, collaboration, and opportunity.',
    address: ['P.O. Box 701', 'Mora, NM 87732'],
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

  function isHere(href) { return path(href.split('#')[0]) === here; }

  /* ---------- markup ---------- */
  var items = C.menu.map(function (m) {
    if (!m.items) {
      var on = forced ? forced === m.label : isHere(m.href);
      return '<li class="mc-nav__item"><a href="' + esc(m.href) + '" class="mc-nav__link' + (on ? ' is-active' : '') + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(m.label) + '</a></li>';
    }
    var any = false, currentMarked = false;
    var links = m.items.map(function (it) {
      var cur = false;
      if (!currentMarked && isHere(it[1])) {
        var h = hash(it[1]);
        if (!h || h === hereHash) { cur = true; currentMarked = true; }
        any = true;
      }
      return '<li><a href="' + esc(it[1]) + '"' + (cur ? ' aria-current="page"' : '') + '>' + esc(it[0]) + '</a></li>';
    }).join('');
    var on2 = forced ? forced === m.label : any;
    return '<li class="mc-nav__item mc-has-drop"><button type="button" class="mc-nav__link' + (on2 ? ' is-active' : '') + '" aria-expanded="false">' + esc(m.label) + ' ' + CHEV + '</button><ul class="mc-dropdown">' + links + '</ul></li>';
  }).join('');

  var html =
    '<header class="mc-header" id="mcHeader">' +
      '<div class="mc-container mc-header__inner">' +
        '<a href="' + esc(C.home) + '" class="mc-logo" aria-label="Mora County Economic Development home"><span class="mc-logo__crop"><img src="' + esc(C.logo) + '" alt="' + esc(C.logoAlt) + '" width="500" height="380"></span></a>' +
        '<nav class="mc-nav" id="mcNav" aria-label="Main"><ul class="mc-nav__list">' + items + '</ul>' +
          '<a href="' + esc(C.donate) + '" class="mc-donate">Donate</a></nav>' +
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
