'use strict';
(function() {

  var tabs = Array.from(document.querySelectorAll('.program__sections-btn'));
  var tabsItems = Array.from(document.querySelectorAll('.program__sections-tab'));
  var tabsContents = Array.from(document.querySelectorAll('.program__sections-item'));

  var hideContents = function() {
    tabsContents.forEach(function(item) {
      item.classList.remove('program__sections-item--active')
    });
  }

  var removeActives = function() {
    tabsItems.forEach(function(item) {
      item.classList.remove('program__sections-tab--active')
    });
  }


  if (tabs && tabsContents && tabsItems) {
    tabs.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        hideContents();
        removeActives();
        tabsContents[i].classList.add('program__sections-item--active');
        tabsItems[i].classList.add('program__sections-tab--active');
      })
    });
  }
})();