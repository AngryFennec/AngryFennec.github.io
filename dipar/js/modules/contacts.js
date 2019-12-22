'use strict';

(function () {
  var contactsBtns = Array.from(document.querySelectorAll('.contacts__btn'));
  var contactsSections = Array.from(document.querySelectorAll('.contacts__list'));
  if (contactsBtns && contactsSections) {
  contactsBtns.forEach(function(item, i) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      if (!item.classList.contains('contacts__btn--active')) {
        contactsBtns.forEach(function(item) {
          if (item.classList.contains('contacts__btn--active')) {
            item.classList.remove('contacts__btn--active');
          }
        });
        item.classList.add('contacts__btn--active');
      }
      contactsSections.forEach(function(item) {
        item.classList.remove('contacts__list--active');
      });
      contactsSections[i].classList.add('contacts__list--active');
    });
  });
}

})();