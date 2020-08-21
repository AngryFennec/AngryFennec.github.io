'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var blocks = document.querySelectorAll('.js-left-block');
  if (!blocks.length) {
    return;
  }

  blocks.forEach(function (block) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var controller = new ScrollMagic.Controller({
      });

      var tl = new TimelineMax();

      tl
      .from(block, 0.2, {xPercent: -10});

      new ScrollMagic.Scene({
        triggerElement: block,
        triggerHook: 'onEnter',
        offset: 50
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();