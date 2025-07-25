document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('#lista-checklist input[type="checkbox"]');
  const total = checkboxes.length;
  const percentualEl = document.getElementById('percentual');
  const barra = document.getElementById('barra-preenchimento');
  const estrela = document.getElementById('estrela');

  function atualizar() {
    const marcados = Array.from(checkboxes).filter(cb => cb.checked).length;
    const porcentagem = Math.round((marcados / total) * 100);

    if (percentualEl) {
      percentualEl.textContent = `${porcentagem}%`;
    }

    if (barra) {
      barra.style.width = `${porcentagem}%`;
    }

    if (estrela) {
      estrela.style.display = marcados === total ? 'inline' : 'none';
    }

    if (marcados === total) {
      alert("Parabéns, exorcizou o ex! 💅✨");
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', atualizar);
  });

  atualizar();
});
