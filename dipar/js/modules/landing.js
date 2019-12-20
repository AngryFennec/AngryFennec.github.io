'use strict';

(function() {
var pricesSwiper;
var pricesSelector = document.querySelectorAll('.prices__swiper');
if (pricesSelector) {

    // function initSwiper() {
    //     console.log('12414125412512512');
    //     if(document.body.clientWidth <= 1240) {
            pricesSwiper = new Swiper('.prices__swiper', {
                 slidesPerView: 'auto',
                 spaceBetween: 9,
                // centeredSlides: true,
                  navigation: {
                    nextEl: '.prices__next-button',
                    prevEl: '.prices__prev-button',
                  },

            });
          }

//             return pricesSwiper;
//         } else {

//             pricesSwiper = undefined;
//             return pricesSwiper;
//         }

//     }

//     initSwiper();

//     window.addEventListener('resize', function() {
//         setTimeout(initSwiper, 500)
//     })

})();