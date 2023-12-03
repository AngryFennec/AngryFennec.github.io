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

$('.popup button').on('click', function () {
  $('.popup').fadeOut(300);
  $('.page-body').removeClass('page-body--overflow');
});


$('.js-form-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.form-popup').fadeIn(300);
  $('.page-body').addClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.form-popup').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.form-popup').on('click', function (evt) {
  if ($(evt.target).hasClass('form-popup')) {
    $('.form-popup').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.form-popup__close').on('click', function () {
  $('.form-popup').fadeOut(300);
  $('.page-body').removeClass('page-body--overflow');
});

const date = new Datepicker('#date');
// eslint-disable-next-line
$('.transport__card--green').on('click', function (evt) {
  evt.preventDefault();
  $('.transport-popup--green').fadeIn(300);
  $('.page-body').addClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.transport-popup--green').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.transport-popup--green').on('click', function (evt) {
  if ($(evt.target).hasClass('.transport-popup--green')) {
    $('.transport-popup--green').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.transport__card--pink').on('click', function (evt) {
  evt.preventDefault();
  $('.transport-popup--pink').fadeIn(300);
  $('.page-body').addClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.transport-popup--pink').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.transport-popup--pink').on('click', function (evt) {
  if ($(evt.target).hasClass('.transport-popup--pink')) {
    $('.transport-popup--pink').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

$('.transport-popup button').on('click', function () {
  $('.transport-popup').fadeOut(300);
  $('.page-body').removeClass('page-body--overflow');
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
// eslint-disable-next-line
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__close');


burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.add('header__menu_active');
  burger.style = 'display: none';
  close.style = 'display: block';
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.remove('header__menu_active');
  burger.style = 'display: block';
  close.style = 'display: none';
  console.log(close);
});

const datepicker = new Datepicker('#datepicker');

// const select = document.querySelector('#select');
// const arrow = select.querySelector('span');
//
// select.addEventListener('click', () => {
//   arrow.style.transform = 'rotate(180deg)';
//   arrow.style.translate = 'translateY(-50%)';
// });
// select.addEventListener('change', () => {console.log('bbb')});

function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      $(".active-opt").removeClass("active-opt");
      opt.addClass('active-opt');
      obj.val = opt.text();
      obj.index = opt.index();
      // obj.placeholder.text(obj.val);
      $('#select-input').val(opt.text());
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() {

  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown').removeClass('active');
  });

});