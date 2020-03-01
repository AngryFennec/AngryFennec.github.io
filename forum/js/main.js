/**
 * подключение js-модулей
 * //= modules/file.js
 */

'use strict';

(function() {
// var pricesSwiper;
    let  speakersSwiper = new Swiper('.speakers__container', {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 150,
        centeredSlides: true,
        speed: 1000,
        navigation: {
        nextEl: '.speakers__next',
        prevEl: '.speakers__prev',
        },
        pagination: {
            el: '.speakers__bullets',
            clickable: true,
          },
            breakpoints: {
          760: {
            initialSlide: 1,
            slidesPerView: 3,
            spaceBetween: -150,
            centeredSlides: true,
            speed: 1000,
    },
  }
    });
})();
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
'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
  var target = $(get_id).offset().top;
  $("html, body").animate({ scrollTop: target }, 800);
});

$(".header__burger").on('click', function(){
  $('.header__menu').fadeToggle(400);

  $('.header__menu').on('click', function(){
    if($(document).width() <=768) {
      $(this).hide();
    }
  });
});

$(window).on('resize', function(){
  console.log($(document).width())
  if($(document).width() > 768) {
    $('.header__menu').css('display', 'flex');
  } else {
    $('.header__menu').css('display', 'none');
  }
})
'use strict';
(function() {

  var thumbsSliders = [];
  var gallerySliders = [];
  var thumbs = Array.from(document.querySelectorAll('.gallery-thumbs'));
  var tops = Array.from(document.querySelectorAll('.gallery-top'));
  if (tops && thumbs) {

  tops.forEach(function(item, i) {
    var gTh = new Swiper(thumbs[i], {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  thumbsSliders.push(gTh);
  var gT = new Swiper(tops[i], {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbsSliders[i]
    }
  });
  gallerySliders.push(gT);
  })
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
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.gallery__tabs > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });

    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}

$(function() {

var dd = new DropDown( $('.gallery__tabs-wrapper') );
$(document).click(function() {
	// all dropdowns
	$('.gallery__tabs-wrapper').removeClass('active');
});

});
$( document ).ready(function() {
    $(".btn-dl").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false;
		}
	);
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: new formData($('#ajax_form')[0]),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно

    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}