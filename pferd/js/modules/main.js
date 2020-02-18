'use strict';
(function() {
  var headerSelector = document.querySelector('.main__header-swiper .swiper-container');
  if (headerSelector) {
  var headerSwiper = new Swiper(headerSelector, {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.main__header-pagination',
        clickable: true,
      },
    });
  }

  var industrySelector = document.querySelector('.industry .swiper-container');
  if (industrySelector) {
  var industrySwiper = new Swiper(industrySelector, {
      slidesPerView: 1,
      fadeEffect: {
    crossFade: true
  },
  parallax: true,
  effect: "slide",
  speed: 1000,
      pagination: {
        el: '.industry__pagination',
        clickable: true,
      },
      loop: true,
      navigation: {
        nextEl: '.industry__next',
        prevEl: '.industry__prev',
      },
        breakpoints: {
      1919: {
      slidesPerView: 2
    },
  }
    });
  }
})();