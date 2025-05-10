let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide img');
  index = (index + step + slides.length) % slides.length;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Cierra cualquier respuesta abierta
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) a.style.display = 'none';
    });

    // Alterna visibilidad
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});