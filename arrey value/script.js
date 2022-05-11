let myarrey = [90, 3, 4, 105, 8, 9, 6, 45, 23, 89, 45];

let max = myarrey[0];
let mini = myarrey[0]

for (let i = 0; i < myarrey.length; i++) {
  if (myarrey[i] >= max) {
    max = myarrey[i];
  }
  if (myarrey[i] <= mini) {
    mini = myarrey[i];
  }
}

console.log(`this is max value ${max}`);

console.log(mini);
