if (document.querySelector('.main-slider')) {
    const aboutMainSlider = new Swiper('.main-slider__container', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
        },
    });
}