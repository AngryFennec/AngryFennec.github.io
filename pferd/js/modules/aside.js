'use strict';

if ($('aside')[0]) {
  var links = $('aside ul > li > a').not('.left-menu__sublist a');
  links.on('click', function (evt) {
    evt.preventDefault();
    links.not($(this)).each(function(){
        $(this).parent().find('.left-menu__sublist').slideUp();
    })
    $(this).parent().find('.left-menu__sublist').slideToggle();
  });
}