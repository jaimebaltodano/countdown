var lefttime = 0;
var days = "";
var hours = "";
var minutes = "";
var secconds = "";

function DisplayCounter() {
    if (lefttime > 0){
        days.innerHTML = Math.floor(lefttime/86400);
        hours.innerHTML = Math.floor((lefttime/3600)%24);
        minutes.innerHTML = Math.floor((lefttime/60)%60);
        secconds.innerHTML = Math.floor(lefttime%60);
        lefttime = lefttime -1;
    }
  }

function UpdateTimer(){
    lefttime = document.querySelector("#lefttime").value;
    days = document.querySelector(".days");
    hours = document.querySelector(".hours");
    minutes = document.querySelector(".minutes");
    secconds = document.querySelector(".seconds");
}

function OnlyNumbers(){
    let val = document.querySelector("#lefttime").value;
    let digit = /\D/;
    
    if(val.match(digit)){
        return true
    }
    else {
        return false
    }
}