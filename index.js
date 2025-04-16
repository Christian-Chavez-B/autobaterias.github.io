const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close");
const popupContent = document.querySelector(".popup-content");

// Abrir el popup
document.querySelectorAll(".bateria1").forEach(item => {
    item.addEventListener("click", () => {
        const info = item.getAttribute("data-info");
        popupText.textContent = info;

        // Resetear animaciones
        popupContent.classList.remove("hide-animation");
        popup.classList.add("show");
    });
});

// Función para cerrar con animación
function cerrarPopupConAnimacion() {
    popupContent.classList.add("hide-animation");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 400); // esperar a que termine la animación
}

// Cerrar al hacer click en la X
closeBtn.onclick = cerrarPopupConAnimacion;

// Cerrar al hacer click fuera del contenido
window.onclick = function(event) {
    if (event.target === popup) {
        cerrarPopupConAnimacion();
    }
}

//CARRUSEL DE IMAGENES
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
  
    let interval = setInterval(showNextImage, 3000);
  
    function showImage(index) {
      images[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active-dot');
  
      currentIndex = (index + images.length) % images.length;
  
      images[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active-dot');
    }
  
    function showNextImage() {
      showImage(currentIndex + 1);
    }
  
    function showPrevImage() {
      showImage(currentIndex - 1);
    }
  
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(showNextImage, 3000);
    }
  
    nextBtn.addEventListener('click', () => {
      showNextImage();
      resetInterval();
    });
  
    prevBtn.addEventListener('click', () => {
      showPrevImage();
      resetInterval();
    });
  
    // Indicadores
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showImage(index);
        resetInterval();
      });
    });
  
    // Pausar carrusel al pasar el mouse
    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
  
    carousel.addEventListener('mouseleave', () => {
      interval = setInterval(showNextImage, 3000);
    });
  });
  