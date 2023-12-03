'use strict';
var partnersSwiper = new Swiper('.partners__swiper', {
  spaceBetween: 26,
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 26,
    }

  }


});

document.querySelector('.partners__button-prev').addEventListener('click', () => {
  partnersSwiper.slidePrev();
});

document.querySelector('.partners__button-next').addEventListener('click', () => {
  partnersSwiper.slideNext();
});