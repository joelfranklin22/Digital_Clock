// Timing Logic

let sec = document.getElementById("seconds");
let min = document.getElementById("minutes");
let hours = document.getElementById("hours");
sec = 0;
min = 0;
hours = 0;

setInterval(() => {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hours++;
  }
  if (hours == 24) {
    hours == 0;
  }

  document.getElementById("seconds").innerHTML =
    sec < 10 ? ":" + "0" + sec : ":" + sec;
  document.getElementById("minutes").innerHTML =
    min < 10 ? ":" + "0" + min : ":" + min;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
}, 1000);


// Toggle On or Off

let toggle=document.getElementById("toggle-off");