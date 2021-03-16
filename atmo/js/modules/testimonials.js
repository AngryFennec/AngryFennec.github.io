if ($('.video-testi__slider')[0]) {
    const aboutCertSlider = new Swiper('.video-testi__slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.video-testi__next',
            prevEl: '.video-testi__prev',
        },
    });
}

if ($('.testi-promo__slider')[0]) {
    const promoCertSlider = new Swiper('.testi-promo__slider', {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.testi-promo__next',
            prevEl: '.testi-promo__prev',
        },
    });
}