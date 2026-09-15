const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");
const year = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

year.textContent = `© ${new Date().getFullYear()}`;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("ligth-theme");

  if(document.body.classList.contains("ligth-theme")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙" ;
  }
});