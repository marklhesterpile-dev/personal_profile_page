const navLists = document.querySelectorAll(".navLinks");
const links = document.querySelectorAll("header nav ul li a");
function movePill(navList, activeLink) {
  const pill = navList.querySelector(".pill");
  if (!pill || !activeLink) return;

  const isVertical = getComputedStyle(navList).flexDirection === "column";

  if (isVertical) {
    
    // Mobile pill
    pill.style.top = activeLink.offsetTop + "px";
    pill.style.left = "0px";
    pill.style.height = activeLink.offsetHeight + "px";
    pill.style.width = "100%";
  } else {
    
    // Web pill
    pill.style.left = activeLink.offsetLeft + "px";
    pill.style.top = "0px";
    pill.style.width = activeLink.offsetWidth + "px";
    pill.style.height = "100%";
  }
}

function setActive(href) {
  navLists.forEach((navList) => {
    const links = navList.querySelectorAll("a");
    links.forEach((link) => link.classList.remove("active"));

    const match = navList.querySelector(`a[href="${href}"]`);
    if (match) {
      match.classList.add("active");
      movePill(navList, match);
    }
  });
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setActive(link.getAttribute("href"));
  });
});

window.addEventListener("load", () => {
  const firstActive = document.querySelector(".navLinks a.active");
  const href = firstActive ? firstActive.getAttribute("href") : "#home";
  setActive(href);
});

window.addEventListener("resize", () => {
  navLists.forEach((navList) => {
    const active = navList.querySelector("a.active");
    if (active) movePill(navList, active);
  });
});