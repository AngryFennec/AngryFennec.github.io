'use strict';
(function () {
  var routeList = Array.from(document.querySelectorAll('.route__list li'));
  var routeBtns = Array.from(document.querySelectorAll('.route__list li button'));
  var routeMaps = Array.from(document.querySelectorAll('.route__map-list li'));
  var routeTexts = Array.from(document.querySelectorAll('.route__right-block li'));
  var current = 0;

  var removeActiveList = function() {
    routeList[current].classList.remove('active-item');
  };
  var removeActiveMap = function() {
    routeMaps[current].classList.remove('active-map');
  };
  var removeActiveText = function() {
    routeTexts[current].classList.remove('active-text');
  };
  routeList[0].classList.add('active-item');
  routeMaps[0].classList.add('active-map');
  routeTexts[0].classList.add('active-text');


  if (routeList && routeBtns && routeMaps && routeTexts) {
    routeBtns.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        removeActiveList();
        removeActiveMap();
        removeActiveText();
        routeList[i].classList.add('active-item');
        routeMaps[i].classList.add('active-map');
        routeTexts[i].classList.add('active-text');
        current = i;
      })
    });
  }
})();