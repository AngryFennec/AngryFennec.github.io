/**
 * подключение js-модулей
 * //= modules/file.js
 */


'use strict';

(function () {
  var serviceItems = Array.from(document.querySelectorAll('.service__item'));
  serviceItems.forEach(function(item, i) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      if (!item.classList.contains('service__item--active')) {
        serviceItems.forEach(function(item) {
          if (item.classList.contains('service__item--active')) {
            item.classList.remove('service__item--active');
          }
        });
        item.classList.add('service__item--active');
      }
    });
  });

})();
'use strict';

(function() {
  var anchors = Array.from(document.querySelectorAll('.anchor'));
  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const blockID = item.getAttribute('href').substr(1);
      const block = document.getElementById(blockID);
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

})();
'use strict';

(function() {
  var tabs = Array.from(document.querySelectorAll('.tabs__item'));
  var news = Array.from(document.querySelectorAll('.news__list'));
  var NEWS_INIT = 7;
  var NEWS_STEP = 8;
  var currentSize = NEWS_INIT;
  var currentNews = news[0];



  function removeTabsActive() {
    tabs.forEach(function(item) {
      item.classList.remove('tabs__item--active');
    });
  }

  function removeNewsActive() {
    news.forEach(function(item) {
      item.classList.remove('news__list--active');
    });
  }

  function displayNews(array, num) {
    var newsItems = Array.from(array.querySelectorAll('.news__item'));
    var size = newsItems.length;
      newsItems.forEach(function(item) {
        item.classList.remove('news__item--nodisplay');
      });
      for (var i = num; i < size; i++) {
        newsItems[i].classList.add('news__item--nodisplay');
        currentSize = num;
      }

  }

  var btn = document.querySelector('.news__btn');
  if (btn) {
    btn.addEventListener('click', function(e) {
      displayNews(currentNews, currentSize + NEWS_STEP);
    });
  }

if (currentNews) {
  displayNews(currentNews, currentSize);
}

if (tabs) {
  tabs.forEach(function(item, i) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      removeTabsActive();
      item.classList.add('tabs__item--active');
      removeNewsActive();
      news[i].classList.add('news__list--active');
      currentSize = NEWS_INIT;
      currentNews = news[i];
      displayNews(currentNews, currentSize);
    })
  }
);
}

/*
  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const blockID = item.getAttribute('href').substr(1);
      const block = document.getElementById(blockID);
      if (block.parentNode.classList.contains("tool")) {
        tools.forEach(function(item) {
          item.classList.remove("tool--active");
        });
        block.parentNode.classList.add("tool--active");
      }
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });*/

})();
'use strict';

(function() {
var pricesSwiper;
var pricesSelector = Array.from(document.querySelectorAll('.prices__swiper'));
if (pricesSelector.length > 0) {

            pricesSwiper = new Swiper('.prices__swiper', {
                 slidesPerView: 'auto',
                  navigation: {
                    nextEl: '.prices__next-button',
                    prevEl: '.prices__prev-button',
                  },

            });
          }

})();
'use strict';

