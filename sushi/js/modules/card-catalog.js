'use strict';

(function () {
  var cards = document.querySelectorAll('.main-catalog__item');

  if (!cards.length) {
    return;
  }

  cards.forEach(function (card) {
    var cardForm = card.querySelector('.main-catalog__form');
    var cardCart = card.querySelector('.main-catalog__button');

    if (cardForm && cardCart) {
      cardCart.addEventListener('click', function () {
        cardCart.classList.add('hidden');
        cardForm.classList.add('active');
      });
    }
  });
})();