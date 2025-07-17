const input = document.getElementById('lembranca');
const btn = document.getElementById('enterrar');
const lista = document.getElementById('listaLembrancas');
const caixa = document.getElementById('caixaAnimada');

function salvarLembranca(texto) {
  const existentes = JSON.parse(localStorage.getItem('lembrancas')) || [];
  existentes.push(texto);
  localStorage.setItem('lembrancas', JSON.stringify(existentes));
}

function mostrarLembrancas() {
  lista.innerHTML = '';
  const lembrancas = JSON.parse(localStorage.getItem('lembrancas')) || [];
  lembrancas.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}

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

document.addEventListener('DOMContentLoaded', mostrarLembrancas);
