'use strict';

(function () {
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  var submenu = header.querySelector('.js-submenu');
  var openBtn = header.querySelector('.js-open-submenu');
  var closeBtn = header.querySelector('.js-close-submenu');

  if (submenu && openBtn) {
    openBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      submenu.classList.add('is-open');
    });
  }

  if (submenu && closeBtn) {
    closeBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      submenu.classList.remove('is-open');
    })
  }
})();