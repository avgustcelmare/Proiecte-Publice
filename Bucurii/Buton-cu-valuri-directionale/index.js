const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  
  /*
  console.log(event.pageX);
  console.log(event.pageY);
  console.log("======Pozitia din Pagina========");
  */
  
  /*
  console.log(event.pageX - btnEl.offsetLeft);
  console.log(event.pageY - btnEl.offsetTop);
  console.log("======Pozitia de pe Buton========");
  */

  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px")
  btnEl.style.setProperty("--yPos", y + "px")
});