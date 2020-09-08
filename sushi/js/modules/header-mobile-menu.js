'use strict';

(function () {
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  var nav = header.querySelector('nav');

  var openMobileBtn = header.querySelector('.js-mobile-menu-btn');
  var closeMobileBtn = header.querySelector('.js-mobile-close-btn');

  if (openMobileBtn && nav) {
    openMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      header.classList.add('is-open');
      window.bodyScrollLock.disableBodyScroll(nav);
    });
  }

  if (closeMobileBtn && nav) {
    closeMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      header.classList.remove('is-open');
      window.bodyScrollLock.enableBodyScroll(nav);
    });
  }
})();