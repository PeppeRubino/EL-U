
/*Intersecting Observer -- INDEX.html*/


    
    
    
    /*
    
  var callback = function(items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('show');
        }  else {
            item.target.classList.remove('show');
        }
    });
};

const observer = new IntersectionObserver(callback, { threshold:0.5});

var hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

*/



// Jquery/Js - Index - Main I - Pause text on click


const text = document.querySelector("div.scroll-text");


text.addEventListener('click', function() {                         //Animation: paused text on click
    if (text.style.animationPlayState === "running") {
        text.style.animationPlayState = "paused" }
        else{text.style.animationPlayState = "running"}
   
})


// Js - Index - Main I - back animation on dbl click

document.addEventListener('dblclick', function(){
    if( text.style.animationPlayState === "paused" && text.style.animationDirection === "normal" ) {
        text.style.animationDirection ="reverse"}
})

document.addEventListener('dblclick', function(){
    if( text.style.animationDirection === "reverse" && text.style.animationPlayState === "running") {
        text.style.animationDirection ="normal"}

})





// scrollText - Open view 

var sliderTextContainer = document.querySelector("#main-writesection-container");
var entrance1 = 700;

document.addEventListener('scroll', function(){

if(window.scrollY > entrance1){ sliderTextContainer.classList.remove("animation3")}
else { sliderTextContainer.classList.add("animation3")}
})


// Jquery/Js - Index - Main II - Ticket Info Animation on scroll

$(document).ready( function() {


var buttonsInfoLx =  $("div#ticket-I-lx");              //Tickets info Rx - Main 2 
var buttonsInfoRx =  $("div#ticket-I-rx");              //Tickets info Rx - Main 2  
var entrance2 = 550.25                                  //Val. of vw


document.addEventListener('scroll', function() {
    
    if (window.scrollY > entrance2) 
    { buttonsInfoLx.addClass("animation1")}             // Animation: Animation1 - from left
else { 
     buttonsInfoLx.removeClass("animation1")
     buttonsInfoLx.addClass("hidden1") }      

});

document.addEventListener('scroll', function() {
    if (window.scrollY > entrance2)
       { buttonsInfoRx.addClass("animation2")}          // Animation: Animation2 - from right
  else { 
        buttonsInfoRx.removeClass("animation2")
        buttonsInfoLx.addClass("hidden1") }      

    })

});




// Js - Index - Main II - bg exit on scroll






document.addEventListener('scroll', function() {
    var bg2 = document.getElementById("div-main-II");                           // div in flex on main-II
    var registration = document.getElementById("ticket-II")                     // ticket-II (info:start with 2 eyes)
    var heightScroll = window.scrollY;                                          // Pos Y scroll
    var heightBg = "    " + heightScroll - 100 + "px";                          // Calc: background height


    if( window.scrollY > 205.20){bg2.style.height = heightBg}                   // Start of background
    else{bg2.style.height = 0}                                                  // Height start
    if( window.scrollY > 900.20){ bg2.style.height = "900.20px"}                // End of background

    if(window.scrollY > 700.20){                                                //Animation 4: animation of "registration" zone
        registration.classList.add("animation4")  
        registration.classList.remove("hidden1")    }              
    else{
        registration.classList.remove("animation4")
        registration.classList.add("hidden1")    }
});

