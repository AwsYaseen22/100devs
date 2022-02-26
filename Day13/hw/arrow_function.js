// Arrow funciton

let sum = (a, b) => a + b;

let double = (n) => n * 2;

// Tasks
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execuation.")
);
