// ============================================================
// BEACON OF HOPE — Gallery JS (filters + lightbox)
// ============================================================

// ---- FILTER TABS ----
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide items
      items.forEach(item => {
        const cat = item.dataset.category || '';
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();

// ---- LIGHTBOX ----
(function () {
  const lightbox    = document.getElementById('lightbox');
  const lbImg       = document.getElementById('lightboxImg');
  const lbTitle     = document.getElementById('lightboxTitle');
  const lbDesc      = document.getElementById('lightboxDesc');
  const lbClose     = document.getElementById('lightboxClose');
  const lbPrev      = document.getElementById('lightboxPrev');
  const lbNext      = document.getElementById('lightboxNext');

  if (!lightbox) return;

  // Collect all real (non-placeholder) gallery items with images
  let items = [];
  let currentIndex = 0;

  function buildItems() {
    items = Array.from(
      document.querySelectorAll('.gallery-item:not(.gallery-placeholder):not(.hidden)')
    );
  }

  function openLightbox(index) {
    buildItems();
    if (!items.length) return;
    currentIndex = index;
    showItem(currentIndex);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function showItem(index) {
    const item = items[index];
    if (!item) return;
    const img = item.querySelector('img');
    lbImg.src = img ? img.src : '';
    lbImg.alt = img ? img.alt : '';
    lbTitle.textContent = item.dataset.title || '';
    lbDesc.textContent  = item.dataset.desc  || '';

    // Show/hide nav arrows
    lbPrev.style.display = items.length > 1 ? 'flex' : 'none';
    lbNext.style.display = items.length > 1 ? 'flex' : 'none';
  }

  // Click on gallery item to open
  document.getElementById('galleryGrid').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item:not(.gallery-placeholder)');
    if (!item) return;
    buildItems();
    const index = items.indexOf(item);
    if (index !== -1) openLightbox(index);
  });

  // Close
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Prev / Next
  lbPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  lbNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + items.length) % items.length; showItem(currentIndex); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % items.length; showItem(currentIndex); }
  });
})();
