'use strict';
(function() {

  var thumbsSliders = [];
  var gallerySliders = [];
  var thumbs = Array.from(document.querySelectorAll('.gallery-thumbs'));
  var tops = Array.from(document.querySelectorAll('.gallery-top'));
  var nextBtns = Array.from(document.querySelectorAll('.gallery .swiper-button-next'));
  var prevBtns = Array.from(document.querySelectorAll('.gallery .swiper-button-prev'));
  if (tops && thumbs) {

  tops.forEach(function(item, i) {
    var gTh = new Swiper(thumbs[i], {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
observeParents: true,
  });
  thumbsSliders.push(gTh);
  var gT = new Swiper(tops[i], {
    spaceBetween: 10,
    observer: true,
observeParents: true,
    navigation: {
      nextEl: nextBtns[i],
      prevEl: prevBtns[i],
    },
    thumbs: {
      swiper: thumbsSliders[i]
    }
  });
  gallerySliders.push(gT);
});
}


var galleryTabs = Array.from(document.querySelectorAll('.gallery__tab'));
var galleryItems = Array.from(document.querySelectorAll('.gallery__slider'));
var removeActiveTabs = function() {
  galleryTabs.forEach(function(item) {
    item.classList.remove('gallery__tab--active');
  });
};
var removeActiveSliders = function() {
  galleryItems.forEach(function(item) {
    item.classList.remove('gallery__slider--active');
  });
};

if (galleryTabs && galleryItems) {
  galleryTabs.forEach(function(item, i) {
    item.addEventListener('click', function(evt) {
      removeActiveTabs();
      removeActiveSliders();
      galleryTabs[i].classList.add('gallery__tab--active');
      galleryItems[i].classList.add('gallery__slider--active');
      gallerySlider[i].reInit();
      thumsSliders[i].reInit();
    })
  });
}


var clearBtn = document.querySelector('.btn-clear');
var checkboxes = Array.from(document.querySelectorAll('.swiper-slide__checkbox input'));
clearBtn.addEventListener('click', function(evt) {
  checkboxes.forEach(function(item) {
    item.checked = false;
  })
});



})();