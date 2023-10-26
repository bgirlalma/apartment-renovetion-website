document.addEventListener('DOMContentLoaded', function(){
    const buttonOpen = document.getElementById('hero-type');
    const buttonClose = document.querySelector('.hero-svg-menu-close');
    const modal = document.querySelector('.hero-mobile-menu');
    const backdrop = document.querySelector('.backdrop-hero')
    const price = document.getElementById('open-modal-deckstop')

    buttonOpen.addEventListener('click', openModal);
    buttonClose.addEventListener('click', closeModal);
    
    price.addEventListener('click', openModal)

    function openModal(){
        modal.classList.remove('is-hidden-hero');
        backdrop.classList.remove('is-hidden-hero');
        document.body.style.overflow = "hidden"
    }

    function closeModal(){
        modal.classList.add('is-hidden-hero');
        backdrop.classList.add('is-hidden-hero');
        document.body.style.overflow = ''; 
    }
})