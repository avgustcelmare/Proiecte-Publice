let score = JSON.parse(localStorage.getItem('score')) || {
  corect: 0,
  gresit: 0,
};


const incepeExercitiileEl = document.querySelector(".incepe-exercitiile");

incepeExercitiileEl.addEventListener("click", () => {
  const paginaDoi = document.querySelector(".pagina");
  paginaDoi.innerHTML = "";

  const titluPaginaDoi = document.createElement('h1');
  titluPaginaDoi.innerText = "Rezolvă următoarele calcule";
  paginaDoi.appendChild(titluPaginaDoi);

  const calcululDiv = document.createElement('div');
  calcululDiv.classList.add('calculul');
  calcululDiv.innerHTML = "";


  const primulNumarDiv = document.createElement('div');
  primulNumarDiv.classList.add('primul-numar');
  let range1 = {min: 4, max: 9};
  let delta1 = range1.max - range1.min;
  const primulNumarRandom = Math.round(range1.min + Math.random() * delta1);
  primulNumarDiv.innerHTML = primulNumarRandom;
  calcululDiv.appendChild(primulNumarDiv);

  const simbolAritmeticaDiv = document.createElement('div');
  simbolAritmeticaDiv.classList.add('simbol-aritmetica');
  simbolAritmeticaDiv.innerHTML = `×`;
  calcululDiv.appendChild(simbolAritmeticaDiv);

  const alDoileaNumarDiv = document.createElement('div');
  alDoileaNumarDiv.classList.add('al-doilea-numar');
  let range2 = {min: 4, max: 9};
  let delta2 = range2.max - range2.min;
  const alDoileaNumarRandom = Math.round(range1.min + Math.random() * delta2);
  alDoileaNumarDiv.innerHTML = alDoileaNumarRandom;
  calcululDiv.appendChild(alDoileaNumarDiv);

  const egalDiv = document.createElement('div');
  egalDiv.classList.add('egal');
  egalDiv.innerHTML = `=`;
  calcululDiv.appendChild(egalDiv);

  const rezultatulDiv = document.createElement('textarea');
  rezultatulDiv.classList.add('rezultatul');
  calcululDiv.appendChild(rezultatulDiv);

  paginaDoi.appendChild(calcululDiv);

  const valideazaRezultatulDiv = document.createElement('div');
  valideazaRezultatulDiv.classList.add('valideaza-calculul');
  valideazaRezultatulDiv.innerHTML = `Verifică`;
  paginaDoi.appendChild(valideazaRezultatulDiv);

  const verificaEl = document.querySelector(".valideaza-calculul");

  verificaEl.addEventListener("click", () => {
    const rezultatulEl = document.querySelector(".rezultatul");

    const paginaTrei = document.querySelector(".pagina");
    paginaTrei.innerHTML = "";

    const titluPaginaTrei = document.createElement('h1');
    titluPaginaTrei.innerText = "Răspunsul tău este:";
    paginaTrei.appendChild(titluPaginaTrei);

    const rezultatulIntrodus = rezultatulEl.value;
    const rezultatulCorect = primulNumarRandom * alDoileaNumarRandom;

    const validareaRezultatului = document.createElement('div');

    if (rezultatulIntrodus == rezultatulCorect) {
      validareaRezultatului.classList.add('raspuns-corect');
      validareaRezultatului.innerHTML = `Corect!`;
    } else {
      validareaRezultatului.classList.add('raspuns-gresit');
      validareaRezultatului.innerHTML = `Greșit!`;
    }

    paginaTrei.appendChild(validareaRezultatului);

    const urmatorulExercitiuDiv = document.createElement('div');
    urmatorulExercitiuDiv.classList.add('urmatorul-exercitiu');
    urmatorulExercitiuDiv.innerHTML = `Din Nou!`;
    paginaTrei.appendChild(urmatorulExercitiuDiv);

    const urmatorulExercitiuEl = document.querySelector(".urmatorul-exercitiu");

    urmatorulExercitiuEl.addEventListener("click", () => {
      window.location.reload();

    });

  });

});