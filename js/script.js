//HEADER FORM
//--form btn makes appear form container and hide whole left nav

let formBtn = document.querySelector(".form-btn");

let form = document.querySelector(".form-container");

let leftNav = document.querySelector(".left-nav");

formBtn.addEventListener("click", function () {
  leftNav.style.display = "none";
  form.style.display = "flex";
});

//--esc form

let formEscBtn = document.querySelector(".esc-nav-form");

formEscBtn.addEventListener("click", function () {
  form.style.display = "none";
  leftNav.style.display = "flex";
});

// DROPDOWNS

let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((e) => {
  let subMenu = e.children[1];
  let toggleIndex;
  // let dropdownLi = subMenu.children;

  e.addEventListener("click", function () {
    if (!toggleIndex) {
      subMenu.style.height = `${subMenu.scrollHeight}px`;
      toggleIndex = true;
      return;
    }
    subMenu.style.height = 0;
    toggleIndex = false;
  });
});
