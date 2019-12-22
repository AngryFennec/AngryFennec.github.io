'use strict';

(function() {
var pricesSwiper;
var pricesSelector = Array.from(document.querySelectorAll('.prices__swiper'));
if (pricesSelector.length > 0) {

            pricesSwiper = new Swiper('.prices__swiper', {
                 slidesPerView: 'auto',
                  navigation: {
                    nextEl: '.prices__next-button',
                    prevEl: '.prices__prev-button',
                  },

            });
          }

})();