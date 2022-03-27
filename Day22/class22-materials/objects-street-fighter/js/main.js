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
// prototype will add a property but it not showed in the main details of the object but under the object prototype
StreetFighter.prototype.age = 0;
console.log(p1);
let p2 = new StreetFighter("A", 100, 100, 100);
console.log(p2.age); //0
p2.age = 20;
console.log(p2.age); //0
// now we can see the property in the object as it has a special value for p2
console.log(p2);
