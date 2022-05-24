// task is is a input vlaue
// tasks is a list of task
// submit is a button for submit form
// form is  a tag neme
// dlt is a button for delete all lists of tasks !!
// new li use in forloop (1)
// close btn use in forloop(2)
let task = document.getElementById("task");
let tasks = document.getElementById("tasks");
let submit = document.getElementById("submit");
let form = document.querySelector("form");
// let dlt = document.getElementById("dlt");
let newli = document.getElementsByTagName("li");
// let closebtn = document.getElementsByClassName("close");

//submit.disabled = true;

// task.onkeyup = () => {
//   if (task.value.trim !== "") {
//     submit.disabled = false;
//   } else {
//   }
// };
for (let i = 0; i < newli.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newli[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let list = this.parentElement;
    list.remove();
  };
}

dlt.addEventListener("click", () => {
  tasks.innerHTML = "";
});
form.onsubmit = () => {
  let list = document.createElement("li");
  tasks.appendChild(list);
  list.textContent = task.value;
  if (task.value === "") {
    alert("Error !! enter a value to get list");
  } else {
    let list = document.createElement("li");
    tasks.appendChild(list);
    list.textContent = task.value;
    task.value = "";
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.remove();
      };
    }
  }

  // submit.disabled = true;

  return false;
};
