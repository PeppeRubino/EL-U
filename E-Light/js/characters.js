

function mostraDiv(numeroDiv) {
    var calcOfTranslateY = sliderheight / array.length;
    var startSlider = (sliderheight / 2);
    var position0Box = startSlider + calcOfTranslateY;
    var divCorrente = document.getElementById("div" + numeroDiv);
    var slider = document.querySelector(".slider");
    var calc = position0Box - (numeroDiv * calcOfTranslateY)

    $("div.box:nth-child(n)").removeClass("main-box");
    divCorrente.classList.add("main-box");
    slider.style.transform = "translateY(" + calc + "px)";
  }








      /* Change .main-box - Function Left/Right */
     var arrT = document.querySelector("#arrow-top")
     var arrB = document.querySelector("#arrow-bottom")
     var array = document.querySelectorAll('div.box')                                    /*Array of tickets*/
     var middleboxInt = parseInt((array.length / 2) + 1); 
     
     /* Center of tickets */
      $("div.box:nth-child(" + middleboxInt + ")").addClass("main-box");                  /* First .main-box ticket */ 
      var current = middleboxInt;                                                         /* Current .box in evidence */                             
  
  
      arrT.addEventListener('click', function() {
          current--;
          if(current == 0){current = array.length}
          $("div.box:nth-child(n)").removeClass("main-box");
          $("div.box:nth-child(" + current + ")").toggleClass("main-box");
      });
  
  
      arrB.addEventListener('click', function() {
          current++;
          if(current > array.length){current=1}
          $("div.box:nth-child(n)").removeClass("main-box");
          $("div.box:nth-child(" + current + ")").toggleClass("main-box");
          
      });





      /* Slide - Function Left/Right */

      var slider = document.querySelector(".slider");
      var sliderheight = document.querySelector(".slider").offsetHeight;
      var calcOfTranslateY = sliderheight / array.length;
      var endSlider = -((sliderheight / 2) - calcOfTranslateY + 1)
      var startSlider = ((sliderheight / 2) - calcOfTranslateY + 1)
      var calcSum = 0;


      arrT.addEventListener('click', function() {
        if(calcSum > startSlider) { calcSum = -(startSlider - 1), slider.style.transform = "translateY("+ calcSum + "px)"; }
        
        else{
        calcSum = calcSum;
        calcSum = calcSum + calcOfTranslateY;
        slider.style.transform = "translateY("+ calcSum +"px)"}


      })


      arrB.addEventListener('click', function() {
        console.log(sliderheight)
        console.log(calcSum)
        console.log(endSlider + calcOfTranslateY)

        if(calcSum < endSlider + calcOfTranslateY) { calcSum = (startSlider + calcOfTranslateY), slider.style.transform = "translateY("+ calcSum + "px)"; }
        else {
        calcSum = calcSum;
        calcSum = calcSum - calcOfTranslateY;
        slider.style.transform = "translateY("+ calcSum +"px)"}


      })