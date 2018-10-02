 'use strict'; (function () {
  //запуск видео по кнопке
  var playButton = document.querySelector(".examples__play-button");
  var frame = document.querySelector(".examples__frame");

  playButton.addEventListener("click", function() {
    frame.src +="?autoplay=1";
    setTimeout(function() {frame.style.display="block"}, 1000);
  });

  // открытие формы для отзыва

  $('.review__open-form-button').on('click', function() {
    $(".review__form").slideToggle({duration: 400, easing: 'linear'});
  });

  // установки по умолчанию
  var slides = document.querySelectorAll(".review__block");
  var currentWidth = document.body.clientWidth;
  var currentSlide = 0;
  $('.review__button--left').prop('disabled',true);

  // реагирование слайдера на ресайз окна
  window.addEventListener("resize", function () {
    currentWidth = document.body.clientWidth;

    // если десктоп, то сбрасываем слайдер и показываем по 3
    if (document.body.clientWidth > 1200) {
      setTimeout( function (){
        $(slides).hide();
        currentSlide = 0;
        $('.review__button--right').prop('disabled',false);
        $(slides[currentSlide]).show().next().show().next().show();
      }, 200)
    }
    // если меньше десктопа, то сбрасываем слайдер и показываем по 1
    else {
      setTimeout( function (){
        $('.review__button--right').prop('disabled',false);
        $(slides).hide();
        currentSlide = 0;
        $(slides[currentSlide]).show();
      }, 200)
    }
  });

  //листание вправо
  $('.review__button--right').on('click', function(){
    $('.review__button--left').prop('disabled',false);
    // поведение при ширине меньше десктопа
  if (currentWidth < 1200){
      $(slides[currentSlide]).hide();
        currentSlide++;
        if (currentSlide > slides.length-2) {
          $('.review__button--right').prop('disabled',true);
          } else {
          $('.review__button--right').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn(400);
      }
      // поведение шире десктопа
      else {
        $(slides[currentSlide]).hide().next().hide().next().hide();
        currentSlide ++;
          if (currentSlide > slides.length-4) {
          $('.review__button--right').prop('disabled',true);
        } else {
          $('.review__button--right').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn().next().fadeIn().next().fadeIn()
      }
    });
    //листание влево
    $('.review__button--left').on('click', function(){
    $('.review__button--right').prop('disabled',false);
    // поведение при ширине меньше десктопа
    if (currentWidth < 1200){
      $(slides[currentSlide]).hide();
        currentSlide--;
        if (currentSlide < 1) {
            $('.review__button--left').prop('disabled',true);
          } else {
            $('.review__button--left').prop('disabled',false);
          };
        $(slides[currentSlide]).fadeIn(400);
        }
        // поведение при ширине больше десктопа
      else {
        $(slides[currentSlide]).hide().next().hide().next().hide();
          currentSlide --;
        if (currentSlide < 1) {
          $('.review__button--left').prop('disabled',true);
        } else {
          $('.review__button--left').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn().next().fadeIn().next().fadeIn();
      }
    });

    // звездочки
    var svg = $(".review__label svg");
    svg.on("click", function() {
      $(svg).css("fill", "#C4C4C4");
      for (var i = 0; i <= $(this).attr("data-number"); i++)
      $(svg[i]).css("fill", "#0047FF");
    });

    var button=document.querySelector(".menu-list-button-open");
    var modal=document.querySelector(".menu-list-button");
    var closeButton=modal.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button.addEventListener ("click", function (evt) {
      menu.classList.toggle("nav-container--close");
      over.forEach(function (item) {item.classList.toggle("overlay--close");});
      burger.classList.toggle("menu-button--close");
      show(evt, modal);
    });

    closeButton.addEventListener ("click", function (evt) {
      hidden(evt, modal);
    });

    var button2=document.querySelector(".header-button-open");
    var modal2=document.querySelector(".header-button");
    var closeButton2=modal2.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button2.addEventListener ("click", function (evt) {
      show(evt, modal2);
    });

    closeButton2.addEventListener ("click", function (evt) {
      hidden(evt, modal2);
    });
    var button3=document.querySelector(".work-button-open");
    var modal3=document.querySelector(".work-button");
    var closeButton3=modal3.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button3.addEventListener ("click", function (evt) {
      show(evt, modal3);
    });

    closeButton3.addEventListener ("click", function (evt) {
      hidden(evt, modal3);
    });



 var burger = document.querySelector(".menu-button");
   var menu = document.querySelector(".nav-container");
   var over = Array.prototype.slice.call(document.querySelectorAll(".overlay"));
   var menuItems = Array.prototype.slice.call(menu.querySelectorAll(".menu__item-href"));


   menu.classList.add("nav-container--close");
    burger.classList.add("menu-button--close");

    over.forEach(function (item) {item.classList.add("overlay--close");});

     burger.addEventListener ("click", function (evt) {
       evt.preventDefault();
       menu.classList.toggle("nav-container--close");
       over.forEach(function (item) {item.classList.toggle("overlay--close");});
       burger.classList.toggle("menu-button--close");
    });
    menuItems.forEach(function (item) {
      item.addEventListener ("click", function (evt) {
        menu.classList.toggle("nav-container--close");
        over.forEach(function (item) {item.classList.toggle("overlay--close");});
        burger.classList.toggle("menu-button--close");
      });
    });

    var examplesButton = document.querySelector(".examples__button");
    var examplesBox = document.querySelector(".examples__box--2");

    examplesButton.addEventListener("click", function () {
      console.log(examplesBox);
      examplesBox.classList.toggle("open");
      examplesButton.classList.toggle("open-btn");
    });


    var imagesArray = [
      "./images/work-desktop.png",
      "./images/work-desktop-offroad.png",
      "./images/work-desktop-prem.png"];
      var imagesTabletArray = [
        "./images/work-tablet.png",
        "./images/work-tablet-offroad.png",
        "./images/work-tablet-prem.png"];
        var imagesMobileArray = [
          "./images/work-mobile.jpg",
          "./images/work-mobile-offroad.png",
          "./images/work-mobile-prem.png"];
          var pricesArray = [
            '40 800', '40 800', '37 600'
          ];


    var workWrapper = document.querySelector(".work__inner");
    var tabsWrapper = document.querySelector(".tabs__wrapper");
      var workButtons = Array.prototype.slice.call(tabsWrapper.querySelectorAll(".work__options-item"));
    var workImgs = document.querySelectorAll(".tabs__img");
    console.log(workImgs);
    var priceValue = document.querySelector('.tabs__inner-price-value');
    function onStartCallbacks() {
      priceValue.textContent = pricesArray[findIndex()];
      for (var i = 0; i < workButtons.length; i++) {
        var item = workButtons[i];
        item.addEventListener("click", setItemImg(item, i));
        item.classList.remove('work__options-item--active');
        //workImgs[i].style = "display: none;";
        workImgs[i].classList.add("visually-hidden");

      }
      //workImgs[findIndex()].style = "display: block;";
      while (workImgs[findIndex()].classList.contains("visually-hidden")) {
        workImgs[findIndex()].classList.remove("visually-hidden");
      }
      workButtons[findIndex()].classList.add('work__options-item--active');
    }

    function findIndex() {
      var ind = 0;
      for (var i = 0; i < workButtons.length; i++) {
        var item = workButtons[i];
        if (item.classList.contains('work__options-item--active')) {
          ind = i;
        }
      }
      return ind;
    }

    function setItemImg(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        for (var i = 0; i < workButtons.length; i++) {
          var item = workButtons[i];
            item.classList.remove('work__options-item--active');
            //workImgs[i].style = "display: none;";
            workImgs[i].classList.add("visually-hidden");
        }
        //workImgs[findIndex()].style = "display: block;";
        while (workImgs[index].classList.contains("visually-hidden")) {
          workImgs[index].classList.remove("visually-hidden");
        }
        workButton.classList.add('work__options-item--active');
        priceValue.textContent = pricesArray[index];
      };
    }
    onStartCallbacks();

})();
