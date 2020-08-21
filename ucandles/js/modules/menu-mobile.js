'use strict';

(function () {
  var header = document.querySelector('.header');

  if (!header) {
    return;
  }

  var openMenuBtn = header.querySelector('.js-open-menu-btn');
  if (!openMenuBtn) {
    return;
  }

  var openMenu = function () {
    header.classList.add('open');
    window.bodyScrollLock.disableBodyScroll(header);
  };

  var closeMenu = function () {
    header.classList.remove('open');
    window.bodyScrollLock.enableBodyScroll(header);
  };

  var onOpenMenuBtn = function () {
    if (header.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  openMenuBtn.addEventListener('click', onOpenMenuBtn);
  // window.addEventListener('resize', closeMenu);
})();