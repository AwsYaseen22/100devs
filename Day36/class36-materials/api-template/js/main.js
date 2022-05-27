//Make an api request using async await

let getNewPhoto = async () => {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await res.json();
    console.log(data);
    img.src = data.message;
  } catch (error) {
    console.log("the error: ", error);
  }
};

let img = document.querySelector("img");
document.querySelector("button").addEventListener("click", getNewPhoto);
