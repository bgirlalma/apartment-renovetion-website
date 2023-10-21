document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");
    const typePrev = document.getElementById("type-prev");
    const typeNext = document.getElementById("type-next");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    typePrev.addEventListener('click', function (){
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    typeNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});