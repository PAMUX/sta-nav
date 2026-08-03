/*!
 * stafooter.js — Shared site footer for ScaleThroughAutomation
 * -------------------------------------------------------------
 * One file, every page. All of the footer's markup, styles and the
 * consultation-form embed live here, the same way the navbar lives in
 * stanav.js.
 *
 * USAGE — drop this before </body> on any page:
 *
 *     <script src="https://pamux.github.io/sta-nav/stafooter.js" defer></script>
 *
 * OPTIONAL — put this BEFORE the script tag to control where it mounts:
 *
 *     <script>window.STA_FOOTER_OPTIONS = { mount: '#sta-footer' };</script>
 *
 *   • mount : CSS selector of an element to inject the footer INTO.
 *             If omitted (or not found) the footer is appended to <body>.
 *
 * Edit the links / columns below and every page updates at once.
 */
(function () {
  'use strict';

  // Guard against the script being included twice on one page.
  if (window.__staFooterLoaded) return;
  window.__staFooterLoaded = true;

  var OPTIONS = window.STA_FOOTER_OPTIONS || {};
  var YEAR = new Date().getFullYear();
  var FORM_EMBED = 'https://staai.scalethroughautomation.io/js/form_embed.js';

  /* ---------------------------------------------------------------- styles */
  var CSS = [
    '.site-footer{position:relative;background:#000;color:#fff;border-top:1px solid rgba(255,106,44,0.18);padding:80px 0 34px;overflow:hidden;}',
    '.foot-inner{max-width:1500px;margin:0 auto;padding-inline:clamp(24px,5vw,80px);position:relative;z-index:2;}',
    '.foot-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr 1.7fr;gap:48px;}',
    '.foot-col h4{font-size:1.05rem;font-weight:800;color:#fff;margin:0 0 18px;}',
    '.foot-links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}',
    '.foot-links a{color:rgba(255,255,255,0.66);font-size:0.95rem;font-weight:500;text-decoration:none;transition:color .25s ease,padding-left .25s ease;}',
    '.foot-links a:hover{color:#ff6a2c;padding-left:4px;}',
    '.foot-social{display:flex;gap:12px;margin-top:22px;}',
    '.foot-social a{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,106,44,0.35);color:#fff;background:rgba(255,255,255,0.03);transition:background .3s ease,border-color .3s ease,transform .3s ease,box-shadow .3s ease;}',
    '.foot-social a:hover{background:#FF2B2B;border-color:#ff6a2c;transform:translateY(-3px);box-shadow:0 8px 24px rgba(255,106,44,0.35);}',
    '.foot-social svg{width:18px;height:18px;fill:currentColor;}',
    '.foot-cta-title{font-size:1.15rem;font-weight:800;color:#fff;margin:0 0 18px;line-height:1.35;}',
    '.foot-form{display:grid;grid-template-columns:1fr 1fr;gap:12px;}',
    '.foot-form input,.foot-form textarea{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,106,44,0.18);border-radius:12px;padding:13px 16px;color:#fff;font-family:inherit;font-size:0.95rem;transition:border-color .25s ease,background .25s ease;}',
    '.foot-form input::placeholder,.foot-form textarea::placeholder{color:rgba(255,255,255,0.45);}',
    '.foot-form input:focus,.foot-form textarea:focus{outline:none;border-color:#ff6a2c;background:rgba(255,255,255,0.06);}',
    '.foot-form .full{grid-column:1 / -1;}',
    '.foot-form textarea{min-height:104px;resize:vertical;}',
    '.foot-submit{grid-column:1 / -1;justify-self:start;display:inline-flex;align-items:center;gap:8px;background:#FF2B2B;color:#fff;border:none;cursor:pointer;padding:13px 32px;border-radius:999px;font-family:inherit;font-weight:700;font-size:0.98rem;box-shadow:0 4px 24px rgba(255,106,44,0.4);transition:transform .25s ease,box-shadow .25s ease;}',
    '.foot-submit:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(255,106,44,0.6);}',
    '.foot-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(255,106,44,0.3),transparent);margin:48px 0 24px;}',
    '.foot-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}',
    '.foot-copy{color:rgba(255,255,255,0.55);font-size:0.9rem;margin:0;}',
    '.foot-legal{list-style:none;display:flex;gap:22px;margin:0;padding:0;}',
    '.foot-legal a{color:rgba(255,255,255,0.55);font-size:0.9rem;text-decoration:none;transition:color .25s ease;}',
    '.foot-legal a:hover{color:#ff6a2c;}',
    '@media (max-width:1024px){.foot-grid{grid-template-columns:1fr 1fr;gap:40px 32px;}}',
    '@media (max-width:600px){.foot-grid{grid-template-columns:1fr;}.foot-form{grid-template-columns:1fr;}.foot-bottom{flex-direction:column;align-items:flex-start;}}'
  ].join('\n');

  /* ---------------------------------------------------------------- markup */
  var HTML = [
    '<footer class="site-footer" aria-label="Site footer">',
    '  <div class="foot-inner">',
    '    <div class="foot-grid">',
    '',
    '      <div class="foot-col">',
    '        <h4>Solutions</h4>',
    '        <ul class="foot-links"><li><a href="https://scalethroughautomation.io/ai-gent/">AI Agents</a></li><li><a href="https://scalethroughautomation.io/business-process-automation-2/">Business Process Automation (BPA)</a></li><li><a href="https://scalethroughautomation.io/customer-service/">AI-Powered Chatbots</a></li><li><a href="https://scalethroughautomation.io/intelligent-automation-2/">End-to-End Workflow Automation</a></li><li><a href="https://scalethroughautomation.io/ai-powered-data-insights-2/">AI-Driven Predictive Analytics</a></li></ul>',
    '      </div>',
    '',
    '      <div class="foot-col">',
    '        <h4>Resources</h4>',
    '        <ul class="foot-links"><li><a href="https://scalethroughautomation.io/use-cases/">Use Cases</a></li><li><a href="#">How To Guide</a></li><li><a href="#">Ebook</a></li><li><a href="#">News &amp; Events</a></li></ul>',
    '        <div class="foot-social">',
    '          <a href="https://www.linkedin.com/company/104992329/admin/dashboard/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>',
    '          <a href="https://www.youtube.com/@ScaleThroughAutomation" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>',
    '          <a href="https://www.instagram.com/the_automationguy/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>',
    '        </div>',
    '      </div>',
    '',
    '      <div class="foot-col">',
    '        <h4>Company</h4>',
    '        <ul class="foot-links"><li><a href="https://scalethroughautomation.io/about/">About Us</a></li><li><a href="#">Careers</a></li><li><a href="https://scalethroughautomation.io/blog/">Blog</a></li><li><a href="https://scalethroughautomation.io/contact/">Contact</a></li></ul>',
    '      </div>',
    '',
    '      <div class="foot-col foot-cta">',
    '        <h4 class="foot-cta-title">Book your Free 30-minute Consultation Call Today To Get Started!</h4>',
    '        <iframe src="https://staai.scalethroughautomation.io/widget/form/RBzddiXU9jZ2C5DtpOKB"',
    '          style="width:100%;height:442px;border:none;border-radius:8px"',
    '          id="inline-RBzddiXU9jZ2C5DtpOKB"',
    '          data-layout="{\'id\':\'INLINE\'}"',
    '          data-trigger-type="alwaysShow" data-trigger-value=""',
    '          data-activation-type="alwaysActivated" data-activation-value=""',
    '          data-deactivation-type="neverDeactivate" data-deactivation-value=""',
    '          data-form-name="STA MAIN WEB Contact Form" data-height="442"',
    '          data-layout-iframe-id="inline-RBzddiXU9jZ2C5DtpOKB"',
    '          data-form-id="RBzddiXU9jZ2C5DtpOKB" title="STA MAIN WEB Contact Form"></iframe>',
    '      </div>',
    '',
    '    </div>',
    '',
    '    <div class="foot-divider"></div>',
    '',
    '    <div class="foot-bottom">',
    '      <p class="foot-copy">&copy; ' + YEAR + ' ScaleThroughAutomation, All rights reserved.</p>',
    '      <ul class="foot-legal">',
    '        <li><a href="https://scalethroughautomation.io/terms-and-conditions/">Privacy Policy</a></li>',
    '        <li><a href="https://scalethroughautomation.io/privacy-policy/">Terms of service</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ---------------------------------------------------------------- inject */
  function inject() {
    // 1. Styles (once).
    if (!document.getElementById('sta-footer-styles')) {
      var style = document.createElement('style');
      style.id = 'sta-footer-styles';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    // 2. Markup — into a mount element if given, else end of <body>.
    if (!document.querySelector('.site-footer')) {
      var host = OPTIONS.mount ? document.querySelector(OPTIONS.mount) : null;
      var holder = document.createElement('div');
      holder.innerHTML = HTML;
      var footer = holder.firstElementChild;
      (host || document.body).appendChild(footer);
    }

    // 3. Load the GoHighLevel form-embed script so the iframe form activates.
    //    (Scripts set via innerHTML never run, so we add it programmatically.)
    if (!document.querySelector('script[src="' + FORM_EMBED + '"]')) {
      var s = document.createElement('script');
      s.src = FORM_EMBED;
      s.defer = true;
      document.body.appendChild(s);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
