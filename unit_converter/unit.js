let btn1 = document.getElementById("btn-first");
let btn2 = document.getElementById("btn-second");
let btn3 = document.getElementById("btn-third");
let peraGraph = document.getElementById("meter-pera");
let peraGraphvolume = document.getElementById("volume-pera");
let peraGraphMass = document.getElementById("mass-pera");

function getinput() {
  let inputFeet = window.prompt("Enter Number: ");
  let metervalue = inputFeet * 0.0254;
  let inchValue = inputFeet * 12;
  metervalue = metervalue.toFixed(2);
  peraGraph.innerHTML = `There Are ${metervalue} meter in ${inputFeet} feet <br> And 
  ${inchValue} inch in ${inputFeet} feet `;
}
btn1.addEventListener("click", getinput);

function getinput2() {
  let inputVolume = window.prompt("Enter Number");
  let volumevalue = inputVolume * 1000;
  peraGraphvolume.innerHTML = `There are ${volumevalue} ml in ${inputVolume} Volume`;
}
btn2.addEventListener("click", getinput2);

function getinput3() {
  let inputMass = window.prompt("Enter Number");
  let massValue = inputMass * 1000;
  peraGraphMass.innerHTML = `There are ${massValue} liter in ${inputMass} Mass`;
}
btn3.addEventListener("click", getinput3);
