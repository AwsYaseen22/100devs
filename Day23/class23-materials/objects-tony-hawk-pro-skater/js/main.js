//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function TonyHawk(name, stance, sponser, specialMove) {
  this.name = name;
  this.stance = stance;
  this.sponser = sponser;
  this.specialMove = specialMove;
  this.flip = function () {
    console.log("flip");
  };
  this.taunt = function () {
    console.log(`dont let mae use my ${this.specialMove}`);
  };
  this.grab = function () {
    console.log("Melon Grabbb");
  };
}

let player1 = new TonyHawk("Kareem", "goofy", "Element", "Gheto bird");

console.log(player1.taunt());
