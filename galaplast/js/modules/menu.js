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