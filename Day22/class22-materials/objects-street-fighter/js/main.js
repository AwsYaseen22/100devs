//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, power, health, points) {
  this.name = name;
  this.power = power;
  this.health = health;
  this.points = points;
  this.showHealth = () => console.log(this.health);
  this.healthUp = () => this.health++;
  this.healthDown = () => this.health--;
}

let p1 = new StreetFighter("kungi", 10, 10, 0);
console.log(p1.health);
p1.healthDown();
console.log(p1.health);
p1.healthUp();
p1.healthUp();
p1.healthUp();
console.log(p1.health);
