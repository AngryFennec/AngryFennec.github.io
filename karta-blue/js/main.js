// eslint-disable-next-line
var galleryThumbs = new Swiper('.article__gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var galleryText = new Swiper('.article__gallery-text', {
  slidesPerView: 1,
  noSwiping: true,
  allowTouchMove: false,
});

var galleryTop = new Swiper('.article__gallery-top', {
  freeMode: true,
  breakpoints: {
    // when window width is >= 1024
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs,
      }
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

galleryTop.on('slideChange', function () {
  galleryText.slideTo(galleryTop.activeIndex);
});
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
// eslint-disable-next-line
var popupSpans = Array.from(document.querySelectorAll('.article__special'));
var popups = Array.from(document.querySelectorAll('.article__popup'));
var popupBtns = Array.from(document.querySelectorAll('.article__popup-close'));
popupBtns.forEach((item) => {
  item.addEventListener('click', function(e) {
    const popup = e.target.closest('.article__popup');
    popup.classList.remove('article__popup--open');
    const dataPopup = popup.dataset.popup;
    const searchedSpan = popupSpans.filter(item => {
      return item.dataset.popup === dataPopup;
    })[0];
    searchedSpan.classList.remove('article__special--active');
  });
});

popupSpans.forEach((item) => {
  item.addEventListener('click', function() {
    const dataPopup = item.dataset.popup;
    const searchedPopup = popups.filter(popup => {
      return popup.dataset.popup === dataPopup;
    })[0];
    if (item.classList.contains('article__special--active')) {
      item.classList.remove('article__special--active');
      searchedPopup.classList.remove('article__popup--open');
    } else  {
      item.classList.add('article__special--active');
      searchedPopup.classList.add('article__popup--open');
    }

  });
});
// eslint-disable-next-line
'use strict';

let buttonsSwiper = Swiper;
let cardsSwiper = Swiper;

let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
let desktop = window.matchMedia('(min-width: 1024px)');
let flag = false;

function buttonsSwiperMode() {

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      buttonsSwiper = new Swiper('.find-tags__buttons-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });
      cardsSwiper = new Swiper('.find-cards__cards-list', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true,
      });
    }
  }

  // Disable (for desktop)
  else if (desktop.matches) {
    buttonsSwiper.destroy(true, false);
    cardsSwiper.destroy(true, false);

    init = false;
  }
}



const partnersBtns = Array.from(document.querySelectorAll('.find-tags__button-item'));
partnersBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    item.classList.contains('find-tags__button-item--active') ? item.classList.remove('find-tags__button-item--active') : item.classList.add('find-tags__button-item--active');
  })
});




/* On Load
**************************************************************/
window.addEventListener('load', function() {
  buttonsSwiperMode();
  flag = mobile.matches;
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  buttonsSwiperMode();
});
// eslint-disable-next-line
var swiper = new Swiper('.photos__list', {
  spaceBetween: 0,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});
// eslint-disable-next-line
$('.sliding-link').click(function (e) {
  e.preventDefault();
  var aid = $(this).attr('href');
  $('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
});
// eslint-disable-next-line
const itemsSwiper = new Swiper('.items__container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const wordsArray = ['слово-1', 'слово-2', 'слово-3', 'слово-4'];
const wordElement = document.querySelector('.promo__title span');

let index = 0;

setInterval(function() {
  if (index >= wordsArray.length) {
    index = 0;
  }
  wordElement.textContent = wordsArray[index];
  index++;
}, 2000);