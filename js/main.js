// ===== CRITTER WIGGLE =====
document.addEventListener('DOMContentLoaded', () => {
  const critter = document.getElementById('critterImg');
  if (critter) {
    critter.addEventListener('mouseenter', () => {
      critter.classList.remove('wiggling');
      // Force reflow so the animation restarts if hovered again quickly
      void critter.offsetWidth;
      critter.classList.add('wiggling');
    });
    critter.addEventListener('animationend', () => {
      critter.classList.remove('wiggling');
    });
  }
});

// ===== MENU MOBILE (hamburger) =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
});
