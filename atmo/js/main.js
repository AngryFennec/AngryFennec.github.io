'use strict';
(function () {

  var ios = /iPhone|iPad/i.test(navigator.userAgent);
  var noScrollClass = ios ? 'no-scroll-ios' : 'no-scroll';
  var currentPosition;

  var disableBodyScroll = function (ios) {
    if (ios) {
      currentPosition = window.scrollY;
    }
    document.body.classList.add(noScrollClass);
  };

  var enableBodyScroll = function (ios) {
    document.body.classList.remove(noScrollClass);
    if (ios) {
      window.scrollTo(0, currentPosition);
    }
  };

  var openModal = function (modalEl, modalBodyEl, closeBtnEl, openClass, cb1, cb2) {
    modalEl.classList.add(openClass);
    disableBodyScroll(ios, currentPosition);

    if (cb1) {
      cb1(modalEl);
    }

    var closeModal = function (modalEl, modalBodyEl, closeBtnEl, openClass, cb2) {
      modalEl.classList.remove(openClass);
      enableBodyScroll(currentPosition);
      closeBtnEl.removeEventListener('click', onCloseBtnClick);
      document.removeEventListener('keydown', documentKeypressHandler);
      document.removeEventListener('click', documentClickHandler);
      if (cb2) {
        cb2(modalEl);
      }
    };

    var onCloseBtnClick = function (evt) {
      closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
    };

    var documentKeypressHandler = function (evt) {
      if(evt.keyCode === 27)  {
        closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
      }
    };

    var documentClickHandler = function (evt) {
      if (!(modalBodyEl.contains(evt.target))) {
        closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
      }
    };

    closeBtnEl.addEventListener('click', onCloseBtnClick);
    document.addEventListener('keydown', documentKeypressHandler);
    setTimeout(function () {
      document.addEventListener('click', documentClickHandler);
    }, 100);
  };

  window.bindModal = function (trigger, modalBodySel, closeBtnSel, openClass, cb1, cb2) {
    var modal = document.getElementById(trigger.dataset.target);

    if (!modal) {
      return;
    }
    var modalBody = modal.querySelector(modalBodySel);
    var closeBtn = modal.querySelector(closeBtnSel);
    openModal(modal, modalBody, closeBtn, openClass, cb1, cb2);
  };

  var triggers = document.querySelectorAll('.js-modal-btn');
  if (!triggers.length) {
    return;
  }
  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.bindModal(evt.currentTarget, '.modal__content', '.modal__close-btn', 'open');
    });
  });

})();
'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var menu = document.querySelector('.header');

  if (menu) {
    var open = menu.querySelector('.header-top__burger');

    if (open) {
      open.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.add('open');
      });
    }

    var close = menu.querySelector('.header__overlay');

    if (close) {
      close.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.remove('open');
      });
    }

    window.addEventListener('resize', function () {
      windowWidth = document.documentElement.clientWidth;

      if (windowWidth >= LAPTOP_WIDTH) {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }
    });
  }
})();
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
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);
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
$('.js-testimonial').on('click', function(evt){
    evt.preventDefault();
    $('.popup').fadeIn(300);
    $('.page-body').addClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
    if (evt.keyCode === 27) {
      $('.popup').fadeOut(300);
      $('.page-body').removeClass('page-body--overflow');
    }
});
  
$('.popup').on('click', function (evt) {
    if ($(evt.target).hasClass('popup')) {
        $('.popup').fadeOut(300);
        $('.page-body').removeClass('page-body--overflow');
    }
});
(function () {
  function Ascroll() {
    if (document.documentElement.clientWidth > 768) {
      var P = document.querySelector('.header').getBoundingClientRect().height;
      containers.forEach((item, j) => {
        if (containers[j].getBoundingClientRect().top - P <= 0 && containers[j].getBoundingClientRect().bottom - P - titles[j].getBoundingClientRect().height  >= 0) {
          titles[j].style.position = 'fixed';
          titles[j].style.top = P + 'px';
        } else {
          if (containers[j].getBoundingClientRect().bottom - P  - titles[j].getBoundingClientRect().height < 0) {
            titles[j].style.position = 'absolute';
            titles[j].style.top = `calc(100% - ${titles[j].getBoundingClientRect().height}px)`;
          } else {
            titles[j].style.position = 'absolute';
            titles[j].style.top = '0';
          }
        }
      });
    } else {
      titles.forEach((item) => {
        item.style.position = 'relative';
        item.style.top = '0';
      });

    }
  }

  var titles = Array.from(document.querySelectorAll('.js-scrolled-title'));
  var containers = Array.from(document.querySelectorAll('.js-scrolled-container'));

  if (titles && titles.length > 0 && containers && containers.length > 0) {
    window.addEventListener('resize', Ascroll);
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
  }
})
();