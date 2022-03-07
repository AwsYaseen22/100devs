//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function loop21() {
  let unorderedList = document.createElement("ul");
  for (let i = 0; i < 21; i++) {
    console.log(21);
    let li = document.createElement("li");
    li.innerText = 21;
    unorderedList.appendChild(li);
  }
  let body = document.querySelector("body");
  body.appendChild(unorderedList);
}
loop21();
