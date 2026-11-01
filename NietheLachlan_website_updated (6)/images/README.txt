Put your real photos in this folder — build photos, gallery shots, etc.

Right now the site uses styled placeholder boxes (labeled "[ build photo ]", "Photo 1", etc.)
instead of real images, since no photos were supplied yet.

Once you have real photos:
1. Save them in this folder (e.g. images/mainRig.jpg, images/gallery1.jpg).
2. In setup.html, replace each `<div class="buildPhoto">[ build photo ]</div>` with
   `<img src="images/yourPhoto.jpg" alt="Description of the photo">`.
3. In gallery.html, replace each `<button class="galleryItem">Photo 1</button>` with a button
   containing an `<img>` tag the same way, keeping the `data-caption` attribute for the lightbox.

Don't forget descriptive "alt" text on every image — it's required for accessibility marks.
