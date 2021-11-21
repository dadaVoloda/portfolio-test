document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.menu-burger');
  const header = document.querySelector('.header');
  const menu = document.querySelector('.navigation__list');
  const navLinks = document.querySelectorAll('.navigation__link');

  scrollTo();
  headerFixing();

  burger.addEventListener('click', function () {
    toggleMenu();
  });

  if (document.documentElement.clientWidth <= 991) {
    navLinks.forEach((link) => {
      link.addEventListener('click', toggleMenu);
    });
  }

  function scrollTo() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }

  function headerFixing() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 65) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    });
  }

  function toggleMenu() {
    burger.classList.toggle('active');
    header.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('hidden');
  }
});
