'use strict';

(function () {
  var mainSliders = document.querySelectorAll('.js-main-slider');
  if (!mainSliders.length) {
    return;
  }

  var swiperMainSlider = function (slider) {
    return new window.Swiper(slider, {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 60,
      loop: true,
      navigation: {
        nextEl: '.main-slider__btn--next',
        prevEl: '.main-slider__btn--prev',
      },
      breakpoints: {
        1024: {
          spaceBetween: 30,
        },
      }
    });
  };

  mainSliders.forEach(function (slider) {
    swiperMainSlider(slider);
  });
})();