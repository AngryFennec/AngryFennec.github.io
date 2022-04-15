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