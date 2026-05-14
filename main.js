/* ══════════════════════════════════════════════════════
   DECADENT BOP SEXTET — main.js
   Minimal: nav scroll, mobile menu, form handlers
══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── NAV: sticky border on scroll ─────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
  window.addEventListener('scroll', function () {
    header.classList.toggle('heroscrolled', window.scrollY > document.getElementById('main').offsetHeight);
  }, { passive: true });


  // ── NAV: mobile burger toggle ─────────────────────────
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    // swap burger lines to ✕ shape
    const spans = burger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(8px) rotate(45deg)';
      spans[1].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  });

  // Close menu when a link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      const spans = burger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    });
  });


  // ── CONTACT FORM (demo mode / Formspree ready) ────────
  //
  // En production avec Formspree, supprimez le preventDefault()
  // pour laisser le formulaire soumettre normalement vers Formspree,
  // et ajoutez un champ caché _next pour la redirection :
  //   <input type="hidden" name="_next" value="https://votresite.fr/merci.html" />
  //
  var contactForm   = document.getElementById('contactForm');
  var formConfirm   = document.getElementById('formConfirm');

  if (contactForm && formConfirm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Retirer cette ligne une fois Formspree configuré
      formConfirm.style.display = 'block';
      contactForm.reset();
    });
  }


  // ── NOTIFY FORM (concerts) ─────────────────────────────
  var notifyForm    = document.getElementById('notifyForm');
  var notifyConfirm = document.getElementById('notifyConfirm');

  if (notifyForm && notifyConfirm) {
    notifyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      notifyConfirm.style.display = 'block';
      notifyForm.reset();
    });
  }

}());
