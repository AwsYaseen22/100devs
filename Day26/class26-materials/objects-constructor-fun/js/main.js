//Create a constructor with 4 properties and 3 methods
function Pizza(type, size, peices, rank) {
  this.type = type;
  this.size = size;
  this.peices = peices;
  this.rank = rank;
  this.hasTomato = function () {
    return false;
  };
  this.hasMeat = function () {
    console.log(true);
  };
  this.ingredients = function () {
    console.log("Wheat, Chicken, Cheese, Onion");
  };
}

let pizzaHut = new Pizza("barbique", "large", "8", "10");
console.log(pizzaHut.type);
console.log(pizzaHut.ingredients());
