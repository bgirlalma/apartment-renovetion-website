document.addEventListener('DOMContentLoaded', function(){
  const buttonOpen = document.getElementById("hero-type");
  const buttonClose = document.querySelector(".hero-svg-menu-close");
  const modal = document.querySelector(".hero-mobile-menu");
  const backdrop = document.querySelector(".backdrop-hero");
  const price = document.getElementById("open-modal-deckstop");

  buttonOpen.addEventListener("click", openModal);
  buttonClose.addEventListener("click", closeModal);

  price.addEventListener("click", openModal);

  function openModal() {
    modal.classList.remove("is-hidden-hero");
    backdrop.classList.remove("is-hidden-hero");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("is-hidden-hero");
    backdrop.classList.add("is-hidden-hero");
    document.body.style.overflow = "";
  }

    // Добавим обработчик для отправки формы
    const form = this.querySelector(".hero-form");

// вешаем обработчик события
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Собираем данные из формы
      const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("number").value,
        };
        
        fetch("api/users/dispatch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Успешно отправлено:", data);
            // Добавьте код для отображения уведомления об успешной отправке, если необходимо
          })
          .catch((error) => {
            console.error("Ошибка отправки данных:", error);
            // Добавьте код для отображения уведомления об ошибке, если необходимо
          });
    })
})