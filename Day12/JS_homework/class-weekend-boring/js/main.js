document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day == "saturday" || day == "sunday") {
    console.log("Weekend");
    document.querySelector("#placeToSee").innerHTML = "Weekend";
  } else if (day == "tuesday" || day == "thursday") {
    console.log("Class");
    document.querySelector("#placeToSee").innerHTML = "Class";
  } else {
    console.log("Boring");
    document.querySelector("#placeToSee").innerHTML = "Boring";
  }
}
