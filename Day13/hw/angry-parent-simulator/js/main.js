document.querySelector("#yell").addEventListener("click", run);

function run() {
  let fName = document.querySelector("#firstName").value;
  let fMiddleName = document.querySelector("#firstMiddle").value;
  let lMiddleName = document.querySelector("#lastMiddle").value;
  let lName = document.querySelector("#lastName").value;

  let fullName = `${fName} ${fMiddleName} ${lMiddleName} ${lName}`;
  document.querySelector("#placeToYell").innerText = fullName;
  const synth = window.speechSynthesis;
  let yellThis = new SpeechSynthesisUtterance(fullName);
  synth.speak(yellThis);
}
