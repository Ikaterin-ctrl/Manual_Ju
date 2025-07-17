const chat = document.getElementById('chat');
const opcoes = document.getElementById('opcoes');
const mensagemFinal = document.getElementById('mensagemFinal');

const roteiro = [
  {
    pergunta: "Achei que a gente ainda tinha algo especial...",
    respostas: [
      "Tínhamos sim: meu amor próprio. E eu recuperei. 💖",
      "Se fosse especial, não doía tanto. Adeus!",
      "Você confundiu comodidade com amor. Tô fora."
    ]
  },
  {
    pergunta: "Você tá diferente...",
    respostas: [
      "É que agora eu me priorizo. Coisa nova, né?",
      "Diferente? Eu chamo de evolução. 🌱",
      "Sim. Agora eu não te aceito mais como migalha."
    ]
  },
  {
    pergunta: "A gente podia tentar de novo...",
    respostas: [
      "Pra repetir o mesmo erro? Tô de boas.",
      "Prefiro tentar ser feliz sozinha. E tá funcionando. ✨",
      "Só se for em outra vida — e olhe lá!"
    ]
  }
];

let passo = 0;

function mostrarMensagem(texto, classe) {
  const div = document.createElement('div');
  div.className = `mensagem ${classe}`;
  div.textContent = texto;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarOpcoes() {
  opcoes.innerHTML = '';
  if (passo < roteiro.length) {
    mostrarMensagem(roteiro[passo].pergunta, 'ex');
    roteiro[passo].respostas.forEach(resp => {
      const btn = document.createElement('button');
      btn.textContent = resp;
      btn.onclick = () => {
        mostrarMensagem(resp, 'voce');
        passo++;
        setTimeout(mostrarOpcoes, 1000);
      };
      opcoes.appendChild(btn);
    });
  } else {
    opcoes.innerHTML = '';
    mensagemFinal.classList.remove('oculto');
  }
}

document.addEventListener('DOMContentLoaded', mostrarOpcoes);
