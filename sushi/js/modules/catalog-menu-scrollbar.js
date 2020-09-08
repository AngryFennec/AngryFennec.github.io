'use strict';

(function () {
  var containers = document.querySelectorAll('.js-scroll-container');
  var scroll = null;

  if (!containers.length) {
    return;
  }

  containers.forEach(function (item) {
    scroll = new window.SimpleBar(item, {
      // autoHide: false
    });
    return scroll;
  });
})();