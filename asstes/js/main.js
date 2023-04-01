$(document).ready(function(){

    $(window).scroll(function(){

       let x =  $(window).scrollTop();
       if (x > 130) {
        $(".go-home").css("opacity","1")
       }else{
        $(".go-home").css("opacity","0")

       }


    })


})








































