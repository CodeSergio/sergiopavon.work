function prefersReducedMotion(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function init() {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (els.length === 0) return;

  // Progressive enhancement: content is visible by default.
  // Only enable reveal transitions when motion is allowed and IntersectionObserver exists.
  if (prefersReducedMotion()) return;
  if (!('IntersectionObserver' in window)) return;

  document.documentElement.dataset.motion = 'on';

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('reveal-ready');
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  els.forEach((el) => io.observe(el));
}

init();
