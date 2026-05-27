// ============================================================
// BEACON OF HOPE — Global JS
// ============================================================

// ---- NAVBAR SCROLL ----
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---- MOBILE NAV DRAWER ----
(function () {
  const toggle   = document.getElementById('navToggle');
  const links    = document.getElementById('navLinks');
  const navbar   = document.getElementById('navbar');
  if (!toggle || !links) return;

  // Create backdrop
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function openNav() {
    links.classList.add('open');
    toggle.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    links.classList.remove('open');
    toggle.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    links.classList.contains('open') ? closeNav() : openNav();
  });

  // Close on backdrop click
  backdrop.addEventListener('click', closeNav);

  // Close on nav link click
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // Close on Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  // Close if window resizes to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeNav();
  });
})();

// ---- ACTIVE NAV LINK ----
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    link.classList.toggle('active', href === current);
  });
})();

// ---- SCROLL REVEAL ----
(function () {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(
    '.service-card, .contact-card, .leader-card, .achievement-card, .highlight-card, .value-item, .vm-card, .section-header'
  ).forEach(el => { el.classList.add('reveal'); observer.observe(el); });
})();
