'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
    var target = $(get_id).offset().top - 100;
  $("html, body").animate({ scrollTop: target }, 800);
});

$(".header__burger").on('click', function(){
  $('.header nav').fadeToggle(400);

  $('.header nav').on('click', function(){
    if($(document).width() <=1024) {
      $(this).hide();
    }
  });
});

$(window).on('resize', function(){
  if($(document).width() > 1024) {
      console.log($(document).width())
    $('.header nav').show();
  }
})