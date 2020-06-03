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