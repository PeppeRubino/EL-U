var vImg = 3;
var current = 1;

const arrowSx = document.getElementById("arrow-l"),
      arrowDx = document.getElementById("arrow-r");


 arrowDx.onclick = function slideRight(){
    current++;
    if(current > vImg){
        current = 1;
    };
    for(var i= vImg; i>0; i--){
        document.querySelector("#bg-slides img:nth-child(" + i +")").style.display = "none";
    }
    document.querySelector("#bg-slides img:nth-child(" + current +")").style.display = "block";
 };


 arrowSx.onclick = function slideLeft(){
    current--;
    if(current == 0){
        current = 3;
    };
    for(var i= vImg; i>0; i--){
        document.querySelector("#bg-slides img:nth-child(" + i +")").style.display = "none";
    }
    document.querySelector("#bg-slides img:nth-child(" + current +")").style.display = "block";
 };