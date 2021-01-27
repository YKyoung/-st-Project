$(function(){
    var $aside = $('aside');
    var $button = $aside.find('button');
    var $duration = 300;

    // 버튼을 클릭하면 aside가 나오도록 해주세요.
    // A.addClass('b c');  A.removeClass('b'); A.toggleClass('b');
    // A.haxClass('b');  조건문에서만 사용 A요소에 b라는 클래스가 있으면 true  

    // jquery 속성변경, 속성의 값을 바꾸기
    // var c = A.attr('src'); A라는 요소의 b라는 속성의 값을 c에 저장
    // A.attr('b', 'c'); A라는 요소의 b라는 속성의 값을 c로 변경

    //console.log($button.find('img').attr('src'));

    $button.click(function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $aside.stop().animate({left:'-70px'}, $duration, 'easeOutBack');
            $button.find('img').attr('src', 'img/btn_close.png');
        }else{
            $aside.stop().animate({left:'-350px'}, $duration, 'easeInBack');
            $button.find('img').attr('src', 'img/btn_open.png');
        }
    
        //$aside.addClass('open');
        //$aside.stop().animate({left:0}, $duration);
    });
});