const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  setImagesPerClick();
  addNewImages();
  scrollToButton();
});

function addNewImages () {
  for (let index = 0; index < imaginiPerClick; index++) {
    const newImageEl = document.createElement("img");

    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*20000)}`;
  
    imageContainerEl.appendChild(newImageEl);

    btnEl.innerHTML = "Încarcă mai multe Poze Frumoase";
  }
};

function scrollToButton() {
  btnEl.scrollIntoView({
    behavior: "smooth", 
    block: "center"  
  });
}

function setImagesPerClick() {
  if (window.matchMedia("(max-width: 410px)").matches) {
    imaginiPerClick = 5;
  } else if (window.matchMedia("(min-width: 411px) and (max-width: 1000px)").matches) {
    imaginiPerClick = 7;
  } else if (window.matchMedia("(min-width: 1000px)").matches) {
    imaginiPerClick = 6;
  }
}