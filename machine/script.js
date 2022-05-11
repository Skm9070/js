let pera = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click", runmachine);

function runmachine() {
  if (btn.textContent === "Start Machine") {
    pera.textContent = "Machine is Running";
    btn.textContent = "Off Machine";
  } else {
    pera.textContent = "Machine is Stoped ";
    btn.textContent = "Start Machine";
  }
}