(function() {

    //shank
    if (document.getElementById('html5-shank')) {
        var shankSelect = document.getElementById('shank-input-select');
        var shankhtml5Slider = document.getElementById('html5-shank');
        noUiSlider.create(shankhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var shankInputNumber = document.getElementById('shank-input-number');
        shankhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                shankInputNumber.value = 'до '+value+'мм';
            } else {
                shankSelect.value = 'от '+value+'мм';
            }
        });
        shankSelect.addEventListener('change', function () {
            shankhtml5Slider.noUiSlider.set([this.value, null]);
        });
        shankInputNumber.addEventListener('change', function () {
            shankhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //cutter-d
    if (document.getElementById('html5-cutter-d')) {
        var cutterDSelect = document.getElementById('cutter-d-input-select');
        var cutterDhtml5Slider = document.getElementById('html5-cutter-d');
        noUiSlider.create(cutterDhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var cutterDInputNumber = document.getElementById('cutter-d-input-number');
        cutterDhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                cutterDInputNumber.value = 'до '+value+'мм';
            } else {
                cutterDSelect.value = 'от '+value+'мм';
            }
        });
        cutterDSelect.addEventListener('change', function () {
            cutterDhtml5Slider.noUiSlider.set([this.value, null]);
        });
        cutterDInputNumber.addEventListener('change', function () {
            cutterDhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //cutter-w
    if (document.getElementById('html5-cutter-w')) {
        var cutterWSelect = document.getElementById('cutter-w-input-select');
        var cutterWhtml5Slider = document.getElementById('html5-cutter-w');
        noUiSlider.create(cutterWhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var cutterWInputNumber = document.getElementById('cutter-w-input-number');
        cutterWhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                cutterWInputNumber.value = 'до '+value+'мм';
            } else {
                cutterWSelect.value = 'от '+value+'мм';
            }
        });
        cutterWSelect.addEventListener('change', function () {
            cutterWhtml5Slider.noUiSlider.set([this.value, null]);
        });
        cutterWInputNumber.addEventListener('change', function () {
            cutterWhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //tooth-n
    if (document.getElementById('html5-tooth-n')) {
        var toothSelect = document.getElementById('tooth-input-select');
        var toothhtml5Slider = document.getElementById('html5-tooth-n');
        noUiSlider.create(toothhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var toothInputNumber = document.getElementById('tooth-input-number');
        toothhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                toothInputNumber.value = 'до '+value+'мм';
            } else {
                toothSelect.value = 'от '+value+'мм';
            }
        });
        toothSelect.addEventListener('change', function () {
            toothhtml5Slider.noUiSlider.set([this.value, null]);
        });
        toothInputNumber.addEventListener('change', function () {
            toothhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }

    if(document.querySelector(".filter")) {
        document.querySelector(".filter").addEventListener('click', function (e){
            if (e.target.classList.contains('filter__block-title')) {
                if (e.target.parentNode.querySelector('.filter__wrapper').classList.contains('hidden')) {
                    e.target.parentNode.querySelector('.filter__wrapper').classList.remove('hidden');
                } else {
                    e.target.parentNode.querySelector('.filter__wrapper').classList.add('hidden');
                }
                
            }
        })
    }
    
})();
'use strict';

(function() {

var documentsSwiper;

var documentsSelector = Array.from(document.querySelectorAll('.documents__swiper'));
if (documentsSelector.length > 0) {
    documentsSwiper = new Swiper('.documents__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 9,
        navigation: {
        nextEl: '.documents__next-button',
        prevEl: '.documents__prev-button',
        },
    });
}

var loupe = document.querySelector('.product__loupe');

if (loupe) {
    loupe.addEventListener('click', function(e){
        e.preventDefault();
        var src = this.parentNode.querySelector('.product__image').getAttribute('src');
        document.querySelector('.lightbox').style.display = 'block';
        document.querySelector('.lightbox').querySelector('img').setAttribute('src', src);
    });

    document.querySelector('.lightbox__btn').addEventListener ('click', function(){
        document.querySelector('.lightbox').style.display = 'none';
    })
    document.addEventListener('keydown', function(e) {
        e.preventDefault();
        if (e.keyCode === 27) {
            document.querySelector('.lightbox').style.display = 'none';
        }
    });
}

var images = Array.from(document.querySelectorAll('.product__image-item'));

if (images) {
    images.forEach(function(item) {
        item.addEventListener('click', function(){
            images.forEach(function(item) {
                item.classList.remove('product__image-item--active');
            });
            this.classList.add('product__image-item--active');
            var currentSrc = this.querySelector('.product__item-image').getAttribute('data-image');
            console.log(currentSrc)
            document.querySelector('.product__image').setAttribute('src', currentSrc);
            var name = currentSrc.split('.');
            document.querySelector('.product__image').setAttribute('srcset', name[0]+"@2x."+name[1]+" 2x");
            console.log(document.querySelector('.product__image'))
        });
      });
}

if (document.querySelector('.parameters__table')) {
    document.querySelector('.parameters__table').addEventListener('click', function(e){
        console.log(e.target);
        if(e.target.classList.contains('parameters__value--first')) {
            var parent = e.target.parentNode;
            var stringes = Array.from(parent.querySelectorAll('.parameters__value'));
            stringes.forEach(function(item) {
                if(item.classList.contains('hidden')) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }

            });

        }
    })
}

})();
'use strict';

(function() {
    document.querySelector('.nav__with-us').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.popup').style.display = 'block';
    });
    document.querySelector('.popup__btn').addEventListener ('click', function(){
        document.querySelector('.popup').style.display = 'none';
    })
    document.querySelector('.footer__with-us').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.popup').style.display = 'block';
    });
    document.addEventListener('keydown', function(e) {

        if (e.keyCode === 27) {
          e.preventDefault();
            document.querySelector('.popup').style.display = 'none';
        }
    });

})();
'use strict';

(function () {
  var contactsBtns = Array.from(document.querySelectorAll('.contacts__btn'));
  var contactsSections = Array.from(document.querySelectorAll('.contacts__list'));
  if (contactsBtns && contactsSections) {
  contactsBtns.forEach(function(item, i) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      if (!item.classList.contains('contacts__btn--active')) {
        contactsBtns.forEach(function(item) {
          if (item.classList.contains('contacts__btn--active')) {
            item.classList.remove('contacts__btn--active');
          }
        });
        item.classList.add('contacts__btn--active');
      }
      contactsSections.forEach(function(item) {
        item.classList.remove('contacts__list--active');
      });
      contactsSections[i].classList.add('contacts__list--active');
    });
  });
}

})();