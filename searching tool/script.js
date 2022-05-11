let btn = document.querySelector("button");
let inpuT = document.querySelector("input");
let pera = document.querySelector("p");

let contacts = [
  "sanjay:9079790515",
  "Ajay:7726878505",
  "Gourav:6375169893",
  "Arjun:8560092966",
  "Divyansh:901389013800",
];

btn.addEventListener("click", () => {
  let name = inpuT.value;
  name = name.toLowerCase();
  inpuT.focus();
  inpuT.value = "";
  for (let contact of contacts) {
    let saveContact = contact.split(":");
    saveContact[0] = saveContact[0].toLowerCase();
    console.log(saveContact[0]);
    console.log(name);
    if (name === saveContact[0]) {
      pera.innerHTML = ` <b>${saveContact[0]}'s Contact No. is ${saveContact[1]}.</b>`;
      pera.style.backgroundColor = "lightgreen";

      break;
    } else {
      pera.textContent = "!! ERROR !! THis Contect Is Not Avalible !!";
      pera.style.backgroundColor = "red";
    }
  }
});
