let ul = document.querySelector("ul");

const url = `https://restcountries.com/v3.1/all`;
fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data.length);
    console.log(data[100].name.official);
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.classList.add("slide");
      ul.appendChild(li);
      if (i === 0) {
        document.querySelectorAll("li")[0].classList.add("showing");
      }
      li.innerText = i;
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// Carousel
var slides = document.querySelectorAll("#slides .slide");
console.log(slides.length);
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  // slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

var playing = true;
var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  pauseButton.innerHTML = "Play";
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "Pause";
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
