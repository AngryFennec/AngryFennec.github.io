'use strict';
(function() {

  var tabs = Array.from(document.querySelectorAll('.program__sections-btn'));
  var tabsContents = Array.from(document.querySelectorAll('.program__sections-item'));

  var hideContents = function() {
    tabsContents.forEach(function(item) {
      item.classList.remove('program__sections-item--active')
    });
  }

  var removeActives = function() {
    tabs.forEach(function(item) {
      item.classList.remove('program__sections-btn--active')
    });
  }


  if (tabs && tabsContents) {
    tabs.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        hideContents();
        tabsContents[i].classList.add('program__sections-item--active');
        item.classList.add('program__sections-btn--active');
      })
    });
  }
})();