const bodyEl = document.querySelector("body");

const incepeExercitiileEl = document.querySelector(".incepe-exercitiile");

// Acesta este Scorul Salvat in localStorage
let score = JSON.parse(localStorage.getItem("score")) || {
  corect: 0,
  gresit: 0,
};

// Functia cu care generez exercitiul nou
function genereazaExercitiuNou() {
  const paginaDoi = document.querySelector(".pagina");
  paginaDoi.innerHTML = "";

  const titluPaginaDoi = document.createElement("h1");
  titluPaginaDoi.innerText = "Rezolvă următoarele calcule";
  paginaDoi.appendChild(titluPaginaDoi);

  const calcululDiv = document.createElement("div");
  calcululDiv.classList.add("calculul");

  // Generez doua numere random
  let range1 = { min: 4, max: 9 };
  let primulNumarRandom = Math.floor(Math.random() * (range1.max - range1.min + 1)) + range1.min;
  let range2 = { min: 4, max: 9 };
  let alDoileaNumarRandom = Math.floor(Math.random() * (range2.max - range2.min + 1)) + range2.min;

  // Afisez Primul Numar
  const primulNumarDiv = document.createElement("div");
  primulNumarDiv.classList.add("primul-numar");
  primulNumarDiv.innerHTML = primulNumarRandom;
  calcululDiv.appendChild(primulNumarDiv);

  // Simbolul de Inmultire
  const simbolAritmeticaDiv = document.createElement("div");
  simbolAritmeticaDiv.classList.add("simbol-aritmetica");
  simbolAritmeticaDiv.innerHTML = `×`;
  calcululDiv.appendChild(simbolAritmeticaDiv);

  // Afisez cel ed-al Doilea Numar
  const alDoileaNumarDiv = document.createElement("div");
  alDoileaNumarDiv.classList.add("al-doilea-numar");
  alDoileaNumarDiv.innerHTML = alDoileaNumarRandom;
  calcululDiv.appendChild(alDoileaNumarDiv);

  // Semnul de Egal
  const egalDiv = document.createElement("div");
  egalDiv.classList.add("egal");
  egalDiv.innerHTML = `=`;
  calcululDiv.appendChild(egalDiv);

  // Campul in care se introduce rezultatul
  const rezultatulDiv = document.createElement("input");
  rezultatulDiv.type = "number";
  rezultatulDiv.classList.add("rezultatul");
  calcululDiv.appendChild(rezultatulDiv);

  paginaDoi.appendChild(calcululDiv);

  // Butonul de validare al rezultatului
  const valideazaRezultatulDiv = document.createElement("div");
  valideazaRezultatulDiv.classList.add("valideaza-calculul");
  valideazaRezultatulDiv.innerHTML = `Verifică`;
  paginaDoi.appendChild(valideazaRezultatulDiv);

  // addEventListener pe buton
  valideazaRezultatulDiv.addEventListener("click", () => {
    validareaRaspunsului(primulNumarRandom, alDoileaNumarRandom);
  });
}

// Functia cu care validez raspunsul si afisez rezultatul
function validareaRaspunsului(primulNumar, alDoileaNumar) {
  const rezultatulEl = document.querySelector(".rezultatul");

  const paginaTrei = document.querySelector(".pagina");
  paginaTrei.innerHTML = "";

  const titluPaginaTrei = document.createElement("h1");
  titluPaginaTrei.innerText = "Răspunsul tău este:";
  paginaTrei.appendChild(titluPaginaTrei);

  const rezultatulIntrodus = parseInt(rezultatulEl.value);
  const rezultatulCorect = primulNumar * alDoileaNumar;

  const validareaRezultatului = document.createElement("div");

  if (rezultatulIntrodus === rezultatulCorect) {
    validareaRezultatului.classList.add("raspuns-corect");
    validareaRezultatului.innerHTML = `Corect!`;
    score.corect++; // SIII! mai adaug un punct la scorul de Raspunsuri Corecte
  } else {
    validareaRezultatului.classList.add("raspuns-gresit");
    validareaRezultatului.innerHTML = `Greșit!`;
    score.gresit++; // SIII! mai adaug un punct la scorul de Raspunsuri Gresite
  }

  // Actualizez Scrorul in spatiul de stocare din Browserul local
  localStorage.setItem("score", JSON.stringify(score));

  paginaTrei.appendChild(validareaRezultatului);

  // Afisez Statisticile
  const statistici = document.createElement("div");
  statistici.classList.add("statistici");
  statistici.innerHTML = `
    | Răspunsuri corecte: ${score.corect} |
    <br> 
    | Răspunsuri greșite: ${score.gresit} |
  `;
  paginaTrei.appendChild(statistici);

  // Butonul de Exercitiu Nou
  const urmatorulExercitiuDiv = document.createElement("div");
  urmatorulExercitiuDiv.classList.add("urmatorul-exercitiu");
  urmatorulExercitiuDiv.innerHTML = `Din Nou!`;
  paginaTrei.appendChild(urmatorulExercitiuDiv);

  urmatorulExercitiuDiv.addEventListener("click", () => {
    genereazaExercitiuNou(); // Si aici ma intorc la generarea noului exercitiu
  });
}

// Butonul de Incepere de Exercitii - click
incepeExercitiileEl.addEventListener("click", () => {
  genereazaExercitiuNou();
});

// Butonul de Incepere de Exercitii - TASTA ENTER
bodyEl.addEventListener('keydown', (tastaActivata) => {
  const currentH1 = document.querySelector("h1");

  if (currentH1 && currentH1.innerText === "Hai să exersăm înmulțirea") {
    if (tastaActivata.key === 'Enter') {
      genereazaExercitiuNou();
    }
  }
});

