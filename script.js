// Timing Logic
let sec = 0;
let min = 0;
let hour = 0;

// Initialize with current time
let now = new Date();
sec = now.getSeconds();
min = now.getMinutes();
hour = now.getHours();

function updateClock() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }
  if (hour == 24) {
    hour = 0;
  }

  document.getElementById("seconds").innerHTML =
    ":"+(sec < 10 ? ":" + "0" + sec : sec);
  document.getElementById("minutes").innerHTML =
    ":" + (min < 10 ? "0" + min : min);
  document.getElementById("hours").innerHTML = hour < 10 ? "0" + hour : hour;
}

updateClock();
setInterval(updateClock, 1000);

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
let clockContainer = document.querySelector(".day-time-container");
setPanel.addEventListener("click", () => {
  panel.classList.toggle("show-panel");
  clockContainer.classList.toggle("move-clock");
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
  document.querySelector(".container").style.color = "#a41515";
  document.querySelector(".nav-bar").style.color = "#a41515";
  document.querySelector(".settings-panel").style.color = "#a41515";
  document.querySelector("#day-year").style.color = "#a41515";
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
let dark = false;
light.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    document.body.style.backgroundColor = "#ffffff";
    document.querySelector(".container").style.color = "#000000";
    document.querySelector(".nav-bar").style.color = "#000000";
    document.querySelector(".name-color").style.color = "#000000";
    document.querySelector(".settings-panel").style.color = "#000000";
    document.querySelector("#day-year").style.color = "#000000";
  } else {
    document.body.style.backgroundColor = "#000000";
    document.querySelector(".container").style.color = "#ffffff";
    document.querySelector(".nav-bar").style.color = "#ffffff";
    document.querySelector(".settings-panel").style.color = "#ffffff";
    document.querySelector("#day-year").style.color = "#ffffff";
  }
});
