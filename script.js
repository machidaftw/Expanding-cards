const paineis = document.querySelectorAll(".config");

paineis.forEach((config) => {
  config.addEventListener("click", () => {
    removeActiveClasses();
    config.classList.add("active");
  });
});

function removeActiveClasses() {
  paineis.forEach((config) => {
    config.classList.remove("active");
  });
}
