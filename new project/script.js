let projects = document.querySelector("#projects");
let project = document.getElementById("project").value;
document.getElementById("submit").disabled = true;

let form = (document.querySelector("form").onsubmit = function () {
  if (project.length > 0) {
    document.getElementById("submit").disabled = false;
  }
  let li = document.createElement("li");
  li.textContent = project.value;
  projects.appendChild(li);
  project.value = "";
  return false;
});
