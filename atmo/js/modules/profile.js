if ($('.profile-testimonials__swiper')[0]) {
  const aboutCertSlider = new Swiper('.profile-testimonials__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.profile-testimonials__next',
      prevEl: '.profile-testimonials__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      960: {
        slidesPerView: 1,
      },
      5000: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
  });
}