document.getElementById('convertir').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    const textoMayusculas = texto.toUpperCase();
    document.getElementById('resultado').textContent = textoMayusculas; });
    const textarea = document.getElementById('texto');

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });