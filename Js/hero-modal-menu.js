document.addEventListener('DOMContentLoaded', function(){
    const buttonOpen = document.getElementById('hero-type');
    const buttonClose = document.querySelector('.hero-svg-menu-close');
    const modal = document.querySelector('.hero-mobile-menu');
    const backdrop = document.querySelector('.backdrop-hero')

    buttonOpen.addEventListener('click', openModal);
    buttonClose.addEventListener('click', closeModal);

    function openModal(){
        console.log('Модалка открыта')
        modal.classList.remove('is-hidden-hero');
        backdrop.classList.remove('is-hidden-hero');
    }

    function closeModal(){
        modal.classList.add('is-hidden-hero');
        backdrop.classList.add('is-hidden-hero');
    }
})