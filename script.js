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
