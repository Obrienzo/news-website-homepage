const overlayElement = document.querySelector(".overlay");
const menuButton = document.querySelector(".navigation__menu");
const pageLinks = document.getElementById("page-links");

let menuState = false;

controlMenuVisibility();

window.addEventListener("resize", () => {
  controlMenuVisibility();
});

menuButton.addEventListener("click", () => {
  menuState = !menuState;
  applyToggleState(menuState, true);
});

function applyToggleState(open, updatePanel = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  overlayElement.setAttribute("data-show", String(open));
  menuButton.dataset.open = String(open);
  if (updatePanel) {
    pageLinks.setAttribute("aria-hidden", String(!open));
  }
}

function controlMenuVisibility() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    applyToggleState(menuState, true);
  } else {
    // Desktop: nav always visible, ensure toggle is reset
    pageLinks.setAttribute("aria-hidden", "false");
    applyToggleState(false, false);
    menuState = false;
  }
}
