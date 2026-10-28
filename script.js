// Personalize these two links before publishing.
const WHATSAPP_NUMBER = ""; // Example: 5531999999999 (country code + area code + number, digits only)
const INSTAGRAM_URL = "https://instagram.com/anaconstantinoestetica";
const CITY_LABEL = "Belo Horizonte - MG"; // Update if needed

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
const waUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os tratamentos da Ana Constantino Estética Integrativa.")}`
  : "https://wa.me/";
["whatsapp-link","whatsapp-float"].forEach(id => document.getElementById(id).href = waUrl);
document.getElementById("instagram-link").href = INSTAGRAM_URL;
document.querySelector(".contact-note").innerHTML = `Atendimento em <strong>${CITY_LABEL}</strong>`;