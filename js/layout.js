const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <style>
    .nav__dropdown { position:relative; }
    .nav__dropdown-menu {
      display:none;
      position:absolute;
      top:calc(100% + 8px);
      left:50%;
      transform:translateX(-50%);
      background:#0C2340;
      border:1px solid rgba(255,255,255,0.1);
      border-radius:10px;
      padding:0.5rem;
      min-width:260px;
      z-index:200;
      box-shadow:0 8px 24px rgba(0,0,0,0.3);
    }
    .nav__dropdown:hover .nav__dropdown-menu,
    .nav__dropdown-menu:hover { display:block; }
    .nav__dropdown-menu a {
      display:block;
      padding:0.55rem 0.9rem;
      font-size:0.825rem;
      color:rgba(255,255,255,0.75) !important;
      border-radius:6px;
      transition:0.15s;
      background:transparent !important;
    }
    .nav__dropdown-menu a:hover { background:rgba(255,255,255,0.08) !important; color:#fff !important; }
    .nav__dropdown > a::after { content:' ▾'; font-size:0.7rem; opacity:0.6; }
    .nav__phone { font-size:0.8rem; color:rgba(255,255,255,0.6); display:flex; align-items:center; gap:0.4rem; }
    .nav__phone a { color:rgba(255,255,255,0.6); transition:color 0.15s; }
    .nav__phone a:hover { color:#fff; }
  </style>
  <div class="container">
    <div class="nav__inner">
      <a href="/index.html" class="nav__logo" aria-label="Sales Tax Solutions home">
        <div class="nav__mark"><span>STS</span></div>
        <div class="nav__name">
          <strong>Sales Tax Solutions</strong>
          <small>CDTFA Audit & Appeals Specialists</small>
        </div>
      </a>
      <ul class="nav__links" role="list">
        <li><a href="/index.html">Home</a></li>
        <li class="nav__dropdown">
          <a href="/pages/services.html">Services</a>
          <div class="nav__dropdown-menu" role="menu">
            <a href="/pages/audit-management.html">Sales Tax Audit Management</a>
            <a href="/pages/audit-appeals.html">Sales Tax Audit Appeals</a>
            <a href="/pages/compliance.html">Compliance &amp; Collection Matters</a>
            <a href="/pages/refunds.html">Refunds &amp; Overpayments</a>
            <a href="/pages/excise-tax.html">California Excise Tax</a>
            <a href="/pages/return-preparation.html">Sales Tax Return Preparation</a>
          </div>
        </li>
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>
      </ul>
      <div style="display:flex;align-items:center;gap:1rem;">
        <div class="nav__phone">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          <a href="tel:+19166336206">(916) 633-6206</a>
        </div>
        <a href="/pages/contact.html" class="btn btn-primary nav__cta">Free Consultation</a>
      </div>
      <button class="nav__hamburger" aria-label="Open menu" onclick="toggleMenu()">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="15" x2="19" y2="15"/>
        </svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" style="display:none; background:var(--navy-mid); padding:1rem 1.5rem 1.5rem; border-top:1px solid rgba(255,255,255,0.07);">
    <ul style="list-style:none; display:flex; flex-direction:column; gap:0.25rem; margin-bottom:1rem;">
      <li><a href="/index.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">Home</a></li>
      <li style="padding:0.5rem 0;">
        <div style="color:rgba(255,255,255,0.4); font-size:0.7rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:0.4rem;">Services</div>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.1rem; padding-left:0.75rem;">
          <li><a href="/pages/audit-management.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">Audit Management</a></li>
          <li><a href="/pages/audit-appeals.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">Audit Appeals</a></li>
          <li><a href="/pages/compliance.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">Compliance &amp; Collections</a></li>
          <li><a href="/pages/refunds.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">Refunds &amp; Overpayments</a></li>
          <li><a href="/pages/excise-tax.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">California Excise Tax</a></li>
          <li><a href="/pages/return-preparation.html" style="display:block; color:rgba(255,255,255,0.75); font-size:0.85rem; padding:0.3rem 0;">Return Preparation</a></li>
        </ul>
      </li>
      <li><a href="/pages/about.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">About</a></li>
      <li><a href="/pages/contact.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">Contact</a></li>
      <li><a href="tel:+19166336206" style="display:block; color:rgba(255,255,255,0.6); font-size:0.85rem; padding:0.5rem 0;">(916) 633-6206</a></li>
    </ul>
    <a href="/pages/contact.html" class="btn btn-primary" style="width:100%; justify-content:center;">Free Consultation</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div style="width:34px;height:34px;background:var(--white);border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;">
            <span style="font-size:10px;font-weight:700;color:var(--navy);letter-spacing:-0.5px;font-family:var(--font-sans);">STS</span>
            <div style="position:absolute;bottom:-4px;left:0;right:0;height:3px;background:var(--blue);border-radius:2px;"></div>
          </div>
          <div>
            <div style="font-size:0.875rem;font-weight:600;color:var(--white);">Sales Tax Solutions</div>
            <div style="font-size:0.7rem;color:var(--blue-light);">CDTFA Audit & Appeals Specialists</div>
          </div>
        </div>
        <p>Expert California sales tax consulting. Protecting businesses from CDTFA audits, penalties, and overpayments for over 10 years.</p>
      </div>
      <div class="footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="/pages/audit-management.html">Audit Management</a></li>
          <li><a href="/pages/audit-appeals.html">Audit Appeals</a></li>
          <li><a href="/pages/compliance.html">Compliance & Collections</a></li>
          <li><a href="/pages/refunds.html">Refunds & Overpayments</a></li>
          <li><a href="/pages/excise-tax.html">California Excise Tax</a></li>
          <li><a href="/pages/return-preparation.html">Return Preparation</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Company</h4>
        <ul>
          <li><a href="/pages/about.html">About Us</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
          <li><a href="/pages/contact.html">Free Consultation</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+19166336206">(916) 633-6206</a></li>
          <li><a href="mailto:info@salestaxsolutions.com">info@salestaxsolutions.com</a></li>
          <li><a href="/pages/contact.html">Schedule a Call</a></li>
          <li style="color:rgba(255,255,255,0.35);font-size:0.75rem;margin-top:0.5rem;">California · Statewide</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">© 2026 Sales Tax Solutions · salestaxsolutions.com</p>
      <p class="footer__disclaimer">This website is for informational purposes only and does not constitute legal or tax advice. Consult a qualified professional for your specific situation.</p>
    </div>
  </div>
</footer>`;

function injectLayout() {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href') === path || (path.endsWith('/') && a.getAttribute('href') === '/index.html')) {
      a.classList.add('active');
    }
  });
}

function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', injectLayout);
