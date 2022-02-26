//Write your pseduo code first!

// onlclick on a click on #convert
document.querySelector("#convert").addEventListener("click", convert);

function convert() {
  // grap the value in celicius degree
  let celDeg = document.querySelector("#celicius").value;

  // make the math to convert the c degree to fahrenhiete degree
  let fahDegree = (celDeg * 9) / 5 + 32;

  // show the result to the screen
  document.querySelector("#fahrenhiet").innerText = fahDegree;
}
