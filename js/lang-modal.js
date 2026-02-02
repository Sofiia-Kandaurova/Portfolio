document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModal");

  // Если модалки нет на странице — ничего не делаем
  if (!modal || !closeBtn) return;

  const KEY = "GLOBAL_WELCOME_MODAL";

  // Если уже показывали — не открываем
  if (localStorage.getItem(KEY) === "true") {
    modal.style.display = "none";
    return;
  }

  // Первый и единственный показ
  modal.style.display = "flex";

  // КНОПКА ЗАКРЫТИЯ
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    localStorage.setItem(KEY, "true");
  });
});
