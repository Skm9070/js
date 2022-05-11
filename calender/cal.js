const monthS = document.getElementById("months");
let hed = document.getElementById("heading");
const diV = document.getElementById("divEle");
console.log(diV);
monthS.addEventListener("change", (e) => {
  let choice = monthS.value;
  let days = 31;

  if (choice === "February") {
    days = 28;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  } else {
    days = 31;
  }
  changmonths(days, choice);
});

function changmonths(days, choice) {
  diV.innerHTML = "";
  hed.innerText = choice;
  let weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let count = 0;
  for (let i = 1; i <= days; i++) {
    const pitem = document.createElement("P");

    pitem.textContent = i;
    diV.appendChild(pitem);

    let week = weeks[count];
    pitem.textContent += week;
    if (count === 6) {
      count = 0;
    } else {
      count = count + 1;
    }
  }
}

changmonths(31, "January");
