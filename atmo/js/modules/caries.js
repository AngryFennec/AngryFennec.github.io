if ($('.caries-ba__swiper')[0]) {
  const cariesBa = new Swiper('.caries-ba__swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.caries-ba__next',
      prevEl: '.caries-ba__prev',
    },
    pagination: {
      el: '.caries-ba__pagination',
    },
    320: {
      spaceBetween: 10,
    },
    1024: {
      spaceBetween: 10,
    },
    5000: {
      spaceBetween: 30,
    },
  });
}

var cariesProcessSwiper = document.querySelector('.caries-process__slider');
if (cariesProcessSwiper) {
  var cariesProcess = new Swiper('.caries-process__slider', {
    navigation: {
      nextEl: '.caries-process__next',
      prevEl: '.caries-process__prev',
    },
  });
}

var cariesAboutSwiper = document.querySelector('.caries-about-top');
if (cariesAboutSwiper) {

  var cariesThumbs = new Swiper('.caries-about-thumbs', {
    spaceBetween: 16,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 4,
  });
  var cariesTop = new Swiper('.caries-about-top', {
    init: false,
    spaceBetween: 10,
    navigation: {
      nextEl: '.caries-about__next',
      prevEl: '.caries-about__prev',
    },
    thumbs: {
      swiper: cariesThumbs
    },
  });



  cariesTop.on('activeIndexChange', function () {
    var cariesCurrent = document.querySelector('.caries-about__current');
    var cariesAll = document.querySelector('.caries-about__all');
    cariesAll.textContent = cariesTop.slides.length;
    cariesCurrent.textContent = cariesTop.activeIndex+1;
  });

  cariesTop.on('init', function () {
    var cariesCurrent = document.querySelector('.caries-about__current');
    var cariesAll = document.querySelector('.caries-about__all');
    cariesAll.textContent = cariesTop.slides.length;
    cariesCurrent.textContent = cariesTop.activeIndex+1;
  });

  cariesTop.init();
}