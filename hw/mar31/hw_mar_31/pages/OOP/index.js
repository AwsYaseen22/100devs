// Object Literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
// circle.draw();

// Factories function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw from the function");
      console.log(radius);
    },
  };
}

let newCircle = createCircle(10);
// newCircle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log(`draw ${this.radius} radius dircle from constructor function`);
  };
}

let newCircle2 = new Circle(20);
// newCircle2.draw();

// Constructors
// the constructor is created when create the object
// console.log(newCircle.constructor);
// the constructor is the constructor function itself
// console.log(newCircle2.constructor);

// Constructor Property
Circle.call({}, 20); // same as new with one propery
Circle.apply({}, [1, 2, 3]); // same as new but with multi properies

// Functions are Object
// console.log(Circle);
// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);

// Value vs Reference Types
// Value Type (Number, String, Boolean, Symbol, undefiend, null)
// Reference Type (Object, Function, Array)

// the n is independent from n inside the function
let n = 10;
function increase(number) {
  // numbered stored in another place in memory
  number++;
}
increase(n);
// console.log(n); // stay 10 coz the function create a local variable number and don't affect the golbal n

// the obj is store the reference to the object in the memoryso it share the same position of the inside the function obj
let obj = { value: 10 };
function increase(object) {
  // object stored in the same place in memory
  object.value++;
}
increase(obj);
// console.log(obj.value); // will be 11 coz the function variable object share the same reference with the obj

// to loop in object
// for (let key in obj) {
//   console.log(obj[key]);
// }
// to delete use delete obj.value
// to check if the obj has a property
// console.log("value" in obj);

// Abstractio
// to hide some information in the object and show just the essential properties
// private properties and methods
// by remove the this. and create a local var with let
// then it is not abailable outside the object

// Getters and Setters

function Circle2(radius) {
  this.radius = radius;
  //   private property
  let defaultLocation = { x: 1, y: 1 };
  this.getDefaultLocation = () => defaultLocation;
  this.draw = () => {
    console.log(
      `draw ${this.radius} radius dircle from constructor function of Circle2`
    );
  };
  //   Create a property then inside of it create the getter and setter
  Object.defineProperty(this, "defaultLocation", {
    // the getter function
    get: () => defaultLocation,
    // the setter to set the valur from outside
    set: (value) => {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    },
  });
}

let newCircle3 = new Circle2(20);
// newCircle3.draw();
// console.log(newCircle3.getDefaultLocation());
// console.log(newCircle3.defaultLocation);
// console.log(newCircle3);
// newCircle3.defaultLocation = 3; // will fire error as it not valid
newCircle3.defaultLocation = { x: 2, y: 3 };
// console.log(newCircle3.defaultLocation);

// ##############################################################
// Exercise
// ##############################################################

// stop watch
function Stopwatch() {
  //   private properties
  let startTime = 0;
  let endTime = 0;
  let running = false;
  let duration = 0;
  this.start = () => {
    if (running) {
      console.log("it is already running!");
      return;
    }
    console.log("starting...");
    running = true;
    startTime = new Date();
    console.log(startTime);
    // duration = 0;
    // console.log(startTime);
  };
  this.stop = () => {
    if (!running) {
      console.log("it is not started to be stoped");
      return;
    }
    console.log("stop the stop watch");
    running = false;
    endTime = new Date();
    // console.log(endTime.getTime());
    let mseconds = endTime.getTime() - startTime.getTime();
    duration += mseconds;
    console.log(duration);
    // let hours = new Date(duration).getUTCHours();
    // let minutes = new Date(duration).getMinutes();
    // let seconds = new Date(duration).getSeconds();
    // let mseconds = new Date(duration).getMilliseconds();
    // return `${hours}:${minutes}:${seconds}:${mseconds}`;
  };
  this.reset = () => {
    startTime = 0;
    endTime = 0;
    duration = 0;
    running = false;
  };
  //   create a private setter and getter
  Object.defineProperty(this, "result", {
    get: () => {
      //   return result;
      if (duration === 0) {
        return "00:00:000";
      }
      let hours = new Date(duration).getUTCHours();
      let minutes = new Date(duration).getMinutes();
      let seconds = new Date(duration).getSeconds();
      let mseconds = new Date(duration).getMilliseconds();
      return `${hours}:${minutes}:${seconds}:${mseconds}`;
    },
  });
}

let sw = new Stopwatch();
// console.log(sw.start());
// console.log(new Date(1648325490970));
// console.log(sw.stop());
// console.log(sw.duration);

let durationScreen = document.querySelector("#duration");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");

startButton.addEventListener("click", () => {
  sw.start();
  durationScreen.innerText = "counting...";
});
stopButton.addEventListener("click", () => {
  sw.stop();
  durationScreen.innerText = sw.result;
});
resetButton.addEventListener("click", () => {
  sw.reset();
  durationScreen.innerText = sw.result;
});
