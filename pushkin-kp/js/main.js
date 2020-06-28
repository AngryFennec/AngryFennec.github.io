'use strict';

var Scrollbar = window.Scrollbar;

$('.service__step-block a').on('click', function(evt){
  evt.preventDefault();
  $(this).parent().find('p').slideToggle(400);

});

Scrollbar.init(document.querySelector('.service__step-wrapper'), {
  alwaysShowTracks: true,
});



