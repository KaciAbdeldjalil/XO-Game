let play="x";

function invert(id){
    document.getElementById(id).innerHTML==="Now it's O's turn"
}
function maneg(id){
    if(document.getElementById("xo").innerHTML==="Now it's X's turn"){
        play="x";
        }else{
        play="o";
    }
    if(document.getElementById("xo").innerHTML==="Now it's X's turn"){
        document.getElementById("xo").innerHTML="Now it's O's turn";
        }else{
        document.getElementById("xo").innerHTML="Now it's X's turn";
    }
}

function game (id){
maneg(id);
let element=document.getElementById(id);
if(play==="x" && element.innerHTML == ""){
    element.innerHTML="X";
    element.style.cssText="background-color:green;";
}else if(play==="o" && element.innerHTML== ""){
    element.innerHTML="O";
    element.style.cssText="background-color:red;";
}
function check (id){
    let a=document.querySelector("#itm1").innerText;
    let b=document.querySelector("#itm2").innerText;
    let c=document.querySelector("#itm3").innerText;
    let d=document.querySelector("#itm4").innerText;
    let e=document.querySelector("#itm5").innerText;
    let f=document.querySelector("#itm6").innerText;
    let g=document.querySelector("#itm7").innerText;
    let h=document.querySelector("#itm8").innerText;
    let i=document.querySelector("#itm9").innerText;
    //case1
    if(a==="X" && b==="X" && c==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(a==="O" && b==="O" && c==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case2
    if(a==="X" && d==="X" && h==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(a==="O" && d==="O" && h==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case3
    if(a==="X" && e==="X" && i==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(a==="O" && e==="O" && i==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case4
    if(c==="X" && f==="X" && i==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(c==="O" && f==="O" && i==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case5
    if(d==="X" && e==="X" && f==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(d==="O" && e==="O" && f==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case6
    if(g==="X" && h==="X" && i==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(g==="O" && h==="O" && i==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case7
    if(b==="X" && e==="X" && h==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(b==="O" && e==="O" && h==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //case8
    if(c==="X" && e==="X" && g==="X"){
        document.getElementById("xo").innerHTML="the winner is X player";
    }else if(c==="O" && e==="O" && g==="O"){
         document.getElementById("xo").innerHTML="the winner is O player";
    }
    //casesp
    if(a!==b && a!==d && a!==e && c!==f && g!==i && c!==g && a!==c && a!==g && a!==i && c!==i){
        document.getElementById("xo").innerHTML="No one won";
    }
    
    if(document.getElementById("xo").innerHTML==="the winner is X player" || document.getElementById("xo").innerHTML==="the winner is O player" || document.getElementById("xo").innerHTML==="No one won"){
        return play;
    }
}
check(id)
}