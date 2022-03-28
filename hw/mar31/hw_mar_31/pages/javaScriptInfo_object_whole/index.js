// javascript.info Object the whole chapter

// ######################################################
// Objects
// ######################################################
/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
console.log("************************");
console.log("OBJECT TASKS");
console.log("************************");
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

// #################################################################
/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
  // if it enter the loope so there is a property return false otherwise return true
  //   for(let key in obj){
  //       return false
  //   }
  //   return true
}

console.log(isEmpty({}));

// #################################################################

/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let totalSalaries = (obj) => {
  let total = 0;
  for (let m in obj) {
    total += obj[m];
  }
  return total;
};

console.log(totalSalaries(salaries));

// #################################################################

/*
Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/

let multiplyNumeric = (obj) => {
  for (let o in obj) {
    if (typeof obj[o] === "number") {
      obj[o] *= 2;
    }
  }
  return obj;
};
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu));

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Object references and copying
// ######################################################
// shallow copy of object

console.log("************************");
console.log("Object references and copying TASKS");
console.log("************************");

let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user2);
console.log(user2.sizes === clone.sizes); //true same reference

// user2 and clone share sizes
user2.sizes.width++; // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one

// to deep clone object we could use recursion for each property it its value is another object
// or use lodash library and use _.cloneDeep(obj)

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Garbage collection
// ######################################################

/*
The main things to know:

Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.
Modern engines implement advanced algorithms of garbage collection.
*/

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Object methods, "this"
// ######################################################

/*
Summary
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
*/

// Tasks
console.log("************************");
console.log('Object methods, "this" TASKS');
console.log("************************");
/*
(1)
Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?
*/

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user3 = makeUser();

console.log(user3.ref.name); // What's the result?

// without 'use strict' at the begining of the file it refer the global object (the window object)
// but with the 'use strict' mode it return an error, the this is undefined so we call name of undefined as it called as method not as object (without dot)
// it's reference the global object as it definded inside the object literal

// the working version
// thr ref is function and the value of this is refers to the object before dot
function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user4 = makeUser2();

console.log(user4.ref().name); // What's the result?

/*
(2)
Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
let calculator = {
  n1: 0,
  n2: 0,
  read() {
    this.n1 = +prompt("Please enter the first number");
    this.n2 = +prompt("Please enter the second number");
  },
  sum() {
    return this.n1 + this.n2;
  },
  mul() {
    return this.n1 * this.n2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/*
(3)
Chaining
importance: 2
There’s a ladder object that allows to go up and down:
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:
// the solution is by return this in each method

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Constructor, operator "new"
// ######################################################

/*
Summary
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.
*/

// Tasks
console.log("************************");
console.log('Constructor, operator "new" TASKS');
console.log("************************");
/*
(1)
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?
*/

let obj = { name: "aws" };
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log("a === b: ", a === b); // true
// If it is, then provide an example of their code.
// by force the constructor to return object not this

/*
(2)
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:
*/

function Calculator() {
  this.n1 = 0;
  this.n2 = 0;
  this.read = function () {
    this.n1 = +prompt("Please enter n1", 0);
    this.n2 = +prompt("Please enter n2", 0);
  };
  this.sum = function () {
    return this.n1 + this.n2;
  };
  this.mul = function () {
    return this.n1 * this.n2;
  };
}
let calculator2 = new Calculator();
calculator2.read();

console.log("Sum=" + calculator2.sum());
console.log("Mul=" + calculator2.mul());

/*
(3)
Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:
*/

function Accumulator(initialValue) {
  this.value = initialValue;
  this.read = function () {
    this.value += +prompt("Please enter a number to add", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Optional chaining '?.'
// ######################################################

/*
Summary
The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
*/

// #################################################################
// #################################################################
// #################################################################
// #################################################################

// ######################################################
// Symbol type
// ######################################################

/*
Summary

*/
