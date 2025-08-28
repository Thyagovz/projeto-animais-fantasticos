function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");
  }

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });

    tabContent[index].classList.add("active");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");
  }

  function activeAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
initAccordion();

function initScrollSuave() {
  const internalink = document.querySelectorAll('.js-menu a[href^="#"]');
  console.log(internalink);
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalink.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
