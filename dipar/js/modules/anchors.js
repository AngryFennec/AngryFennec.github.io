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