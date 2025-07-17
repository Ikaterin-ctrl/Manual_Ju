const desculpas = [
  "Eu precisava me reencontrar.",
  "Você é boa demais pra mim.",
  "Não sou eu, é você... ou ao contrário.",
  "Eu tava confuso.",
  "Minha ex me chamou no Insta.",
  "Eu menti pra não te magoar.",
  "Eu não sabia o que queria.",
  "Foi um erro, mas não significa nada.",
  "Você merece alguém melhor.",
  "Se eu tivesse te conhecido antes..."
];

document.getElementById("botao-girar").addEventListener("click", () => {
  const sorteada = desculpas[Math.floor(Math.random() * desculpas.length)];
  const caixa = document.getElementById("desculpa");
  caixa.style.transform = "scale(1.1)";
  setTimeout(() => {
    caixa.innerText = sorteada;
    caixa.style.transform = "scale(1)";
  }, 200);
});
