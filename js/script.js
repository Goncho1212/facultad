// Función para manejar el scroll y mostrar/ocultar el navbar con scroll
const navbarScrolled = document.querySelector('.navbar-scrolled');
const navbar = document.querySelector('.navbar');

function handleScroll() {
    const scrollY = window.scrollY;

    // Si la posición del scroll es mayor a 100 (ajústalo según tus necesidades), mostrar el navbar con scroll y ocultar el navbar sin scroll
    if (scrollY > 100) {
        navbarScrolled.style.display = 'flex';
        navbar.style.display = 'none';
    } else {
        navbarScrolled.style.display = 'none';
        navbar.style.display = 'flex';
    }
}

window.addEventListener('scroll', handleScroll);

// Función para mostrar el slide actual
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

// Cambiar el slide automáticamente cada cierto tiempo
function autoPlaySlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

setInterval(autoPlaySlide, 3000);

// Agregamos un evento de clic a cada slide
slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        const index = Array.from(slides).indexOf(slide);
        currentSlide = index;
        showSlide();
    });
});

// Manejo del botón de menú
const menuButton = document.getElementById("menu-button");

function toggleNavbar() {
    navbarScrolled.classList.toggle("hidden");
    navbar.classList.toggle("hidden");
}

menuButton.addEventListener("click", toggleNavbar);

// Función para mover el carrusel de noticias cada cierto tiempo
function moveCarousel() {
    const noticiasContainer = document.querySelector(".noticias-container");
    const noticias = document.querySelectorAll(".noticia");
    const primeraNoticia = noticias[0];

    noticiasContainer.style.transition = "transform 1s ease-in-out";
    noticiasContainer.style.transform = "translateX(-100%)";

    setTimeout(() => {
        noticiasContainer.appendChild(primeraNoticia);
        noticiasContainer.style.transition = "none";
        noticiasContainer.style.transform = "translateX(0)";
    }, 1000);
}

// Iniciar el carrusel de noticias automáticamente
setInterval(moveCarousel, 4000);

// Inicializar el carrusel de eventos con Splide.js
new Splide('#eventos-carousel', {
    type: 'slide',
    rewind: true,
    perPage: 1,
    pagination: false,
    arrows: true,
    height: '300px', // Altura predeterminada del carrusel
    gap: '16px',
    padding: {
        right: '16px',
        left: '16px'
    },
    breakpoints: {
        768: {
            perPage: 2,
        }
    }
}).mount();
