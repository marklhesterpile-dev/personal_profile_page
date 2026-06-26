const nav = document.querySelector("ul");
const pill = document.querySelector(".pill");
const links = document.querySelectorAll("header ul li a");

function movePill(link) {
  pill.style.left = link.offsetLeft + "px";
  pill.style.width = link.offsetWidth + "px";
}

function setActive(el) {
  links.forEach((link) => link.classList.remove("active"));
  el.classList.add("active");
  movePill(el);
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setActive(link);
  });
});

window.addEventListener("load", () => {
  const active = document.querySelector("ul li a.active") || links[0];
  movePill(active);
});

window.addEventListener("resize", () => {
  const active = document.querySelector("ul li a.active");
  if (active) movePill(active);
});
