export default function initOperation() {
  const operation = document.querySelector("[data-week]");
  const weekDays = operation.dataset.week.split(",").map(Number);
  const weekHour = operation.dataset.week.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekopen = weekDays.indexOf(dayNow) !== -1;
  let hourOpen = hourNow >= weekHour[0] && hourNow < weekHour[1];

  if (weekopen && hourOpen) {
    operation.classList.add("open");
  }
}
