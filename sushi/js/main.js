console.log('test');
'use strict';

(function () {
  var mainSliders = document.querySelectorAll('.js-main-slider');
  if (!mainSliders.length) {
    return;
  }

  var swiperMainSlider = function (slider) {
    return new window.Swiper(slider, {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 60,
      loop: true,
      navigation: {
        nextEl: '.main-slider__btn--next',
        prevEl: '.main-slider__btn--prev',
      },
      breakpoints: {
        1024: {
          spaceBetween: 30,
        },
      }
    });
  };

  mainSliders.forEach(function (slider) {
    swiperMainSlider(slider);
  });
})();
'use strict';

(function () {
  var containers = document.querySelectorAll('.js-scroll-container');
  var scroll = null;

  if (!containers.length) {
    return;
  }

  containers.forEach(function (item) {
    scroll = new window.SimpleBar(item, {
      // autoHide: false
    });
    return scroll;
  });
})();
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
'use strict';

(function () {
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  var submenu = header.querySelector('.js-submenu');
  var openBtn = header.querySelector('.js-open-submenu');
  var closeBtn = header.querySelector('.js-close-submenu');

  if (submenu && openBtn) {
    openBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      submenu.classList.add('is-open');
    });
  }

  if (submenu && closeBtn) {
    closeBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      submenu.classList.remove('is-open');
    })
  }
})();
'use strict';

(function () {
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  var nav = header.querySelector('nav');

  var openMobileBtn = header.querySelector('.js-mobile-menu-btn');
  var closeMobileBtn = header.querySelector('.js-mobile-close-btn');

  if (openMobileBtn && nav) {
    openMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      header.classList.add('is-open');
      window.bodyScrollLock.disableBodyScroll(nav);
    });
  }

  if (closeMobileBtn && nav) {
    closeMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      header.classList.remove('is-open');
      window.bodyScrollLock.enableBodyScroll(nav);
    });
  }
})();
$(function(){
    const minPrice = 2000; //минимальная сумма заказа

    const input = $('input[name="phone"]')[0];
    let im = new Inputmask("8 (999) 999-99-99");
    if(input)im.mask(input);

    //табы
    $('.order__tabs-adress').on('click', function(evt){
        evt.preventDefault();
        $('.order__tabs a').removeClass('order__tabs-active');
        $(this).addClass('order__tabs-active');
        $('.order__part--no-delivery').hide();
        $('.order__part--adress').show();
    });

    $('.order__tabs-no-delivery').on('click', function(evt){
        evt.preventDefault();
        $('.order__tabs a').removeClass('order__tabs-active');
        $(this).addClass('order__tabs-active');
        $('.order__part--adress').hide();
        $('.order__part--no-delivery').show();
    })

    $('#time-hour').select2({
        minimumResultsForSearch: Infinity
    });
    $('#time-minutes').select2({
        minimumResultsForSearch: Infinity
    });

    $('.order form').on('submit', function(evt){
        let total = 1500;//вычленить сумму заказа

        //валидация
        if ($('input["name"]').val().length > 1 && total >= minPrice && $('input["phone"]').val().length > 10) {
            $.ajax({
                url: '',
                method: 'post',
                dataType: 'json', 
                data: new FormData($('.order form')[0]),
                success: function(data){  
                    //показ окошка попапа
                    $('body').addClass('.page-body--overflow');
                    $('.popup').show();        
                }
            });
        } else {
            evt.preventDefault();
        }
    });

    //показ нужной кнопки
    $('.order form').on('change', function(evt){
        $('.order__total button').hide();
        if ($("input[name='payment']:checked").val() === 'apple') {
            $('.order__total .button--apple').show();
        } else if ($("input[name='payment']:checked").val() === 'google') {
            $('.order__total .button--google').show();
        } else {
            $('.order__total .button--normal').show();
        }
    });

    //смена картинок в инпутах
    $('input[name="name"]').on('input', function(){
        if($(this).val().length > 1) {
            $(this).attr('class', 'order__input-true');
        } else {
            $(this).attr('class', 'order__input-false');
        }
    });

})
$(function(){
    $(document).on('keydown', function (evt) {
        if (evt.keyCode === 27) {
          $('.popup').fadeOut(300);
          $('body').removeClass('page-body--overflow');
        }
      });
      
      $('.popup').on('click', function (evt) {
        if ($(evt.target).hasClass('popup')) {
          $('.popup').fadeOut(300);
          $('body').removeClass('page-body--overflow');
        }
    });
})