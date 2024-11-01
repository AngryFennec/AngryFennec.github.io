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
      "./images/work-desktop-pickup.png",
      "./images/work-desktop-mini.png",
      "./images/work-desktop.png",
      "./images/work-desktop-middle.png",
      "./images/work-desktop-offroad.png",
      "./images/work-desktop-prem.png"];
      var imagesTabletArray = [
        "./images/work-tablet-pickup.png",
        "./images/work-tablet-mini.png",
        "./images/work-tablet.png",
        "./images/work-tablet-middle.png",
        "./images/work-tablet-offroad.png",
        "./images/work-tablet-prem.png"];
        var imagesMobileArray = [
          "./images/work-mobile-pickup.png",
          "./images/work-mobile-mini.png",
          "./images/work-mobile.jpg",
          "./images/work-mobile-middle.png",
          "./images/work-mobile-offroad.png",
          "./images/work-mobile-prem.png"];
          var pricesArray = [
            '40 800', '40 800', '37 600', '31 200', '37 600', '48 800'
          ];

    var workButtons = Array.prototype.slice.call(document.querySelectorAll(".work__options-item"));
    var workWrapper = document.querySelector(".work__wrapper");
    var workImgs = document.querySelectorAll(".tabs__img");
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

    /*function setDesktopBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.classList.remove('work__options-item--active');
        workButton.removeEventListener('click', setLaptopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        workImg.setAttribute("src", imagesArray[index]);
        var style = "position: absolute; top: 30px; right: -330px;";
        if (index != 2) {
          style = "position: absolute; top: 50px; right: -530px;";
        }
        workImg.style = style;
        workButton.classList.add('work__options-item--active');
        priceValue.textContent = pricesArray[index];
      };
    }
    function setLaptopBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        workImg.setAttribute("src", imagesArray[index]);
        var style = "position: absolute; top: 30px; right: -330px;";
        if (index != 2) {
          style = "position: absolute; top: 50px; right: -530px;";
        }
        workImg.style = style;
        workButton.classList.add('work__options-item--active');
          workButton.classList.add('work__options-item--active');
          priceValue.textContent = pricesArray[index];
          };

        }
    function setTabletBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setLaptopBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        workImg.setAttribute("src", imagesTabletArray[index]);
        var style = "position: absolute; top: 30px; right: -330px;";
        if (index != 2) {
          style = "position: absolute; top: 50px; right: -330px;";
        }
        workImg.style = style;
            workButton.classList.add('work__options-item--active');
            priceValue.textContent = pricesArray[index];
          };
        }
    function setMobileBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setLaptopBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        workImg.setAttribute("src", imagesMobileArray[index]);
        var style = "position: absolute; top: -190px; left: -15px;";
        if (index != 2) {
          style = "position: absolute; top: -190px; left: -0px;";
        }
        workImg.style = style;
        workButton.classList.add('work__options-item--active');
            priceValue.textContent = pricesArray[index];
          };
        }
      console.log(document.body.clientWidth + " " + document.body.offsetWidth);
      console.log(window.innerWidth);
      if (document.body.clientWidth >= 1898) {
        var style = "position: absolute; top: 30px; right: -330px;";
        if (findIndex() != 2) {
          style = "position: absolute; top: 50px; right: -530px;";
        }
        workImg.setAttribute("src", imagesArray[findIndex()]);
        workImg.style = style;
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setDesktopBackground(item, i));
        });
      }
      else if (document.body.clientWidth < 1898 && document.body.clientWidth >= 1181) {
        var style = "position: absolute; top: 30px; right: -330px;";
        if (findIndex() != 2) {
          style = "position: absolute; top: 50px; right: -530px;";
        }
        workImg.setAttribute("src", imagesArray[findIndex()]);
        workImg.style = style;
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setLaptopBackground(item, i));
        });
      }
      else if (document.body.clientWidth < 1181 && document.body.clientWidth >= 749) {
        workImg.setAttribute("src", imagesTabletArray[findIndex()]);
        var style = "position: absolute; top: 30px; right: -330px;";
        if (findIndex() != 2) {
          style = "position: absolute; top: 50px; right: -330px;";
        }
        workImg.style = style;
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setTabletBackground(item, i));
        });
      }
      else {
        workImg.setAttribute("src", imagesMobileArray[findIndex()]);
        var style = "position: absolute; top: -190px; left: -15px;";
        if (findIndex() != 2) {
          style = "position: absolute; top: -190px; left: 0px;";
        }
        workImg.style = style;workButtons.forEach((item, i) => {
          item.addEventListener("click", setMobileBackground(item, i));
        });
      }
    }
    ;*/

})();
