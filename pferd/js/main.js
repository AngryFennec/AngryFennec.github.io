/**
 * подключение js-модулей
 * //= modules/file.js
 */
'use strict';

$('.js-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
  $('.page-body').addClass('page-body--overflow');
});

$('.popup__close').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeOut(300);
  $('.page-body').removeClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.popup').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

const input = $('input[name="user-phone"]')[0];
let im = new Inputmask("+7 (999) 999-99-99");
if(input)im.mask(input);

const input2 = $('input[name="phone"]')[0];
let im2 = new Inputmask("+7 (999) 999-99-99");
if(input2) im2.mask(input2);
'use strict';
(function() {
  var headerSelector = document.querySelector('.main__header-swiper .swiper-container');
  if (headerSelector) {
  var headerSwiper = new Swiper(headerSelector, {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.main__header-pagination',
        clickable: true,
      },
    });
  }

  var industrySelector = document.querySelector('.industry .swiper-container');
  if (industrySelector) {
  var industrySwiper = new Swiper(industrySelector, {
      slidesPerView: 1,
      fadeEffect: {
    crossFade: true
  },
  parallax: true,
  effect: "slide",
  speed: 1000,
      pagination: {
        el: '.industry__pagination',
        clickable: true,
      },
      loop: true,
      navigation: {
        nextEl: '.industry__next',
        prevEl: '.industry__prev',
      },
        breakpoints: {
      1919: {
      slidesPerView: 2
    },
  }
    });
  }
})();