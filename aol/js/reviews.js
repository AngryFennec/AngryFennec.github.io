/* открыть модалку отзыва */

var reviewBtn = document.querySelector('.js-leave-review');
var popupWrapper = document.querySelector('.popup-wrapper');
var popupCloseBtn = document.querySelector('.popup__close');
var popupRejectBtn = document.querySelector('.popup__close');

function closeReviewPopup() {
  popupWrapper.classList.remove('popup-wrapper--opened');
  document.body.classList.remove('fixed-body');
  document.removeEventListener('keydown', escPress);
}

function escPress(e) {
  if (e.key === 'Escape') {
    closeReviewPopup();
  }
}

if (reviewBtn && popupWrapper) {

  popupWrapper.addEventListener('click', function (e) {
    if (!e.target.closest('.popup')) {
      closeReviewPopup();
    }
  });

  reviewBtn.addEventListener('click', function () {
    popupWrapper.classList.add('popup-wrapper--opened');
    document.body.classList.add('fixed-body');
    popupCloseBtn.addEventListener('click', closeReviewPopup);
    popupRejectBtn.addEventListener('click', closeReviewPopup);
    document.addEventListener('keydown', escPress);
  });
}