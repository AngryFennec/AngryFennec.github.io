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