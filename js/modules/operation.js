export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  dataOperation() {
    this.weekDays = this.operation.dataset.week.split(",").map(Number);
    this.weekHour = this.operation.dataset.hour.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const weekopen = this.weekDays.indexOf(this.dayNow) !== -1;
    const hourOpen =
      this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1];
    return weekopen && hourOpen;
  }
  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
