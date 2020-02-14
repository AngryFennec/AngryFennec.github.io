'use strict';
(function() {
  var headerSelector = document.querySelector('.main__header-swiper .swiper-container');
  if (headerSelector) {
  var swiper = new Swiper(headerSelector, {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.main__header-pagination',
        clickable: true,
      },
    });
  }
})();