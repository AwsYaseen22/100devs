const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
  .then((res) => res.json())
  .then((data) => {
    const breedObject = data.message;
    const breedsArray = Object.keys(breedObject);
    // console.log(breedsArray);
    for (b of breedsArray) {
      const option = document.createElement("option");
      option.value = b;
      option.innerText = b;
      select.appendChild(option);
    }
  });
let selectedOption;
select.addEventListener("change", function (e) {
  //   console.log(e);
  selectedOption = e.target.value;
  console.log(selectedOption);
  fetch(`https://dog.ceo/api/breed/${selectedOption}/images/random`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.message;
    });
});
