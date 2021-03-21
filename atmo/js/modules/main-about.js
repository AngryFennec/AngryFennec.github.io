if (document.querySelector('.main-about')) {
    const mainAboutSlider = new Swiper('.main-about__slider', {
        loop: true,
        centeredSlides: true,
  
    
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 20,
  
              },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
            1150: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesOffsetBefore: 200,
            },
            3000: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesOffsetBefore: 290,
            }
          },
          navigation: {
            nextEl: '.main-about__next',
            prevEl: '.main-about__prev',
        },
    });
}