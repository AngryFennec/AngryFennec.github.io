'use strict';

$('.header__burger').on('click', function () {
  $('.header__menu').fadeToggle(400);
});

$(window).on('resize', function () {
  if ($(document).width() > 1025) {
    $('.header__menu').css('display', 'flex');
    console.log($(document).width())
    console.log('flex')
  } else {
    $('.header__menu').css('display', 'none');
    console.log($(document).width())
    console.log('none')
  }
});