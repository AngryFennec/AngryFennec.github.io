/**
 * подключение js-модулей
 * //= modules/file.js
 */

'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
    var target = $(get_id).offset().top - 100;
  $("html, body").animate({ scrollTop: target }, 800);
});

$(".header__burger").on('click', function(){
  $('.header nav').fadeToggle(400);

  $('.header nav').on('click', function(){
    if($(document).width() <=1024) {
      $(this).hide();
    }
  });
});

$(window).on('resize', function(){
  if($(document).width() > 1024) {
      console.log($(document).width())
    $('.header nav').show();
  }
})
$('.fancy-button').on('click', function(evt){
    evt.preventDefault();
    if($(this).hasClass('one')) {
        $('#one').click();
    }
    if($(this).hasClass('two')) {
        $('#two').click();
    }
    if($(this).hasClass('three')) {
        $('#three').click();
    }
    if($(this).hasClass('fourth')) {
        $('#fourth').click();
    }
    if($(this).hasClass('five')) {
        $('#five').click();
    }
})


$('.option input').on('input', function(){
    var count = $(this).val();
    if (count) {
   $(this).parent().parent().parent().find('ul li span:nth-child(2)').each(function(){
        var summ = +$(this).attr('data-summ');
        
        if (summ !== 0) {
            var firstPiece =(parseInt(summ*count/1000)).toString();
            var lastPiece = (summ*count%1000).toString();
            for(var i = 0; i < 3; i++){
                if(lastPiece.length < 3) {
                    lastPiece = "0" + lastPiece;
                }
            }
            $(this).text(firstPiece + ' ' + lastPiece + ' ₽');
        }
    });
    $(this).parent().parent().parent().find('ul li span:nth-child(3)').each(function(){
        console.log($(this))
         var summ = +$(this).attr('data-summ');
      
         if (summ !== 0) {
             var firstPiece =(parseInt(summ*count/1000)).toString();
             var lastPiece = (summ*count%1000).toString();
             for(var i = 0; i < 3; i++){
                 if(lastPiece.length < 3) {
                     lastPiece = "0" + lastPiece;
                 }
             }
             $(this).html('<s>' + firstPiece + ' ' + lastPiece + ' ₽</s>');
         }
     });
    }

})
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
transition: 'cubic-bezier(0,0,0,1)'
});
// $(document).ready(function() {
// 	$('.main__para-wrapper').mousemove(function(e) {
// 		parallax(e, document.querySelector('.main__para-btn'), 2);
// 	});
// });
//
// function parallax(e, target, layer) {
// 	var strength = 20;
// 	var layer_coeff = strength / layer;
// 	var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
// 	var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
// 	$(target).offset({
// 		top: y,
// 		left: x
// 	});
// };


$(document).mousemove(function(e) {
  $(".main__para-btn").parallax(20, e);
  });
'use strict';
(function() {


  var thumbs = document.querySelector('.portfolio-thumbs');
  var tops = document.querySelector('.portfolio-top');
  var nextBtns = document.querySelector('.portfolio .swiper-button-next');
  var prevBtns = document.querySelector('.portfolio .swiper-button-prev');
  if (tops && thumbs) {

    var portfolioThumbs = new Swiper('.portfolio-thumbs', {
          spaceBetween: 15,
          slidesPerView: 11,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,


        });
        var portfolioTop = new Swiper('.portfolio-top', {

          thumbs: {
            swiper: portfolioThumbs
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
}

})();
'use strict';
(function () {
  var routeList = Array.from(document.querySelectorAll('.route__list li'));
  var routeBtns = Array.from(document.querySelectorAll('.route__list li button'));
  var routeMaps = Array.from(document.querySelectorAll('.route__map-list li'));
  var routeTexts = Array.from(document.querySelectorAll('.route__right-block li'));
  var current = 0;

  var removeActiveList = function() {
    routeList[current].classList.remove('active-item');
  };
  var removeActiveMap = function() {
    routeMaps[current].classList.remove('active-map');
  };
  var removeActiveText = function() {
    routeTexts[current].classList.remove('active-text');
  };
  routeList[0].classList.add('active-item');
  routeMaps[0].classList.add('active-map');
  routeTexts[0].classList.add('active-text');


  if (routeList && routeBtns && routeMaps && routeTexts) {
    routeBtns.forEach(function(item, i) {
      item.addEventListener('click', function(evt) {
        removeActiveList();
        removeActiveMap();
        removeActiveText();
        routeList[i].classList.add('active-item');
        routeMaps[i].classList.add('active-map');
        routeTexts[i].classList.add('active-text');
        current = i;
      })
    });
  }
})();
'use strict';

$('.js-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
  $('.page-body').addClass('page-body--overflow');
});

$('.popup__close').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeOut(300);
  $('.page-body').removeClass('page-body--overflow');
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.popup').fadeOut(300);
    $('.page-body').removeClass('page-body--overflow');
  }
});

const input = $('input[name="user-phone"]')[0];
let im = new Inputmask("+7 (999) 999-99-99");
if(input)im.mask(input);