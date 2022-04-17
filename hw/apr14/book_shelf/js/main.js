//Example fetch using pokemonapi.co

document.querySelector("button").addEventListener("click", addBook);

function addBook() {
  const isbn = document.querySelector("input").value;
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const details = data[`ISBN:${isbn}`];
      console.log(data);
      console.log(details);
      document.querySelector("#title").innerText += details.title;
      document.querySelector("#pages").innerText += details.number_of_pages;
      console.log(typeof details.cover.large);
      let image = details.cover.large;
      document.querySelector("#cover").src = image;
      document.querySelector("#author").innerText += details.authors.map(
        (n) => n.name
      );
      document.querySelector("img").src = details.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
