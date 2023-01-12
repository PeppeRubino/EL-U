const bg = document.querySelectorAll(".bg"),
      current = 0;

const arrowSx = document.getElementById("arrow"),
      arrowDx = document.getElementById("arrow2");


//Clear images//
function reset(){
    for ( i=0 ; i< bg1.length; i++){
    bg.lenght[0].style.display = 'none';
    }
}

//init - First Image//
function startSlide(){
    reset();
    bg[0]
}

startSlide();



//show prev
function slideleft(){
    reset();
    bg[current].style.display = 'none';
    bg[current - 1].classList.add("bg");
}


//show next
function slideRight(){
    bg[current].style.display = 'none';
    bg[current + 1].classList.add("bg");

}

//Left arrow click

arrowSx.onclick = function slideLeft(){
    
}


//right arrow click