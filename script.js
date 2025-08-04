/* ==========================================================================
   LÓGICA DAS FERRAMENTAS DA PÁGINA "BUSSOLA.HTML"
   ========================================================================== */

// --- LÓGICA DO DIÁRIO DE DESCOBERTAS ---
const diarioPrincipal = document.getElementById('diario-principal');
const salvarDiarioBtn = document.getElementById('salvar-diario-btn');
if (diarioPrincipal) {
    const textoSalvoDiario = localStorage.getItem('diarioPrincipal');
    if (textoSalvoDiario) { diarioPrincipal.value = textoSalvoDiario; }
}
if (salvarDiarioBtn) {
    salvarDiarioBtn.addEventListener('click', function() {
        localStorage.setItem('diarioPrincipal', diarioPrincipal.value);
        alert('Anotação salva com segurança no seu navegador.');
    });
}

// --- LÓGICA DO GABINETE DE ELOGIOS ---
const elogios = ["Sua resiliência é uma obra de arte.", "Sua capacidade de amar é imensa.", "Você tem uma força que nem imagina.", "Sua inteligência emocional é uma bússola.", "Você aprendeu e cresceu imensamente.", "Seu coração é gentil e corajoso."];
const gabineteDisplay = document.getElementById('gabinete-display');
const novoElogioBtn = document.getElementById('novo-elogio-btn');
if (novoElogioBtn) {
    novoElogioBtn.addEventListener('click', function() {
        const indiceAleatorio = Math.floor(Math.random() * elogios.length);
        gabineteDisplay.textContent = elogios[indiceAleatorio];
    });
}

// --- LÓGICA DO MAPA DE SONHOS ---
const mapaSonhos = document.getElementById('mapa-sonhos');
const salvarSonhosBtn = document.getElementById('salvar-sonhos-btn');
if (mapaSonhos) {
    const textoSalvoSonhos = localStorage.getItem('mapaDeSonhos');
    if (textoSalvoSonhos) { mapaSonhos.value = textoSalvoSonhos; }
}
if (salvarSonhosBtn) {
    salvarSonhosBtn.addEventListener('click', function() {
        localStorage.setItem('mapaDeSonhos', mapaSonhos.value);
        alert('Sonhos guardados para o futuro.');
    });
}

// --- LÓGICA DO ORÁCULO DO AUTOCUIDADO (Placeholder de Lógica) ---
// (Esta lógica é similar à do gabinete de elogios, você pode criar uma nova lista de frases)


// --- LÓGICA DO TELÉGRAFO ETÉREO ---
const telegrafoTexto = document.getElementById('telegrafo-texto');
const enviarEterBtn = document.getElementById('enviar-eter-btn');
if (enviarEterBtn) {
    enviarEterBtn.addEventListener('click', function() {
        if (telegrafoTexto.value.trim() !== '') {
            telegrafoTexto.style.transition = 'opacity 0.5s ease';
            telegrafoTexto.style.opacity = '0';
            setTimeout(function() {
                telegrafoTexto.value = '';
                telegrafoTexto.style.opacity = '1';
                alert('Mensagem enviada para o éter. O peso foi liberado.');
            }, 500); // 500ms = meio segundo, o mesmo tempo da transição
        }
    });
}

/* ==========================================================================
   LÓGICA DA MESA DE ANATOMIA INTERATIVA (VERSÃO LIMPA)
   ========================================================================== */

// Função para ativar a interatividade da página bussola.html
function setupAnatomyTable() {
    const interestPoints = document.querySelectorAll('.interest-point');
    const toolContainers = document.querySelectorAll('.tool-container');
    const closeButtons = document.querySelectorAll('.close-button');

    // Se não encontrarmos os pontos de interesse, significa que não estamos na página certa.
    // Assim o código não quebra na sua index.html
    if (interestPoints.length === 0) {
        return;
    }

    function hideAllTools() {
        toolContainers.forEach(container => {
            container.classList.remove('is-visible');
        });
    }

    interestPoints.forEach(point => {
        point.addEventListener('click', () => {
            hideAllTools();
            const toolId = point.dataset.tool;
            const toolToShow = document.getElementById(`tool-${toolId}`);
            if (toolToShow) {
                toolToShow.classList.add('is-visible');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllTools();
        });
    });
}

// Executa a função quando a página é carregada
setupAnatomyTable();

