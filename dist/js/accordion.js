const accordions = document.querySelectorAll(".faq__accordion h4");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});
