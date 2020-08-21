'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var min = document.querySelectorAll('.js-parallax-min');
  var max = document.querySelectorAll('.js-parallax-max');
  var parallaxImgs = document.querySelectorAll('.js-parallax-min-img');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        // duration: '400%'
      }
    });

    if (min.length) {
      min.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '100%'
        })
          .setTween(item, {y: '-20%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (max.length) {
      max.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '-20%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxImgs.length) {
      parallaxImgs.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '-100%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }
  }

})();