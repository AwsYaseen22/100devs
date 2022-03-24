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
