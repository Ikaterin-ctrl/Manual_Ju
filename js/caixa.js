const input = typeof document !== 'undefined' ? document.getElementById('lembranca') : null;
const btn = typeof document !== 'undefined' ? document.getElementById('enterrar') : null;
const lista = typeof document !== 'undefined' ? document.getElementById('listaLembrancas') : null;
const caixa = typeof document !== 'undefined' ? document.getElementById('caixaAnimada') : null;

function salvarLembranca(texto) {
  const existentes = JSON.parse(localStorage.getItem('lembrancas')) || [];
  existentes.push(texto);
  localStorage.setItem('lembrancas', JSON.stringify(existentes));
}

function mostrarLembrancas() {
  if (!lista) return;
  lista.innerHTML = '';
  const lembrancas = JSON.parse(localStorage.getItem('lembrancas')) || [];
  lembrancas.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}

if (btn) {
  btn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    salvarLembranca(texto);
    input.value = '';

    caixa.classList.add('sumir');
    setTimeout(() => {
      caixa.classList.remove('sumir');
      mostrarLembrancas();
    }, 500);
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', mostrarLembrancas);
}

if (typeof module !== 'undefined') {
  module.exports = { salvarLembranca };
}
