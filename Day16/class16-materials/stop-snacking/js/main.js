//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener("click", snacks);
let stops = document.querySelector("#stops");

function snacks() {
  let numOfSnacks = document.querySelector("input").value;
  stops.innerText = "";
  for (let i = 0; i < numOfSnacks; i++) {
    stops.innerText += "\n stop late night snack";
  }
}
