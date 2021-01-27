$(function(){
    var $duration = 300;
    var $image = $('#images p');

    //공백 o = find
    //공백 x = filter
    //#image p span {} -> $image.find('span')
    //#image p.strong {} -> $image.filter('strong') 
    //선택자.animate({속성:값, 속성:값},시간, 이징, 다른할일);
    
    $image.filter(':first-child').mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity:1}, $duration);        
    });
    $image.filter(':first-child').mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0});
    });

    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
    });
    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('strong').stop().animate({left:'0%', opacity:1}, $duration);
    });
    $image.filter(':nth-child(2)').mouseout(function(){
        $(this).find('span').stop().animate({opacity:0});
    });
    $image.filter(':nth-child(2)').mouseout(function(){
        $(this).find('strong').stop().animate({left:'-200%', opacity:1});
    }); 
    
    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({bottom:0}, $duration);
        $(this).find('img').stop().animate({top:'-40px'}, $duration);
    });
    $image.filter(':nth-child(3)').mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({bottom:'-80px'}, $duration);
        $(this).find('img').stop().animate({top:0}, $duration);
    });  
    
});