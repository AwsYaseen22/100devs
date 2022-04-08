//Create a pizza object that has four properties and three methods
let pizza = {};
pizza.type = "sanfransisco";
pizza.size = "large";
pizza.peices = 6;
pizza.rank = 10;
pizza.hasTomato = function () {
  return false;
};
pizza.hasMeat = function () {
  console.log(true);
};
pizza.ingredients = function () {
  console.log("Wheat, Chicken, Cheese, Onion");
};

console.log(pizza.name);
console.log(pizza.ingredients());
