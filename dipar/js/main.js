/**
 * подключение js-модулей
 * //= modules/file.js
 */


'use strict';

(function () {
  var serviceItems = Array.from(document.querySelectorAll('.service__item'));
  serviceItems.forEach(function(item, i) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      if (!item.classList.contains('service__item--active')) {
        serviceItems.forEach(function(item) {
          if (item.classList.contains('service__item--active')) {
            item.classList.remove('service__item--active');
          }
        });
        item.classList.add('service__item--active');
      }
    });
  });

})();
var anchors = Array.from(document.querySelectorAll('.anchor'));
var tools = Array.from(document.querySelectorAll('.tool'));
anchors.forEach(function(item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = item.getAttribute('href').substr(1);
    const block = document.getElementById(blockID);
    if (block.parentNode.classList.contains("tool")) {
      tools.forEach(function(item) {
        item.classList.remove("tool--active");
      });
      block.parentNode.classList.add("tool--active");
    }
    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});