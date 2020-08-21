'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var containers = document.querySelectorAll('.js-parallax-item');
  var rightContainers = document.querySelectorAll('.js-parallax-item-right');
  var parallaxTexts = document.querySelectorAll('.js-lookbook-text');
  var parallaxImgs = document.querySelectorAll('.js-lookbook-img');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        // duration: '400%'
      }
    });

    if (containers.length) {
      containers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '400%'
        })
          .setTween(item, {y: '-80%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (rightContainers.length) {
      rightContainers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '400%'
        })
          .setTween(item, {y: '80%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxTexts.length) {
      parallaxTexts.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxImgs.length) {
      parallaxImgs.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '300%'
        })
          .setTween(item, {y: '-40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }
  }

})();