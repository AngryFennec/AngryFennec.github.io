/* eslint-disable no-undef */

const portfolioSwiper = new Swiper('.portfolio__slider', {
  init: true,
  navigation: {
    nextEl: '.portfolio__button--next',
    prevEl: '.portfolio__button--prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
      slidesOffsetAfter: 50,
    },
    640: {
      slidesPerView: 2,
      slidesOffsetAfter: 50,
    },
    1024: {
      slidesPerView: 2,
      slidesOffsetAfter: 140,
    },
    1440: {
      slidesPerView: 3,
      slidesOffsetAfter: 180,
    }
  },
  centerSlides: true,
});

portfolioSwiper.init();