/**
 * подключение js-модулей
 * //= modules/file.js
 */
'use strict';

$(function () {
    console.log('123');
 var articleSlider = new Swiper('.article__container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.article__pagination',
        clickable: true,
      },
 });
});
var swiper = new Swiper('.testi__swiper-container', {
  initialSlide: 1,
  pagination: {
    el: '.testi__pagination',
    //dynamicBullets: true,
  },
});
var swiper2 = new Swiper('.complete__swiper-container', {
slidesPerView: 1,
initialSlide: 1,
  pagination: {
    el: '.complete__pagination',
    //dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40
    },
  }
});