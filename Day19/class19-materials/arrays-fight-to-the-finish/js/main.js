//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["movie1", "movie2", "movie3"];
let h2 = document.querySelector("h2").innerText;
movies.forEach((x, i) => (h2.innerText += x));

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArray = [1, 2, 3];
numArray.forEach((x, i) => (numArray[i] = numArray[i] + 3));
console.log(numArray);

//Find the average of all the numbers from question three
let sum = 0;
numArray.forEach((x, i) => (sum += x));
console.log(sum / numArray.length);
