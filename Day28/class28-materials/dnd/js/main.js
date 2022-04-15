//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  //   clear the li before add new subclasses
  let ul = document.querySelector("ul");
  while (ul.firstChild) {
    ul.removeChild(ul.lastChild);
  }

  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.subclasses);
      let subclasses = data.subclasses;
      let ul = document.querySelector("ul");
      subclasses.forEach((sub) => {
        let li = document.createElement("li");
        li.innerText = sub.name;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
