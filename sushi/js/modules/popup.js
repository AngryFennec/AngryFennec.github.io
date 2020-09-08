$(function(){
    $(document).on('keydown', function (evt) {
        if (evt.keyCode === 27) {
          $('.popup').fadeOut(300);
          $('body').removeClass('page-body--overflow');
        }
      });
      
      $('.popup').on('click', function (evt) {
        if ($(evt.target).hasClass('popup')) {
          $('.popup').fadeOut(300);
          $('body').removeClass('page-body--overflow');
        }
    });
})