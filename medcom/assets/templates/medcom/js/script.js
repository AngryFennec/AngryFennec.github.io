/* Preloader */
$(window).on("load", function () {

    /*preload*/
    var preload = $('.preloader');
    preload.find('.spinner').fadeOut(function () {
        preload.fadeOut(500);
    });

});

$(function () {
	var sub_menu = $('.header .top-menu .sub-menu'), sub_menu_cl_items = sub_menu.find('.level1 > a');
	// if(0 == sub_menu.find('.level1.active').length) sub_menu.find('.level1').first().addClass('active');
	sub_menu.find('.level1').removeClass('active').first().addClass('active');
	sub_menu_cl_items.click(function(evt){
		if(evt.altKey || evt.ctrlKey) return;
		var p = sub_menu_cl_items.filter(this).parent();
		if(!p.hasClass('active'))
		 {
			sub_menu_cl_items.parent().removeClass('active');
			p.addClass('active');
		 }
		evt.preventDefault();
		return false;
	});
    /*tin*/
	$('.allservices-tab .type-tabs a').on('click', function(){
		var curTab = $(this).attr('href');
		$('.allservices-tab .type-tabs li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.allservices-tab .serv-tabs').css('display', 'none');
		$(curTab).css('display', 'block');
		return false;
	});

    $('input.polit').bind('change', function () {
        if ($(this).prop("checked")) {
            $(this).closest('form').find('input[type=submit]').removeAttr('disabled');
        } else {
            $(this).closest('form').find('input[type=submit]').attr('disabled', 'disabled');
        }
    });

    $(document).bind('mousemove', function () {
        $('form.antispam').each(function () {
            $(this).attr('action', $(this).attr('rel-action'));
            $(this).removeAttr('rel-action');
        });

        $(document).unbind('mousemove');
    });

    $(document).bind('touchstart', function () {
        $('form.antispam').each(function () {
            $(this).attr('action', $(this).attr('rel-action'));
            $(this).removeAttr('rel-action');
        });
        $(document).unbind('touchstart');
    });

    if ($('#call-popup .thank').length > 0) {
        $('.overlay').fadeIn(250, function () {
            $('#call-popup').animate({'top': $(window).scrollTop() + 100}, 500);
        });
    }

    if ($("input[name='title']").length) {
        $("input[name='title']").mask("+7 (999) 999-99-99", {placeholder: ""});
    }
    if ($('.ajax-pag').attr('countchilds') <= $('.news-items .news-col').length) {
        $('.ajax-pag').css('display', 'none');
    }
    $('.news-items').on('click', '.ajax-pag', function () {
        var offset = $('.news-items .news-col').length;
        var url = $(this).attr('href');
        var year = $('#ajax-year').val();
        var month = $('#ajax-month').val();
        $.ajax({
            type: "POST",
            url: url,
            data: "offset=" + offset + "&year=" + year + "&month=" + month,
            success: function (msg) {
                $('.news-items .clear').remove();
                $('.news-items .bts').remove();
                $('.news-items').append(msg);
                $('.news-items').append('<div class="clear"></div>');
                if ($('.ajax-pag').attr('countchilds') <= $('.news-items .news-col').length) {
                    $('.ajax-pag').css('display', 'none');
                }
            }
        });
        return false;
    });
    $('.news-filter select').bind('change', function () {
        var offset = $('.news-items .news-col').length;
        var year = $('#ajax-year').val();
        var month = $('#ajax-month').val();
        $.ajax({
            type: "POST",
            url: "/ajax/ajax-news-pag.html",
            data: "newFilter=1&year=" + year + "&month=" + month,
            success: function (msg) {
                $('.news-items').html(msg);
                $('.news-items').append('<div class="clear"></div>');
                if ($('.ajax-pag').attr('countchilds') >= $('.news-items .news-col').length) {
                    $('.ajax-pag').css('display', 'none');
                }
            }
        });
        return false;
    });

    $('.team-filter select').bind('change', function () {
        var department = $('#ajax-department').val();
        var specialty = $('#ajax-specialty').val();
        $.ajax({
            type: "POST",
            url: "/ajax/team-filter.html",
            data: "department=" + department + "&specialty=" + specialty,
            success: function (msg) {
                $('.team-items').html(msg);
            }
        });
        return false;
    });

   // $('.call-btn-spec').click(function () {
	$('.team-items').on('click', '.call-btn-spec', function () {
        $('#call-form input[name=doctor]').val($(this).attr('doc'));
        $('.overlay').fadeIn(250, function () {
            $('#call-popup').animate({'top': $(window).scrollTop() + 100}, 500);
        });
        return false;
    });
    $('.overlay, #call-popup .close').click(function () {
        $('#call-form input[name=doctor]').val('');
        $('#call-popup').animate({'top': '-3000px'}, 500, function () {
            $('.overlay').fadeOut(250);
        });
        return false;
    });
    $('.link-select select').bind('change', function () {
        window.location.href = $('#link-val').val();
    });
    // console.log($('.tab-items .serv-list ul').length);
    $('.tab-items .serv-list ul').autocolumnlist({
        columns: 2,
        classname: 'col',
        min: 1
    });
    $('.tab-items .serv-list ul ul.col').unwrap('ul');

    /* newLicense carousel */
    var newLicense_carousel = $(".newLicense-carousel .owl-carousel");

    newLicense_carousel.owlCarousel({
        margin: 30,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1180: {
                items: 3
            }
        }
    });
    /*ENDtin*/

	/* galleryNews carousel */
    var galleryNews_carousel = $(".galleryNews-carousel .owl-carousel");

    galleryNews_carousel.owlCarousel({
        margin: 30,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1180: {
                items: 1
            }
        }
    });



    var width = $(window).width();
    var height = $(window).height();

    /* Main carousel */
    var owl_slider = $(".main-started .owl-carousel");

    owl_slider.owlCarousel({
        margin: 0,
        items: 1,
        autoplay: false,
        loop: false,
        rewind: true,
        nav: true,
        dots: true
    });

    /* Service carousel */
    var owl2_slider = $(".service-carousel .owl-carousel");

    owl2_slider.owlCarousel({
        margin: 50,
        items: 1,
        autoplay: false,
        loop: false,
        rewind: true,
        nav: true,
        dots: false
    });

    /* License carousel */
    var owllicense_slider = $(".license-carousel .owl-carousel");

    owllicense_slider.owlCarousel({
        margin: 50,
        items: 8,
        autoplay: false,
        loop: false,
        rewind: true,
        nav: true,
        dots: false
    });

    /* Mission carousel */
    var owl3_slider = $(".mission-carousel .owl-carousel");

    owl3_slider.owlCarousel({
        margin: 50,
        items: 1,
        autoplay: false,
        loop: false,
        rewind: true,
        nav: false,
        dots: true
    });

    /* Spec carousel */
    var spec_carousel = $(".spec-carousel .owl-carousel");

    spec_carousel.owlCarousel({
        margin: 30,
        items: 3,
        autoplay: false,
        loop: false,
        rewind: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1180: {
                items: 3
            }
        }
    });

    /* Mobile Menu */
    $('.header').on('click', '.new-menu-btn', function () {
        if ($('.header').hasClass('opened')) {
            $('.header').removeClass('opened');

            $('body, html').css({'overflow': 'visible'});
            $('body, html').css({'height': 'auto'});
        } else {
            $('.header').addClass('opened');

            $('body, html').css({'overflow': 'hidden'});
            $('body, html').css({'height': '100vh'});
        }
        return false;
    });

    /* Serv Menu */
	if ($('.serv-menu').hasClass('new_serv')) {
	}
	else{
    $('.serv-menu').on('click', '.menu > ul > li > a', function () {
        if ($(this).parent().hasClass('active')) {
            $('.serv-menu .menu > ul > li').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.serv-menu .menu > ul > li').removeClass('active');
            $(this).parent().addClass('active');
        }
        return false;
    });
	}

    /* Service Tabs */
    $('.serv-tabs .tab-menu').on('click', 'a', function () {
        var tab_item = $(this).attr('href');
       // $('.serv-tabs .tab-menu ul li').removeClass('active');
       // $('.serv-tabs .tab-items .tab-item').hide();
        $(this).closest('.serv-tabs').children('.tab-menu').find('li').removeClass('active');
        $(this).closest('.serv-tabs').children('.tab-items').children('.tab-item').hide();
        $(this).parent().addClass('active');
        $(tab_item).fadeIn();
        return false;
    });

    /* Spec Tabs */
    $('.spec-tabs .menu').on('click', 'a', function () {
        var tab_item = $(this).attr('href');
        $('.spec-tabs .menu ul li').removeClass('active');
        $('.spec-tabs .tabs .tab').hide();
        $(this).parent().addClass('active');
        $(tab_item).fadeIn();
        return false;
    });
    $('.spec-sel select').change(function () {
        var str = $(this).val();

        $('.spec-tabs .tabs .tab').hide();
        $(this).closest('.spec-tabs').find(str).fadeIn();
    });

    /* Ben Tabs */
    $('.ben-tabs .menu').on('click', 'a', function () {
        var tab_item = $(this).attr('href');
        $('.ben-tabs .menu ul li').removeClass('active');
        $('.ben-tabs .tabs .tab').hide();
        $(this).parent().addClass('active');
        $(tab_item).fadeIn();
        return false;
    });


    /* Maps Contacts Tabs1 */
    $('.cont-tab').on('click', '.adr', function () {
        if ($(this).closest('.cont-tab').hasClass('active')) {
            $('.cont-tab').removeClass('active');
            $(this).closest('.cont-tab').find('.info').slideUp();
        } else {
            $('.cont-tab').removeClass('active');
            $('.cont-tab .info').slideUp();
            $(this).closest('.cont-tab').addClass('active');
            $(this).closest('.cont-tab').find('.info').slideDown();
            myMap.setCenter([57.767265, 40.925358]);
        }
        return false;
    });

    /* Pricing Tabs */
    $('.pricing-item').on('click', '.name', function () {
        if ($(this).closest('.pricing-item').hasClass('active')) {
            $('.pricing-item').removeClass('active');
            $('.pricing-item').find('.text').slideUp();
        } else {
            $('.pricing-item').removeClass('active');
            $('.pricing-item').find('.text').slideUp();
            $(this).closest('.pricing-item').addClass('active');
            $(this).closest('.pricing-item').find('.text').slideDown();
        }
        return false;
    });

    /* Faq Tabs */
    $('.faq-item').on('click', '.name', function () {
        if ($(this).closest('.faq-item').hasClass('active')) {
            $('.faq-item').removeClass('active');
            $('.faq-item').find('.text').slideUp();
        } else {
            $('.faq-item').removeClass('active');
            $('.faq-item').find('.text').slideUp();
            $(this).closest('.faq-item').addClass('active');
            $(this).closest('.faq-item').find('.text').slideDown();
        }
        return false;
    });

    /* Gallery */
    $(".gallery-group").fancybox({
        // Options will go here
    });

    /* Form Styler */
    if ($('.styler').length) {
        $('input.styler, select.styler').styler();
    }

    /* Tel Mask */
    if ($("input[name='tel']").length) {
        $("input[name='tel']").mask("+7 (999) 999-99-99", {placeholder: ""});
    }
    /* Tel Mask */
    if ($("input[name='daten']").length) {
        $("input[name='daten']").mask("99 - 99 - 9999", {placeholder: ""});
    }

    /* Call Popup */
    $('.call-btn').click(function () {
        $('.overlay').fadeIn(250, function () {
            $('#call-popup').animate({'top': $(window).scrollTop() + 100}, 500);
        });
        return false;
    });

    /* Validation Forms */

    /* Enroll Form */
    $("#enroll-form").validate({
        success: "valid"
    });

    /* Call Form */
    $("#call-form").validate({
        success: "valid"
    });

    /* Faq Form */
    $("#faq-form").validate({
        success: "valid"
    });

    /* Faq Form */
    $("#profile-form").validate({
        success: "valid"
    });

    /*Yandex Maps Markers*/
    if ($('.map').length) {
        ymaps.ready(init);

    }

    function clickBaloon(curTab) {
        curTab.siblings('.active').find('.c-text').slideUp();
        curTab.siblings('.active').removeClass('active');
        curTab.addClass('active');
        curTab.find('.c-text').slideDown();
    }

    function init() {

        var myMap = new ymaps.Map("map", {
            center: [54.660719, 39.664285],
            zoom: 12,
            controls: ['zoomControl']
        });

        var myGeoObjects = [];

        myGeoObjects[0] = new ymaps.Placemark([54.621022, 39.748511], {
            clusterCaption: 'Заголовок',
            //balloonContentBody: 'Текст в балуне',
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            iconImageHref: 'assets/templates/medcom/images/map_point.svg',
            // Размеры метки.
            iconImageSize: [68, 68],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-34, -34]
        });
        myGeoObjects[1] = new ymaps.Placemark([54.660736, 39.664260], {
            clusterCaption: 'Заголовок',
            //balloonContentBody: 'Текст в балуне',
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            iconImageHref: 'assets/templates/medcom/images/map_point.svg',
            // Размеры метки.
            iconImageSize: [68, 68],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-34, -34]
        });

        myGeoObjects[2] = new ymaps.Placemark([54.629570, 39.730500], {
            clusterCaption: 'Заголовок',
            //balloonContentBody: 'Текст в балуне',
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            iconImageHref: 'assets/templates/medcom/images/map_point.svg',
            // Размеры метки.
            iconImageSize: [68, 68],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-34, -34]
        });

        var clusterIcons = [{
            href: 'assets/templates/medcom//images/map_point.svg',
            size: [68, 68],
            offset: [0, 0]
        }];

        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
            // Устанавливаем стандартный макет балуна кластера "Карусель".
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            // Устанавливаем собственный макет.
            //clusterBalloonItemContentLayout: customItemContentLayout,
            // Устанавливаем режим открытия балуна.
            // В данном примере балун никогда не будет открываться в режиме панели.
            clusterBalloonPanelMaxMapArea: 0,
            // Устанавливаем размеры макета контента балуна (в пикселях).
            clusterBalloonContentLayoutWidth: 300,
            clusterBalloonContentLayoutHeight: 200,
            // Устанавливаем максимальное количество элементов в нижней панели на одной странице
            clusterBalloonPagerSize: 5
            // Настройка внешего вида нижней панели.
            // Режим marker рекомендуется использовать с небольшим количеством элементов.
            // clusterBalloonPagerType: 'marker',
            // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
            // clusterBalloonCycling: false,
            // Можно отключить отображение меню навигации.
            // clusterBalloonPagerVisible: false
        });
        myGeoObjects[0].events.add("click", function () {
            myMap.setZoom(15);
            myMap.setCenter([54.621022, 39.748511])
            clickBaloon($('.c-tab').eq('1'));

        });


        myGeoObjects[1].events.add("click", function () {
            myMap.setZoom(15);
            myMap.setCenter([54.660736, 39.664260]);
            clickBaloon($('.c-tab').eq('0'));
        });


        myGeoObjects[2].events.add("click", function () {
            myMap.setZoom(15);
            myMap.setCenter([54.629570, 39.730500])
            clickBaloon($('.c-tab').eq('2'));
        });
        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);

        /* Maps Tabs1 */
        $('.c-tab').on('click', '.c-name', function () {
            if ($(this).closest('.c-tab').hasClass('active')) {
                $('.c-tab').removeClass('active');
                $(this).closest('.c-tab').find('.c-text').slideUp();
            } else {
                $('.c-tab').removeClass('active');
                $('.c-tab .c-text').slideUp();
                $(this).closest('.c-tab').addClass('active');
                $(this).closest('.c-tab').find('.c-text').slideDown();
                var coord = $(this).attr('coor').split(',');
                myMap.setCenter(coord);
                myMap.setZoom(15);
            }
            return false;
        });
    }
});

