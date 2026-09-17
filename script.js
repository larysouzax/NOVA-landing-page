const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");
const year = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");

// MENU MOBILE

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Fechar menu quando clicar em um link

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = menu.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    menu.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {

  }
});

// ANO AUTOMÁTICO

year.textContent = `© ${new Date().getFullYear()}`;

// TEMA SALVO

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "☀️";
} else {
  document.body.classList.remove("light-theme");
  themeToggle.textContent = "🌙";
}

// ALTERAR TEMA

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// ANIMAÇÃO AO ROLAR A PÁGINA

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementTop < screenHeight - 100) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();