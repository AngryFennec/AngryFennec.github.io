if (document.querySelector('.about-cert')) {
    const aboutCertSlider = new Swiper('.about-cert__slider', {
        slidesPerView: '6',
        spaceBetween: 40,
        loop: true,
    
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 30
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1150: {
              slidesPerView: 4,
              spaceBetween: 40
            },
    
            3000: {
                slidesPerView: 6,
                spaceBetween: 40
              }
          },
          navigation: {
            nextEl: '.about-cert__next',
            prevEl: '.about-cert__prev',
        },
        pagination: {
            el: '.about-cert__pagination',
        },
    });
    
    let count = aboutCertSlider.slides.length/2;
    
    function updateData(){
        let activeSlide = aboutCertSlider.realIndex;
        let slides = document.querySelectorAll('.about-cert .swiper-slide');
        let firstActiveSlide = ((activeSlide +1) % count == 0) ? 0 : (activeSlide+1) % count;
        let secondActiveSlide = ((activeSlide + 2) % count == 0) ? 0 : (activeSlide + 2) % count;
        let thirdActiveSlide = ((activeSlide + 3) % count == 0) ? 0 : (activeSlide + 3) % count
        let fourthActiveSlide = ((activeSlide + 4) % count == 0) ? 0 : (activeSlide + 4) % count
    
        slides.forEach(function(item){
            let currentNumber = item.getAttribute('data-swiper-slide-index');
            if ($(window).width() > 1150) {
                if (currentNumber == firstActiveSlide || currentNumber == secondActiveSlide || currentNumber == thirdActiveSlide || currentNumber == fourthActiveSlide) {
                    item.style.opacity = '1';
                } else {
                    item.style.opacity = '0.3';
                }
            } else {
                item.style.opacity = '1';
            }
        });
    
    }
    
    updateData();
    
    $(window).on('resize', updateData);
    
    aboutCertSlider.on('slideChange', function () {
        updateData();
    });
}