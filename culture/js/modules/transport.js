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