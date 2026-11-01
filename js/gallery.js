// opens a bigger photo when you click it

document.addEventListener("DOMContentLoaded", function () {
  var lightbox = document.querySelector(".lightbox");
  if (!lightbox) return; // stops errors on pages with no lightbox

  var lightboxImage = lightbox.querySelector(".lightboxImage");
  var lightboxCaption = lightbox.querySelector(".lightboxCaption");
  var closeBtn = lightbox.querySelector(".lightboxClose");

  document.querySelectorAll(".galleryItem").forEach(function (item) {
    item.addEventListener("click", function () {
      var thumb = item.querySelector("img");
      var caption = item.getAttribute("data-caption") || "";

      lightboxImage.innerHTML = ""; // clears the last photo

      if (thumb) {
        // show the same photo bigger
        var bigPhoto = document.createElement("img");
        bigPhoto.src = thumb.getAttribute("src");
        bigPhoto.alt = thumb.getAttribute("alt") || caption;
        lightboxImage.appendChild(bigPhoto);
      } else {
        // no photo, so just show the caption
        lightboxImage.textContent = caption;
      }

      lightboxCaption.textContent = caption;
      lightbox.setAttribute("data-open", "true");
    });
  });

  function closeLightbox() {
    lightbox.setAttribute("data-open", "false");
  }

  closeBtn.addEventListener("click", closeLightbox);

  // click outside the box to close it
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // esc closes it too
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
