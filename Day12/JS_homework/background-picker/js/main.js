document
  .querySelector("#red")
  .addEventListener("click", () => changeColor("tomato"));
document
  .querySelector("#green")
  .addEventListener("click", () => changeColor("green"));
document
  .querySelector("#blue")
  .addEventListener("click", () => changeColor("blue"));
document
  .querySelector("#purple")
  .addEventListener("click", () => changeColor("purple"));
document
  .querySelector("#yellow")
  .addEventListener("click", () => changeColor("yellow"));
document
  .querySelector("#cyan")
  .addEventListener("click", () => changeColor("cyan"));

document.querySelector("img").addEventListener("mouseenter", rotateChair);
document.querySelector("img").addEventListener("mouseleave", stopRotateChair);
function rotateChair() {
  document.querySelector("img").classList.add("rotateChair");
}

function stopRotateChair() {
  document.querySelector("img").classList.remove("rotateChair");
}

function changeColor(color) {
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
  let back = document.querySelector("body").style.backgroundColor;
  if (back == "white" || back == "yellow" || back == "cyan") {
    document.querySelector("body").style.color = "black";
  } else {
    document.querySelector("body").style.color = "white";
  }
}
