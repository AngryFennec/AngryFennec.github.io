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