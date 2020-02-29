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
  var tabsContents = Array.from(document.querySelectorAll('.program__sections-item'));

  var hideContents = function() {
    tabsContents.forEach(function(item) {
      item.classList.remove('program__sections-item--active')
    });
  }

  var removeActives = function() {
    tabs.forEach(function(item) {
      item.classList.remove('program__sections-btn--active')
    });
  }


  if (tabs && tabsContents) {
    tabs.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        hideContents();
        tabsContents[i].classList.add('program__sections-item--active');
        item.classList.add('program__sections-btn--active');
      })
    });
  }
})();