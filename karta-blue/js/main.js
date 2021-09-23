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