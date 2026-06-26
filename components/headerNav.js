function renderNavLink(nav) {
  return `
    <li class="list-none flex items-center justify-center">
      <a
        href="${nav.href}"
        class="${nav.state ? "active " : ""} relative z-1 inline-block no-underline px-7 py-3 cursor-pointer leading-snug font-normal text-black transition-colors duration-150 hover:text-blue-700 [&.active]:text-white [&.active]:font-semibold"
        >${nav.label}</a
      >
    </li>
  `;
}

function renderNavLinks(links){
   return `
    <span
      class="pill absolute top-0 left-0 h-full bg-blue-500 rounded-lg z-0 transition-all"
      aria-hidden="true"
    ></span>
    ${links.map((link) => renderNavLink(link)).join("")}
  `;
}
const navLinks = [
  {
    href: "#home",
    label: "Home",
    state: "active",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#interests",
    label: "Interests",
  },
  {
    href: "#favorites",
    label: "Favorites",
  },
  {
    href: "#socials",
    label: "Socials",
  },
];


const navLink = document.getElementById("navLinks");

navLink.innerHTML = renderNavLinks(navLinks);
