/* eslint-disable no-undef */
import { popupOpen, popupClose } from './popup.js';
import {MIN_PHOTOS_COUNT} from '../const.js';

const projectPopup = document.querySelector('.project-popup');
const projectLinks = document.querySelectorAll('.card__link');
const photos = projectPopup.querySelectorAll('.project-popup__slider-image');
const scrollbar = projectPopup.querySelector('.scrollbar');

projectLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    popupOpen('project-popup');
    new Swiper('.project-popup__slider', {
      init: true,
      navigation: {
        nextEl: '.project-popup__button--next',
        prevEl: '.project-popup__button--prev'
      },
      scrollbar: {
        el: '.scrollbar',
        draggable: true,
        dragClass: 'scrollbar__slider'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          width: 290,
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesOffsetAfter: 120
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      },
    });
  });
});

photos.forEach((image) => image.addEventListener('click', () => {
  if (window.innerWidth >= 1024) {
    popupClose('project-popup');
    popupOpen('photo-popup');
    new Swiper('.photo-popup__wrapper', {
      init: true,
      navigation: {
        nextEl: '.photo-popup__button--next',
        prevEl: '.photo-popup__button--prev'
      },
      scrollbar: {
        el: '.scrollbar',
        draggable: true,
        dragClass: 'scrollbar__slider'
      },
      breakpoints: {
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
}));

if (photos.length <= MIN_PHOTOS_COUNT) {
  scrollbar.style.display = 'none';
}