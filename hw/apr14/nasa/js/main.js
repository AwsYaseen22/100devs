//Example fetch using pokemonapi.co

document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("img").classList.add("hidden");
document.querySelector("iframe").classList.add("hidden");
function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=sOjgByVZZY9d1HoGj3fBmDYKW3hqTictLLDNwaI0&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        console.log("remove hidden");
        document.querySelector("img").src = data.url;
        document.querySelector("img").classList.remove("hidden");
        document.querySelector("iframe").classList.add("hidden");
      } else {
        document.querySelector("iframe").src = data.url;
        document.querySelector("iframe").classList.remove("hidden");
        document.querySelector("img").classList.add("hidden");
      }
      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
