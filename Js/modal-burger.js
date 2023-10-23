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

// функція вікриття модалки
function openModal() {
    modalMenu.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
}

// функція закриття модального вікна
function closeModal(){
    modalMenu.classList.add('is-hidden');
    backdrop.classList.add('is-hidden');
}
})