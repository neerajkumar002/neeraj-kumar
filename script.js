// select element
const themeChangerBtn = document.querySelector(".theme-changer-btn");

//toggle dark mode theme
function toggleDarkMode() {
  const dataTheme = document.body.getAttribute("data-theme");
  if (dataTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("darkMode", "disabled");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkMode", "enabled");
  }
}

//check dark mode enabled
function isDarkMode() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.setAttribute("data-theme", "dark");
  }
}

//add event
themeChangerBtn.addEventListener("click", toggleDarkMode);



















document.addEventListener("DOMContentLoaded", () => {
  isDarkMode();
});
