export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipbox.style.top = `${event.pageY + 20}px`;
    if (event.pagex + 240 > window.innerWidth) {
      this.tooltipbox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipbox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipbox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  createTooltipBox(element) {
    const tooltipbox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipbox.classList.add("tooltip");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    this.tooltipbox = tooltipbox;
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
