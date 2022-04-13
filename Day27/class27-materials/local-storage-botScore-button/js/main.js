//Create a button that adds 1 to a botScore stored in localStorage

document.querySelector("button").addEventListener("click", addPoint);
let score;
if (!localStorage.getItem("score")) {
  score = 0;
  localStorage.setItem("score", score);
}

function addPoint() {
  score = localStorage.getItem("score");
  score++;
  localStorage.setItem("score", score);
  score = localStorage.getItem("score");
  console.log(score);
  //   document.querySelector("h1").innerText = score;
}
