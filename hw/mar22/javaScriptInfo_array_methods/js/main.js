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
