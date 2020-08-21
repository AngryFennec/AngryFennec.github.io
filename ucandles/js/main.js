console.log('hi');
'use strict';
(function () {
  var aromaSelector = document.querySelector('.aroma__swiper-container');
  if (aromaSelector) {
    var swiper = new Swiper(aromaSelector, {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      breakpoints: {
        320: {
          spaceBetween: 23
        },
        768: {
          spaceBetween: 24,
        },
        1440: {
          spaceBetween: 29,
        }
      },
    });

    var images = aromaSelector.querySelectorAll('.aroma__slide-img');

    if (!images) {
      return;
    }
    swiper.on('touchStart', function () {
      images.forEach(function (img) {
        img.style.transform =
        'scale(1.1)';
      });
    });

    swiper.on('touchEnd', function () {
      images.forEach(function (img) {
        img.style.transform =
        'scale(1)';
      });
    });
  }
})();
'use strict';

(function () {
  var hitSliders = document.querySelectorAll('.js-hits-swiper');
  if (!hitSliders.length) {
    return;
  }

  var hitSlider = function (slider) {
    return new window. Swiper(slider, {
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          centeredSlides: false,
          spaceBetween: 24
        },
        767: {
          spaceBetween: 45
        },
      }
    });
  };

  hitSliders.forEach(function (slider) {
    hitSlider(slider);
  });
})();
'use strict';
(function () {
  var cursor = document.querySelector('.cursor');
  if (!cursor) {
    return;
  }

  var setCursorPosition = function (evt) {
    var xPosition = evt.clientX - cursor.clientWidth / 2 + 'px';
    var yPosition = evt.clientY - cursor.clientHeight / 2 + 'px';
    cursor.style.transform =
      'translate(' + xPosition + ',' + yPosition + ')';
    return {
      x: xPosition,
      y: yPosition
    };
  };

  document.addEventListener('mousemove', function (evt) {
    evt.preventDefault();
    setCursorPosition(evt);
  });

  var slides = document.querySelectorAll('.js-slider');

  Array.prototype.forEach.call(slides, function (slide) {
    slide.addEventListener('mouseenter', function (evt) {
      setCursorPosition(evt);
      cursor.classList.add('active');
    });

    slide.addEventListener('mouseleave', function (evt) {
      setCursorPosition(evt);
      if (cursor.classList.contains('active')) {
        cursor.classList.remove('active');
      }
    });
  });

})();
'use strict';
(function ($) {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;

  var categoryAddHover = function () {
    if (windowWidth >= LAPTOP_WIDTH) {
      $('.category__link').mousemove(function (evt) {
        var hoverimg = $(this).attr('data-src');
        $('.category__img').show();
        $('.category__img').css('top', evt.clientY).css('left', evt.clientX).css('background-image', 'url("../' + hoverimg + '")');
      }).mouseout(function () {
        $('.category__img').hide();
      });
    }
  };

  categoryAddHover();

})(jQuery);
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var main = document.querySelector('.js-header-scroll');
  if (!main) {
    return;
  }
  var left = main.querySelector('.js-left');
  var right = main.querySelector('.js-right');
  var img = main.querySelector('.main-screen__img-wrapper');

  if (windowWidth >= LAPTOP_WIDTH) {
    // инициализация
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    var mainTl = new TimelineMax();

    mainTl
    .to(left, 1, {xPercent: -100, ease: Power4.easeInOut})
    .to(right, 1, {xPercent: 100, ease: Power4.easeInOut}, '0')
    .to(img, 1, {scale: 1, ease: Power4.easeInOut}, '0');

    new ScrollMagic.Scene({
      triggerElement: main,
      duration: '200%'
    })
      .setTween(mainTl)
      .setPin(main)
      .addTo(controller);
  }

})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var wh = window.innerHeight;
  var footer = document.querySelector('.js-footer');
  if (!footer) {
    return;
  }
  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });


    new ScrollMagic.Scene({
      offset: wh * 4
    })
    .setClassToggle(footer, 'footer--fixed')
    .addTo(controller);
  }

})();
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
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var blocks = document.querySelectorAll('.js-left-block');
  if (!blocks.length) {
    return;
  }

  blocks.forEach(function (block) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var controller = new ScrollMagic.Controller({
      });

      var tl = new TimelineMax();

      tl
      .from(block, 0.2, {xPercent: -10});

      new ScrollMagic.Scene({
        triggerElement: block,
        triggerHook: 'onEnter',
        offset: 50
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var parallaxHits = document.querySelector('.js-parallax-hits');
  var parallaxBeauty = document.querySelector('.js-parallax-beuty');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    });

    if (parallaxHits) {
      new ScrollMagic.Scene({
        triggerElement: parallaxHits
      })
        .setTween('.js-parallax-hits > div', {y: '-80%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxBeauty) {
      new ScrollMagic.Scene({
        triggerElement: parallaxBeauty
      })
      .setTween('.js-parallax-beuty > div', {y: '60%', ease: Linear.easeNone})
      // .addIndicators()
      .addTo(controller);
    }
  }

})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var imgContainers = document.querySelectorAll('.js-img-container');
  if (!imgContainers.length) {
    return;
  }

  imgContainers.forEach(function (imgBlock) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var img = imgBlock.querySelector('.js-img-wrap');
      var controller = new ScrollMagic.Controller({
      });

      var tl = new TimelineMax();

      tl
      .to(img, 0.3, {scale: 1, ease: Power4.easeInOut});

      new ScrollMagic.Scene({
        triggerElement: imgBlock,
        triggerHook: 'onCenter',
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var textContainers = document.querySelectorAll('.js-text-container');
  if (!textContainers.length) {
    return;
  }

  textContainers.forEach(function (textBlock) {
    if (windowWidth >= LAPTOP_WIDTH) {
      var text = textBlock.querySelector('.js-text');
      var controller = new ScrollMagic.Controller({
      });

      var tl = gsap.timeline();

      var mySplitText = new SplitText(text, {type: 'chars,words,lines'});
      var chars = mySplitText.chars;

      gsap.set(text, {perspective: 400});

      tl.from(chars, {duration: 0.5, opacity: 0, y: 40, ease: 'back', stagger: 0.01}, '+=0');

      new ScrollMagic.Scene({
        triggerElement: textBlock,
        triggerHook: 'onCenter',
      })
        .setTween(tl)
        .addTo(controller);
    }
  });
})();
'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var filter = document.querySelector('.catalog-filter');
  if (!filter) {
    return;
  }

  if (windowWidth > LAPTOP_WIDTH) {
    var closeFilter = function () {
      var activeContent = filter.querySelector('[data-content="catalog-content"].active');
      var activeTab = filter.querySelector('[data-toggle="catalog-tabs"].active-tab');
      if (activeContent && activeTab) {
        activeContent.classList.remove('active');
        activeTab.classList.remove('active-tab');
      }
    };

    var documentKeypressHandler = function (evt) {
      if (evt.keyCode === 27) {
        closeFilter();
      }
    };

    document.addEventListener('keydown', documentKeypressHandler);

    var tabs = filter.querySelectorAll('[data-toggle="catalog-tabs"]');

    if (!tabs.length) {
      return;
    }

    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = document.querySelector('[data-content="catalog-content"]' + id);
        var activeContent = filter.querySelector('[data-content="catalog-content"].active');
        var activeTab = filter.querySelector('[data-toggle="catalog-tabs"].active-tab');

        tab.classList.add('active-tab');

        if (activeTab) {
          activeTab.classList.remove('active-tab');
        } else {
          tab.classList.add('active-tab');
        }

        content.classList.toggle('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('active');
        }

      });
    });

    var dropdowns = filter.querySelectorAll('.catalog-filter__dropdown-container');
    var forms = filter.querySelectorAll('.catalog-filter__form');

    if (!dropdowns.length && !forms.length) {
      return;
    }

    document.addEventListener('click', function (evt) {
      if (evt.target.tagName !== 'INPUT' && evt.target.tagName !== 'LABEL' && !evt.target.classList.contains('catalog-filter__dropdown-container') && !evt.target.classList.contains('catalog-filter__form')) {
        closeFilter();
      }
    });

    var sortName = filter.querySelector('[data-target="#sort-target"]');

    var sortForm = filter.querySelector('.js-sort-form');
    if (!sortForm) {
      return;
    }
    var inputs = sortForm.querySelectorAll('input[type="radio"]');

    sortForm.addEventListener('change', function () {
      if (!inputs.length) {
        return;
      }
      inputs.forEach(function (input) {
        if (input.checked) {
          sortName.textContent = input.nextElementSibling.textContent;
        }
      });
    });
  }

  if (windowWidth <= LAPTOP_WIDTH) {
    var filterBtn = filter.querySelector('.js-filter-open');

    if (filterBtn) {
      filterBtn.addEventListener('click', function () {
        filter.classList.toggle('open');

        var sortContent = filter.querySelector('.catalog-filter__dropdown-container--sort-mobile');

        var sortTab = filter.querySelector('[data-target="#sort-target-mobile"]');

        if (!sortContent && !sortTab) {
          return;
        }

        if (sortContent.classList.contains('active')) {
          sortContent.classList.remove('active');
        }

        if (sortTab.classList.contains('active-tab')) {
          sortTab.classList.remove('active-tab');
        }
      });
    }

    var filterCloseBtn = filter.querySelector('.js-filter-close');

    if (filterCloseBtn) {
      filterCloseBtn.addEventListener('click', function () {
        if (filter.classList.contains('open')) {
          filter.classList.remove('open');
        }
      });
    }

    var mobileTabs = filter.querySelectorAll('[data-toggle="catalog-tabs-mobile"]');

    if (!mobileTabs.length) {
      return;
    }

    Array.prototype.forEach.call(mobileTabs, function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = document.querySelector('[data-content="catalog-content"]' + id);
        var activeContent = filter.querySelector('[data-content="catalog-content"].active');
        var activeTab = filter.querySelector('[data-toggle="catalog-tabs-mobile"].active-tab');

        tab.classList.add('active-tab');

        if (activeTab) {
          activeTab.classList.remove('active-tab');
        } else {
          tab.classList.add('active-tab');
        }

        content.classList.toggle('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('active');
        }

      });
    });

    var sortNameMobile = filter.querySelector('[data-target="#sort-target-mobile"]');

    var sortFormMobile = filter.querySelector('.js-sort-form-mobile');
    if (!sortFormMobile) {
      return;
    }
    var mobileInputs = sortFormMobile.querySelectorAll('input[type="radio"]');

    sortFormMobile.addEventListener('change', function () {
      if (!mobileInputs.length) {
        return;
      }
      mobileInputs.forEach(function (input) {
        if (input.checked) {
          sortNameMobile.textContent = input.nextElementSibling.textContent;
        }
      });
    });

  }
})();
'use strict';

