/*
  STA Consulting: nav bar and footer for scalethroughautomationconsulting.com

  Every page loads this one file. Change the menu, the logo or the footer here, push the file to
  GitHub, and every page shows the change. No GHL paste is needed. Browsers can keep the old copy
  for a few minutes.

  Links that start with @ are pages on this site: '@learn' opens /learn and '@home#where-to-start'
  opens /home#where-to-start. Write any other link in full (https://...).

  Each page only says what is different about it, in its own code:
    <div data-sta-header data-nav="learn" data-over data-cta="..." data-cta-href="..." data-cta-popup
         data-talk="..." data-talk-href="..."></div>
    <div data-sta-footer></div>
  data-nav      the menu item to show as the current page
  data-over     see-through header over the hero (Home, How we help)
  data-cta      the orange header button (left out on pages without one); data-cta-popup opens the audit pop-up
  data-talk     the outline header button next to it
  Colours and sizes stay in each page's styles (.hd, .mnav, .ft).
*/
(function () {
  'use strict';

  /* ===== Edit from here ===================================================================== */

  var LOGO = 'https://assets.cdn.filesafe.space/hACx77oYQcLdVlnDsxJ3/media/69f8f2046f6468fa02230efd.png';

  // Main menu, in order. key matches data-nav on a page, so that page's item shows as current.
  var MENU = [
    { href: '@how-we-help', text: 'How we help', key: 'how-we-help' },
    { href: '@about',       text: 'About',       key: 'about' },
    { href: '@learn',       text: 'Learn',       key: 'learn' },
    { href: '@strategists', text: 'Towns',       key: 'strategists' }
  ];

  // Footer. Contact: the Consulting phone number and email go at the top of that list once they exist.
  var FOOTER = `
<footer class="ft">
  <div class="w">
    <div class="ft-grid">
      <div>
        <a class="logo" href="@home" aria-label="STA Consulting home">
          <img data-ph="L-LOGO" src="${LOGO}" alt="STA Consulting" width="111" height="44">
        </a>
        <p class="ft-text">AI and SI consulting for businesses with 5 to 50 employees. Bring us your questions. We'll help you find the answers that fit your business.</p>
      </div>
      <div>
        <h2>Explore</h2>
        <ul>
          <li><a href="@home#where-to-start">Where to start</a></li>
          <li><a href="@how-we-help">How we help</a></li>
          <li><a href="@learn">Learn</a></li>
          <li><a href="@strategists">Towns</a></li>
        </ul>
      </div>
      <div>
        <h2>Get started</h2>
        <ul>
          <li><a href="@free-business-audit">Free Business Audit Report</a></li>
          <li><a href="@talk-it-through">Talk it through with us</a></li>
          <li><a href="@about">About</a></li>
          <li><a href="@careers">Careers</a></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul data-ph="D7">
          <li>Dallas area, Texas</li>
          <li><a href="https://www.linkedin.com/company/scale-through-automation/posts/">LinkedIn</a></li>
          <li><a href="https://youtube.com/@scalethroughautomation">YouTube</a></li>
        </ul>
      </div>
    </div>
    <div class="ft-base">
      <span>&copy; 2026 Scale Through Automation Consulting LLC</span>
      <span class="ft-legal"><a href="@privacy">Privacy Policy</a><a href="@terms">Terms of Service</a></span>
    </div>
  </div>
</footer>`;

  /* ===== To here ============================================================================ */

  // On your computer (preview files) pages end in .html; on the live site they do not.
  var LOCAL = location.protocol === 'file:';

  function url(h) {
    if (!h || h.charAt(0) !== '@') return h || '';
    var p = h.slice(1).split('#');
    return (LOCAL ? p[0] + '.html' : p[0]) + (p[1] ? '#' + p[1] : '');
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Turns href="@page" in the footer into the right link for the live site or the preview files.
  function siteLinks(html) {
    return html.replace(/href="(@[a-z0-9-]+(?:#[a-z0-9-]+)?)"/g, function (m, h) { return 'href="' + url(h) + '"'; });
  }

  function button(cls, text, href, popup) {
    var away = /^https?:/.test(href || '');
    return '<a class="' + cls + '" href="' + esc(url(href)) + '"' +
      (away ? ' target="_blank" rel="noopener"' : '') + (popup ? ' data-audit-popup' : '') + '>' + esc(text) + '</a>';
  }

  function headerHTML(d) {
    function cur(k) { return d.nav === k ? ' aria-current="page"' : ''; }
    var top = MENU.map(function (m) { return '<li><a href="' + esc(url(m.href)) + '"' + cur(m.key) + '>' + esc(m.text) + '</a></li>'; }).join('');
    var side = MENU.map(function (m) { return '<a href="' + esc(url(m.href)) + '"' + cur(m.key) + '>' + esc(m.text) + '</a>'; }).join('');
    var ctas = '', mobileCtas = '';
    if (d.cta) {
      var popup = 'ctaPopup' in d;
      var talkTop = d.talk ? button('btn btn-sm btn-ghost btn-noarrow hd-talk', d.talk, d.talkHref) : '';
      var talkSide = d.talk ? button('btn btn-ghost btn-noarrow', d.talk, d.talkHref) : '';
      ctas = '<div class="hd-ctas">' + talkTop + button('btn btn-sm hd-cta', d.cta, d.ctaHref, popup) + '</div>';
      mobileCtas = talkSide + button('btn', d.cta, d.ctaHref, popup);
    }
    return '<header class="hd' + ('over' in d ? ' hd-over' : '') + '">' +
      '<div class="w w-wide hd-bar">' +
        '<a class="logo" href="' + url('@home') + '" aria-label="STA Consulting home">' +
          '<img data-ph="L-LOGO" src="' + LOGO + '" alt="STA Consulting" width="101" height="40"></a>' +
        '<nav class="nav" aria-label="Main"><ul>' + top + '</ul></nav>' +
        ctas +
        '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="mnav">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
          'Menu</button>' +
      '</div>' +
      '<div class="w w-wide"><nav class="mnav" id="mnav" aria-label="Main">' + side + mobileCtas + '</nav></div>' +
    '</header>';
  }

  // Mobile menu button, and the see-through header that turns solid once you scroll or open the menu.
  function wireHeader() {
    var hd = document.querySelector('.hd-over');
    function setSolid() {
      if (!hd) return;
      hd.classList.toggle('solid', window.scrollY > 8 || hd.classList.contains('menu-open'));
    }
    if (hd) { window.addEventListener('scroll', setSolid, { passive: true }); setSolid(); }
    var btn = document.querySelector('.menu-btn'), panel = document.getElementById('mnav');
    if (btn && panel) {
      btn.addEventListener('click', function () {
        var open = panel.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (hd) hd.classList.toggle('menu-open', open);
        setSolid();
      });
    }
  }

  // Each placeholder is swapped for the real markup once, so running this again changes nothing.
  function render() {
    var h = document.querySelector('[data-sta-header]');
    if (h) { h.outerHTML = headerHTML(h.dataset); wireHeader(); }
    var f = document.querySelector('[data-sta-footer]');
    if (f) f.outerHTML = siteLinks(FOOTER.trim());
  }

  render();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
})();
