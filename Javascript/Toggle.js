var clickLink = document.querySelectorAll(".navbar-nav .nav-link");
var navbarToggle = document.querySelector(".navbar-collapse");

clickLink.forEach(function (navlink) {
  navlink.addEventListener("click", function () {
    if (navbarToggle.classList.contains("show")) {
      navbarToggle.classList.remove("show");
    }
  });
});
