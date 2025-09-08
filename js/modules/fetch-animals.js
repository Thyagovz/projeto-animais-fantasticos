import AnimateNumbers from "./animate-numbers.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");

    div.innerHTML = `<h3> ${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  async function FetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
      });
      const animateNumbers = new AnimateNumbers(
        "[data-number]",
        ".numbers",
        "active"
      );
      animateNumbers.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  FetchAnimals("./animalsapi.json");
}
