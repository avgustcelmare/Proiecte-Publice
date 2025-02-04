const incepeExercitiileEl = document.querySelector(".incepe-exercitiile");

let score = JSON.parse(localStorage.getItem("score")) || {
  corect: 0,
  gresit: 0,
};

function generateExercise() {
  const paginaDoi = document.querySelector(".pagina");
  paginaDoi.innerHTML = "";

  const titluPaginaDoi = document.createElement("h1");
  titluPaginaDoi.innerText = "Rezolvă următoarele calcule";
  paginaDoi.appendChild(titluPaginaDoi);

  const calcululDiv = document.createElement("div");
  calcululDiv.classList.add("calculul");

  let range = { min: 4, max: 9 };
  let primulNumarRandom = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  let alDoileaNumarRandom = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

  const primulNumarDiv = document.createElement("div");
  primulNumarDiv.classList.add("primul-numar");
  primulNumarDiv.innerHTML = primulNumarRandom;
  calcululDiv.appendChild(primulNumarDiv);

  const simbolAritmeticaDiv = document.createElement("div");
  simbolAritmeticaDiv.classList.add("simbol-aritmetica");
  simbolAritmeticaDiv.innerHTML = `×`;
  calcululDiv.appendChild(simbolAritmeticaDiv);

  const alDoileaNumarDiv = document.createElement("div");
  alDoileaNumarDiv.classList.add("al-doilea-numar");
  alDoileaNumarDiv.innerHTML = alDoileaNumarRandom;
  calcululDiv.appendChild(alDoileaNumarDiv);

  const egalDiv = document.createElement("div");
  egalDiv.classList.add("egal");
  egalDiv.innerHTML = `=`;
  calcululDiv.appendChild(egalDiv);

  const rezultatulDiv = document.createElement("input");
  rezultatulDiv.type = "number";
  rezultatulDiv.classList.add("rezultatul");
  calcululDiv.appendChild(rezultatulDiv);

  paginaDoi.appendChild(calcululDiv);

  const valideazaRezultatulDiv = document.createElement("div");
  valideazaRezultatulDiv.classList.add("valideaza-calculul");
  valideazaRezultatulDiv.innerHTML = `Verifică`;
  paginaDoi.appendChild(valideazaRezultatulDiv);

  valideazaRezultatulDiv.addEventListener("click", () => {
    validateAnswer(primulNumarRandom, alDoileaNumarRandom);
  });
}

function validateAnswer(primulNumar, alDoileaNumar) {
  const rezultatulEl = document.querySelector(".rezultatul");

  const paginaTrei = document.querySelector(".pagina");
  paginaTrei.innerHTML = "";

  const titluPaginaTrei = document.createElement("h1");
  titluPaginaTrei.innerText = "Răspunsul tău este:";
  paginaTrei.appendChild(titluPaginaTrei);

  const rezultatulIntrodus = parseInt(rezultatulEl.value, 10);
  const rezultatulCorect = primulNumar * alDoileaNumar;

  const validareaRezultatului = document.createElement("div");

  if (rezultatulIntrodus === rezultatulCorect) {
    validareaRezultatului.classList.add("raspuns-corect");
    validareaRezultatului.innerHTML = `Corect!`;
    score.corect++; 
  } else {
    validareaRezultatului.classList.add("raspuns-gresit");
    validareaRezultatului.innerHTML = `Greșit!`;
    score.gresit++; 
  }

  localStorage.setItem("score", JSON.stringify(score));

  paginaTrei.appendChild(validareaRezultatului);

  const statistici = document.createElement("div");
  statistici.classList.add("statistici");
  statistici.innerHTML = `
    | Răspunsuri corecte: ${score.corect} |
    <br> 
    | Răspunsuri greșite: ${score.gresit} |
  `;
  paginaTrei.appendChild(statistici);

  const urmatorulExercitiuDiv = document.createElement("div");
  urmatorulExercitiuDiv.classList.add("urmatorul-exercitiu");
  urmatorulExercitiuDiv.innerHTML = `Din Nou!`;
  paginaTrei.appendChild(urmatorulExercitiuDiv);

  urmatorulExercitiuDiv.addEventListener("click", () => {
    generateExercise(); 
  });
}

incepeExercitiileEl.addEventListener("click", () => {
  generateExercise();
});
