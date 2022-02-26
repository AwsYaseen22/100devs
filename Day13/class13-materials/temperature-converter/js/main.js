//Write your pseduo code first!

document.querySelector("#convert").addEventListener("click", convertCelToFah);

function convertCelToFah() {
  // grap the celicius number
  let cel = document.querySelector("#celecius").value;
  // make the math for the convertion
  // put the result in a new variable
  cel = (cel * 9) / 5 + 32;
  // output the result to the screen
  document.querySelector("#result").innerText = cel;
}
