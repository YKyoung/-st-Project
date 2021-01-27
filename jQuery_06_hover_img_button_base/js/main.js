$(function(){
    var $duration =300;
    var $buttons = $('#buttons2 button');
    //var $buttons= document.getElementsByTagName('button');

    //console.log($buttos);

    //$buttons[0].style.top = '-40px';
    //$buttons[0].style.top = '0px';

    // button의 높이  -40, 0, 40, 80, 120....
    //javascript의 요소들마다 할일

   /*for(var i=0; i<=$buttons.length; i++){
        $buttons[i].style.top = i*40-40 +'px';    
        console.log(i);
    }*/
    //console.log($buttons);

    //jquery for문
    $buttons.each(function(index){
        //console.log(index);
        //선잭자.css({속성:값, 속성:값})

        //$(this).css({top:idx*idx40-40+'px'});
        var newTop = index * 40 - 40 + 'px';
        $(this).css({top:newTop});
    });

    $buttons.mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity:0}, $duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:1}, $duration);
    });
    $buttons.mouseout(function(){
        $(this).stop().animate({backgroundColor:'#fff', color:'#b3d4fc'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity:1}, $duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:0}, $duration);
    });
});