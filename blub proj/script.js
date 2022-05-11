let btn = document.querySelector("button");
let blubImge = document.querySelector("img");
let body = document.getElementsByTagName("body");

btn.addEventListener("click", blubruning);
console.log(blubImge);
function blubruning() {
  if (btn.textContent === "On Bulb") {
    blubImge.src =
      "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png";
    btn.textContent = "Off Blub";

    document.body.style.backgroundColor = "black";
  } else {
    blubImge.src = "https://pngimg.com/uploads/bulb/bulb_PNG1254.png";
    btn.textContent = "On Bulb";
    document.body.style.backgroundColor = "";
  }
}
