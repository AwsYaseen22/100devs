// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

// encapsulation
class Contractor {
  constructor(name, role) {
    // abstraction (hiding with _)
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am ${this.name} and I am ${this.role} at #100Devs.`);
  }
}

// inheritance (bu extends)
class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  //   Polymorphism that each class use the same function with different output
  sayHello() {
    // inherihance by call methods from the parents also
    super.sayHello();

    console.log(`and I work at ${this.tech}`);
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    super.sayHello();
    console.log(`and I work at ${this.tech}`);
  }
}

let bob = new Contractor("Bob", "Front-end");
let simba = new Front("Simba", "Front-end", "React");
let machi = new Back("The Machine", "Back-end", "Node");

let agency = [bob, simba, machi];

for (person of agency) {
  person.sayHello();
  console.log(person.constructor.name);
}

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
