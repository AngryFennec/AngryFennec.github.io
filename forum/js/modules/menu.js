'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
  var target = $(get_id).offset().top;
  $("html, body").animate({ scrollTop: target }, 800);
});

$(".header__burger").on('click', function(){
  $('.header__menu').fadeToggle(400);

  $('.header__menu').on('click', function(){
    if($(document).width() <=768) {
      $(this).hide();
    }
  });
});

$(window).on('resize', function(){
  console.log($(document).width())
  if($(document).width() > 768) {
    $('.header__menu').css('display', 'flex');
  } else {
    $('.header__menu').css('display', 'none');
  }
})