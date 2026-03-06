/* ============================================
   Navigation - Sticky, Smooth Scroll, Mobile
   ============================================ */

(function () {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('nav-drawer');
  const allNavLinks = document.querySelectorAll('.nav__link');

  // Scroll detection for nav background
  let lastScroll = 0;
  window.addEventListener('scroll', throttle(function () {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, 100));

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('nav__hamburger--open');
    drawer.classList.toggle('nav__drawer--open');
  });

  // Close drawer on link click
  drawer.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('nav__hamburger--open');
      drawer.classList.remove('nav__drawer--open');
    });
  });

  // Smooth scroll for all nav links
  allNavLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Scroll spy - highlight active section
  const sections = document.querySelectorAll('.section, .hero');
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          allNavLinks.forEach(function (link) {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('data-section') === id) {
              link.classList.add('nav__link--active');
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-70px 0px 0px 0px' }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // Hero particles
  function createParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (8 + Math.random() * 12) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = (0.2 + Math.random() * 0.5).toString();
      container.appendChild(particle);
    }
  }

  createParticles();
})();
