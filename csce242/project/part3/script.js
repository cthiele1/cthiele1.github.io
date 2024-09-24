const hamburgerMenu = document.getElementById("hamburger-menu");
const navContainer = document.getElementById("bottomh-nav");

hamburgerMenu.onclick = () => {
  navContainer.classList.toggle("show");
};
