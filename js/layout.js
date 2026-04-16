const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav__inner">
      <a href="/index.html" class="nav__logo" aria-label="Sales Tax Solutions home">
        <div class="nav__mark"><span>STS</span></div>
        <div class="nav__name">
          <strong>Sales Tax Solutions</strong>
          <small>California CDTFA Specialists</small>
        </div>
      </a>
      <ul class="nav__links" role="list">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>
      </ul>
      <a href="/pages/contact.html" class="btn btn-primary nav__cta">Free Consultation</a>
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
      <li><a href="/pages/services.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">Services</a></li>
      <li><a href="/pages/about.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">About</a></li>
      <li><a href="/pages/contact.html" style="display:block; color:rgba(255,255,255,0.8); font-size:0.9rem; padding:0.5rem 0;">Contact</a></li>
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
            <div style="font-size:0.7rem;color:var(--blue-light);">California CDTFA Specialists</div>
          </div>
        </div>
        <p>Expert California sales tax consulting. Protecting businesses from CDTFA audits, penalties, and overpayments for over 10 years.</p>
      </div>
      <div class="footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="/pages/services.html#audit-management">Audit Management</a></li>
          <li><a href="/pages/services.html#audit-appeals">Audit Appeals</a></li>
          <li><a href="/pages/services.html#compliance">Compliance & Collections</a></li>
          <li><a href="/pages/services.html#refunds">Refunds & Overpayments</a></li>
          <li><a href="/pages/services.html#excise-tax">California Excise Tax</a></li>
          <li><a href="/pages/services.html#return-prep">Return Preparation</a></li>
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
