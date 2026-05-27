// ============================================================
// BEACON OF HOPE — Home JS
// ============================================================

// ---- AUTO-ROTATING HERO BACKGROUND ----
(function () {
  const slides = document.querySelectorAll('.hero-bg-img');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  const DELAY  = 5000; // 5 seconds

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, DELAY);
  }

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Pause on hover
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', startTimer);
  }

  // Swipe support (touch)
  let touchStartX = 0;
  if (hero) {
    hero.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); startTimer(); }
    }, { passive: true });
  }

  startTimer();
})();

// ---- STAT COUNTER ANIMATION ----
(function () {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const step   = 16;
    const steps  = 1800 / step;
    const inc    = target / steps;
    let current  = 0;
    const suffix = target >= 100 ? '+' : '';
    const timer  = setInterval(() => {
      current += inc;
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + suffix;
      }
    }, step);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();
