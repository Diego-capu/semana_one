// 1. Mensaje de bienvenida al cargar la página
window.onload = function() {
    console.log("¡Bienvenido al portafolio de Diego!");
    alert("¡Hola! Gracias por visitar mi portafolio.");
};

// 2. Función para cambiar texto y mostrar/ocultar contenido
// Para que esto funcione, añade id="btn-info" a un botón y id="info-extra" a un párrafo en tu HTML
const botonInfo = document.getElementById('btn-info');
const parrafoExtra = document.getElementById('info-extra');

if (botonInfo) {
    botonInfo.addEventListener('click', function() {
        // Cambia el texto del botón
        if (parrafoExtra.style.display === 'none') {
            parrafoExtra.style.display = 'block';
            botonInfo.textContent = 'Ver menos';
            botonInfo.style.backgroundColor = '#e74c3c'; // Efecto dinámico de color
        } else {
            parrafoExtra.style.display = 'none';
            botonInfo.textContent = 'Ver más sobre mí';
            botonInfo.style.backgroundColor = '#3498db';
        }
    });
}