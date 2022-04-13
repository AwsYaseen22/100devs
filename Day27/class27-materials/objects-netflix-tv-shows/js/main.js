//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix {
  constructor(title, genre, rating, numOfEp) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEp = numOfEp;
  }
  play() {
    console.log("playing....");
  }
  pause() {
    console.log("stoping....");
  }
  saveTheList() {
    console.log("saved to list.");
  }
}

let netflex = new Netflix("Bridgerton", "Drama", "99%", 16);
