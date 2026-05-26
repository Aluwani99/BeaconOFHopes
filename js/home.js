// ============================================================
// BEACON OF HOPE — Home JS
// ============================================================

// Stat counter animation
(function () {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + (target >= 100 ? '+' : '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
      }
    }, step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

// Hero background chooser
(function () {
  const btns = document.querySelectorAll('.chooser-btn');
  const bgs = document.querySelectorAll('.hero-bg-img');
  if (!btns.length || !bgs.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.bg, 10);

      // Update backgrounds
      bgs.forEach((bg, i) => bg.classList.toggle('active', i === idx));

      // Update buttons
      btns.forEach((b, i) => b.classList.toggle('active', i === idx));
    });
  });
})();
