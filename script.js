/**
 * PORTAFOLIO PROFESIONAL - DANIEL HINCAPIE
 * Interactividad para componentes de Bulma CSS y navegación fluida
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Manejo del menú Hamburguesa de Bulma (Mobile Navbar)
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach((burger) => {
      burger.addEventListener('click', () => {
        const targetId = burger.dataset.target;
        const target = document.getElementById(targetId);

        burger.classList.toggle('is-active');
        burger.setAttribute('aria-expanded', burger.classList.contains('is-active') ? 'true' : 'false');

        if (target) {
          target.classList.toggle('is-active');
        }
      });
    });
  }

  // 2. Cerrar el menú móvil al hacer clic en cualquier enlace interno
  const navLinks = document.querySelectorAll('.navbar-menu .navbar-item.nav-link, .cta-header-btn');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const burger = document.querySelector('.navbar-burger');
      const menu = document.getElementById('navbarMenu');

      if (burger && menu && menu.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
      }
    });
  });

  // 3. Elevación visual del header al hacer scroll
  const navbar = document.getElementById('main-navbar');
  const syncNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };

  syncNavbarScroll();
  window.addEventListener('scroll', syncNavbarScroll, { passive: true });

  // 4. Espía de scroll para marcar la sección activa en el menú
  const sections = document.querySelectorAll('main > section[id]');
  const highlightActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`.navbar-start a[href="#${sectionId}"]`);

      if (navItem) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItem.classList.add('is-active');
        } else {
          navItem.classList.remove('is-active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightActiveLink, { passive: true });
});
