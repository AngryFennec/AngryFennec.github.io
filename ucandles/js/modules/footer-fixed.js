'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var wh = window.innerHeight;
  var footer = document.querySelector('.js-footer');
  if (!footer) {
    return;
  }
  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });


    new ScrollMagic.Scene({
      offset: wh * 4
    })
    .setClassToggle(footer, 'footer--fixed')
    .addTo(controller);
  }

})();