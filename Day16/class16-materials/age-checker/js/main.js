//Create a conditonal that checks their age)
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector("h1").addEventListener("click", check);
let paragraphDom = document.querySelector("p");
function check() {
  let age = Number(document.querySelector("#danceDanceRevolution").value);
  if (age < 16) {
    console.log("You cannot drive");
    paragraphDom.innerText = "You cannot drive";
  } else if (age < 18) {
    console.log(
      "You can't hate from outside the club, because You can't even get in"
    );
    paragraphDom.innerText =
      "You can't hate from outside the club, because You can't even get in";
  } else if (age < 21) {
    console.log("they can not drink");
    paragraphDom.innerText = "they can not drink";
  } else if (age < 25) {
    console.log("can not rent cars affordably");
    paragraphDom.innerText = "can not rent cars affordably";
  } else if (age < 30) {
    console.log("can not rent fancy cars affordably");
    paragraphDom.innerText = "can not rent fancy cars affordably";
  } else if (age >= 30) {
    console.log("there is nothing left to look forward too");
    paragraphDom.innerText = "there is nothing left to look forward too";
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
