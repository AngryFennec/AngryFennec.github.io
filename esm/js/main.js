/**
 * подключение js-модулей
 * //= modules/file.js
 */


'use strict';


(function () {
  console.log('Here is your code');

})();
$(".menu a").on("click", function() {

    var get_id = $(this).attr("href");
    var target = $(get_id).offset().top;

    $("html, body").animate({scrollTop: target}, 800);

});

$(".anchor").on("click", function() {

    var get_id = $(this).attr("href");
    var target = $(get_id).offset().top;

    $("html, body").animate({scrollTop: target}, 800);

});
'use strict';

var worksSlider;
var worksSelector = Array.from(document.querySelectorAll('.works__swiper'));
if (worksSelector.length > 0) {
  function initWorksSwiper() {
      if(document.body.clientWidth <= 1250) {

           worksSlider = new Swiper('.works__swiper', {
              slidesPerView: 'auto',
              speed: 2000,
              spaceBetween: 20,
              loop:true,
              autoplay: {
                delay: 3000,
              },
            });

          return worksSlider;
      } else {
          if (worksSlider) {
           worksSlider.destroy();
          }
       worksSlider = undefined;
          return worksSlider;
      }
  }

  initWorksSwiper();

  $(window).on('resize', function() {
      setTimeout(initWorksSwiper, 500)
  })
}

$(function() {
  $("[data-fancybox]").fancybox();
  });
var processSlider;
var processSelector = Array.from(document.querySelectorAll('.process__swiper'));
if (processSelector.length > 0) {
  function initProcessSwiper() {
      if(document.body.clientWidth <= 1250) {

           processSlider = new Swiper('.process__swiper', {
              slidesPerView: 'auto',
              speed: 2000,
              spaceBetween: 20,
              loop:true,
              autoplay: {
                delay: 3000,
              },
            });

          return processSlider;
      } else {
          if (processSlider) {
           processSlider.destroy();
          }
       processSlider = undefined;
          return processSlider;
      }
  }

  initProcessSwiper();

  $(window).on('resize', function() {
      setTimeout(initProcessSwiper, 500)
  })
}
var portfolioSlider;
var pricesSelector = Array.from(document.querySelectorAll('.portfolio__swiper'));
if (pricesSelector.length > 0) {
  function initPortfolioSwiper() {
    pricesSelector.foreach
      if(document.body.clientWidth <= 1250) {

           portfolioSlider = new Swiper('.portfolio__swiper', {
              slidesPerView: 'auto',
              speed: 2000,
              spaceBetween: 20,
              loop:true,
              autoplay: {
                delay: 3000,
              },
            });

          return portfolioSlider;
      } else {
          if (portfolioSlider) {
           portfolioSlider.destroy();
          }
       portfolioSlider = undefined;
          return portfolioSlider;
      }
  }

  initPortfolioSwiper();

  $(window).on('resize', function() {
      setTimeout(initPortfolioSwiper, 500)
  })
}
'use strict';

