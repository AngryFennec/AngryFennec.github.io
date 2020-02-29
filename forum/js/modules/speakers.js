'use strict';

(function() {
// var pricesSwiper;
    let  speakersSwiper = new Swiper('.speakers__container', {
        initialSlide: 1,
        slidesPerView: '3',
        spaceBetween: -150,
        centeredSlides: true,
        speed: 400,
        navigation: {
        nextEl: '.speakers__next',
        prevEl: '.speakers__prev',
        },
        pagination: {
            el: '.speakers__bullets'
          },
        paginationClickable: true,

    });


})();