//счетчики яндекса
function yandexCounter(goal) {
    yaCounter33981715.reachGoal(goal);
    //console.log(goal);
}
function is_valid(form)
{
    var is_valid = true;
    $(form).find ('input, textarea').each(function(index, element) {
        if($(element).hasClass("error")){
            is_valid = false;
        }
    });
    return is_valid;
}
$(document).ready(function () {
    var url = document.location.href;
    var url_lenght = url.split('/').length;
    url.split('/').forEach(function (element) {
        if (element == 'medkomissii-i-spravki') {
            $("#enroll-form").addClass("medkomissii-i-spravki_form");
        } else if ((element == 'priem-specialistov' || element == 'priem-specialistov.html') && (url_lenght <= 6)) {
            $("#uslugi_enroll_btn").addClass("priem_btn");
            $("#enroll-form").addClass("priem-specialistov_form");
        } else if (element == 'diagnostika' || element == 'diagnostika.html') {
            $("#uslugi_enroll_btn").addClass("diagnostika_btn");
            $("#enroll-form").addClass("diagnostika_form");
        } else if (element == 'kosmetologiya' || element == 'kosmetologiya.html') {
            $("#uslugi_enroll_btn").addClass("kosmetologiya_btn");
            $("#enroll-form").addClass("kosmetologiya_form");
        }else if(element == 'specialisty' && (url_lenght == 5)){
            $(".call-btn-spec").addClass("specialisty_inner_btn");
        }
    });
    //кнопка "записаться онлайн" в шапке
    $("#call-btn").on('click', function () {
        $("#call-form")
            .removeClass("application_form")
            .removeClass("about_form")
            .removeClass("specialist_form")
            .removeClass("uslugi_form")
            .removeClass("priem_form")
            .removeClass("diagnostika_form")
            .removeClass("kosmetologiya_form")
            .removeClass("specialisty_inner_form");
        yandexCounter('g1');
    });
    //эндопротезирование суставов
    $("#slide_btn_133").on('click', function () {
        yandexCounter('a1');
    });
    //комплекс услуг за 1000р
    $("#slide_btn_35").on('click', function () {
        yandexCounter('a2');
    });
    //услуга для будущих мам
    $("#slide_btn_41").on('click', function () {
        yandexCounter('a3');
    });
    //кнопка оставить заявку на главной
    $("#application_btn").on('click', function () {
        $("#call-form").addClass("application_form");
        yandexCounter('g3');
    });

    //отправки "формы записаться онлайн" в шапке
    $("#call-form").on('submit', function () {
        if(is_valid(this)) {
            if ($(this).hasClass("application_form") === true) {
                //отправка формы оставить заявку на главной
                yandexCounter('g4');
            } else if ($(this).hasClass("about_form") === true) {
                //отправка формы оставить заявку на странице о клиниках
                yandexCounter('o2');
            } else if ($(this).hasClass("specialist_form") === true) {
                //отправка формы оставить заявку на странице врачей
                if($(this).hasClass("specialisty_inner_form") === true){
                    //отправка формы оставить заявку на странице врача
                    yandexCounter('cosmetik14');
                }else{
                    yandexCounter('v2');
                }
            } else if ($(this).hasClass("uslugi_form") === true) {
                //отправка формы оставить заявку на странице услуги
                yandexCounter('s2');
            } else if ($(this).hasClass("priem_form") === true) {
                //отправка формы оставить заявку на странице услуги
                yandexCounter('spec3');
            } else if ($(this).hasClass("diagnostika_form") === true) {
                //отправка формы оставить заявку на странице услуги
                yandexCounter('diagnostik3');
            } else if ($(this).hasClass("kosmetologiya_form") === true) {
                //отправка формы оставить заявку на странице услуги
                yandexCounter('cosmetik3');
            } else {
                yandexCounter('g2');
            }
        }
    });

    //форма встроенная форма "Записаться на прием" на всех страницах
    $("#enroll-form").on('submit', function (event) {
        if(is_valid(this)){
            if ($(this).hasClass("medkomissii-i-spravki_form") === true) {
                //отправка встроенной формы Записаться на прием на странице услуги-Медкомиссии и справки
                yandexCounter('s3');
            } else if ($(this).hasClass("priem-specialistov_form") === true) {
                //отправка встроенной формы Записаться на прием на странице услуги-Прием специалистов
                yandexCounter('spec1');
            } else if ($(this).hasClass("diagnostika_form") === true) {
                //отправка встроенной формы Записаться на прием на странице услуги-Функциональная диагностика
                yandexCounter('diagnostik1');
            } else if ($(this).hasClass("kosmetologiya_form") === true) {
                //отправка встроенной формы Записаться на прием на странице услуги-Косметология
                yandexCounter('cosmetik1');
            } else {
                yandexCounter('g5');
            }
        }
    });
    //скачать прайс
    $("#download_price").on('click', function () {
        yandexCounter('p1');
    });
    // кнопка записать на примем на странице о клиниках
    $("#about_enroll_btn").on('click', function () {
        $("#call-form").addClass("about_form");
        yandexCounter('o1');
    });
    //отправка формы на странице вопрос-ответ
    $("#faq-form").on('submit', function () {
        if(is_valid(this)) {
            yandexCounter('g5');
        }
    });
    //кнопки записаться на странице врачей
    $(".call-btn-spec").on('click', function () {
        $("#call-form").addClass("specialist_form");
        yandexCounter('v1');
    });
    //кнопка на странице услуги
    $("#uslugi_enroll_btn").on('click', function () {
        if ($(this).hasClass("priem_btn") === true) {
            $("#call-form").addClass("priem_form");
            yandexCounter('spec2');
        } else if ($(this).hasClass("diagnostika_btn") === true) {
            $("#call-form").addClass("diagnostika_form");
            yandexCounter('diagnostik2');
        } else if ($(this).hasClass("kosmetologiya_btn") === true) {
            $("#call-form").addClass("kosmetologiya_form");
            yandexCounter('cosmetik2');
        } else {
            $("#call-form").addClass("uslugi_form");
            yandexCounter('s1');
        }
    });
    //форма на внутренней врачей
    $("#profile_btn").on('click', function () {
        yandexCounter('specialisty');
    });
    // кнопки слайдера на странице врача
    $(".specialisty_inner_btn").on('click', function () {
        $("#call-form").addClass("specialisty_inner_form");
    });
});
