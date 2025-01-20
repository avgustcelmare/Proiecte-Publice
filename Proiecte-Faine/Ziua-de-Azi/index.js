const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const dateToday = new Date();

monthNameEl.innerText = dateToday.toLocaleString("ro", {month:"long"});

dayNameEl.innerText = dateToday.toLocaleString("ro", {weekday:"long"});

dayNumEl.innerText = dateToday.getDate();

yearEl.innerText = dateToday.getFullYear();