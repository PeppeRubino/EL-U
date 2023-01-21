const menu = document.getElementById("hamburger-menu"),
      menuOpen  = document.getElementById("header-open");

/* Function for Hamburger Menù */

menu.onclick = function openMenu(){
    if (menuOpen.style.display == "none") {
    menuOpen.style.display = "block";
}
else {
    menuOpen.style.display = "none";
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