const imageContainerEl = document.querySelector(".image-container");

const stangaEl = document.getElementById("stanga");

const dreaptaEl = document.getElementById("dreapta");

let unghiRotire = 0;

let timerRotire;

stangaEl.addEventListener("click", () => {
  unghiRotire = unghiRotire + 45;
  clearTimeout(timerRotire);
  updateGallery();
});

dreaptaEl.addEventListener("click", () => {
  unghiRotire = unghiRotire - 45;
  clearTimeout(timerRotire);
  updateGallery();
});

function updateGallery () {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${unghiRotire}deg)`;
  timerRotire = setTimeout(() => {
    unghiRotire = unghiRotire -45;
    updateGallery();
  }, 3000);
};

updateGallery();