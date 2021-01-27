$(function () {
    var $wind = $(window);
    var $header = $('.page-header');
    var $headerOffsetTop = $header.offset().top;

    //console.log($headerOffsetTop);

    $wind.scroll(function(){
        if($wind.scrollTop() >= $headerOffsetTop){
            //.page-header.sticky { position: fixed; top: 0; }
       
            $header.addClass('sticky');

        }else{
            $header.removeClass('sticky');  
        }
            
    });
});

