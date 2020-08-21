'use strict';

(function () {
  var cards = document.querySelectorAll('.card');

  if (!cards.length) {
    return;
  }

  cards.forEach(function (card) {
    var cardForm = card.querySelector('.card__form');
    var cardCart = card.querySelector('.card__cart');
    var cardLike = card.querySelector('.card__like');

    if (cardForm && cardCart) {
      cardCart.addEventListener('click', function () {
        cardCart.classList.add('hidden');
        cardForm.classList.add('active');
      });

      if (cardLike) {
        cardLike.addEventListener('click', function () {
          cardLike.classList.toggle('active');
        });
      }
    }
  });
})();