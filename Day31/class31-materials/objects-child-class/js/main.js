//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log("Woff....");
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log("Meow....");
  }
}

class Cow extends Animal {
  constructor(name) {
    super(name);
  }
}

let myAnimal = new Animal("animaly");
let myDog = new Dog("Simba", "Sheperd");
let myCat = new Cat("Ginger", "catty");
let myCow = new Cow("my Cow");

// console.log(myAnimal.name);
myAnimal.speak();
myDog.speak();
myCat.speak();
console.log(myCow.name);
myCow.speak();
