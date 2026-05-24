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

// Day and Date
function dayAndYear() {
  let today = new Date();
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("day-year").innerHTML =
    `${dayName[today.getDay()]},  ${monthName[today.getMonth()]} ${today.getDate()},  ${today.getFullYear()}`;
}

// Toggle On or Off
let toggle = document.getElementById("toggle");
let toggleis = false;
toggle.addEventListener("click", () => {
  toggleis = !toggleis;
  toggle.classList.toggle("fa-toggle-on");
  toggle.classList.toggle("fa-toggle-off");

  toggle.classList.toggle("active");

  if (toggleis) {
    dayAndYear();
  } else {
    document.getElementById("day-year").innerHTML = "";
  }
});

// Settings Panel

let setPanel = document.getElementById("settings-btn");

let panel = document.querySelector(".settings-panel");

setPanel.addEventListener("click", () => {
  panel.classList.toggle("show-panel");
});

// Color Modes
// Digital Blue

let blue = document.querySelector(".blue-theme-btn");

blue.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#66b8f0";
  document.querySelector(".nav-bar").style.color = "#66b8f0";
  document.querySelector(".settings-panel").style.color = "#66b8f0";
  document.querySelector("#day-year").style.color = "#66b8f0";
});

// Red

let red = document.querySelector(".red-theme-btn");

red.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#953628";
  document.querySelector(".nav-bar").style.color = "#953628";
  document.querySelector(".settings-panel").style.color = "#953628";
  document.querySelector("#day-year").style.color = "#953628";
});

// Orange

let orange = document.querySelector(".orange-theme-btn");

orange.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#fb7c00";
  document.querySelector(".nav-bar").style.color = "#fb7c00";
  document.querySelector(".settings-panel").style.color = "#fb7c00";
  document.querySelector("#day-year").style.color = "#fb7c00";
});

// Default

let black = document.querySelector(".black-theme-btn");

black.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#ffffff";
  document.querySelector(".nav-bar").style.color = "#ffffff";
  document.querySelector(".settings-panel").style.color = "#ffffff";
  document.querySelector("#day-year").style.color = "#ffffff";
});

// FullScreen

let fullscreenBtn = document.getElementById("fullscreen-btn");

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// light mode

let light = document.getElementById("light-mode");
light.addEventListener("click", () => {

  document.body.style.backgroundColor="#ffffff";
  document.querySelector(".container").style.color = "#000000";
  document.querySelector(".nav-bar").style.color = "#000000";
  document.querySelector(".name").style.color = "#ffffff";
  document.querySelector(".settings-panel").style.color = "#000000";
  document.querySelector("#day-year").style.color = "#000000";
});
