const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imaginiPerClick = 5;
  addNewImages();
  scrollToButton();
});

function addNewImages () {
  for (let index = 0; index < imaginiPerClick; index++) {
    const newImageEl = document.createElement("img");

    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*20000)}`;
  
    imageContainerEl.appendChild(newImageEl);

    btnEl.innerHTML = "Încarcă mai multe poze frumoase";
  }
};

function scrollToButton() {
  btnEl.scrollIntoView({
    behavior: "smooth", 
    block: "center"  
  });
}