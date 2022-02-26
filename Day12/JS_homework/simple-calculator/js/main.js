let result = 0;

document.querySelector("#pumpkin").addEventListener("click", reset);
document.querySelector("#addTwo").addEventListener("click", addTwo);
document.querySelector("#dominosPizza").addEventListener("click", addThree);
document.querySelector("#zebra").addEventListener("click", addNine);
document
  .querySelector("#cantThinkOfAnything")
  .addEventListener("click", minusTwo);

function reset() {
  result = 0;
  document.querySelector("#placeToPutResult").innerText = result;
}

function addThree() {
  result += 3;
  document.querySelector("#placeToPutResult").innerText = result;
}

function addNine() {
  result += 9;
  document.querySelector("#placeToPutResult").innerText = result;
}

function minusTwo() {
  result -= 2;
  document.querySelector("#placeToPutResult").innerText = result;
}

function addTwo() {
  result += 2;
  document.getElementById("placeToPutResult").innerText = result;
}
