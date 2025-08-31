export default function initTooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipbox = createTooltipBox(this);
    tooltipbox.style.top = event.pageY + "px";
    tooltipbox.style.left = event.pageX + "px";

    onMouseMove.tooltipbox = tooltipbox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipbox = tooltipbox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
 
  const onMouseLeave = {
    handleEvent() {
      this.tooltipbox.remove();
      this.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipbox.style.top = event.pageY + 20 + "px";
      this.tooltipbox.style.left = event.pageX + 20 + "px";
    },
  };

  function createTooltipBox(element) {
    const tooltipbox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipbox.classList.add("tooltip");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }
}
