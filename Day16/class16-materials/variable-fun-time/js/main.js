//--- Easy
//create a variable and assign it a number
let age = 45;

//minus 10 from that number
age -= 10;

//print that number to the console
console.log(age);

//--- Medium
//create a variable that holds a value from the input
let val = document.querySelector("#danceDanceRevolution").value;
console.log("the val: ", val);

//add 25 to that number
val += 25;

//alert that number
alert(val);

//--- Hard
//create a variable that holds the h1
let header1 = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
header1.addEventListener("click", adding);

function adding() {
  console.log(+age + +val);
}
