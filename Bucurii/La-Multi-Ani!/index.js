const containerEl = document.querySelector(".container");

const careers = ["sănătate", "fericire", "bucurii", "noroc", "realizări"]

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `
    <h1>vă doresc ${careers[careerIndex].slice(-1) === "e" ? "multă" : careers[careerIndex].slice(-1) === "i" ? "multe" : "mult"} ${careers[careerIndex].slice(0, characterIndex)}  în noul an!</h1>
  `;

  characterIndex++;

  if (characterIndex === careers[careerIndex].length+1) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 320);
};
