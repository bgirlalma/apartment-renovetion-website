import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.esm";

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".gallery");

    // Открімуємо линку на зображення
    const imageFolder = "public/Image/gallery-photo";
    const imageFiles = [
      "bathroom-grey.jpg",
      "bathroom.jpg",
      "entrance-doors.jpg",
      "figured-ceiling.jpg",
      "hallway.jpg",
      "wall-decoration.jpg",
    ];

    // створюємо HTML розмітку для галереї
    const galleryHtml = imageFiles
      .map(
        (filename) =>
          `<li>
    <a href="${imageFolder}/${filename}">
    <img src="${imageFolder}/${filename}" alt="gallery"/></a></li>`
      )
      .join("");

    container.innerHTML = galleryHtml;

    new SimpleLightbox(".gallery a", {
      captionDelay: 250,
      captionsData: "alt",
      captionPosition: "bottom",
    });

    console.log(galleryHtml);

})