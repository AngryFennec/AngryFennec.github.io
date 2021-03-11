'use strict';
(function () {

  var ios = /iPhone|iPad/i.test(navigator.userAgent);
  var noScrollClass = ios ? 'no-scroll-ios' : 'no-scroll';
  var currentPosition;

  var disableBodyScroll = function (ios) {
    if (ios) {
      currentPosition = window.scrollY;
    }
    document.body.classList.add(noScrollClass);
  };

  var enableBodyScroll = function (ios) {
    document.body.classList.remove(noScrollClass);
    if (ios) {
      window.scrollTo(0, currentPosition);
    }
  };

  var openModal = function (modalEl, modalBodyEl, closeBtnEl, openClass, cb1, cb2) {
    modalEl.classList.add(openClass);
    disableBodyScroll(ios, currentPosition);

    if (cb1) {
      cb1(modalEl);
    }

    var closeModal = function (modalEl, modalBodyEl, closeBtnEl, openClass, cb2) {
      modalEl.classList.remove(openClass);
      enableBodyScroll(currentPosition);
      closeBtnEl.removeEventListener('click', onCloseBtnClick);
      document.removeEventListener('keydown', documentKeypressHandler);
      document.removeEventListener('click', documentClickHandler);
      if (cb2) {
        cb2(modalEl);
      }
    };

    var onCloseBtnClick = function (evt) {
      closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
    };

    var documentKeypressHandler = function (evt) {
      if(evt.keyCode === 27)  {
        closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
      }
    };

    var documentClickHandler = function (evt) {
      if (!(modalBodyEl.contains(evt.target))) {
        closeModal(modalEl, modalBodyEl, closeBtnEl, openClass, cb2);
      }
    };

    closeBtnEl.addEventListener('click', onCloseBtnClick);
    document.addEventListener('keydown', documentKeypressHandler);
    setTimeout(function () {
      document.addEventListener('click', documentClickHandler);
    }, 100);
  };

  window.bindModal = function (trigger, modalBodySel, closeBtnSel, openClass, cb1, cb2) {
    var modal = document.getElementById(trigger.dataset.target);

    if (!modal) {
      return;
    }
    var modalBody = modal.querySelector(modalBodySel);
    var closeBtn = modal.querySelector(closeBtnSel);
    openModal(modal, modalBody, closeBtn, openClass, cb1, cb2);
  };

  var triggers = document.querySelectorAll('.js-modal-btn');
  if (!triggers.length) {
    return;
  }
  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.bindModal(evt.currentTarget, '.modal__content', '.modal__close-btn', 'open');
    });
  });

})();