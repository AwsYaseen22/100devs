// const contestants = document.querySelectorAll(".contestant");

// Array.from(contestants).forEach((element) =>
//   element.addEventListener("click", checkForRose)
// );

// function checkForRose(click) {
//   if (click.target.classList.contains("rose")) {
//     document.querySelector("#nikki").classList.toggle("hidden");
//   } else {
//     alert("Wrong!");
//   }
// }

const contestants = document.querySelectorAll(".contestant");

contestants.forEach((e) => e.addEventListener("click", checkForRose));
// console.log(contestants);
function checkForRose(element) {
  element.target.classList.contains("rose")
    ? document.querySelector("#nikki").classList.toggle("hidden")
    : alert("Wrong.....");
}
