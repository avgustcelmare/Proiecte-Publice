const hourEl = document.getElementById("hour");

const minutesEl = document.getElementById("minutes");

const secondsEl = document.getElementById("seconds");

function updateClock() {
  let h = new Date().getHours();
  console.log(h);
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;

  setTimeout (() => {
    updateClock()
  }, 1000);
};

updateClock();