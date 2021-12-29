
// Typeit
new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Designer", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer")
    .pause(500)
    .delete(9)
    .go();
  





    $(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });

    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });






$(window).scroll(function(){
    var sc = $(window).scrollTop();
    if (sc > 150){
        $(".header").addClass("sticky");
    }

    else{
        $(".header").removeClass("sticky");
    }
});






$(window).on("load", function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter:'*',
        animationOptions: {
            queue: true
        }
    });

    $('.portfolio-nav li').click(function(){
        $('.portfolio-nav .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: { 
                queue: true
            }
        
        });
        return false;
    });

 
});

    $('#portfolio-item').mixItUp;


 $(window).on('load',function(){
     $('#preloader').delay(2050).fadeOut('slow');
     $('body').delay(3850).css({'overflow':'visible'});
 });


    });
    












    $("#contact-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxhiCJwIL9r_bvSZefYOrPKBk30k4H_ASz42FaBmHdaYMIM2r9pII9tAtnXWsyY8vmcrg/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                window.location.href="thankyou.html"
                
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })








    $(window).scroll (function(){

        if ($(this).scrollTop()>400){

            $('.goTop').fadeIn('2000');
        }

            else {
                $('.goTop').fadeOut('2000');

        }

    });



    $('goTop').click(function(){
        $('html,body').animate({scrollTop:0},100);
    });









