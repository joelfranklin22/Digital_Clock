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
    ":" + (sec < 10 ? ":" + "0" + sec : sec);
  document.getElementById("minutes").innerHTML =
    ":" + (min < 10 ? "0" + min : min);
  document.getElementById("hours").innerHTML = hour < 10 ? "0" + hour : hour;
}

updateClock();
setInterval(updateClock, 1000);

// Timer Logic
let timer_sec = 0;
let timer_min = 0;
let timer_hour = 0;
let timer_interval = null;

function updateTimer() {
  timer_sec++;
  if (timer_sec == 60) {
    timer_sec = 0;
    timer_min++;
  }
  if (timer_min == 60) {
    timer_min = 0;
    timer_hour++;
  }
  if (timer_hour == 24) timer_hour = 0;

  document.querySelector("#seconds-timer").innerHTML =
    ":" + (timer_sec < 10 ? "0" + timer_sec : timer_sec);
  document.querySelector("#minutes-timer").innerHTML =
    ":" + (timer_min < 10 ? "0" + timer_min : timer_min);
  document.querySelector("#hours-timer").innerHTML =
    timer_hour < 10 ? "0" + timer_hour : timer_hour;
}
// Start Btn
document.querySelector(".play").addEventListener("click", () => {
  if (!timer_interval) {
    updateTimer();
    timer_interval = setInterval(updateTimer, 1000);
  }
});
// Pause Btn
document.querySelector(".pause").addEventListener("click", () => {
  clearInterval(timer_interval);
  timer_interval = null;
});
// Reset Btn
document.querySelector(".reset").addEventListener("click", () => {
  clearInterval(timer_interval);
  timer_interval = null;
  timer_sec = 0;
  timer_min = 0;
  timer_hour = 0;

  document.querySelector("#seconds-timer").innerHTML = ":00";
  document.querySelector("#minutes-timer").innerHTML = ":00";
  document.querySelector("#hours-timer").innerHTML = "00";
});
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
let timerContainer = document.querySelector(".timer-container");
let clockContainer = document.querySelector(".day-time-container");
setPanel.addEventListener("click", () => {
  panel.classList.toggle("show-panel");
  clockContainer.classList.toggle("move-clock");
  timerContainer.classList.toggle("move-clock");
});

// Color Modes
// Digital Blue

let blue = document.querySelector(".blue-theme-btn");

blue.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#66b8f0";
  document.querySelector(".side-timer").style.color = "#66b8f0";
  document.querySelector(".nav-bar").style.color = "#66b8f0";
  document.querySelector(".settings-panel").style.color = "#66b8f0";
  document.querySelector("#day-year").style.color = "#66b8f0";
});

// Red

let red = document.querySelector(".red-theme-btn");

red.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#a41515";
  document.querySelector(".side-timer").style.color = "#a41515";
  document.querySelector(".nav-bar").style.color = "#a41515";
  document.querySelector(".settings-panel").style.color = "#a41515";
  document.querySelector("#day-year").style.color = "#a41515";
});

// Orange

let orange = document.querySelector(".orange-theme-btn");

orange.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#fb7c00";
  document.querySelector(".side-timer").style.color = "#fb7c00";
  document.querySelector(".nav-bar").style.color = "#fb7c00";
  document.querySelector(".settings-panel").style.color = "#fb7c00";
  document.querySelector("#day-year").style.color = "#fb7c00";
});

// Default

let black = document.querySelector(".black-theme-btn");

black.addEventListener("click", () => {
  document.querySelector(".container").style.color = "#ffffff";
  document.querySelector(".side-timer").style.color = "#ffffff";
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
    document.querySelector(".side-timer").style.color = "#000000";
    document.querySelector(".nav-bar").style.color = "#000000";
    document.querySelector(".name-color").style.color = "#000000";
    document.querySelector(".settings-panel").style.color = "#000000";
    document.querySelector("#day-year").style.color = "#000000";
  } else {
    document.body.style.backgroundColor = "#000000";
    document.querySelector(".container").style.color = "#ffffff";
    document.querySelector(".side-timer").style.color = "#ffffff";
    document.querySelector(".nav-bar").style.color = "#ffffff";
    document.querySelector(".settings-panel").style.color = "#ffffff";
    document.querySelector("#day-year").style.color = "#ffffff";
  }
});

// Switch Timer and Clock

document.querySelector(".day-time-container").classList.add("show");

// Clock btn
document.querySelector(".live-mode").addEventListener("click", () => {
  document.querySelector(".day-time-container").classList.add("show");
  document.querySelector(".timer-container").classList.remove("show");
  document.querySelector(".clock-template-mode-day").style.display = "flex";
  document.querySelector("#toggle").style.display = "inline";

  // ✅ toggle state check
  if (toggleis) {
    dayAndYear();
  } else {
    document.getElementById("day-year").innerHTML = "";
  }
});
// Timer btn
document.querySelector(".timer-mode").addEventListener("click", () => {
  document.querySelector(".timer-container").classList.add("show");
  document.querySelector(".day-time-container").classList.remove("show");
  document.querySelector(".clock-template-mode-day").style.display = "none";
});

// play pause reset
document.querySelector(".pause").addEventListener("click", () => {
  document.querySelector(".pause").classList.add("active-btn");
  document.querySelector(".play").classList.remove("active-btn"); 
});

document.querySelector(".play").addEventListener("click", () => {
  document.querySelector(".play").classList.add("active-btn");
  document.querySelector(".pause").classList.remove("active-btn"); 
});

// Timer and Clock hovering
document.querySelector(".live-mode").classList.add("active-btn");

document.querySelector(".timer-mode").addEventListener("click", () => {
  document.querySelector(".timer-mode").classList.add("active-btn");
  document.querySelector(".live-mode").classList.remove("active-btn"); 
});
document.querySelector(".live-mode").addEventListener("click", () => {
  document.querySelector(".live-mode").classList.add("active-btn");
  document.querySelector(".timer-mode").classList.remove("active-btn"); 
});
