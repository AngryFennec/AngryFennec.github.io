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