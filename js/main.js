// loading
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

//navbar shrink
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navBtnMoon = document.getElementById("nav-btnMoon");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  menuToggle.addEventListener("click", () => {
    navBtnMoon.classList.toggle("activeBtnMoon");
  });
});

// dark mode
let modeBtn = document.getElementById("mode-btn");
console.log(modeBtn);

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/header/sun.svg";
  } else {
    this.firstElementChild.src = "./images/header/moon.svg";
  }
  document.body.classList.toggle("dark");
});

// AOS link
AOS.init();
