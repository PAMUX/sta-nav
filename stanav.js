/* ============================================================================
   STA GLOBAL NAV  —  stanav.js
   ScaleThroughAutomation · one navbar for every GoHighLevel page
   ----------------------------------------------------------------------------
   THIS FILE IS LIVE AT
     https://pamux.github.io/sta-nav/stanav.js

   TO INSTALL ON A FUNNEL / WEBSITE
     GHL -> Sites -> (your funnel or website) -> Settings -> Custom Code ->
     Footer Code, and paste this one line:

       <script src="https://pamux.github.io/sta-nav/stanav.js" defer></script>

     Save, then hard-refresh a live page (Ctrl/Cmd + Shift + R).
     Repeat on each funnel. They all read this same file.

   TO CHANGE THE MENU
     Open stanav.js on GitHub -> pencil icon -> edit the CONFIG block below ->
     Commit. Live on every page in about a minute. GitHub Pages caches for ten
     minutes at most; if a change seems slow, hard-refresh.

   WHAT IT DOES ON ITS OWN
     • highlights the current page's tab, and its parent dropdown
     • hides a page's own hard-coded navbar so two bars never stack
     • adds top spacing so content clears the fixed bar (see pushContent)
     • mobile drawer, tap-to-expand dropdowns, Esc to close
     • namespaced #staNav / stn-* so it cannot clash with GHL styles
============================================================================ */
(function () {
  /* run once, even if the loader tag ends up on the page twice */
  if (window.__STA_NAV_LOADED__) return;
  window.__STA_NAV_LOADED__ = true;

  /* ---- webfont + styles are injected by this file, nothing to paste ------ */
  function head(node) { (document.head || document.documentElement).appendChild(node); }

  ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach(function (h) {
    var l = document.createElement('link');
    l.rel = 'preconnect'; l.href = h;
    if (h.indexOf('gstatic') > -1) l.crossOrigin = 'anonymous';
    head(l);
  });

  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap';
  head(font);

  var style = document.createElement('style');
  style.id = 'staNavStyles';
  style.textContent = STYLES();
  head(style);

  /* ==========================================================================
     ================================ EDIT HERE ===============================
     Add, remove or rename menu items below. Nothing else needs to change.

       simple link ......  { label: 'About', href: '...' }
       dropdown .........  { label: 'Services', items: [ {label, href}, ... ] }
       wide dropdown ....  { label: 'Solutions', columns: [ {heading, items:[...]}, ... ] }
     ========================================================================== */
  var CONFIG = {

    /* set false if you do NOT want the nav to push page content down */
    pushContent: true,

    logo: {
      href: 'https://scalethroughautomation.io/',
      img:  'https://assets.cdn.filesafe.space/QtVTuV3n8FWzuEoGRGJZ/media/6a4d2edec92eca9eeb203121.png',
      alt:  'ScaleThroughAutomation'
    },

    ctas: [
      // points at our own booking page, which embeds the GHL calendar
      { label: 'Book a Call', href: 'https://www.scalethroughautomation.io/calendar', style: 'primary', newTab: false },
      { label: 'Contact',     href: 'https://scalethroughautomation.io/contact',      style: 'ghost',   newTab: true  }
    ],

    menu: [
      {
        label: 'Services',
        items: [
          { label: 'AI & Automation Consulting',  href: 'https://scalethroughautomation.io/ai-automation-consulting/' },
          { label: 'AI Agent',                    href: 'https://scalethroughautomation.io/ai-gent/' },
          { label: 'Intelligent Automation',      href: 'https://scalethroughautomation.io/intelligent-automation-2/' },
          { label: 'Business Process Automation', href: 'https://scalethroughautomation.io/business-process-automation-2/' },
          { label: 'AI Powered Data Insights',    href: 'https://scalethroughautomation.io/ai-powered-data-insights-2/' }
        ]
      },
      {
        label: 'Solutions',
        columns: [
          {
            heading: 'By Industry',
            items: [
              { label: 'Accounting',          href: 'https://scalethroughautomation.io/accounting/' },
              { label: 'Property Management', href: 'https://scalethroughautomation.io/property-management/' },
              { label: 'Manufacturing',       href: 'https://scalethroughautomation.io/manufacturing-2/' },
              { label: 'Healthcare',          href: 'https://scalethroughautomation.io/healthcare/' },
              { label: 'Retail',              href: 'https://scalethroughautomation.io/retail/' },
              { label: 'Insurance',           href: 'https://scalethroughautomation.io/insurance/' }
            ]
          },
          {
            heading: 'By Function',
            items: [
              { label: 'Finance',                    href: 'https://scalethroughautomation.io/finance/' },
              { label: 'Customer Service',           href: 'https://scalethroughautomation.io/customer-service/' },
              { label: 'Operations & Supply Chain',  href: 'https://scalethroughautomation.io/operations-supply-chain-2/' },
              { label: 'HR & Payroll',               href: 'https://scalethroughautomation.io/hr-payroll/' },
              { label: 'Client Onboarding',          href: 'https://scalethroughautomation.io/client-onboarding-3/' },
              { label: 'Sales & Marketing',          href: 'https://scalethroughautomation.io/sales-marketing/' }
            ]
          },
          {
            heading: 'Other',
            items: [
              { label: 'Custom Solution', href: 'https://scalethroughautomation.io/custom-solution/' }
            ]
          }
        ]
      },
      {
        label: 'AI Employees',
        href: 'https://www.scalethroughautomation.io/ai-employee-package',   // parent tab is clickable
        items: [
          { label: 'All AI Employees', href: 'https://www.scalethroughautomation.io/ai-employee-package', feature: true },
          { label: 'AI Voice Rep',          href: 'https://scalethroughautomation.io/ai-voice-rep/' },
          { label: 'AI Chat Rep',           href: 'https://scalethroughautomation.io/ai-chat-rep/' },
          { label: 'AI Operations Assistant', href: 'https://scalethroughautomation.io/ai-operations-assistant/' },
          { label: 'AI Funnel Builder',     href: 'https://scalethroughautomation.io/ai-funnel-builder/' },
          { label: 'AI Content Creator',    href: 'https://scalethroughautomation.io/ai-content-creator/' },
          { label: 'AI Knowledge Manager',  href: 'https://scalethroughautomation.io/ai-knowledge-manager/' },
          { label: 'AI Reputation Manager', href: 'https://scalethroughautomation.io/ai-reputation-manager/' },
          { label: 'AI Lead Recovery Agent',href: 'https://scalethroughautomation.io/ai-lead-recovery-agent/' }
        ]
      },
      {
        label: 'Resources',
        items: [
          { label: 'Use Cases',                     href: 'https://scalethroughautomation.io/use-cases/' },
          { label: 'Partner Program',               href: 'https://partner-program.scalethroughautomation.io/sta-partner-program-home' },
          { label: 'Blog',                          href: 'https://scalethroughautomation.io/blog/' },
          { label: 'FAQ',                           href: 'https://scalethroughautomation.io/faq' },
          { label: 'AI Reports',                    href: 'https://scalethroughautomation.io/ai-report/' },
          { label: 'AI Automation Community Center',href: 'https://scalethroughautomation.io/ai-automation-community-center/' },
          { label: 'Assessment',                    href: 'https://scalethroughautomation.io/ai-automation-assessment/' },
          { label: 'Missed Opportunity Toolkit',    href: 'https://scalethroughautomation.io/missed-opportunity-toolkit/' },
          { label: 'Automation Questionnaire',      href: 'https://scalethroughautomation.io/ai-automation-discovery-questionnaire/' }
        ]
      },
      { label: 'About', href: 'https://scalethroughautomation.io/about' }
    ]
  };
  /* ============================ END OF EDIT AREA =========================== */


  /* --------------------------------------------------------------------------
     Per-page overrides. A single page can adjust any CONFIG key by setting this
     BEFORE the loader tag. Useful when a page's hero is already built to sit
     under a fixed bar and must not be pushed down a second time:

       <script>window.STA_NAV_OPTIONS = { pushContent: false };</script>
       <script src="https://pamux.github.io/sta-nav/stanav.js" defer></script>
     -------------------------------------------------------------------------- */
  if (window.STA_NAV_OPTIONS) {
    for (var ovr in window.STA_NAV_OPTIONS) {
      if (Object.prototype.hasOwnProperty.call(window.STA_NAV_OPTIONS, ovr)) {
        CONFIG[ovr] = window.STA_NAV_OPTIONS[ovr];
      }
    }
  }


  /* ---- helpers ---------------------------------------------------------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Current-page matching. Ignores www, trailing slashes and query strings, and
  // treats subdomains of the same root domain as the same site, so the highlight
  // still works on GHL preview/funnel subdomains.
  function key(url) {
    try {
      var u = new URL(url, location.href);
      var host = u.host.toLowerCase().replace(/^www\./, '');
      var root = host.split('.').slice(-2).join('.');
      return { root: root, path: u.pathname.replace(/\/+$/, '').toLowerCase() || '/' };
    } catch (e) { return { root: '', path: String(url).toLowerCase() }; }
  }
  var HERE = key(location.href);
  function isHere(href) {
    var k = key(href);
    return k.path === HERE.path && k.root === HERE.root;
  }

  function link(item) {
    var a = el('a', null, item.label);
    a.href = item.href;
    if (item.newTab) { a.target = '_blank'; a.rel = 'noopener'; }
    if (item.feature) a.classList.add('stn-feature');
    if (item.href && isHere(item.href)) a.classList.add('stn-active');
    return a;
  }

  function ctaButton(c) {
    var a = link(c);
    a.className = 'stn-btn stn-' + (c.style === 'ghost' ? 'ghost' : 'primary');
    return a;
  }


  /* ---- build ------------------------------------------------------------ */
  var nav = el('nav');
  nav.id = 'staNav';
  nav.setAttribute('aria-label', 'Main navigation');

  // logo
  var logo = el('a', 'stn-logo');
  logo.href = CONFIG.logo.href;
  logo.setAttribute('aria-label', CONFIG.logo.alt + ' home');
  var img = el('img');
  img.src = CONFIG.logo.img;
  img.alt = CONFIG.logo.alt;
  logo.appendChild(img);
  nav.appendChild(logo);

  // menu
  var ul = el('ul', 'stn-links');
  ul.id = 'staNavMenu';

  CONFIG.menu.forEach(function (entry) {
    var li = el('li');
    var groups = entry.columns || (entry.items ? [{ items: entry.items }] : null);

    if (!groups) {                                   // plain link
      li.appendChild(link(entry));
      ul.appendChild(li);
      return;
    }

    li.className = 'stn-has-drop';

    // a parent with an href is a real link on desktop; without one it is a button
    var btn = entry.href ? el('a') : el('button');
    if (entry.href) { btn.href = entry.href; if (isHere(entry.href)) btn.classList.add('stn-active'); }
    else { btn.type = 'button'; }
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.appendChild(document.createTextNode(entry.label));
    var caret = el('span', 'stn-caret', '▾');
    caret.setAttribute('aria-hidden', 'true');
    btn.appendChild(caret);
    li.appendChild(btn);

    var drop = el('div', 'stn-drop' + (entry.columns ? ' stn-mega' : ''));
    groups.forEach(function (g) {
      var host = drop;
      if (entry.columns) {
        host = el('div', 'stn-col');
        if (g.heading) host.appendChild(el('span', 'stn-head', g.heading));
        drop.appendChild(host);
      }
      g.items.forEach(function (item) {
        var a = link(item);
        host.appendChild(a);
        // a child page being current also lights up its parent tab
        if (a.classList.contains('stn-active')) btn.classList.add('stn-active');
      });
    });
    li.appendChild(drop);
    ul.appendChild(li);
  });

  // CTAs repeated inside the mobile drawer
  var mob = el('li', 'stn-mobile-cta');
  CONFIG.ctas.forEach(function (c) { mob.appendChild(ctaButton(c)); });
  ul.appendChild(mob);
  nav.appendChild(ul);

  // desktop CTAs
  var actions = el('div', 'stn-actions');
  CONFIG.ctas.forEach(function (c) { actions.appendChild(ctaButton(c)); });
  nav.appendChild(actions);

  // hamburger + drawer backdrop
  var toggle = el('button', 'stn-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'staNavMenu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  var backdrop = el('div', 'stn-backdrop');
  nav.appendChild(backdrop);


  /* ---- mount ------------------------------------------------------------ */
  function mount() {
    if (document.getElementById('staNav')) return;

    // if this page has its own hard-coded navbar, stand it down so we don't stack
    var hadOwn = false;
    var existing = document.querySelectorAll('nav[aria-label="Main navigation"], nav.sta-nav');
    Array.prototype.forEach.call(existing, function (n) {
      if (n === nav) return;
      n.style.display = 'none';
      hadOwn = true;
    });

    document.body.insertBefore(nav, document.body.firstChild);

    // page content clears the fixed bar. A page that already had its own fixed
    // nav is already spaced for one, so it does not get a second spacer.
    if (CONFIG.pushContent && !hadOwn) {
      var spacer = el('div');
      spacer.id = 'staNavSpacer';
      nav.parentNode.insertBefore(spacer, nav.nextSibling);
      var size = function () {
        spacer.style.height = nav.offsetHeight + 'px';
      };
      size();
      window.addEventListener('resize', size);
      window.addEventListener('load', size);
      if (window.ResizeObserver) new ResizeObserver(size).observe(nav);
    }

    // anchor links land below the bar instead of under it
    try {
      document.documentElement.style.scrollPaddingTop = (nav.offsetHeight + 12) + 'px';
    } catch (e) {}
  }


  /* ---- behaviour -------------------------------------------------------- */
  function isMobile() { return window.matchMedia('(max-width: 1024px)').matches; }

  function openMenu() {
    nav.classList.add('stn-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    nav.classList.remove('stn-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    Array.prototype.forEach.call(nav.querySelectorAll('.stn-expanded'), function (li) {
      li.classList.remove('stn-expanded');
      var b = li.querySelector(':scope > a, :scope > button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('stn-open')) closeMenu(); else openMenu();
  });
  backdrop.addEventListener('click', closeMenu);

  // dropdown headers: hover opens them on desktop, tapping opens them on mobile
  Array.prototype.forEach.call(nav.querySelectorAll('.stn-has-drop > a, .stn-has-drop > button'), function (btn) {
    btn.addEventListener('click', function (e) {
      if (!isMobile()) return;
      e.preventDefault();
      var li = btn.parentElement;
      var opening = !li.classList.contains('stn-expanded');
      Array.prototype.forEach.call(nav.querySelectorAll('.stn-has-drop'), function (o) {
        if (o !== li) {
          o.classList.remove('stn-expanded');
          var ob = o.querySelector(':scope > a, :scope > button');
          if (ob) ob.setAttribute('aria-expanded', 'false');
        }
      });
      li.classList.toggle('stn-expanded', opening);
      btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
    });
  });

  // tapping any real link closes the drawer
  Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
    if (a.parentElement && a.parentElement.classList.contains('stn-has-drop')) return;
    a.addEventListener('click', function () { if (isMobile()) closeMenu(); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('stn-open')) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (!isMobile() && nav.classList.contains('stn-open')) closeMenu();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

/* ---------------------------------------------------------------------------
   Styles live at the bottom so the config above stays the first thing you see.
--------------------------------------------------------------------------- */
function STYLES() { return `
/* ---------- brand ---------- */
#staNav {
  --stn-orange: #FF4B2B;
  --stn-red: #ff2b2b;
  --stn-red-2: #ff6a00;
  --stn-max: 1760px;
  --stn-edge: max(2rem, (100% - var(--stn-max)) / 2);
  --stn-bg: #000;
  --stn-height: 88px;          /* used for the content spacer on desktop */
}

/* ---------- shell ---------- */
#staNav, #staNav * { margin: 0; padding: 0; box-sizing: border-box; }
#staNav a { text-decoration: none; color: inherit; }
#staNav ul { list-style: none; }

#staNav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 99990;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  padding: 1.45rem var(--stn-edge);
  background: var(--stn-bg);
  font-family: 'Nunito', system-ui, -apple-system, sans-serif;
  color: #fff;
  line-height: 1.2;
}

#staNav .stn-logo { display: flex; align-items: center; gap: .6rem; justify-self: start; min-width: 0; }
#staNav .stn-logo img { height: 44px; width: auto; display: block; object-fit: contain; }

/* ---------- links ---------- */
#staNav .stn-links { display: flex; align-items: center; gap: .4rem; }
#staNav .stn-links li { position: relative; }
#staNav .stn-links > li > a,
#staNav .stn-links > li > button {
  display: inline-flex; align-items: center;
  padding: .55rem 1.25rem;
  border: 0; background: none; cursor: pointer;
  border-radius: 999px;
  font-family: inherit; font-weight: 700; font-size: .95rem;
  color: rgba(255,255,255,.85);
  text-shadow: 0 1px 14px rgba(0,0,0,.45);
  transition: color .25s ease, background .25s ease;
}
#staNav .stn-links > li > a:hover,
#staNav .stn-links > li > button:hover { color: #fff; background: rgba(255,255,255,.06); }
#staNav .stn-links > li > a.stn-active,
#staNav .stn-links > li > button.stn-active {
  background: var(--stn-orange); color: #fff;
  box-shadow: 0 4px 24px rgba(255,75,43,.45);
}
#staNav .stn-caret { font-size: .7em; opacity: .7; margin-left: .3rem; }

/* ---------- dropdowns ---------- */
#staNav .stn-drop {
  position: absolute; top: 100%; left: 50%;
  transform: translateX(-50%) translateY(10px);
  min-width: 250px; padding: .6rem;
  border-radius: 16px;
  background: rgba(12,12,12,.96);
  border: 1px solid rgba(255,255,255,.1);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0,0,0,.7), 0 0 40px rgba(255,75,43,.06);
  opacity: 0; visibility: hidden;
  transition: opacity .25s ease, transform .25s ease, visibility .25s;
  z-index: 5;
}
#staNav .stn-has-drop:hover > .stn-drop,
#staNav .stn-has-drop:focus-within > .stn-drop {
  opacity: 1; visibility: visible; transform: translateX(-50%) translateY(4px);
}
#staNav .stn-drop a {
  display: block; padding: .5rem .9rem; border-radius: 10px;
  font-size: .88rem; font-weight: 600; color: rgba(255,255,255,.82);
  white-space: nowrap;
  transition: background .2s ease, color .2s ease;
}
#staNav .stn-drop a:hover { background: rgba(255,75,43,.12); color: var(--stn-orange); }
/* "All AI Employees" overview row, above the individual employees */
#staNav .stn-drop a.stn-feature {
  color: var(--stn-orange); font-weight: 800;
  margin-bottom: .35rem; padding-bottom: .6rem;
  border-bottom: 1px solid rgba(255,255,255,.1);
  border-radius: 10px 10px 0 0;
}
#staNav .stn-drop a.stn-feature:hover { background: rgba(255,75,43,.16); }
#staNav .stn-drop a.stn-active { background: rgba(255,75,43,.16); color: var(--stn-orange); }

#staNav .stn-drop.stn-mega { display: flex; gap: 1.4rem; padding: 1rem 1.2rem; min-width: max-content; }
#staNav .stn-col { display: flex; flex-direction: column; gap: .1rem; }
#staNav .stn-head {
  display: block; padding: .35rem .9rem .45rem;
  font-size: .72rem; font-weight: 800; letter-spacing: .08em;
  text-transform: uppercase; color: var(--stn-orange);
}

/* ---------- buttons ---------- */
#staNav .stn-actions { display: flex; align-items: center; gap: .8rem; justify-self: end; }
#staNav .stn-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
  padding: .65rem 1.6rem; border-radius: 999px; border: none;
  font-family: inherit; font-weight: 700; font-size: .95rem; cursor: pointer;
  white-space: nowrap;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
}
#staNav .stn-btn.stn-primary {
  background: linear-gradient(95deg, var(--stn-red), var(--stn-red-2)); color: #fff;
  box-shadow: 0 6px 30px rgba(255,75,43,.45);
}
#staNav .stn-btn.stn-primary:hover {
  background: linear-gradient(95deg, #ff3d3d, #ff7d1a);
  box-shadow: 0 10px 40px rgba(255,90,43,.6); transform: translateY(-2px);
}
#staNav .stn-btn.stn-ghost {
  background: rgba(255,255,255,.05); color: #fff;
  border: 1px solid rgba(255,255,255,.30);
}
#staNav .stn-btn.stn-ghost:hover {
  background: rgba(255,255,255,.11); border-color: rgba(255,255,255,.55); transform: translateY(-2px);
}

#staNav .stn-toggle,
#staNav .stn-mobile-cta,
#staNav .stn-backdrop { display: none; }

/* the spacer that keeps page content clear of the fixed bar */
#staNavSpacer { height: var(--stn-height, 88px); width: 100%; flex: none; }

/* ---------- mobile ---------- */
@media (max-width: 1024px) {
  #staNav { display: grid; grid-template-columns: 1fr auto; justify-content: space-between; }
  #staNav .stn-actions { display: none; }
  #staNav .stn-logo { justify-self: start; }

  #staNav .stn-links {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(84vw, 360px);
    flex-direction: column; align-items: stretch; gap: 0;
    padding: 5.5rem 1.4rem 2rem;
    background: rgba(8,8,8,.98);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    border-left: 1px solid rgba(255,43,43,.22);
    box-shadow: -20px 0 60px rgba(0,0,0,.6);
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform .35s cubic-bezier(.16,1,.3,1);
    z-index: 3;
  }
  #staNav.stn-open .stn-links { transform: translateX(0); }

  #staNav .stn-links > li { position: static; width: 100%; border-bottom: 1px solid rgba(255,255,255,.07); }
  #staNav .stn-links > li > a,
  #staNav .stn-links > li > button {
    display: flex; justify-content: space-between; width: 100%;
    padding: .95rem .4rem; border-radius: 10px; font-size: 1.02rem; text-align: left;
  }
  #staNav .stn-links .stn-has-drop.stn-expanded > a .stn-caret,
  #staNav .stn-links .stn-has-drop.stn-expanded > button .stn-caret { transform: rotate(180deg); }
  #staNav .stn-caret { transition: transform .3s ease; }

  #staNav .stn-drop,
  #staNav .stn-drop.stn-mega {
    display: none; position: static; transform: none;
    min-width: 0; width: 100%; padding: .2rem 0 .8rem;
    background: none; border: none; box-shadow: none; backdrop-filter: none;
    opacity: 1; visibility: visible;
  }
  #staNav .stn-has-drop.stn-expanded > .stn-drop { display: block; }
  #staNav .stn-has-drop.stn-expanded > .stn-drop.stn-mega { display: flex; flex-direction: column; gap: .4rem; }
  #staNav .stn-has-drop:hover > .stn-drop,
  #staNav .stn-has-drop:focus-within > .stn-drop { transform: none; }
  #staNav .stn-drop a { padding: .5rem .4rem; font-size: .9rem; white-space: normal; }
  #staNav .stn-head { padding: .5rem .4rem .2rem; }

  #staNav .stn-mobile-cta {
    display: flex; flex-direction: column; gap: .7rem;
    padding: 1.3rem .4rem 0; border: none !important;
  }
  #staNav .stn-mobile-cta .stn-btn { width: 100%; }

  #staNav .stn-toggle {
    display: block; width: 44px; height: 44px; padding: 0;
    background: none; border: none; cursor: pointer; z-index: 4;
  }
  #staNav .stn-toggle span {
    display: block; width: 26px; height: 2px; margin: 5px auto; background: #fff; border-radius: 2px;
    transition: transform .3s ease, opacity .25s ease;
  }
  #staNav.stn-open .stn-toggle span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  #staNav.stn-open .stn-toggle span:nth-child(2) { opacity: 0; }
  #staNav.stn-open .stn-toggle span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  #staNav .stn-backdrop {
    display: block; position: fixed; inset: 0;
    background: rgba(0,0,0,.6); backdrop-filter: blur(3px);
    opacity: 0; visibility: hidden; transition: opacity .3s ease, visibility .3s; z-index: 2;
  }
  #staNav.stn-open .stn-backdrop { opacity: 1; visibility: visible; }
}

@media (max-width: 560px) {
  #staNav { padding: 1rem 1.25rem; }
  #staNav .stn-logo img { height: 36px; }
  /* only the primary CTA survives on the narrowest screens */
  #staNav .stn-actions .stn-ghost { display: none; }
}
`; }
})();
