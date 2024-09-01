const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const currDate = document.getElementById("curr-date");
const currYear = document.getElementById("curr-year");
const currTime = document.getElementById("curr-time");

function updateTime() {
const date = new Date();

monthName.innerText = date.toLocaleString("en", { month: "long" });
dayName.innerText = date.toLocaleString("en", { weekday: "long" });
currDate.innerText = date.getDate();
currYear.innerText = date.getFullYear();
currTime.innerText = date.toLocaleTimeString("en", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Initial call to display time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);