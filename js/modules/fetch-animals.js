import initAnimateNumbers from "./animate-numbers.js";

export default function initFetchAnimals() {
  async function FetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
      });
      initAnimateNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");

    div.innerHTML = `<h3> ${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  FetchAnimals("./animalsapi.json");
}
