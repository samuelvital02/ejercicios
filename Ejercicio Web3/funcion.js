document.getElementById('formularioEdad').addEventListener('submit', function (e) {
  e.preventDefault();

  const anio = parseInt(document.getElementById('anioNacimiento').value);
  const anioActual = new Date().getFullYear();
  const resultado = document.getElementById('resultado');

  const edad = anioActual - anio;
  resultado.textContent = `Tienes ${edad} años.`;
});