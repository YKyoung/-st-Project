$(function () {
    //변수지정
    var slides = $('.slideshow img');
    var slideCount = slides.length;
    var currentIndex = 0;
    var timer;
    var ontimer = 100;
    
    //해당시간이 지나면 한번만 할일
    //setTimeout(할일, 1000);
    //clearTimeout(timer);
    
    //일정시간 마다 할일
    //var timer = setInterval(할일, 시간);
    //clearInterval(timer);
    
    //jquery 집합개체(object)중 특정번째 요소를 선택  .eq(숮자)
    //eq = equivanlent -동등한
    //요소를 서서히 나타나도록  .fadeIn()
   
    
    
    function timeron(){        
        
        timer = setInterval(showNextSlide, 3500);
    }


    function showNextSlide(){
        var nextIndex = (currentIndex +1) % slideCount;
        
        //현재 슬라이드가 사라지고, 
        slides.eq(currentIndex).fadeOut();
        //다음 스라이드가 나타남
        slides.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
        console.log(currentIndex);
    }

    slides.stop().mouseover(function(){
        clearInterval(timer);
        console.log("kkkkkkkk");
    });

    slides.stop().mouseout(function(){  
        timeron();
    
        ontimer = 10; 
        console.log(ontimer);
    });

    if(ontimer==100){
        timeron();
    }
    slides.eq(currentIndex).fadeIn();
    console.log(ontimer);    
});
