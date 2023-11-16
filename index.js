// Obtener el botón y el encabezado
const changeColorButton = document.getElementById('changeColorButton');
const header = document.querySelector('.header');

// Función para cambiar el color de fondo del encabezado
function changeHeaderColor() {

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    header.style.backgroundColor = randomColor;
}
// Agregar evento al botón para cambiar el color del encabezado al hacer clic
changeColorButton.addEventListener('click', changeHeaderColor);

// Obtenemos el elemento del encabezado
const header = document.getElementById('headerTitle');

// Función para animación al hacer hover
function scaleHeader() {
    header.style.transform = 'scale(1.2)'; 
}

function resetHeader() {
    header.style.transform = 'scale(1)'; 
}

// Agregamos eventos al hacer hover y al salir del hover
header.addEventListener('mouseenter', scaleHeader);
header.addEventListener('mouseleave', resetHeader);