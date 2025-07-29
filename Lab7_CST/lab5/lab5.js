const image = document.querySelector("img");
const previous = document.getElementById("prev");
const forward = document.getElementById("next");
const startSlideshow = document.getElementById("slideshow");
const haltSlideshow = document.getElementById("stop");

let slideIndex = 1;
let interval = null;

forward.onclick = function() {
  slideIndex++;
  if (slideIndex > 6) slideIndex = 1;
  image.src = slideIndex + ".png";
};

previous.onclick = function() {
  slideIndex--;
  if (slideIndex < 1) slideIndex = 6;
  image.src = slideIndex + ".png";
};

startSlideshow.onclick = function() {
  if (interval) return;
  interval = setInterval(() => {
    slideIndex++;
    if (slideIndex > 6) slideIndex = 1;
    image.src = slideIndex + ".png";
  }, 600);
};

haltSlideshow.onclick = function() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};
