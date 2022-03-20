/*
Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
*/

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  },
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// ######################################################

/*
Modeling a circle
Complete the following program to add the circle object definition. Its radius value is input by the user.
*/

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  radius: r,
  circumference() {
    return 2 * this.radius * Math.PI;
  },
  area() {
    return Math.pow(this.radius, 2) * Math.PI;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// ######################################################

/*
Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/
const account = {
  name: "Alex",
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    return `Owner: ${this.name}, balance ${this.balance}`;
  },
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
