/* Js / Main 1 - Slider of covers / Method: Change Class / Dbl animation */
// Comment: Don't change nothing! This functions are instable and only the author is competent to modify it.
//For developer: I tryed to put "currentIn - 1" like a calc on nth-child, to remove some step from code but Js don't work. I avoided this problem by adding "var backCurrentIn/Out" to define the back value of currentIn/Out after ++.

var currentOut = 1;                     // First Cover
var currentIn = 2;                      // Second Cover
var numMax = 5;                         // NumMax Covers


var covers =  document.querySelectorAll('.cover');              //Array of covers
var arrow = document.querySelector('#arrow');                   //Arrow-bottom



  arrow.addEventListener ('click', function (){                                                                                     //Function on click: Add and Remove Animation(covers from Left)

    currentIn = currentIn;
    var backCurrentIn = currentIn - 1;
    if(currentIn > numMax){currentIn = 1, backCurrentIn = 5};

    document.querySelector(".cover:nth-child(" + currentIn + ")").classList.add("animationCoverL");
    document.querySelector(".cover:nth-child(" + backCurrentIn + ")").classList.remove("animationCoverL");
    currentIn++;

}) 


arrow.addEventListener ('click', function (){                                                                                        //Function on click: Add and Remove Animation(covers from Right)
    currentOut = currentOut;
    var backCurrentOut = currentOut - 1;
    if(currentOut > numMax){currentOut = 1; backCurrentOut = 5;};

    document.querySelector(".cover:nth-child(" + currentOut + ")").classList.add("animationCoverR");
    currentOut++;
    document.querySelector(".cover:nth-child(" + backCurrentOut + ")").classList.remove("animationCoverR");
}) 



document.querySelector(".cover:nth-child(1)").style.zIndex = "2";
arrow.addEventListener('click', function(){                                                                                     // Function: First image display
    document.querySelector(".cover:nth-child(1)").style.zIndex = "0";
})




/* Js / Main 1 - Slider of plots / Method: Change Class */

var currentTxt = 1;
var maxText = 5;
var arrayTxt =  document.querySelectorAll('.plot');



arrow.addEventListener('click', function(){
    for( var i = 1; i <= maxText; i++){
        document.querySelector(".plot:nth-child("+ i + ")").classList.add("hidden");
    };
        currentTxt=currentTxt;
        currentTxt++;
        if(currentTxt > 5){currentTxt = 1; };
        document.querySelector(".plot:nth-child("+ currentTxt + ")").classList.remove("hidden");
        
        
        
})




/* Js / Main 1 - Slider of background / Method: IF related to plots change */

var mainContainerBg = document.getElementById("main-container-I");
var currentBg = 1;
var maxBg = 5;
console.log(mainContainerBg)

mainContainerBg.style.backgroundImage = "linear-gradient(77deg, rgba(15, 13, 107, 0.164), rgba(156, 10, 10, 0.192))";
mainContainerBg.style.backgroundImage = "url('/E-Light/img/bg/bgStory/line1.png')";

 arrow.addEventListener('click', function(){
    currentBg++;
    if(currentBg > 5){currentBg = 1};
    
    if(currentBg == 1){mainContainerBg.style.backgroundImage = "url('/E-Light/img/bg/bgStory/line1.png')";};
    if(currentBg == 2){mainContainerBg.style.backgroundImage = "url('/E-Light/img/bg/bgStory/line2-2.png')"};
    if(currentBg == 3){mainContainerBg.style.backgroundImage = " url('/E-Light/img/bg/bgStory/line3.png')"};
    if(currentBg == 4){mainContainerBg.style.backgroundImage = "url('/E-Light/img/bg/bgStory/line4.png')"};
    if(currentBg == 5){mainContainerBg.style.backgroundImage = "url('/E-Light/img/bg/bgStory/line0-2.png')"};


}) 
