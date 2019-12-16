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