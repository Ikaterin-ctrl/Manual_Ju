const DELAY_MS = 1000 * 60 * 60 * 24 * 3; // 3 dias

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('carta');
  const btn = document.getElementById('enviar');
  const mensagem = document.getElementById('mensagem');
  const cartaSalva = document.getElementById('cartaSalva');

  if (btn) {
    btn.addEventListener('click', () => {
      const texto = textarea.value.trim();
      if (!texto) return;

      localStorage.setItem('cartaTexto', texto);
      localStorage.setItem('cartaTimestamp', Date.now());
      textarea.value = '';
      alert('Carta enviada para o futuro!');
    });
  }

  const textoSalvo = localStorage.getItem('cartaTexto');
  const tempoSalvo = parseInt(localStorage.getItem('cartaTimestamp'), 10);

  if (textoSalvo && tempoSalvo && Date.now() - tempoSalvo >= DELAY_MS) {
    mensagem.textContent =
      'Olha o que a ex-fodona do passado escreveu pra você \uD83D\uDC8C';
    mensagem.classList.remove('oculto');
    mensagem.classList.add('mostrar');
    cartaSalva.textContent = textoSalvo;
    cartaSalva.classList.add('mostrar');
    // opcionalmente limpar armazenamento para não repetir
    // localStorage.removeItem('cartaTexto');
    // localStorage.removeItem('cartaTimestamp');
  }
});
