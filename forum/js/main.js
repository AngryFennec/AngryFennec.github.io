/**
 * подключение js-модулей
 * //= modules/file.js
 */

'use strict';

(function() {
// var pricesSwiper;
    let  speakersSwiper = new Swiper('.speakers__container', {
        initialSlide: 1,
        slidesPerView: '3',
        spaceBetween: -150,
        centeredSlides: true,
        speed: 400,
        navigation: {
        nextEl: '.speakers__next',
        prevEl: '.speakers__prev',
        },
        pagination: {
            el: '.speakers__bullets'
          },
        paginationClickable: true,

    });


})();
'use strict';
(function() {

  var tabs = Array.from(document.querySelectorAll('.program__sections-btn'));
  var tabsItems = Array.from(document.querySelectorAll('.program__sections-tab'));
  var tabsContents = Array.from(document.querySelectorAll('.program__sections-item'));

  var hideContents = function() {
    tabsContents.forEach(function(item) {
      item.classList.remove('program__sections-item--active')
    });
  }

  var removeActives = function() {
    tabsItems.forEach(function(item) {
      item.classList.remove('program__sections-tab--active')
    });
  }


  if (tabs && tabsContents && tabsItems) {
    tabs.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        hideContents();
        removeActives();
        tabsContents[i].classList.add('program__sections-item--active');
        tabsItems[i].classList.add('program__sections-tab--active');
      })
    });
  }
})();
'use strict';
(function() {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
})();