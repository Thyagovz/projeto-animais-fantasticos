export default function initModal() {
  const showButton = document.querySelector('[data-modal="show"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("active");
  }

  function clickOutModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (showButton && closeButton && containerModal) {
    showButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutModal);
  }
}
