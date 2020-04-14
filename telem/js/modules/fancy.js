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