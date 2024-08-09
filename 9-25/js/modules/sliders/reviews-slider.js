/* eslint-disable no-undef */

const reviewsSwiper = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev'
  },
  slidesPerView: 1,
  spaceBetween: 1,
});

reviewsSwiper.init();