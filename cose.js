var tickets = document.querySelector("#carousel");
var x = 0;

var arrowTop = document.getElementById('arrow-left');
var arrowBottom =  document.getElementById('arrow-right');


/* Arrow Top*/

arrowTop.onclick = function slideTicketUP(){
    tickets.style.top = x + "VH";
    x = x + 42;

}

/*Arrow  Bottom */

arrowBottom.onclick = function slideTicketBottom(){
    tickets.style.top = x + "vh";
    x = x - 42;

}

/* funzione nuova */

var ticket = 0;
var ticketsNumb = 5;
var div = document.querySelectorAll('#carousel div')

arrowTop.onclick = function ChangeID(){

    for( var i of div) {
    if (l==0){i.style.backgroundColor = "white";}
    if (l==1){i.style.backgroundColor = "white";}
    if (l==2){i.style.backgroundColor = "white";}
    if (l==3){i.style.backgroundColor = "white";}
    if (l>4){l=4;}

    }
};



arrowBottom.onclick = function ChangeID2(){

    for( var i of div) {
    if (l==0){i.style.backgroundColor = "white";}
    if (l==1){i.style.backgroundColor = "white";}
    if (l==2){i.style.backgroundColor = "white";}
    if (l==3){i.style.backgroundColor = "white";}
    if (l>4){l=4;}

    }
};