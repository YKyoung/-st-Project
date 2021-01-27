$(function(){
    $('h1').css({'color':'red'});
    /*$('#typo .inner').css({'color':'blue', 'text-decoration':'underline'});
    $('#typo .inner').css({'border-bottom':'5px solid red', 'transform':'rotate(45deg)'});
    $('#typo .inner').css({'opacity':0.5});*/

    $('#typo .inner').css({
        'color':'blue',
        'text-decoration':'underline',
        'border-bottom':'5px solid red',
        'transform':'rotate(45deg)',
        'opacity':0.5
    });

   /* $('#typo, h1').mouseover(function(){
        $('#typo, h1').css('background-color','green');
    });

    $('#typo, h1').mouseout(function(){
        $('#typo, h1').css('background-color','#3498db');
    }); */
    // this 는 이벤트가 일어난 그 것
   /* $('#typo, h1').mouseover(function(){
        $(this).css('background-color','green');
    });

    $('#typo, h1').mouseout(function(){
        $(this).css('background-color','#3498db');
    }); */

    $('#typo, h1').mouseover(function(){
        $(this).css({'background-color':'green'});
    });

    $('#typo, h1').mouseout(function(){
        $(this).css({'background-color':'#3498db'});
    });

});

