document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const yearTarget = document.querySelector("[data-year]");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("open").toString()
      );
    });

    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear().toString();
  }
});

const cards = Array.from(document.querySelectorAll(".member"));
const grid = document.getElementById("teamGrid");
const thumbs = document.querySelectorAll(".thumb-row img");

let current = 0;

function updateView() {
  grid.innerHTML = "";
  grid.appendChild(cards[current]);

  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[current].classList.add("active");
}

const teamGrid = document.getElementById("teamGrid");

document.getElementById("prevBtn").onclick = () => {
  teamGrid.parentElement.scrollBy({
    left: -350,
    behavior: "smooth"
  });
};

document.getElementById("nextBtn").onclick = () => {
  teamGrid.parentElement.scrollBy({
    left: 350,
    behavior: "smooth"
  });
};

