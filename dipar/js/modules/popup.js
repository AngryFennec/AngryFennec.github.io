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
            document.querySelector('.popup').style.display = 'none';
        }
    });

    var form = document.querySelector('#popup-form');
    var selector = form.querySelector('input[name="user-phone"]');

    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);


    form.addEventListener('submit', function(e){
        var name = form.querySelector('input[name="user-name"]');
        var phone = form.querySelector('input[name="user-phone"]');
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

    var formFb = document.querySelector('#feadback');
    if (formFb) {
    var selectorFb = formFb.querySelector('input[name="phone"]');

    var imFb = new Inputmask("+7 (999) 999-99-99");
    imFb.mask(selectorFb);
}


})();