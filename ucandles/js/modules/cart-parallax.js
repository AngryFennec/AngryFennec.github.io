'use strict';
(function () {
  const windowWidth = document.documentElement.clientWidth;
  const LAPTOP_WIDTH = 1024;
  const parallaxSale = document.querySelector('.js-parallax-sale');
  const parallaxFhoto = document.querySelector('.js-parallax-fhoto');
  const parallaxRecommendation = document.querySelector('.js-parallax-recommendation');

  if (windowWidth >= LAPTOP_WIDTH) {
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '100%'
      }
    });

    if (parallaxSale) {
      new ScrollMagic.Scene({
        triggerElement: parallaxSale
      })
        .setTween('.js-parallax-sale', {y: '-20%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxSale
      })
        .setTween('.sale__container', {y: '-10px', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxFhoto) {
      new ScrollMagic.Scene({
        triggerElement: parallaxFhoto
      })
        .setTween('.js-parallax-fhoto', {y: '-10%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxFhoto
      })
        .setTween('.fhoto__container_two', {y: '-25%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxRecommendation) {
      new ScrollMagic.Scene({
        triggerElement: parallaxRecommendation
      })
        .setTween('.js-parallax-recommendation > h2', {y: '-10%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxRecommendation
      })
        .setTween('.js-parallax-recommendation > ul', {y: '-50%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }
  }

})();