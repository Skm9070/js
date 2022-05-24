const watch = document.getElementById("watch");
let sec = 0;
let min = 0;
let hr = 0;

function counter() {
  sec = localStorage.getItem("sec");
  min = localStorage.getItem("min");
  hr = localStorage.getItem("hr");
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);
  sec = sec + 1;

  if (sec == 60) {
    sec = 0;
    min = min + 1;
  }
  if (min == 60) {
    min = 0;
    hr = hr + 1;
  }
  if (hr == 24) {
    hr = 12;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }

  watch.innerHTML = `Hr: ${hr} <br>  Min: ${min}  <br>  Sec: ${sec}`;
  localStorage.setItem("sec", sec);
  localStorage.setItem("min", min);
  localStorage.setItem("hr", hr);
}
counter();
setInterval(counter, 1000);
