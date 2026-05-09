/* =============================================
   NOMBELA CONSULTING GROUP — SHARED JS
   ============================================= */

// Determine active nav link
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Sticky nav shadow
const nav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('open');
});
// Close menu on link click
links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  });
});

// Animate hero background
document.querySelectorAll('.hero-bg').forEach(el => {
  setTimeout(() => el.classList.add('loaded'), 50);
});

// Scroll-triggered fade-up for elements with .reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.65s ease ${i * 0.07}s, transform 0.65s ease ${i * 0.07}s`;
  observer.observe(el);
});
