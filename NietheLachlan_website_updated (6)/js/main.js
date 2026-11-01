// runs on every page - the menu and the dropdowns

document.addEventListener("DOMContentLoaded", function () {
  // mobile menu
  var toggle = document.querySelector(".navToggle");
  var links = document.querySelector(".navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      // toggle adds or removes the class
      var isOpen = links.classList.toggle("isOpen");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close the menu when a link is clicked
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("isOpen");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // about page dropdowns
  document.querySelectorAll(".accordionTrigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      // open or close it
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      panel.setAttribute("data-open", isOpen ? "false" : "true");
    });
  });
});
