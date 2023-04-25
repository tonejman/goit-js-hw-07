/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryEl = createGalleryEl(galleryItems);
gallery.innerHTML = galleryEl;

function createGalleryEl() {
  return galleryItems

    // eslint-disable-next-line arrow-body-style
    .map(({ preview, original, description }) => {
      return `<div 
      class="gallery__item">
      <a class="gallery__link"
      href="${original}">
      <img class="gallery__image"
      src=" ${preview}" 
      data-source="${original}" alt=" 
      ${description}"/>
      </a>
      </div>`;
    })

    .join("");
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
  );
  instance.show();

  const visible = basicLightbox.visible();
  if (visible) {
    gallery.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        instance.close();
      }
    });
  }
});
