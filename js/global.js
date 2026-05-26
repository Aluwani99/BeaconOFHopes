// ============================================================
// BEACON OF HOPE — Global JS
// ============================================================

// Navbar scroll effect
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      links.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// Active nav link
(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Scroll-reveal animation
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.service-card, .contact-card, .leader-card, .section-header').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// Inject reveal CSS
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.revealed { opacity: 1; transform: none; }
  .service-card.reveal:nth-child(2) { transition-delay: 0.1s; }
  .service-card.reveal:nth-child(3) { transition-delay: 0.2s; }
  .service-card.reveal:nth-child(4) { transition-delay: 0.3s; }
  .leader-card.reveal:nth-child(2) { transition-delay: 0.1s; }
  .leader-card.reveal:nth-child(3) { transition-delay: 0.2s; }
  .leader-card.reveal:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(revealStyle);
