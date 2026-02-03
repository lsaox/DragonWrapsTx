const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuDropdown");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");
const body = document.body;

// all links inside fullscreen menu
const menuLinks = document.querySelectorAll(".menu-link");

function openMenu() {
  menuOverlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
}

function closeMenu() {
  menuOverlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

if (menuToggle) {
  menuToggle.addEventListener("click", openMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
