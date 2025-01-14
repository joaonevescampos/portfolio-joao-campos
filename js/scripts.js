// Seleciona todos os links com a classe 'transition-link'
const links = document.querySelectorAll('.transition-link');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o redirecionamento imediato

    // Adiciona a classe de saída
    document.querySelector('.transition-container').classList.add('fade-out');

    // Aguarda o tempo da animação antes de redirecionar
    setTimeout(() => {
      window.location.href = this.href; // Redireciona para o destino
    }, 500); // Corresponde ao tempo da animação (0.5s)
  });
});
