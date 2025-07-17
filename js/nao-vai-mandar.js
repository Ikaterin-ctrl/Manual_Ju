document.addEventListener("DOMContentLoaded", function () {
  const frases = [
    "Você já mandou essa vibe antes… e olha onde foi parar. 👀",
    "Se fosse pra resolver com textão, já teria dado certo antes. 💌❌",
    "Respira. Apaga. Vai passar. 💅",
    "Você é a Ex Fodona. Ele que lute com o silêncio. 🔕",
    "Essa mensagem não vai mudar quem ele é. Só vai te fazer sofrer de novo. 🚫",
    "Você merece paz, não DR reciclada. 🕊️"
  ];

  const botao = document.getElementById("bloquear");
  const resposta = document.getElementById("resposta");

  botao.addEventListener("click", function () {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    resposta.textContent = aleatoria;
    resposta.style.display = "block";
    resposta.style.marginTop = "16px";
    resposta.style.fontSize = "1.2rem";
    resposta.style.fontWeight = "bold";
    resposta.style.color = "#b1004c";
    resposta.style.background = "#fffbe7";
    resposta.style.padding = "16px";
    resposta.style.borderRadius = "16px";
    resposta.style.boxShadow = "0 0 10px #ffb34755";
    resposta.style.border = "2px solid #ffb347";
    resposta.style.transition = "all 0.3s ease-in-out";
  });
});
