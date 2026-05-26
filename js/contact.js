// ============================================================
// BEACON OF HOPE — Contact Form JS
// ============================================================

(function () {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In production: send to FormSubmit, Formspree, or your backend.
    // For now show success message.
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
      if (success) success.classList.add('show');
      setTimeout(() => success && success.classList.remove('show'), 5000);
    }, 1000);
  });
})();
