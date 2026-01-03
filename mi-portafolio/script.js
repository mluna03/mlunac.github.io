// script.js - Funcionalidad para el Portafolio

// 1. Menú Hamburguesa (Responsive)
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navMenu = document.querySelector('.nav-menu');

if (menuHamburguesa) {
    menuHamburguesa.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        // Para una mejor experiencia, podrías añadir una clase 'active' y controlar con CSS
    });
}

// 2. Actualizar el año en el footer automáticamente
const anioActual = document.getElementById('anio-actual');
if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
}

// 3. Envío básico del formulario de contacto (sin backend)
const formularioContacto = document.getElementById('formContacto');
if (formularioContacto) {
    formularioContacto.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita que se recargue la página

        // Aquí normalmente enviarías los datos a un servidor.
        // Por ahora, solo mostraremos una alerta y limpiaremos el formulario.
        alert('¡Gracias por tu mensaje, Micaela! (Este es un simulacro. En un sitio real, los datos se enviarían a un servidor).');
        formularioContacto.reset(); // Limpia todos los campos
    });
}

// 4. Efecto de aparición suave al hacer scroll (Scroll Animation Básica)
function revelarAlScroll() {
    const elementos = document.querySelectorAll('.tarjeta-proyecto, .categoria-habilidad, .tarjeta-contacto');
    const alturaVentana = window.innerHeight;

    elementos.forEach(elemento => {
        const posicionElemento = elemento.getBoundingClientRect().top;
        const puntoRevelacion = 150;

        if (posicionElemento < alturaVentana - puntoRevelacion) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
}

// Establece estilos iniciales para los elementos que se revelarán
window.addEventListener('load', () => {
    const elementos = document.querySelectorAll('.tarjeta-proyecto, .categoria-habilidad, .tarjeta-contacto');
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    // Ejecuta una vez al cargar
    setTimeout(revelarAlScroll, 300);
});

// Ejecuta la función al hacer scroll
window.addEventListener('scroll', revelarAlScroll);