//--form btn makes appear form container and hide whole left nav

let formBtn = document.getElementById("form-btn");

let form = document.getElementById("form-container");

let leftNav = document.getElementById("left-nav");

formBtn.addEventListener("click", function () {
  leftNav.style.display = "none";
  form.style.display = "flex";
});

let formListBtn = document.getElementById("form-list-btn");

let formList = document.getElementById("form-list");

formListBtn.addEventListener("click", function () {
  formList.style.display = "flex";
});
