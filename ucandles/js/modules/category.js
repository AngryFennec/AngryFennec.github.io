'use strict';
(function ($) {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;

  var categoryAddHover = function () {
    if (windowWidth >= LAPTOP_WIDTH) {
      $('.category__link').mousemove(function (evt) {
        var hoverimg = $(this).attr('data-src');
        $('.category__img').show();
        $('.category__img').css('top', evt.clientY).css('left', evt.clientX).css('background-image', 'url("../' + hoverimg + '")');
      }).mouseout(function () {
        $('.category__img').hide();
      });
    }
  };

  categoryAddHover();

})(jQuery);