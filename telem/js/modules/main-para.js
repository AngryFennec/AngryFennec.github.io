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
  $(".para-btn").parallax(20, e);
  });