(function () {
  var blocks = document.querySelectorAll('.js-opacity');

  if (!blocks.length) {
    return;
  }
  AOS.init({
    offset: 100,
    delay: 500,
    duration: 500,
    easing: 'ease',
    once: true,
    mirror: true,
  });

})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var containers = document.querySelectorAll('.js-parallax-item');
  var rightContainers = document.querySelectorAll('.js-parallax-item-right');
  var parallaxTexts = document.querySelectorAll('.js-lookbook-text');
  var parallaxImgs = document.querySelectorAll('.js-lookbook-img');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        // duration: '400%'
      }
    });

    if (containers.length) {
      containers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '400%'
        })
          .setTween(item, {y: '-80%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (rightContainers.length) {
      rightContainers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '400%'
        })
          .setTween(item, {y: '80%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxTexts.length) {
      parallaxTexts.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxImgs.length) {
      parallaxImgs.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '300%'
        })
          .setTween(item, {y: '-40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }
  }

})();
'use strict';
(function () {
  var headerBlock = document.querySelector('.header');
  if (!headerBlock) {
    return;
  }

  if (window.matchMedia('(min-width: 1025px)').matches) {
    var links = headerBlock.querySelectorAll('[data-toggle="site-nav"]');
    var contents = headerBlock.querySelectorAll('[data-content="header-dropdown"]');
    if (!links.length && !contents.length) {
      return;
    }

    links.forEach(function (link) {
      link.addEventListener('mouseenter', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = headerBlock.querySelector('[data-content="header-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="header-dropdown"].is-show');

        content.classList.add('is-show');
        link.classList.add('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });

      link.addEventListener('mouseleave', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = headerBlock.querySelector('[data-content="header-dropdown"]' + id);
        content.classList.remove('is-show');
        link.classList.remove('active');
      });
    });

    contents.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        var id = el.getAttribute('id');
        var link = headerBlock.querySelector('[data-target="#' + id + '"');
        el.classList.add('is-show');
        link.classList.add('active');
      });
      el.addEventListener('mouseleave', function () {
        var id = el.getAttribute('id');
        var link = headerBlock.querySelector('[data-target="#' + id + '"');
        el.classList.remove('is-show');
        link.classList.remove('active');
      });
    });
  }

  if (window.matchMedia('(max-width: 1024px)').matches) {
    var mobileLinks = headerBlock.querySelectorAll('[data-toggle-mobile="mobile-nav"]');
    var mobileContents = headerBlock.querySelectorAll('[data-content="mobile-dropdown"]');
    var mobileBackLinks = headerBlock.querySelectorAll('[data-toggle-back="mobile-back"]');
    var mobileWrap = headerBlock.querySelector('.header__mobile-menu');
    if (!mobileLinks.length && !mobileContents.length && !mobileBackLinks && !mobileWrap) {
      return;
    }

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target-mobile');
        var content = headerBlock.querySelector('[data-content="mobile-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="mobile-dropdown"].is-show');

        content.classList.add('is-show');
        mobileWrap.classList.add('active');

        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });
    });

    mobileBackLinks.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target-mobile');
        var content = headerBlock.querySelector('[data-content="mobile-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="mobile-dropdown"].is-show');

        content.classList.add('is-show');

        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });
    });

    var linkCatalog = headerBlock.querySelector('.js-back-menu');

    if (linkCatalog) {
      linkCatalog.addEventListener('click', function (evt) {
        evt.preventDefault();
        mobileWrap.classList.remove('active');
      });
    }

  }

})();
'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var header = document.querySelector('.header');
  if (!header) {
    return;
  }

  if (windowWidth > LAPTOP_WIDTH) {
    var tabs = header.querySelectorAll('[data-toggle="catalog-header"]');

    if (!tabs.length) {
      return;
    }

    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('mouseenter', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var activeBtn = header.querySelector('[data-toggle="catalog-header"].active');
        var id = thisTarget.getAttribute('data-target');
        var content = header.querySelector('[data-content="header-content"]' + id);
        var activeContent = header.querySelector('[data-content="header-content"].active');

        activeBtn.classList.remove('active');
        tab.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');

      });
    });
  }
})();
'use strict';

