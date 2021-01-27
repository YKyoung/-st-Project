$(function () {
    var $window = $(window);
    var $header = $('.page-header');
    
    // $header 모두를 clone하는게 아니라 자식 만을 복재
    var $headerClone = $header.contents().clone();
    var $headerCloneContainer = $('<div class="page-header-clone"></div>');
    //outerHeight(true)는 border의 height까지 구함
    var $threshold = $header.offset().top + $header.outerHeight();

    //console.log($headerClone);

    //A.append(B)
    $headerCloneContainer.append($headerClone);

    //A.appendTo(b)
    $headerCloneContainer.appendTo('body');

    //$window.scroll(function(){
    //$.throttle 함수 적용
    //$window.on('scroll', $.throttle(1000/15, function(){
    $window.scroll($.throttle(1000/15, function(){    
        if($(this).scrollTop() >= $threshold){
            $headerCloneContainer.addClass('visible');
           
        }else{
            $headerCloneContainer.removeClass('visible');
        }
    }));   
});


