document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".gallery");

  try {
    // Открімуємо линку на зображення
    const imageFolder = "./public/Image/gallery-photo";
    const imageFiles = [
      "bathroom-grey.jpg",
      "bathroom.jpg",
      "entrance-doors.jpg",
      "figured-ceiling.jpg",
      "hallway.jpg",
      "wall-decoration.jpg",
      "arch.jpg",
      "bathroom-ceiling.jpg",
      "interior-door.jpg"
    ];

    // створюємо HTML розмітку для галереї
    const galleryHtml = imageFiles
      .map(
        (filename) =>
          ` 
    <li>
    <a href="${imageFolder}/${filename}" data-lightbox="roadtrip">
    <img src="${imageFolder}/${filename}" alt="gallery"/></a></li>`
      )
      .join("");

    container.innerHTML = galleryHtml;
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });
  } catch (error) {
    console.error("Ошибка при создании галереи:", error);
  }
});
