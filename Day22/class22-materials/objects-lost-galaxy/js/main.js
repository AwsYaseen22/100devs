//Create a mouse object that has four properties and three methods

const mouse = {
  color: "black",
  type: "wireless",
  brand: "logitech",
  hasThreeButtons: false,
  click: () => console.log("clickkkkkkk"),
  rightClick: () => console.log("right clickkkkkkk"),
  dblClick: () => console.log("double clickkkkkk"),
};

mouse.dblClick();

function MouseFactory(color, type, brand, hasThreeButtons) {
  this.color = color;
  this.type = type;
  this.brand = brand;
  this.hasThreeButtons = hasThreeButtons;
  this.click = () => console.log("clickkkkkkk");
  this.rightClick = () => console.log("right clickkkkkkk");
  this.dblClick = () => console.log("double clickkkkkk");
  // return { color, type, brand, hasThreeButtons };
}

let logitech = new MouseFactory("black", "wireless", "logitech", true);
console.log(logitech);
console.log(logitech.hasBall);
MouseFactory.prototype.hasBall = false;
console.log(logitech.hasBall);
