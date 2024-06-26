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