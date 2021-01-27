/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

var $window = $(window);
var $mainHeader =$('#main-header');
var $defaultLogo = 'images/logo.svg';
var $smallLogo = 'images/logo-shrink.svg';

$window.scroll(function(){
    if($(this).scrollTop() > 100){
        if(!$mainHeader.hasClass('shrink')){
            $mainHeader.addClass('shrink');
            switchImages($smallLogo);
        }
    }else{
        if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink');
            switchImages($defaultLogo);
        }
    }    
});

function switchImages(newPath){
    var $logo = $('#logo');
    $logo.fadeOut(500, function(){
        // var c = A.sttr('src');
        // A,attr('src', 'c')
        $logo.attr('src', newPath);
        $logo.fadeIn(500);
    });  //jquery fadeOut

}

/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

