'use strict';

(function () {
  var hitSliders = document.querySelectorAll('.js-hits-swiper');
  if (!hitSliders.length) {
    return;
  }

  var hitSlider = function (slider) {
    return new window. Swiper(slider, {
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          centeredSlides: false,
          spaceBetween: 24
        },
        767: {
          spaceBetween: 45
        },
      }
    });
  };

  hitSliders.forEach(function (slider) {
    hitSlider(slider);
  });
})();