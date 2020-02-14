/**
 * подключение js-модулей
 * //= modules/file.js
 */
'use strict';

$('.js-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
});

$('.popup__close').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeOut(300);
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.popup').fadeOut(300);
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
  var swiper = new Swiper(headerSelector, {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.main__header-pagination',
        clickable: true,
      },
    });
  }
})();