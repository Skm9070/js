let pboxs = document.querySelectorAll("div");
let btn = document.querySelector("button");
let getPass = "";
let length = window.prompt();
btn.addEventListener("click", newpassgenrator);

function randomgenrator(box) {
  let randomPass = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
  ];
  let ch = "";

  for (let i = 0; i < length; i++) {
    let pG = Math.floor(Math.random() * randomPass.length);

    ch += randomPass[pG];
  }
  getPass = ch;
  box.textContent = getPass;
}

function newpassgenrator() {
  for (let box of pboxs) {
    randomgenrator(box);
    box.textContent = getPass;
  }
}
newpassgenrator();

// any person type 100 number pass and get !Errro! this type password in note avalible !!
//
