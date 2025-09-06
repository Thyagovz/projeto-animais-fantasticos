import debounce from "./debounce.js";

export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHalf = window.innerHeight * 0.6;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", debounce(animaScroll, 50));
  }
}
