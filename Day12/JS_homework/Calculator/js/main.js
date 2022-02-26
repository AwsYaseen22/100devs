let result = 0;

let num1 = 0;
let num2 = 0;

let screenNum = 0;

let currOperation = "";

document.querySelector("#one").addEventListener("click", () => collectNums(1));
document.querySelector("#two").addEventListener("click", () => collectNums(2));
document
  .querySelector("#three")
  .addEventListener("click", () => collectNums(3));
document.querySelector("#four").addEventListener("click", () => collectNums(4));
document.querySelector("#five").addEventListener("click", () => collectNums(5));
document.querySelector("#six").addEventListener("click", () => collectNums(6));
document
  .querySelector("#seven")
  .addEventListener("click", () => collectNums(7));
document
  .querySelector("#eight")
  .addEventListener("click", () => collectNums(8));
document.querySelector("#nine").addEventListener("click", () => collectNums(9));
document.querySelector("#zero").addEventListener("click", () => collectNums(0));
document
  .querySelector("#add")
  .addEventListener("click", () => assigNums("add"));
document
  .querySelector("#sub")
  .addEventListener("click", () => assigNums("sub"));
document
  .querySelector("#multi")
  .addEventListener("click", () => assigNums("multi"));
document
  .querySelector("#divide")
  .addEventListener("click", () => assigNums("divide"));
document.querySelector("#clear").addEventListener("click", () => clear());
document.querySelector("#equal").addEventListener("click", () => equal());

function collectNums(num) {
  if (screenNum == 0) {
    screenNum = String(num);
  } else {
    screenNum = screenNum + String(num);
  }
  document.querySelector("#result").innerHTML = `<h1>${screenNum}</h1>`;
}

function assigNums(operation) {
  console.log(operation);
  num1 = Number(screenNum);
  screenNum = 0;
  document.querySelector("#result").innerHTML = `<h1>0</h1>`;
  currOperation = operation;
}

function add() {
  result = Number(num1) + Number(num2);
  screenNum = result;
  currOperation = "";
}
function sub() {
  result = Number(num1) - Number(num2);
  screenNum = result;
  currOperation = "";
}
function multi() {
  result = Number(num1) * Number(num2);
  screenNum = result;
  currOperation = "";
}
function divide() {
  result = Number(num1) / Number(num2);
  screenNum = result;
  currOperation = "";
}

function equal() {
  if (currOperation == "add") {
    num2 = screenNum;
    screenNum = 0;
    add();
    document.querySelector("#result").innerHTML = `<h1>${result}</h1>`;
  }
  if (currOperation == "sub") {
    num2 = screenNum;
    screenNum = 0;
    sub();
    document.querySelector("#result").innerHTML = `<h1>${result}</h1>`;
  }
  if (currOperation == "multi") {
    num2 = screenNum;
    screenNum = 0;
    multi();
    document.querySelector("#result").innerHTML = `<h1>${result}</h1>`;
  }
  if (currOperation == "divide") {
    num2 = screenNum;
    screenNum = 0;
    if (num2 == 0) {
      clear();
      document.querySelector("#result").innerHTML = `<h1>Error</h1>`;
      return;
    }
    divide();
    document.querySelector("#result").innerHTML = `<h1>${result}</h1>`;
  }
}

function clear() {
  screenNum = 0;
  num1 = 0;
  num2 = 0;
  result = 0;
  currOperation = "";
  document.querySelector("#result").innerHTML = `<h1>${screenNum}</h1>`;
}
