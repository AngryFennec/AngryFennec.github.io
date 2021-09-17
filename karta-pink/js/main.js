// eslint-disable-next-line
var accordion = (function () {

  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');

  // default settings
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false
  };

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on('click', function () {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }

      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function ($this) {

      if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
          .find('> .js-accordion-item')
          .removeClass('active')
          .find('.js-accordion-body')
          .slideUp();
      }

      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  };
})();

$(document).ready(function () {
  accordion.init({speed: 300, oneOpen: true});
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
'use strict';

let buttonsSwiper = Swiper;
let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
let desktop = window.matchMedia('(min-width: 1024px)');
let flag = false;

function buttonsSwiperMode() {

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      buttonsSwiper = new Swiper('.categories__buttons-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });
    }
  }

    // Disable (for desktop)
    else if (desktop.matches) {
      buttonsSwiper.destroy(true, false);

    init = false;
    }
}



const partnersBtns = Array.from(document.querySelectorAll('.categories__button-item'));
partnersBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    item.classList.contains('categories__button-item--active') ? item.classList.remove('categories__button-item--active') : item.classList.add('categories__button-item--active');
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