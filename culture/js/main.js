// eslint-disable-next-line
'use strict';
var partnersSwiper = new Swiper('.partners__swiper', {
  spaceBetween: 26,
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 26,
    }

  }


});

document.querySelector('.partners__button-prev').addEventListener('click', () => {
  partnersSwiper.slidePrev();
});

document.querySelector('.partners__button-next').addEventListener('click', () => {
  partnersSwiper.slideNext();
});
// eslint-disable-next-line
'use strict';
let continueSwiper = Swiper;
let isInit = false;

const initSwiper = () => {
  if (!isInit) {
    isInit = true;
    continueSwiper = new Swiper('.continue__swiper', {
      spaceBetween: 5,
      slidesPerView: 'auto',
    });
  }
}

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) {
    initSwiper();
  } else
  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (continueSwiper) {
      continueSwiper.destroy();
    }
    isInit = false;
  }
});

window.addEventListener('load', () => {
  if (window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) {
    initSwiper();
  } else
  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (continueSwiper) {
      continueSwiper.destroy();
    }
    isInit = false;
  }
});
// eslint-disable-next-line
$('.js-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
  new GreenAudioPlayer('.popup__player');
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
// eslint-disable-next-line
const promoSwiper = new Swiper('.promo__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: ".promo__next",
    prevEl: ".promo__prev",
  },
});

const card = document.querySelector('.promo__card');
let topCard = card.getBoundingClientRect().top;
let leftCard = card.getBoundingClientRect().left;
window.addEventListener('scroll', function() {
  if (window.pageYOffset > topCard) {
    card.style.position = 'fixed';
    card.style.left = leftCard + 'px';
    card.style.top = 0;
    card.style.margin = 0;
  } else {
    card.style = "";
  }
});

window.addEventListener('resize', function(){
  topCard = card.getBoundingClientRect().top;
  leftCard = card.getBoundingClientRect().left;
})
// eslint-disable-next-line
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__close');


burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.add('header__menu_active');
  close.classList.add('header__close_active');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.remove('header__menu_active');
  close.classList.remove('header__close_active');
});