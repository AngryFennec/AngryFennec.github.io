/**
 * подключение js-модулей
 * //= modules/file.js
 */

'use strict';

// $(".anchor").on("click", function () {
//   var get_id = $(this).attr("href");
//     var target = $(get_id).offset().top ;
//   $("html, body").animate({ scrollTop: target }, 800);
// });

$(".header__burger").on('click', function(){
  $('.header nav, .header__price, .header__top').fadeToggle(400).css("display","block");
  $('.header__burger img').toggleClass('none');
  $('.page-body').toggleClass('page-body--overflow');

  $('.header nav, .header__top').on('click', function(){
    if($('.header').width() <=1024) {
      $('.header nav, .header__price, .header__top').hide();
      $('.header__burger img').eq(0).removeClass('none');
      $('.header__burger img').eq(1).addClass('none');
      $('.page-body').removeClass('page-body--overflow');
    }
  });
});

$(window).on('resize', function(){
  if($('.header').width() > 1024) {
    $('.header nav, .header__price, .header__top').show();
    $('.header__burger img').eq(0).removeClass('none');
    $('.header__burger img').eq(1).addClass('none');
    $('.page-body').removeClass('page-body--overflow');
  }
})
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

$('.popup').on('click', function (evt) {
  if ($(evt.target).hasClass('popup')) {
    $('.popup').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});


var inputPhone = $('input[name="user-phone"]')[0];
//var inputEmail = $('input[name="user-email"]')[0];

Inputmask({"mask": "+7 (999) 999-99-99", showMaskOnHover: false}).mask(inputPhone);
//Inputmask({regex: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/1/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', showMaskOnHover: false}).mask(inputEmail);
'use strict';

if ($('aside')[0]) {
  var links = $('aside ul > li > a').not('.item-menu__sublist a');
  links.each(function(){
    if (($(this).parent().find('.item-menu__sublist')).length === 0) {
      $(this).addClass('non-arrow');
    }
  });
  links.on('click', function (evt) {
    evt.preventDefault();
    links.not($(this)).each(function(){
        $(this).parent().find('.item-menu__sublist').slideUp();
    })
    $(this).parent().find('.item-menu__sublist').slideToggle();
    $(this).toggleClass('opened');
  });
}

if ($('.catalog-index')[0]) {
  var catlinks = $('.catalog-index__wrapper ul > li > a').not('.catalog-index__sublist a');
  catlinks.each(function(){
    if (($(this).parent().find('.catalog-index__sublist')).length === 0) {
      $(this).addClass('non-circle');
    }
  });
  catlinks.on('click', function (evt) {
    evt.preventDefault();
    catlinks.not($(this)).each(function(){
        $(this).parent().find('.catalog-index__sublist').slideUp();
    })
    $(this).parent().find('.catalog-index__sublist').slideToggle();
    $(this).toggleClass('opened');
  });
}

var inputPhoneForm = $('input[name="call-phone"]')[0];
//var inputEmail = $('input[name="user-email"]')[0];
if(inputPhoneForm) {
Inputmask({"mask": "+7 (999) 999-99-99", showMaskOnHover: false}).mask(inputPhoneForm);
}