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

  var CSS = ".mc-footer{--yellow:#FDC316;--yellow-hover:#FFD03F;--orange:#F5A50F;--olive:#282A1B;--olive-deep:#23251A;--blue:#0B78BD;--cream:#FBFAF6;--cream-2:#F4F1EA;--ink:#141414;--text:#4A4A48;--line:#E7E2D8;font-family:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}\n.mc-footer *,.mc-footer *::before,.mc-footer *::after{box-sizing:border-box}\n.mc-footer :where(img){max-width:100%;display:block}\n.mc-footer :where(a){color:inherit;text-decoration:none}\n.mc-footer :where(h1,h2,h3,h4,p,ul){margin:0}\n.mc-footer :where(ul){padding:0;list-style:none}\n.mc-footer :where(svg){flex-shrink:0}\n.mc-footer .mc-container{max-width:1280px;margin:0 auto;padding:0 32px}\n@media (max-width:900px){.mc-footer .mc-container{padding:0 24px}}\n@media (max-width:640px){.mc-footer .mc-container{padding:0 18px}}\n.mc-logo{display:flex;align-items:center;color:#161616}\n.mc-logo__crop{display:block;overflow:hidden;height:90px}\n.mc-logo__crop img{height:99px;width:auto;max-width:none}\n.mc-footer{background:var(--olive-deep);color:#E6E5DC;padding:72px 0 34px}\n.mc-footer__grid{display:grid;grid-template-columns:1.45fr .8fr 1fr 1.05fr;gap:40px}\n.mc-footer .mc-logo{color:#fff}\n.mc-footer__logo{display:inline-flex;background:#FBFAF6;border-radius:12px;padding:10px 14px}\n.mc-footer .mc-footer__logo .mc-logo__crop{height:90px}\n.mc-footer .mc-footer__logo .mc-logo__crop img{height:99px}\n.mc-footer__about p{font-size:16px;line-height:1.55;margin:14px 0 26px;max-width:320px}\n.mc-social{display:flex;gap:14px}\n.mc-social a{width:44px;height:44px;border-radius:50%;background:var(--yellow);color:#1E1E14;display:flex;align-items:center;justify-content:center;transition:transform .2s ease,background .2s ease}\n.mc-social a:hover{transform:translateY(-3px);background:#fff}\n.mc-social svg{width:21px;height:21px}\n.mc-footer h4{font-size:19px;font-weight:700;color:#fff;margin:22px 0 22px}\n.mc-flinks{display:grid;gap:14px}\n.mc-flinks a{font-size:16.5px;transition:color .2s ease,padding .2s ease}\n.mc-flinks a:hover{color:var(--yellow);padding-left:4px}\n.mc-contact{display:grid;gap:22px;padding-right:30px;border-right:1px solid rgba(255,255,255,.28)}\n.mc-contact li{display:flex;gap:26px;align-items:flex-start;font-size:16.5px;line-height:1.5}\n.mc-contact svg{width:26px;height:26px;color:var(--yellow);margin-top:1px}\n.mc-contact a:hover{color:var(--yellow)}\n.mc-subscribe p{font-size:16px;line-height:1.55;margin-bottom:20px}\n.mc-subscribe input{width:100%;height:52px;border-radius:6px;border:0;padding:0 18px;font-family:inherit;font-size:15.5px;color:#222;background:#fff;outline:none}\n.mc-subscribe input:focus{box-shadow:0 0 0 3px rgba(253,195,22,.6)}\n.mc-subscribe button{width:100%;height:52px;margin-top:10px;border-radius:6px;border:0;background:var(--yellow);font-family:inherit;font-weight:600;font-size:16.5px;color:#1E1E14;cursor:pointer;transition:background .2s ease}\n.mc-subscribe button:hover{background:var(--yellow-hover)}\n.mc-subscribe__msg{font-size:14px;color:var(--yellow);margin-top:10px;min-height:20px}\n.mc-footer__bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;border-top:1px solid rgba(255,255,255,.3);margin-top:56px;padding-top:30px;font-size:15px}\n.mc-footer__legal{display:flex;gap:18px;align-items:center}\n.mc-footer__legal a:hover{color:var(--yellow)}\n@media (max-width:1200px){\n.mc-logo__crop{height:68px}\n.mc-logo__crop img{height:75px}\n.mc-footer__grid{grid-template-columns:1fr 1fr;gap:44px 40px}\n.mc-contact{border-right:0;padding-right:0}\n}\n@media (max-width:640px){\n.mc-logo__crop{height:60px}\n.mc-logo__crop img{height:66px}\n.mc-footer{padding:56px 0 28px}\n.mc-footer__grid{grid-template-columns:1fr;gap:10px}\n.mc-footer .mc-footer__logo .mc-logo__crop{height:80px}\n.mc-footer .mc-footer__logo .mc-logo__crop img{height:88px}\n.mc-footer h4{margin:26px 0 16px}\n.mc-contact li{gap:18px}\n.mc-footer__bottom{flex-direction:column;align-items:flex-start;margin-top:40px;font-size:14px}\n}\n@media (prefers-reduced-motion:reduce){.mc-footer *{transition:none!important}}";
  var ICON = {"facebook": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.6 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.6V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.3H7.7v3.2h2.7v8z\"/></svg>", "instagram": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3.5\" y=\"3.5\" width=\"17\" height=\"17\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.2\" cy=\"6.8\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/></svg>", "youtube": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z\"/></svg>", "linkedin": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.6 9h3.3v11H4.6z\"/><circle cx=\"6.25\" cy=\"5.6\" r=\"1.95\"/><path d=\"M10.2 9h3.1v1.5c.5-.9 1.7-1.8 3.4-1.8 3.4 0 4 2.2 4 5V20h-3.3v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3.2z\"/></svg>", "pin": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z\"/></svg>", "phone": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z\"/></svg>", "mail": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"><rect x=\"2.5\" y=\"5\" width=\"19\" height=\"14\" rx=\"1.5\"/><path d=\"M3 5.8l9 7 9-7M3 18.4l7-6.3M21 18.4l-7-6.3\"/></svg>"};

  /* settings come from mcedc-header.js; these are only used if that file is missing */
  var C = window.MCEDC_CONFIG || {
    home: 'index.html', logo: 'https://assets.cdn.filesafe.space/tWoxbvtjMGP2F9AtZotx/media/6ab446dc25d854bb6501bd90.webp', logoAlt: 'Mora County Economic Development Corporation',
    footerLinks: [['About', 'about.html'], ['Events', 'events.html'], ['Business Directory', 'directory.html'], ['Contact', 'contact.html']],
    tagline: 'Building a stronger, more sustainable Mora County through community, collaboration, and opportunity.',
    address: ['P.O. Box 701', 'Mora, NM 87732'], phone: '(505) 718-5140', tel: '+15057185140', email: 'juliarogers215@gmail.com',
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
  var links = C.footerLinks.map(function (l) { return '<li><a href="' + esc(l[1]) + '">' + esc(l[0]) + '</a></li>'; }).join('');
  var year = new Date().getFullYear();

  var html =
    '<footer class="mc-footer" id="mc-footer">' +
      '<div class="mc-container">' +
        '<div class="mc-footer__grid">' +
          '<div class="mc-footer__about">' +
            '<a href="' + esc(C.home) + '" class="mc-logo mc-footer__logo" aria-label="Mora County Economic Development home"><span class="mc-logo__crop"><img src="' + esc(C.logo) + '" alt="' + esc(C.logoAlt) + '" width="500" height="380" loading="lazy"></span></a>' +
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
            '<form id="mcSubscribe" novalidate>' +
              '<input type="email" name="email" placeholder="Your email address" aria-label="Your email address" required>' +
              '<button type="submit">Subscribe</button>' +
              '<div class="mc-subscribe__msg" id="mcSubMsg" role="status"></div>' +
            '</form>' +
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

  /* ---------- newsletter form ---------- */
  var form = document.getElementById('mcSubscribe'), msg = document.getElementById('mcSubMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = form.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { msg.textContent = 'Please enter a valid email address.'; return; }
    function done() { msg.textContent = 'Thanks for subscribing! We’ll keep you posted.'; form.reset(); }
    if (C.newsletterEndpoint) {
      fetch(C.newsletterEndpoint, { method: 'POST', body: new FormData(form) })
        .then(function (r) { if (!r.ok) throw 0; done(); })
        .catch(function () { msg.textContent = 'Sorry, something went wrong. Please email ' + C.email + '.'; });
    } else { done(); }
  });
})();
