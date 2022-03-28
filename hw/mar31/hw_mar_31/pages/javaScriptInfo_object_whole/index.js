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
alert(calculator.sum());
alert(calculator.mul());

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
    alert(this.step);
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

*/
