document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !closeBtn) return;

  const KEY = "WELCOME_MODAL_SESSION";

  if (sessionStorage.getItem(KEY) === "true") {
    modal.style.display = "none";
    return;
  }

  modal.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    sessionStorage.setItem(KEY, "true");
  });
});
