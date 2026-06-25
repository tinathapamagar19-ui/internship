let hour = 0, minute = 0, second = 0;
let timer = null;

const display = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

function updateDisplay() {
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  display.innerHTML = `${h} : ${m} : ${s}`;
}

function startWatch() {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(() => {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseWatch() {
  clearInterval(timer);
}

function stopWatch() {
  clearInterval(timer);
  hour = 0; minute = 0; second = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startWatch);
pauseBtn.addEventListener("click", pauseWatch);
stopBtn.addEventListener("click", stopWatch);

updateDisplay();
