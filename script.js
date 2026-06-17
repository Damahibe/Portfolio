const header = document.querySelector("[data-elevate]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function syncHeader() {
  header.classList.toggle("is-elevated", window.scrollY > 8);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("mobile-active", !expanded);
  document.body.classList.toggle("menu-open", !expanded);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute("aria-expanded", "false");
    header.classList.remove("mobile-active");
    document.body.classList.remove("menu-open");
  }
});
