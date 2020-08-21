'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var textContainers = document.querySelectorAll('.js-text-container');
  if (!textContainers.length) {
    return;
  }

  textContainers.forEach(function (textBlock) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var text = textBlock.querySelector('.js-text');
      var controller = new ScrollMagic.Controller({
      });

      var tl = gsap.timeline();

      var mySplitText = new SplitText(text, {type: 'chars,words,lines'});
      var chars = mySplitText.chars;

      gsap.set(text, {perspective: 400});

      tl.from(chars, {duration: 0.5, opacity: 0, y: 40, ease: 'back', stagger: 0.01}, '+=0');

      new ScrollMagic.Scene({
        triggerElement: textBlock,
        triggerHook: 'onCenter',
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();