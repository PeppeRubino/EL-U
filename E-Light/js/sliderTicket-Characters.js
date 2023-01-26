$(document).ready(function (){






    var slider = $(".slider");
    var heightSlide = parseInt(slider.height() / 9 - 4.6);
    var x = 0;


    /* Arrow Left*/
    $("#arrow-left").on('click', function() {

        x=x;
        x = x + heightSlide;
        if( x > 1900){ x = -1705}
        slider.animate({
            top: x + "px",
        })

    })


    /* Arrow Right*/
    $("#arrow-right").on('click', function() {
   
        x=x;
        x = x - heightSlide;
        if( x < -1900){ x = 1705}
        slider.animate({
        top: x + "px",
        })
    })


    /* Change .main-box - Function Left/Right */

    var array = document.querySelectorAll('div.box')                                    /*Array of tickets*/
    var middleboxInt = parseInt((array.length / 2) + 1);                                /* Center of tickets */
    $("div.box:nth-child(" + middleboxInt + ")").addClass("main-box");                  /* First .main-box ticket */ 
    var current = middleboxInt;                                                         /* Current .box in evidence */


    $("#arrow-left").on('click', function() {
        current--;
        if(current == 0){current = array.length}
        $("div.box:nth-child(n)").removeClass("main-box");
        $("div.box:nth-child(" + current + ")").toggleClass("main-box");
    });


    $("#arrow-right").on('click', function() {
        current++;
        if(current > array.length){current=1}
        $("div.box:nth-child(n)").removeClass("main-box");
        $("div.box:nth-child(" + current + ")").toggleClass("main-box");
        
    })





    });




