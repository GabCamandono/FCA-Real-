const headerAll = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", () => {
  headerAll.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
