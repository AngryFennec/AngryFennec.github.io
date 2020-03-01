'use strict';

(function() {
// var pricesSwiper;
    let  speakersSwiper = new Swiper('.speakers__container', {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 150,
        centeredSlides: true,
        speed: 500,

        navigation: {
        nextEl: '.speakers__next',
        prevEl: '.speakers__prev',
        },
        pagination: {
            el: '.speakers__bullets',
            clickable: true,
          },
            breakpoints: {
          760: {
            initialSlide: 1,
            slidesPerView: 3,
            spaceBetween: -150,
            centeredSlides: true,
            speed: 500,


    },
  }
    });
})();