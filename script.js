const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var hrDegree = 120;
var minDegree = 180;
var secDegree = 15;

function clock()
{ 
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    console.log("Hours = " + hr + " Minutes = " + min + " Seconds = " + sec );

    var hrDegree = hr * 360/12 + min * (360/60)/12;
    var minDegree = min * 360/60 + sec * (360/60)/60;
    var secDegree = sec * 360/60;

    HOURHAND.style.transform = "rotate(" + hrDegree + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minDegree + "deg)";
    SECONDHAND.style.transform = "rotate(" + secDegree + "deg)";
}

var interval = setInterval(clock, 1000);
