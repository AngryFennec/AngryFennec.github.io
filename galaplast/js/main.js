/**
 * подключение js-модулей
 * //= modules/file.js
 */

 $(function(){
     if($('.about__slider')[0]) {
         let about = new Swiper('.about__container', {
             slidePerView: 1,
             spaceBetween: 5,
             navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             },
             pagination: {
                 el: '.about__pagination',
                 clickable: true,
             },
         });
     }
 })
 'use strict';
 
 // $(".anchor").on("click", function () {
 //   var get_id = $(this).attr("href");
 //     var target = $(get_id).offset().top ;
 //   $("html, body").animate({ scrollTop: target }, 800);
 // });
 
 $(".header__burger").on('click', function(){
   $('.header nav, .header__top').fadeToggle(400);
   $('.header__burger img').toggleClass('none');
   $('.page-body').toggleClass('page-body--overflow');
 
   $('.header nav, .header__top').on('click', function(){
     if($('.header').width() <=1024) {
       $('.header nav, .header__top').hide();
       $('.header__burger img').eq(0).removeClass('none');
       $('.header__burger img').eq(1).addClass('none');
       $('.page-body').removeClass('page-body--overflow');
     }
   });
 });
 
 $(window).on('resize', function(){
   if($('.header').width() > 1024) {
     $('.header nav, .header__top').show();
     $('.header__burger img').eq(0).removeClass('none');
     $('.header__burger img').eq(1).addClass('none');
     $('.page-body').removeClass('page-body--overflow');
   }
 })
  $(function(){
      if($('.catalog__slider')[0]){
          let hitsSlider = new Swiper('.catalog__slider', {
              // slidesPerView: 3,
              // spaceBetween: 30,
              scrollbar: {
                  el: '.swiper-scrollbar',
                  hide: false,
                  draggable: true,
                  dragSize: 84
                },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                  320: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                  },
                  650: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                  },
                  960: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                  },
              }
            })
      }
  })
'use strict';

(function () {
  $('.cart-item__btn--minus, .card__btn--minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.cart-item__btn--plus, .card__btn--plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
})();
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

const input = $('input[name="user-phone"]')[0];
let im = new Inputmask("+7 (999) 999-99-99");
if(input)im.mask(input);