(function () {
  var header = document.querySelector('.header');

  if (!header) {
    return;
  }

  var openMenuBtn = header.querySelector('.js-open-menu-btn');
  if (!openMenuBtn) {
    return;
  }

  var openMenu = function () {
    header.classList.add('open');
    window.bodyScrollLock.disableBodyScroll(header);
  };

  var closeMenu = function () {
    header.classList.remove('open');
    window.bodyScrollLock.enableBodyScroll(header);
  };

  var onOpenMenuBtn = function () {
    if (header.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  openMenuBtn.addEventListener('click', onOpenMenuBtn);
  // window.addEventListener('resize', closeMenu);
})();
'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var min = document.querySelectorAll('.js-parallax-min');
  var max = document.querySelectorAll('.js-parallax-max');
  var parallaxImgs = document.querySelectorAll('.js-parallax-min-img');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        // duration: '400%'
      }
    });

    if (min.length) {
      min.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '100%'
        })
          .setTween(item, {y: '-20%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (max.length) {
      max.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '-20%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (parallaxImgs.length) {
      parallaxImgs.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '-100%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }
  }

})();
'use strict';

(function () {
  const cartInfo = document.querySelector('.cart__more');

  if(!cartInfo){
    return;
  }

  const popup = document.querySelector('.popup');
  const popupContainer = document.querySelector('.popup__container');
  const popupClose = document.querySelector('.popup__close');
  const popupCloseArrow = document.querySelector('.popup__close-arrow');

  const currentCursor = document.querySelector('.cursor');

  const customCursor =  `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="white"/>
          <path d="M22.999 38.1666L37.8483 23.3174" stroke="#975030"/>
          <path d="M22.999 23L37.8483 37.8493" stroke="#975030"/>
        </svg>
    `;

  const standartCursor = `
        <svg class="cursor__arrow cursor__arrow--left" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
          <path d="M6 1L1 7L6 13" stroke="#975030" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="cursor__arrow cursor__arrow--right" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
          <path d="M1 13L6 7L0.999999 1" stroke="#975030" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

  function handlerCustomCursor(){
    currentCursor.textContent='';
    currentCursor.insertAdjacentHTML('afterbegin', customCursor);
    currentCursor.classList.add('cursor_popup');
  }

  function handlerStandartCursor(){
    currentCursor.textContent='';
    currentCursor.insertAdjacentHTML('afterbegin', standartCursor);
    currentCursor.classList.remove('cursor_popup');
  }

  function openPopup(event) {
    const clientWidth = document.documentElement.clientWidth;

    popup.style.top = `${event.pageY - event.clientY}px`;
    popup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';

    setTimeout(()=>{
      popup.style.backgroundColor = 'rgba(11, 14, 24, .2)';
      popupContainer.style.transform = 'translate(0)';
      popupContainer.addEventListener('mouseleave', handlerCustomCursor);
      popupContainer.addEventListener('mouseenter', handlerStandartCursor);
    },500)
  }

  function closePopup(){
    popupContainer.style.transform = 'translate(720px)';
    popup.style.backgroundColor = 'unset';
    popupContainer.removeEventListener('mouseleave', handlerCustomCursor);
    popupContainer.removeEventListener('mouseenter', handlerStandartCursor);

    setTimeout(()=>{
      popup.classList.remove('popup_open');
      document.body.style.overflow = '';
    },1500)
  }


  cartInfo.addEventListener('click',(event)=>{
    openPopup(event);
  });

  popup.addEventListener('click',(event)=>{
    if(event.target.classList.contains('popup')){
      handlerStandartCursor();
      closePopup();
    }
  });

  popupClose.addEventListener('click',()=>{
    closePopup();
  });

  popupCloseArrow.addEventListener('click',()=>{
    closePopup();
  });

})();
'use strict';
(function () {
  const windowWidth = document.documentElement.clientWidth;
  const LAPTOP_WIDTH = 1024;
  const parallaxSale = document.querySelector('.js-parallax-sale');
  const parallaxFhoto = document.querySelector('.js-parallax-fhoto');
  const parallaxRecommendation = document.querySelector('.js-parallax-recommendation');

  if (windowWidth >= LAPTOP_WIDTH) {
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '100%'
      }
    });

    if (parallaxSale) {
      new ScrollMagic.Scene({
        triggerElement: parallaxSale
      })
        .setTween('.js-parallax-sale', {y: '-20%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxSale
      })
        .setTween('.sale__container', {y: '-10px', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxFhoto) {
      new ScrollMagic.Scene({
        triggerElement: parallaxFhoto
      })
        .setTween('.js-parallax-fhoto', {y: '-10%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxFhoto
      })
        .setTween('.fhoto__container_two', {y: '-25%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxRecommendation) {
      new ScrollMagic.Scene({
        triggerElement: parallaxRecommendation
      })
        .setTween('.js-parallax-recommendation > h2', {y: '-10%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: parallaxRecommendation
      })
        .setTween('.js-parallax-recommendation > ul', {y: '-50%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }
  }

})();