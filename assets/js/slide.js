const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slidesToShow = 4; // Número de imágenes visibles

function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - slidesToShow; // Volver al final
    }
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al inicio
    }
    updateSliderPosition();
});

// Para actualizar el slider al cargar la página
window.addEventListener('resize', updateSliderPosition);
window.addEventListener('load', updateSliderPosition);
