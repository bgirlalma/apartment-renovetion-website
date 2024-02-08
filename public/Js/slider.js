// Инициализация Swiper
const swiper = new window.Swiper(".swiper", {
  // Настройки слайдера
  direction: "horizontal", // Направление прокрутки слайдов (горизонтальное)
  loop: true, // Зацикливание слайдов

  // Настройки пагинации (точек внизу слайдера)
  pagination: {
    el: ".swiper-pagination", // Элемент, куда вставляются точки пагинации
  },

  // Настройки навигации (стрелок для переключения слайдов)
  navigation: {
    nextEl: ".swiper-button-next", // Элемент "вперед"
    prevEl: ".swiper-button-prev", // Элемент "назад"
  },

  // Настройки полосы прокрутки (если необходимо)
  scrollbar: {
    el: ".swiper-scrollbar", // Элемент полосы прокрутки
  },
});
