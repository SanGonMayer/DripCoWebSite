window.addEventListener('load', function() {
    const logoContainer = document.querySelector('.logo-container');
    const content = document.querySelector('.contenido');
    const contacto = document.querySelector('.contacto');

    // Agregar la clase para mostrar el logo con un retraso
    setTimeout(() => {
        logoContainer.classList.add('show-logo');
    }, 500); // Retraso de 0.5 segundos antes de mostrar el logo

    // Agregar la clase para mostrar el contenido con un retraso
    setTimeout(() => {
        content.classList.add('show-content');
    }, 1000); // Retraso de 1 segundo antes de mostrar el contenido
});

window.addEventListener('scroll', function() {
    const logoContainer = document.querySelector('.logo-container');
    const content = document.querySelector('.contenido');
    const contacto = document.querySelector('.contacto');
    const scrollY = window.scrollY;

    // Manejar la transición entre el GIF y las imágenes de productos
    if (scrollY > 0) {
        logoContainer.style.opacity = '0';
        logoContainer.style.transform = 'translate(-50%, -60%)';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    } else {
        logoContainer.style.opacity = '1';
        logoContainer.style.transform = 'translate(-50%, -50%)';
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
    }

    // Manejar la transición entre las imágenes de productos y la sección de contacto
    const contentOffsetTop = content.offsetTop + content.offsetHeight;
    if (scrollY + window.innerHeight >= contentOffsetTop) {
        contacto.classList.add('show-contacto');
    } else {
        contacto.classList.remove('show-contacto');
    }
});

// Inicializar el mapa de Leaflet
var map = L.map('map').setView([-34.6037, -58.3816], 13); // Coordenadas de Buenos Aires

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-34.6037, -58.3816]).addTo(map); // Agregar un marcador en Buenos Aires
