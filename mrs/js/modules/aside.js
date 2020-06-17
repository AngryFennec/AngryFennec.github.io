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