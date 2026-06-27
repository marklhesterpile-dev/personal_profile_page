const menuBtn = document.getElementById("menuBtn");
const menuBtnClose = document.getElementById("menuBtnClose");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

function openMenu() {
  mobileMenu.classList.remove("-translate-x-full");
  mobileMenuBackdrop.classList.remove("hidden");
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtnClose.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.add("-translate-x-full");
  mobileMenuBackdrop.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtnClose.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", openMenu);
menuBtnClose.addEventListener("click", closeMenu);
mobileMenuBackdrop.addEventListener("click", closeMenu);