$(function(){
    if($('.about__slider')[0]) {
        let about = new Swiper('.about__container', {
            slidePerView: 1,
            spaceBetween: 5,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.about__pagination',
                clickable: true,
            },
        });
    }
})