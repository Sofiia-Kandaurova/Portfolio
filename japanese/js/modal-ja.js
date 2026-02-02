document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const openBtn = document.getElementById("openModalBtnJa");
  const closeBtn = document.getElementById("closeModalBtnJa");

  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.classList.remove("invisible");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("invisible");
    });
  } else {
    console.warn("Не удалось найти один из элементов: modal, openModalBtn или closeModalBtn");
  }
});
