// eloquent javaScript chapter 04

// The sum of a range
function range(start, end, step = 1) {
  let arr = [];
  if (start > end) {
    if (step == 1) {
      step *= -1;
    }
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

function sum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}

// console.log(sum(range(10, 1, -2)));

// ############################################################

// Reversing an array

function reverseArray(arr) {
  // return new array
  let result = [];
  arr.forEach((x) => result.unshift(x));
  return result;
}

// use the swap method
function reverseArrayInPlace(arr) {
  // affect the same array
  //   loop hald the array (the middle not affected)
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // swap the first with the last and so on
    let temp = arr[i];
    let temp2 = arr[arr.length - 1 - i];
    arr[i] = temp2;
    arr[arr.length - 1 - i] = temp;
  }
}

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(reverseArray(arr));
// reverseArrayInPlace(arr);
// console.log(arr);

// ############################################################

// A list

/*
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
*/

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));

// ############################################################

// Deep comparison

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
