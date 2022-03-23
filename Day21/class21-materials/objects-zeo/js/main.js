//Create a stopwatch object that has four properties and three methods
const stopwatch = {};
stopwatch.color = "black";
stopwatch.brand = "Tissot";
stopwatch.minutes = 32;
stopwatch.seconds = 45;
stopwatch.start = () => console.log("starting");
stopwatch.stop = () => console.log("stop");
stopwatch.restart = () => console.log("restart");
stopwatch.sayBrand = () => console.log(stopwatch.brand);

console.log(stopwatch.start());
console.log(stopwatch.sayBrand());
