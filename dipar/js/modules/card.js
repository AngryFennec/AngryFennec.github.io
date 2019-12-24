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

var images = Array.from(document.querySelectorAll('.product__image-item'));

if (images) {
    images.forEach(function(item) {
        item.addEventListener('click', function(){
            images.forEach(function(item) {
                item.classList.remove('product__image-item--active');
            });
            this.classList.add('product__image-item--active');
            var currentSrc = this.querySelector('.product__item-image').getAttribute('data-image');
            document.querySelector('.product__image').setAttribute('src', currentSrc);
            document.querySelector('a[data-fancybox = "product"]').setAttribute('href', currentSrc);
            var name = currentSrc.split('.');
            document.querySelector('.product__image').setAttribute('srcset', name[0]+"@2x."+name[1]+" 2x");
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

//feadback
if (document.querySelector('#feadback')) {
    var form = document.querySelector('#feadback');

    form.addEventListener('submit', function(e){
        var name = form.querySelector('input[name="name"]');
        var phone = form.querySelector('input[name="phone"]');
        if (name.value) {
            form.querySelector('.feadback__name-error').style.display = "none";
        } else {
            e.preventDefault();
            form.querySelector('.feadback__name-error').style.display = "block";
        }
        if (phone.value) {
            form.querySelector('.feadback__phone-error').style.display = "none";
        } else {
            e.preventDefault();
            form.querySelector('.feadback__phone-error').style.display = "block";
        }
    });
}

(function ($) {
    $(`[data-fancybox]`).fancybox({
        smallBtn: `true`,
        baseClass: `video-lightbox`,
        iframe: {
        css: {
            maxWidth: `800px`,
            maxHeight: `600px`
            }
        }
    });
})(jQuery)

})();