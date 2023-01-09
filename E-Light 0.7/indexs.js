const menu = document.getElementById("hamburger-menu"),
      menuOpen  = document.getElementById("header-open"),
      circle  = document.getElementById("circle");

/* Function for HamburgerMenù */

menu.onclick = function openMenu(){
    if (circle.style.border == "inset") {
    menuOpen.style.display = "block"
    circle.style.border = "outset";
}
else {
    menuOpen.style.display = "none"
    circle.style.border = "inset";
}};


/*Function for push-down main

const main = document.getElementById("main");

function pushDown() {
    if (menuOpen.style.display == "block") {
    main.style.top = "40%"
}
else {
    main.style.top = "10%"
}};

pushDown(); */