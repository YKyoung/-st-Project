/*$(function(){
    
    //선택자.animate({속성:값, 속성:값}, 시간, 이징(Easing), 다른할일);
    
    $('#typo, inner').click(function(){
        $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'easeInSine',
        function(){
            $(this).animate({
                opacity:1,
                fontSize:'110px'}, 1500);
        });
    });


});*/

$(function(){
    $('#typo, inner').click(function(){
        $(this).animate({opacity:0, fontSize:'0px'}, 2000, 'easeInSine',
        function(){
            $(this).animate({opacity:1, fontSize:'110px'}, 1500)
        });
    });
});