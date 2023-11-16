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