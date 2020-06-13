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