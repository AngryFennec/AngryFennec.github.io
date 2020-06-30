var rellax = new Rellax('.rellax');
/*
(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();
*/
$(document).ready(function(){
    $(".main-header__button a").click(function(){
        $(".main-header__overlay").fadeToggle(200);
       $(this).toggleClass('main-header__btn-open').toggleClass('main-header__btn-close');
    });
});
$('.main-header__overlay').on('click', function(){
    $(".main-header__overlay").fadeToggle(200);
    $(".main-header__button a").toggleClass('main-header__btn-open').toggleClass('main-header__btn-close');
    open = false;
});

/*
$(".main-header__menu-link").hover(function(){
    $(this).addClass('animate__animated animate__pulse');
});
$(".main-header__menu-link").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animate__animated animate__pulse');
});
*/
