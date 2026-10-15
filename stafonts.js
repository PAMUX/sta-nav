/*!
 * STA brand fonts (stafonts.js)
 * Loads the brand fonts and applies them to the page.
 *
 * Load it in the page <head> WITHOUT defer/async so the fonts start
 * loading before the page paints:
 *   <script src="https://YOUR-HOST/stafonts.js"></script>
 *
 * TO CHANGE A FONT: edit the CONFIG block below and push to git.
 * Fonts are served from jsDelivr using the @fontsource npm packages:
 *   https://fontsource.org  (package name = "pkg" below)
 *
 * sizeAdjust: each weight is scaled so the new font takes the same
 * width the old Nunito text did, which keeps line breaks unchanged.
 * If you switch to a different font, set every sizeAdjust back to 100
 * first, then tune them if the text looks too big or too small.
 */
(function () {
  'use strict';

  /* ===================== CONFIG ===================== */
  var CONFIG = {
    // Headings, labels, numbers, buttons, navbar
    heading: {
      family: 'Poppins',
      pkg: 'poppins',
      version: '5.0.8',
      fallback: 'system-ui, sans-serif',
      sizeAdjust: { 400: 92.5, 500: 92.1, 600: 91.9, 700: 90.9, 800: 91.3, 900: 91.9 }
    },
    // Paragraphs and all other text
    body: {
      family: 'Open Sans',
      pkg: 'open-sans',
      version: '5.0.8',
      fallback: 'system-ui, sans-serif',
      sizeAdjust: { 400: 96.2, 500: 95.2, 600: 94.3, 700: 92.9, 800: 91.7 }
    }
  };
  /* ================================================== */

  if (document.getElementById('staFontStyles')) return;

  var CDN = 'https://cdn.jsdelivr.net/npm/@fontsource/';

  function fontFaces(f) {
    var alias = f.family + ' STA';
    return Object.keys(f.sizeAdjust).map(function (w) {
      var url = CDN + f.pkg + '@' + f.version + '/files/' + f.pkg + '-latin-' + w + '-normal.woff2';
      return "@font-face{font-family:'" + alias + "';font-style:normal;font-weight:" + w +
        ";font-display:swap;size-adjust:" + f.sizeAdjust[w] + "%;src:url('" + url + "') format('woff2');}";
    }).join('\n');
  }

  function stack(f) {
    return "'" + f.family + " STA', '" + f.family + "', " + f.fallback;
  }

  var css = [
    fontFaces(CONFIG.heading),
    fontFaces(CONFIG.body),

    ':root{--font-head:' + stack(CONFIG.heading) + ';--font-body:' + stack(CONFIG.body) + ';}',

    /* Body text */
    'html body{font-family:var(--font-body);}',

    /* Headings, labels, numbers and buttons */
    [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'button', '.btn', '.btn-audit', '.handoff-btn', '.handoff-textlink', '.svc-btn',
      '.hiw-learn', '.rm-submit', '.team-try',
      '.hero-eyebrow', '.handoff-label', '.team-label', '.wc-label', '.hiw-eyebrow',
      '.tst-eyebrow', '.why-badge', '.rm-badge', '.tst-pill', '.team-badge',
      '.hero-stat .num', '.why-stat-num', '.as-num', '.hiw-num',
      '.team-name', '.team-role', '.wc-card-title', '.tst-name'
    ].join(',') + '{font-family:var(--font-head);}',

    /* Poppins has narrower spaces than Nunito, more so at heavy weights.
       This word-spacing restores the gaps so bold headings don't run together. */
    [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'button', '.btn', '.btn-audit', '.handoff-btn', '.svc-btn', '.rm-submit', '.team-try',
      '.hero-eyebrow', '.handoff-label', '.team-label', '.wc-label', '.hiw-eyebrow',
      '.tst-eyebrow', '.tst-pill', '.team-badge',
      '.hero-stat .num', '.why-stat-num', '.as-num', '.hiw-num', '.team-name'
    ].join(',') + '{word-spacing:0.09em;}',
    [
      '.btn', '.why-badge', '.rm-badge', '.team-role', '.handoff-textlink',
      '.wc-card-title', '.hiw-learn', '.tst-name', '.grad-line'
    ].join(',') + '{word-spacing:0.06em;}',
    'h1,.team-h2,.handoff-h2{word-spacing:0.1em;}',

    /* Home page: spots where a line was already full in Nunito */
    '.hiw-title{font-size:clamp(52px, 4.8vw, 79px);}',
    '.hiw-card-text{letter-spacing:-0.01em;}',
    '.wc-card-title{letter-spacing:-0.01em;}',
    '@media (max-width:480px){.handoff-h2{word-spacing:0.04em;letter-spacing:-0.035em;}}',

    /* Shared navbar (stanav.js) and footer (stafooter.js) */
    'html body #staNav,' +
    'html body #staNav .stn-links > li > a,' +
    'html body #staNav .stn-links > li > button,' +
    'html body #staNav .stn-btn,' +
    'html body .site-footer .foot-submit{font-family:var(--font-head);}',
    'html body .site-footer{font-family:var(--font-body);}',
    'html body #staNav{word-spacing:0.07em;}',
    'html body #staNav .stn-btn{word-spacing:0.1em;}'
  ].join('\n');

  var head = document.head || document.getElementsByTagName('head')[0];

  var pre = document.createElement('link');
  pre.rel = 'preconnect';
  pre.href = 'https://cdn.jsdelivr.net';
  pre.crossOrigin = '';
  head.appendChild(pre);

  var style = document.createElement('style');
  style.id = 'staFontStyles';
  style.textContent = css;
  head.appendChild(style);

  /* Fonts start loading right away. Once the page's own styles are parsed,
     move these rules to the end of <head> so they take priority, the same
     as if they were written at the bottom of the page's <style>. */
  function moveToEnd() {
    if (style.parentNode && style !== head.lastElementChild) head.appendChild(style);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', moveToEnd);
  } else {
    moveToEnd();
  }
})();
