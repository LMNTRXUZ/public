const burgerMenu = document.querySelector(".header__burger-menu");
const menu = document.querySelector(".header__menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active"); 
});
