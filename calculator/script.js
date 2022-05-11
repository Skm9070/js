let disPlay = document.getElementById("display");
let btns = Array.from(document.getElementsByTagName("button"));

btns.map((btn) => {
  btn.addEventListener("click", calcuator);
  function calcuator() {
    if (btn.textContent === "C") {
      disPlay.value = 0;
    } else if (btn.textContent === "←") {
      disPlay.value = disPlay.value.slice(0, -1);
    } else if (btn.textContent === "=") {
      try {
        disPlay.value = eval(disPlay.value);
      } catch {
        disPlay.value = "Error!";
      }
    } else {
      disPlay.value += btn.textContent;
    }
  }
});
