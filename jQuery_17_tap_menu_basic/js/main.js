$(function () {
    var $tapAnchor = $('.tabs-nav li a');
    var $tapPanel = $('.tabs-panel');

    ///링크를 클릭하면..
    $tapAnchor.click(function(evnt){
        
        /* a 태그나 submit 태그는 누르게 되면 href 를 통해 
        이동하거나 , 창이 새로고침하여 실행됩니다.*/
        evnt.preventDefault();  //이벤트를 취소

        $tapAnchor.removeClass('active');//모두 빼고
        $(this).addClass('active'); //그 요소만 추가 S

        $tapPanel.hide();
        
        //Work 01 클릭하면  $('#work01').show()        
        var $target = $(this).attr('href');
        console.log('');
        $($target).show();
        //$('#work02').show();
        
        /* siblings :그 요소에만 active를 추가하고 나머지 요소에서 
           뺀다. 그렇지만 여기서는 자식이 없어 안됨
        $(this).addClass('active').siblings().removeClass('active'); */
    });
});

