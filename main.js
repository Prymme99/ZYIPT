document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Carousel logic
  const slides      = document.querySelectorAll('.hero-carousel .slide');
  const indicators  = document.querySelectorAll('.indicator');
  const carousel    = document.querySelector('.carousel-slides');
  const nextBtn     = document.querySelector('.next');
  const prevBtn     = document.querySelector('.prev');
  let currentIndex  = 0;

  function goToSlide(idx) {
    const width = document.querySelector('.hero-carousel').clientWidth;
    if (carousel) {
      carousel.style.transform = `translateX(-${width * idx}px)`;
    }
    indicators.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    currentIndex = idx;
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % slides.length);
    });
    prevBtn.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
    });
  }

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Auto-advance every 5s
  setInterval(() => goToSlide((currentIndex + 1) % slides.length), 5000);
});
