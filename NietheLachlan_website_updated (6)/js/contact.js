// contact form - checks the fields and shows my own error messages

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contactForm");
  if (!form) return;

  var status = form.querySelector(".formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops the page reloading, there's no backend
    var valid = true;

    form.querySelectorAll("[data-required]").forEach(function (field) {
      var wrapper = field.closest(".formField");
      var value = field.value.trim();
      var ok = value.length > 0;

      // checks the email looks real
      if (field.type === "email" && ok) {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      wrapper.classList.toggle("hasError", !ok);
      if (!ok) valid = false;
    });

    if (valid) {
      status.textContent = "Thanks — your message has been noted. I'll get back to you soon.";
      status.setAttribute("data-visible", "true");
      form.reset();
    } else {
      // hide the old success message
      status.setAttribute("data-visible", "false");
    }
  });
});
