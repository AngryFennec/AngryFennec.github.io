$(function(){
    const minPrice = 2000; //минимальная сумма заказа

    const input = $('input[name="phone"]')[0];
    let im = new Inputmask("8 (999) 999-99-99");
    if(input)im.mask(input);

    //табы
    $('.order__tabs-adress').on('click', function(evt){
        evt.preventDefault();
        $('.order__tabs a').removeClass('order__tabs-active');
        $(this).addClass('order__tabs-active');
        $('.order__part--no-delivery').hide();
        $('.order__part--adress').show();
    });

    $('.order__tabs-no-delivery').on('click', function(evt){
        evt.preventDefault();
        $('.order__tabs a').removeClass('order__tabs-active');
        $(this).addClass('order__tabs-active');
        $('.order__part--adress').hide();
        $('.order__part--no-delivery').show();
    })

    $('#time-hour').select2({
        minimumResultsForSearch: Infinity
    });
    $('#time-minutes').select2({
        minimumResultsForSearch: Infinity
    });

    $('.order form').on('submit', function(evt){
        let total = 1500;//вычленить сумму заказа

        //валидация
        if ($('input["name"]').val().length > 1 && total >= minPrice && $('input["phone"]').val().length > 10) {
            $.ajax({
                url: '',
                method: 'post',
                dataType: 'json', 
                data: new FormData($('.order form')[0]),
                success: function(data){  
                    //показ окошка попапа
                    $('body').addClass('.page-body--overflow');
                    $('.popup').show();        
                }
            });
        } else {
            evt.preventDefault();
        }
    });

    //показ нужной кнопки
    $('.order form').on('change', function(evt){
        $('.order__total button').hide();
        if ($("input[name='payment']:checked").val() === 'apple') {
            $('.order__total .button--apple').show();
        } else if ($("input[name='payment']:checked").val() === 'google') {
            $('.order__total .button--google').show();
        } else {
            $('.order__total .button--normal').show();
        }
    });

    //смена картинок в инпутах
    $('input[name="name"]').on('input', function(){
        if($(this).val().length > 1) {
            $(this).attr('class', 'order__input-true');
        } else {
            $(this).attr('class', 'order__input-false');
        }
    });

})