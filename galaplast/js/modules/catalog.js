$(function(){
    if($('.catalog__slider')[0]){
        let hitsSlider = new Swiper('.catalog__slider', {
            // slidesPerView: 3,
            // spaceBetween: 30,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                draggable: true,
                dragSize: 84
              },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
          })
    }
})