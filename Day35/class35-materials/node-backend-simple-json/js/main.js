document.querySelector("#clickMe").addEventListener("click", makeReq);
document.querySelector("#coinFlip").addEventListener("click", makeFlipReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personName").textContent = data.name;
  document.querySelector("#personStatus").textContent = data.status;
  document.querySelector("#personOccupation").textContent =
    data.currentOccupation;
}

async function makeFlipReq() {
  const res = await fetch(`/api/flip`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#flipResult").textContent = data.result;
}