(function() {
  var teamSlider;
  var pricesSelector = Array.from(document.querySelectorAll('.team__swiper'));
  if (pricesSelector.length > 0) {
    function initTeamSwiper() {
      pricesSelector.foreach
      if (document.body.clientWidth <= 1250) {

        teamSlider = new Swiper('.team__swiper', {
          slidesPerView: 'auto',
          speed: 2000,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 3000,
          },
        });

        return teamSlider;
      } else {
        if (teamSlider) {
          teamSlider.destroy();
        }
        teamSlider = undefined;
        return teamSlider;
      }
    }

    initTeamSwiper();

    $(window).on('resize', function() {
      setTimeout(initTeamSwiper, 500)
    })
  }

  window.wow = new WOW({
    // settings here
  });
  wow.init();

  var prevBtns = Array.from(document.querySelectorAll('.team__list-btn--prev'));
  var nextBtns = Array.from(document.querySelectorAll('.team__list-btn--next'));
  var teams = Array.from(document.querySelectorAll('.team__list-item'));
  var teamSize = teams.length;
  var activeIndex = 0;
  var teamImgs = Array.from(document.querySelectorAll('.team__list-img img'));
  var teamImgContainers = Array.from(document.querySelectorAll('.team__list-img'));
  var teamCaps = Array.from(document.querySelectorAll('.team__list-cap'));
  var teamContents = Array.from(document.querySelectorAll('.team__list-content'));
  var teamContent = document.querySelector('.team__content');
  var roles = Array.from(document.querySelectorAll('.team__roles-link'));

  if (teams && prevBtns && nextBtns && teamImgs && teamContents && teamContent && roles && teamImgContainers && teamCaps) {

    function teamsRemoveActive() {
      teams.forEach(function(item) {
        item.classList.remove('team__list-item--active');
      });
    }
    function rolesRemoveActive() {
      roles.forEach(function(item) {
        item.classList.remove('team__roles-link--active');
      });
    }
    function initialClick() {
      roles[0].click();
    }

    function setTop() {

      wow.show(teamContents[activeIndex]);
      wow.show(teamImgContainers[activeIndex]);
      wow.show(teamCaps[activeIndex]);
      var top = 0;
      if (window.screen.width >= 1024) {

        if (teams[activeIndex].classList.contains('team__list-item--maxim')) {
          top = teamImgs[activeIndex].clientHeight * 0.55;
        }
        if (teams[activeIndex].classList.contains('team__list-item--vitaly')) {
          top = teamImgs[activeIndex].clientHeight * 0.387;
        }
        if (teams[activeIndex].classList.contains('team__list-item--gleb')) {
          top = teamImgs[activeIndex].clientHeight * 0.507;
        }
        if (teams[activeIndex].classList.contains('team__list-item--julia')) {
          top = teamImgs[activeIndex].clientHeight * 0.367;
        }
        if (teams[activeIndex].classList.contains('team__list-item--denis')) {
          top = teamImgs[activeIndex].clientHeight * 0.467;
        }
        if (window.screen.width <= 1200) {
          top = top - 40;
        }
        teams[activeIndex].style.marginBottom = 0;
        teamContents[activeIndex].style.top = top + 'px';
        teams[activeIndex].style.paddingTop = 0;

      } else {
        teamContents[activeIndex].style.top = 0;
        teams[activeIndex].style.paddingTop = '93%';
        teams[activeIndex].style.marginBottom = '25%';
        if (window.screen.width <= 370) {
          teamContents[activeIndex].style.top = 0;
          teams[activeIndex].style.paddingTop = '78%';
          teams[activeIndex].style.marginBottom = '15%';
        }
        if (window.screen.width <= 500 && window.screen.width > 370) {
          teamContents[activeIndex].style.top = 0;
          teams[activeIndex].style.paddingTop = '83%';
          teams[activeIndex].style.marginBottom = '15%';
        }
        if (window.screen.width > 500 && window.screen.width < 800) {
          teamContents[activeIndex].style.top = 0;
          teams[activeIndex].style.paddingTop = '93%';
          teams[activeIndex].style.marginBottom = '25%';
        }

      }

    }


    nextBtns.forEach(function(item, i) {
      item.addEventListener('click', function(e) {
        teamsRemoveActive();
                rolesRemoveActive();
        if (i === teamSize - 1) {
          teams[0].classList.add('team__list-item--active');
          activeIndex = 0;
        } else {
          teams[i + 1].classList.add('team__list-item--active');
          activeIndex = i + 1;
        }
  roles[activeIndex].classList.add('team__roles-link--active');
        setTop();
      });
    });

    prevBtns.forEach(function(item, i) {
      item.addEventListener('click', function(e) {

        teamsRemoveActive();
        rolesRemoveActive();
        if (i === 0) {
          teams[teamSize - 1].classList.add('team__list-item--active');
          activeIndex = teamSize - 1;
        } else {
          teams[i - 1].classList.add('team__list-item--active');
          activeIndex = i - 1;
        }
        roles[activeIndex].classList.add('team__roles-link--active');
        setTop();
      });
    });
    roles.forEach(function(item, i) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        teamsRemoveActive();
        rolesRemoveActive();
        teams[i].classList.add('team__list-item--active');
        item.classList.add('team__roles-link--active');
        activeIndex = i;
        setTop();
      })
    });


    window.addEventListener('resize', function(e) {
      setTop();
    });
    /*
    teamsRemoveActive();
    teams[0].classList.add('team__list-item--active');
    activeIndex = 0;
    setTop();*/
setTimeout(initialClick, 1000);
  }

})();
'use strict';

(function() {
  var testimonialsSlider;
  var pricesSelector = Array.from(document.querySelectorAll('.testimonials__swiper'));
  if (pricesSelector.length > 0) {
  function initTestimonialsSwiper() {
    pricesSelector.foreach
      if(document.body.clientWidth <= 1250) {

           testimonialsSlider = new Swiper('.testimonials__swiper', {
              slidesPerView: 'auto',
              speed: 2000,
              spaceBetween: 20,
              loop:true,
              autoplay: {
                delay: 3000,
              },
            });

          return testimonialsSlider;
      } else {
          if (testimonialsSlider) {
           testimonialsSlider.destroy();
          }
       testimonialsSlider = undefined;
          return testimonialsSlider;
      }
  }

  initTestimonialsSwiper();

  $(window).on('resize', function() {
      setTimeout(initTestimonialsSwiper, 500)
  })
}

    var testiSelector = document.querySelector('.testimonials__swiper-main');
    if (testiSelector) {
      var swiper = new Swiper(testiSelector,  {
        slidesPerView: 'auto',
          spaceBetween: 30,
          speed: 1000,
           pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
          navigation: {
            nextEl: '.testimonials__btn--next',
            prevEl: '.testimonials__btn--prev',
          },
        });
  }
})();
'use strict';

$('.promo__video-categories').on('click', function (evt) {
    
  evt.preventDefault();
  var target = $(evt.target);
  if (target[0].tagName === 'A') {
    $('.promo__video-category').removeClass('promo__video-category--active');
    target.parent().addClass('promo__video-category--active');
    $('.promo__video-skin').fadeOut(0).attr('src', target.parent().attr('data-img')).fadeIn(400);
    $('.promo__play-block a').attr('href', target.parent().attr('data-link'));

  }
});

new WOW().init();
var contactsSlider;
var pricesSelector = Array.from(document.querySelectorAll('.contacts__swiper'));
if (pricesSelector.length > 0) {
function initContactsSwiper() {
  pricesSelector.foreach
    if(document.body.clientWidth <= 1250) {

         contactsSlider = new Swiper('.contacts__swiper', {
            slidesPerView: 'auto',
            speed: 2000,
            spaceBetween: 20,
            loop:true,
            autoplay: {
              delay: 3000,
            },
          });

        return contactsSlider;
    } else {
        if (contactsSlider) {
         contactsSlider.destroy();
        }
     contactsSlider = undefined;
        return contactsSlider;
    }
}

initContactsSwiper();

$(window).on('resize', function() {
    setTimeout(initContactsSwiper, 500)
})
}