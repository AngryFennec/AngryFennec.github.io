'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var imgContainers = document.querySelectorAll('.js-img-container');
  if (!imgContainers.length) {
    return;
  }

  imgContainers.forEach(function (imgBlock) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var img = imgBlock.querySelector('.js-img-wrap');
      var controller = new ScrollMagic.Controller({
      });

      var tl = new TimelineMax();

      tl
      .to(img, 0.3, {scale: 1, ease: Power4.easeInOut});

      new ScrollMagic.Scene({
        triggerElement: imgBlock,
        triggerHook: 'onCenter',
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();