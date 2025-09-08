import AnimateNumbers from "./animate-numbers.js";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");

    div.innerHTML = `<h3> ${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers(
      "[data-number]",
      ".numbers",
      "active"
    );
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
