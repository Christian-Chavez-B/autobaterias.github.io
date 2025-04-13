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
