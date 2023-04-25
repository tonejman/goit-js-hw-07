// eslint-disable-next-line import/extensions
import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryEl = createGalleryEl(galleryItems);
gallery.innerHTML = galleryEl;

function createGalleryEl() {
  return (
    galleryItems

      // eslint-disable-next-line arrow-body-style
      .map(({ preview, original, description }) => {
        return `<li><a 
        class="gallery__link"
      href="${original}">
      <img class="gallery__image"
      src=" ${preview}" 
      data-source="${original}" alt=" 
      ${description}"/>
      </a></li>`;
      })
      .join("")
  );
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
});
