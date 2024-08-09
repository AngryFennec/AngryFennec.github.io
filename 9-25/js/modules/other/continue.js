'use strict';
let continueSwiper = Swiper;
let isInit = false;

const initSwiper = () => {
  if (!isInit) {
    isInit = true;
    continueSwiper = new Swiper('.continue__swiper', {
      spaceBetween: 5,
      slidesPerView: 'auto',
    });
  }
}

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) {
    initSwiper();
  } else
  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (continueSwiper) {
      continueSwiper.destroy();
    }
    isInit = false;
  }
});

window.addEventListener('load', () => {
  if (window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) {
    initSwiper();
  } else
  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (continueSwiper) {
      continueSwiper.destroy();
    }
    isInit = false;
  }
});