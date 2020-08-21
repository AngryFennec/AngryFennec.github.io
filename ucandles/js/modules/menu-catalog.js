'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  if (windowWidth > LAPTOP_WIDTH) {
    var tabs = header.querySelectorAll('[data-toggle="catalog-header"]');

    if (!tabs.length) {
      return;
    }

    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('mouseenter', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var activeBtn = header.querySelector('[data-toggle="catalog-header"].active');
        var id = thisTarget.getAttribute('data-target');
        var content = header.querySelector('[data-content="header-content"]' + id);
        var activeContent = header.querySelector('[data-content="header-content"].active');

        activeBtn.classList.remove('active');
        tab.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');

      });
    });
  }
})();