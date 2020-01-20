(function() {
  $(document).ready(function() {
    var swiperInstances = {};
    $('.swiper-container').each(function(index, element) {
      var $this = $(this);
      $this.addClass('instance-' + index);
      $this.find('.swiper-pagination').addClass('swiper-pagination-' + index);
      swiperInstances[index] = new Swiper('.instance-' + index, {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup:1,
        pagination: {
          el: '.swiper-pagination-' + index,
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
            slidesPerGroup: 2,

          },

        1024: {
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 3
    },
  }
      });
    });
    $('.swiper-container').each(function(index, element) {
      var swiper = this.swiper;
      swiper.update();
    });

    var newsList = $('.news__head-list ul li');
    var swipersList = $('.news__content ul li');

    $('.news__head-list ul').on('click', function(e) {
      var target = $(e.target);
      if (target[0].tagName === "A") {
        e.preventDefault();
        $('.news__head-list ul li').removeClass('active-item');
        $('.news__content ul li').removeClass('active-swiper');
        target.parent().addClass('active-item');
        swipersList.eq(target.parent().index()).addClass('active-swiper');
        swiperInstances[target.parent().index()].update();
      }
    });
    swipersList.eq(0).addClass('active-swiper');
    swiperInstances[0].update();
  });
})();