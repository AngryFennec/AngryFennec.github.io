'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var menu = document.querySelector('.header');

  if (menu) {
    var open = menu.querySelector('.header-top__burger');

    if (open) {
      open.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.add('open');
      });
    }

    var close = menu.querySelector('.header__overlay');

    if (close) {
      close.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.remove('open');
      });
    }

    window.addEventListener('resize', function () {
      windowWidth = document.documentElement.clientWidth;

      if (windowWidth >= LAPTOP_WIDTH) {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }
    });
  }
})();