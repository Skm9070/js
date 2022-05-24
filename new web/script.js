let heading = document.querySelector("h2");

function getname() {
  let name = window.prompt("Enter Your Name :-");
  heading.textContent += name;
}

getname();
