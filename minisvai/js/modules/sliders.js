var swiper = new Swiper('.testi__swiper-container', {
  initialSlide: 1,
  pagination: {
    el: '.testi__pagination',
    //dynamicBullets: true,
  },
});
var swiper2 = new Swiper('.complete__swiper-container', {
slidesPerView: 1,
initialSlide: 1,
  pagination: {
    el: '.complete__pagination',
    //dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40
    },
  }
});