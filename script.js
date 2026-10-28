document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = opened ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));