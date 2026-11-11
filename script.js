const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
document.querySelectorAll("[data-enquiry]").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.enquiry;
    const message = `Hello Bichoo Ornaments, I am interested in your ${category} collection. Please share more details.`;
    card.href = `https://wa.me/917006692083?text=${encodeURIComponent(message)}`;
    card.target = "_blank";
    card.rel = "noopener";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
