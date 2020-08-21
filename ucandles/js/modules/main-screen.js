'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var main = document.querySelector('.js-header-scroll');
  if (!main) {
    return;
  }
  var left = main.querySelector('.js-left');
  var right = main.querySelector('.js-right');
  var img = main.querySelector('.main-screen__img-wrapper');

  if (windowWidth >= LAPTOP_WIDTH) {
    // инициализация
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    var mainTl = new TimelineMax();

    mainTl
    .to(left, 1, {xPercent: -100, ease: Power4.easeInOut})
    .to(right, 1, {xPercent: 100, ease: Power4.easeInOut}, '0')
    .to(img, 1, {scale: 1, ease: Power4.easeInOut}, '0');

    new ScrollMagic.Scene({
      triggerElement: main,
      duration: '200%'
    })
      .setTween(mainTl)
      .setPin(main)
      .addTo(controller);
  }

})();