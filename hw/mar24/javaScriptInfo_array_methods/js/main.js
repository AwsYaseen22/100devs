/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/
function camelize(str) {
  let strArr = str.split("-");

  let newArr = strArr.map((s, i) => {
    if (i === 0) {
      return s;
    } else {
      return s[0].toUpperCase() + s.substring(1);
    }
  });
  return newArr.join("");
}

console.log(camelize("background-color"));

// ########################################################

/*
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/
function filterRange(arr, a, b) {
  let result = [];
  arr.forEach((n) => {
    if (n >= a && n <= b) {
      result.push(n);
    }
  });
  return result;
}

console.log(filterRange([5, 3, 8, 1], 3, 8));

// ########################################################

/*
Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b) {
  arr.forEach((n, i) => {
    if (!(n >= a && n <= b)) {
      arr.splice(i, 1);
    }
  });
}
let arr = [5, 3, 8, 1, 9, 10, 13];
filterRangeInPlace(arr, 1, 8);
console.log(arr);

// ########################################################

/*
Sort in decreasing order
importance: 4
*/

let arrToSort = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arrToSort.sort((a, b) => b - a);

console.log(arrToSort); // 8, 5, 2, 1, -10

// ########################################################

/*
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.


*/

let arrCopySort = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let cp = arr.slice();
  return cp.sort();
}

let sorted = copySorted(arrCopySort);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arrCopySort); // HTML, JavaScript, CSS (no changes)

// ########################################################

/*
Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

// ########################################################

/*
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = [];
users.forEach((user) => {
  names.push(user.name);
});

console.log(names); // John, Pete, Mary

// ########################################################

/*
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
*/
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete1, mary1];
let usersMaped = [];

users1.forEach((user) => {
  usersMaped.push({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  });
});

console.log(usersMaped);

// ########################################################

/*
Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr2 = [pete2, john2, mary2];

sortByAge(arr2);
console.log(arr2);

// ########################################################

/*
Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
*/
function shuffle(arr) {
  let n = arr.length;
  let r = [];
  let result = [];
  while (r.length < n) {
    let rand = Math.floor(Math.random() * n);
    if (r.indexOf(rand) === -1) {
      r.push(rand);
    }
  }
  r.forEach((x, i) => {
    result[i] = arr[x];
  });

  console.log(result);
}
shuffle([1, 2, 3]);

// ########################################################

/*
Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(users) {
  return users.reduce((a, c) => a + c.age, 0) / users.length;
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr3 = [john3, pete3, mary3];

console.log(getAverageAge(arr3));

// ########################################################

/*
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
  let uni = [];
  arr.forEach((s) => {
    if (uni.indexOf(s) === -1) {
      uni.push(s);
    }
  });
  return uni;
}
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

// ########################################################

/*
Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 */

// function groupById(arr) {
//   let usersObj = {};
//   arr.forEach((user) => {
//     usersObj[user.id] = user;
//   });
//   return usersObj;
// }
function groupById(arr) {
  let usersObj = {};
  arr.reduce(
    (a, c) => {
      a[c.id] = c;
      return a;
    },

    usersObj
  );
  return usersObj;
}

let users4 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users4);
console.log(usersById);
