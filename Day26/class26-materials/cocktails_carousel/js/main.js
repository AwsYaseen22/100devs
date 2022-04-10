// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

/*


				
						<h2 class="carousel-item__subtitle">The grand moment </h2>
						<h1 class="carousel-item__title">Le tour</h1>
						<p class="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem
							accusantium doloremque laudantium, totam rem aperiam.</p>
						<a href="#" class="carousel-item__btn">Explore the tour</a>
					</div>
				</div>
			</div>
 */

let carousel = document.querySelector(".carousel");
let current = 0;

function createList(cocktailsList) {
  for (let i = 0; i < cocktailsList.length; i++) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");
    let image = `<img src=${cocktailsList[i].strDrinkThumb}>`;
    let imageDiv = `
          <div class="carousel-item__image">
            ${image}
          </div>`;
    div.innerHTML = `
      <div class="carousel-item__image">
        ${image}
      </div>
      <div class="carousel-item__info">
        <div class="carousel-item__container">
          <h1 class="carousel-item__title">${cocktailsList[i].strDrink}</h1>

        </div>
      </div>
        <span class='hidden'>${cocktailsList[i].idDrink}</span>
    `;
    carousel.appendChild(div);
  }
}

let cocktails;
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.drinks);
    cocktails = data.drinks;
    createList(cocktails);
    let items = document.querySelectorAll(".carousel-item");
    console.log(items);
    return items;
  })
  .then((x) => {
    console.log(x[0]);
    x[0].classList.add("active");
    let total = x.length;
    console.log(total);
    // let current = 0;
    document.querySelector("#moveRight").addEventListener("click", () => {
      let next = current;
      current = current + 1;
      setSlide(next, current);
    });
    document.querySelector("#moveLeft").addEventListener("click", () => {
      let prev = current;
      current = current - 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next) {
      let slide = current;
      if (next > total - 1) {
        slide = 0;
        current = 0;
      }
      if (next < 0) {
        slide = total - 1;
        current = total - 1;
      }
      x[prev].classList.remove("active");
      x[slide].classList.add("active");
      setTimeout(function () {}, 800);
      console.log("current: ", current);
      console.log("prev: ", prev);
    }
    x.forEach((l) => l.addEventListener("click", () => clickItem(l)));
  });

// function clickItem(e) {
//   console.log("clicked");
//   let id = e.children[2].innerText;
//   document.querySelector(".list").classList.toggle("hidden");
//   document.querySelector(".details").classList.toggle("hidden");
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then((response) => response.json())
//     .then((data) => data.drinks[0])
//     .then((drink) => {
//       console.log(drink);
//       document.querySelector(".details img").src = drink.strDrinkThumb;
//       document.querySelector(".details h2").innerText = drink.strDrink;
//       document.querySelector(".details .ingredients").innerText =
//         getIngredients(drink);
//       document.querySelector(".details .instructions").innerText =
//         drink.strInstructions;
//     });
// }

// document.querySelector("button").addEventListener("click", backToAll);
// function backToAll() {
//   document.querySelector(".list").classList.toggle("hidden");
//   document.querySelector(".details").classList.toggle("hidden");
// }

// function getIngredients(ing) {
//   console.log(ing);
//   //   let leng = Object.keys(ing).length;
//   let ingredients = "";
//   for (let i = 1; i <= 15; i++) {
//     // console.log(ing[`strIngredient${i}`]);
//     // console.log(ing[`strMeasure${i}`]);
//     ing[`strIngredient${i}`]
//       ? (ingredients += `${ing[`strIngredient${i}`]} (${
//           ing[`strMeasure${i}`]
//         })\n`)
//       : "";
//   }
//   return ingredients;
// }
