// --- LÓGICA PARA O DIÁRIO DE DESCOBERTAS ---

// Elementos do DOM
const diarioTextarea = document.getElementById('diario-texto');
const salvarDiarioBtn = document.getElementById('salvar-diario');
const promptElemento = document.getElementById('prompt-diario');
const novoPromptBtn = document.getElementById('novo-prompt');

// Lista de Prompts
const prompts = [
    "Descreva um desafio que você superou e que te deixou orgulhosa.",
    "Liste 3 coisas pelas quais você é grata hoje.",
    "Como seria seu dia perfeito, do início ao fim?",
    "Se medo não fosse um problema, o que você faria?",
    "Escreva sobre um lugar onde você se sente 100% você mesma.",
    "Qual qualidade sua você mais admira hoje?",
    "O que significa 'sucesso' para você neste momento da sua vida?"
];

// Funções
function salvarTexto() {
    localStorage.setItem('textoDoDiario', diarioTextarea.value);
    alert('Seu texto foi salvo no navegador!');
}

function carregarTexto() {
    const textoSalvo = localStorage.getItem('textoDoDiario');
    if (textoSalvo) {
        diarioTextarea.value = textoSalvo;
    }
}

function gerarNovoPrompt() {
    const indiceAleatorio = Math.floor(Math.random() * prompts.length);
    promptElemento.textContent = prompts[indiceAleatorio];
}

// Event Listeners
if (salvarDiarioBtn) salvarDiarioBtn.addEventListener('click', salvarTexto);
if (novoPromptBtn) novoPromptBtn.addEventListener('click', gerarNovoPrompt);

// Carregar texto salvo quando a página é aberta
window.addEventListener('load', carregarTexto);

