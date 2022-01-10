document.getElementById("research-form-btn").addEventListener("click", function () {
  document.getElementById("main-nav").style.display = "none";
  document.getElementById("research-form").style.display = "block";
});

document.getElementById("esc-nav-form").addEventListener("click", function () {
  document.getElementById("research-form").style.display = "none";
  document.getElementById("main-nav").style.display = "block";
});
