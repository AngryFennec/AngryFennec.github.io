
(function () {
  var a = document.querySelector('.js-scrolled-title'), b = null, P = 0;
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);

  function Ascroll() {
    if (b == null) {
      var Sa = getComputedStyle(a, ''), s = '';
      for (var i = 0; i < Sa.length; i++) {
        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
          s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
        }
      }
      b = document.createElement('div');
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild);
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) {
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';
      a.style.padding = '0';
      a.style.border = '0';
    }
    var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.js-scrolled-container').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
    if ((Ra.top - P) <= 0) {
      if ((Ra.top - P) <= R) {
        b.className = 'stop';
        b.style.top = -R + 'px';
      } else {
        b.className = 'sticky';
        b.style.top = P + 'px';
      }
    } else {
      b.className = '';
      b.style.top = '';
    }
    window.addEventListener('resize', function () {
      a.children[0].style.width = getComputedStyle(a, '').width;
    }, false);
  }
})();
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
'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var menu = document.querySelector('.header');

  if (menu) {
    var open = menu.querySelector('.header-top__burger');

    if (open) {
      open.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.add('open');
      });
    }

    var close = menu.querySelector('.header__overlay');

    if (close) {
      close.addEventListener('click', function (evt) {
        evt.preventDefault();
        menu.classList.remove('open');
      });
    }

    window.addEventListener('resize', function () {
      windowWidth = document.documentElement.clientWidth;

      if (windowWidth >= LAPTOP_WIDTH) {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }
    });
  }
})();
console.log('123')
const aboutCertSlider = new Swiper('.about-cert__list', {
    slidesPerView: 6,
    // navigation: {
    // // nextEl: '.art__next',
    // // prevEl: '.art__prev',
    // },
});
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);