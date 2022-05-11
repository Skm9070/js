let btn = document.getElementById("change-btn");
let heX = document.getElementById("hex-value");
let bodY = document.getElementsByTagName("body");

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.body.style.backgroundColor ='#562522';
function changeThem() {
  let newHex = "#";
  let newcolor = "#";
  for (let i = 0; i < 6; i++) {
    let randoM = Math.floor(Math.random() * 16);
    let randoM2 = Math.floor(Math.random() * 16);

    newHex += hex[randoM];
    newcolor += hex[randoM2];
  }
  console.log(newHex);
  heX.textContent = newHex;

  document.body.style.backgroundColor = newHex;
  document.body.style.color = newcolor;
  //document.body.style.color = newR[randoM]
}

btn.addEventListener("click", changeThem);
