//HEADER FORM
//--form btn makes appear form container and hide whole left nav

let formBtn = document.getElementById("form-btn");

let form = document.getElementById("form-container");

let leftNav = document.getElementById("left-nav");

formBtn.addEventListener("click", function () {
  leftNav.style.display = "none";
  form.style.display = "flex";
});

//--esc form

let formEscBtn = document.getElementById("esc-nav-form");

formEscBtn.addEventListener("click", function () {
  form.style.display = "none";
  leftNav.style.display = "flex";
});

//DROPDOWNS

let dropdown = document.querySelectorAll(".dropdown");
let dropdownBtn = document.querySelectorAll(".dropdown-btn");
let subMenu = document.querySelectorAll(".dropdown ul");
let dropdownLi = document.querySelectorAll(".dropdown li");

let toggleIndex;

dropdownBtn.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (!toggleIndex) {
    subMenu.style.height = `${subMenu.scrollHeight}px`;
    toggleIndex = true;
    return;
  }
  subMenu.style.height = 0;
  toggleIndex = false;
}
