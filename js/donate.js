// ============================================================
// BEACON OF HOPE — Donate Page JS
// ============================================================

// Amount selector buttons
(function () {
  const btns = document.querySelectorAll('.amount-btn');
  const customInput = document.getElementById('customAmount');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (customInput) customInput.value = '';
    });
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      if (customInput.value) {
        btns.forEach(b => b.classList.remove('active'));
      }
    });
  }
})();

// Donate form submit
(function () {
  const form = document.getElementById('donateForm');
  const success = document.getElementById('donateSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Processing…';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      document.querySelectorAll('.amount-btn').forEach((b, i) => {
        b.classList.toggle('active', i === 1);
      });
      btn.textContent = 'Confirm Pledge';
      btn.disabled = false;
      if (success) success.classList.add('show');
      setTimeout(() => success && success.classList.remove('show'), 6000);
    }, 1200);
  });
})();
