"use strict";
// function sayHi() {
//   console.log("hi");
// }

// let sayHi = function () {
//   console.log("hi");
// };
// sayHi();
// console.log(sayHi);

// let func = sayHi;

// func();

// // callback function
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("You agreed.");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);

let age = 18;
if (age < 18) {
  function welcome() {
    console.log("hello");
  }
} else {
  function welcome() {
    console.log("greetings");
  }
}

welcome();

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome();
