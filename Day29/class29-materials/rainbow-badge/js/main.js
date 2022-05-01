//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  let rand1 = Math.floor(Math.random() * 800);
  let rand2 = Math.floor(Math.random() * 800);
  const poke1 = document.querySelector("#poke1").value;
  const poke2 = document.querySelector("#poke2").value;
  // const url = "https://pokeapi.co/api/v2/pokemon/" + poke1;
  // const url2 = "https://pokeapi.co/api/v2/pokemon/" + poke2;
  const url = "https://pokeapi.co/api/v2/pokemon/" + rand1;
  const url2 = "https://pokeapi.co/api/v2/pokemon/" + rand2;
  let pokeStore = [];
  let pokeImg = [];

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      pokeStore.push(data.types[0].type.name);
      pokeImg.push(data.sprites.front_shiny);

      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          pokeStore.push(data.types[0].type.name);
          pokeImg.push(data.sprites.front_shiny);

          console.log(pokeStore);
          console.log(pokeImg);

          if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
            document.querySelector("#pokeImg1").src = pokeImg[0];
            document.querySelector("#pokeImg2").src = pokeImg[1];
            document.querySelector("h2").innerText = " 2x > ";
          }
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
