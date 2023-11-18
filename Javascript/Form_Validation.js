// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

var clickLink = document.querySelectorAll(".navbar-nav .nav-link");
var navbarToggle = document.querySelector(".navbar-collapse");

clickLink.forEach(function (navlink) {
  navlink.addEventListener("click", function () {
    if (navbarToggle.classList.contains("show")) {
      navbarToggle.classList.remove("show");
    }
  });
});
