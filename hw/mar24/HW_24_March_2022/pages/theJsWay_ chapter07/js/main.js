/*
Musketeers
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
*/
function musketeers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  arr.push("D'Artagnan");
  arr.forEach((musketeer) => console.log(musketeer));
  arr.splice(arr.indexOf("Aramis"), 1);
  for (const musk of arr) {
    console.log(musk);
  }
}
const musketeersArr = ["Athos", "Porthos", "Aramis"];
// musketeers(musketeersArr);

// ########################################################

/*
Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
*/
function sumOfArr(arr) {
  let result = 0;
  arr.forEach((n) => (result += n));
  console.log(result);
}
const values = [3, 11, 7, 2, 9, 10];
// sumOfArr(values);

// ########################################################

/*
Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
*/
function maxVal(arr) {
  let max = 0;
  arr.forEach((n) => {
    if (n > max) {
      max = n;
    }
  });
  console.log(max);
}
const values2 = [3, 11, 7, 2, 9, 10];
// maxVal(values2);

// ########################################################

/*
List of words
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/

function listOfWords() {
  let words = [];
  let word = prompt("Please give me a word; when finish type (stop) ");
  while (word !== "stop") {
    words.push(word);
    word = prompt("Please give me a word; when finish type (stop) ");
  }
  console.log(words);
}
listOfWords();
