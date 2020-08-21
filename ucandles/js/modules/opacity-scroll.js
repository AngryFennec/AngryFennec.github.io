'use strict';

(function () {
  var blocks = document.querySelectorAll('.js-opacity');

  if (!blocks.length) {
    return;
  }
  AOS.init({
    offset: 100,
    delay: 500,
    duration: 500,
    easing: 'ease',
    once: true,
    mirror: true,
  });

})();