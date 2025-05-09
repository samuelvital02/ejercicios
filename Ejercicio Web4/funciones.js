let contador = 0;

const boton = document.getElementById('boton3');
const display = document.getElementById('contador');

boton.addEventListener('click', () => {
  contador++;
  display.textContent = 'Clics: ' + contador;})