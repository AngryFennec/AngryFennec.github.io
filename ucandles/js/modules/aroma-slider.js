'use strict';
(function () {
  var aromaSelector = document.querySelector('.aroma__swiper-container');
  if (aromaSelector) {
    var swiper = new Swiper(aromaSelector, {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      breakpoints: {
        320: {
          spaceBetween: 23
        },
        768: {
          spaceBetween: 24,
        },
        1440: {
          spaceBetween: 29,
        }
      },
    });

    var images = aromaSelector.querySelectorAll('.aroma__slide-img');

    if (!images) {
      return;
    }
    swiper.on('touchStart', function () {
      images.forEach(function (img) {
        img.style.transform =
        'scale(1.1)';
      });
    });

    swiper.on('touchEnd', function () {
      images.forEach(function (img) {
        img.style.transform =
        'scale(1)';
      });
    });
  }
})();