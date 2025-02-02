const primulNumarEl = document.querySelector(".primul-numar");

const alDoileaNumarEl = document.querySelector(".al-doilea-numar");

const rezultatulEl = document.querySelector("rezultatul");

let range = {min: 4, max: 9};
let delta = range.max - range.min;



const primulNumarRandom = Math.round(range.min + Math.random() * delta);
const alDoileaNumarRandom = Math.round(range.min + Math.random() * delta);

const rezultatulFinal = primulNumarRandom * alDoileaNumarRandom;

primulNumarEl.innerText = primulNumarRandom;
alDoileaNumarEl.innerText = alDoileaNumarRandom;

console.log(primulNumarRandom);
console.log(alDoileaNumarRandom);
console.log(rezultatulFinal);
