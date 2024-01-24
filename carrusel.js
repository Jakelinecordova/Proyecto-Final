document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carrusel.children.length;
        updateSlide();
    }

    function updateSlide() {
        const translateValue = -currentIndex * 100;
        carrusel.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos (ajusta según tu preferencia)
});
 