document.addEventListener('DOMContentLoaded', function(){
    
    // отримуємо доступ до елементу відкриття модального вікна
const openButton = document.getElementById('open-menu');

// отримуємо доступ до елементу закриття модального вікна
const closeButton = document.querySelector('.menu-close');

// знаходимо модальне вікно
const modalMenu = document.querySelector('.mobile-menu');

const backdrop = document.querySelector('.backdrop');
// вішаємо слухача подій
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeOutsideModal);

// функція вікриття модалки
function openModal() {
    console.log('Модальное окно открыто');
    modalMenu.classList.remove('is-hidden');
}

// функція закриття модального вікна
function closeModal(){
    console.log('Модальное окно закрыто');
    modalMenu.classList.add('is-hidden');
}

function closeOutsideModal(event) {
    if (event.target === backdrop) {
        closeModal();
    }
}
})