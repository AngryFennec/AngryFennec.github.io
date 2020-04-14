'use strict';
(function() {


  var thumbs = document.querySelector('.portfolio-thumbs');
  var tops = document.querySelector('.portfolio-top');
  var nextBtns = document.querySelector('.portfolio .swiper-button-next');
  var prevBtns = document.querySelector('.portfolio .swiper-button-prev');
  if (tops && thumbs) {

    var portfolioThumbs = new Swiper('.portfolio-thumbs', {
          spaceBetween: 15,
          slidesPerView: 11,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,


        });
        var portfolioTop = new Swiper('.portfolio-top', {

          thumbs: {
            swiper: portfolioThumbs
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
}

})();