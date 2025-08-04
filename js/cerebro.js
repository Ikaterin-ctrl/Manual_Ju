document.addEventListener("DOMContentLoaded", function() {

    // Registra os plugins que vamos usar
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Cria a experiência de scroll suave
    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: false, // Desativamos o 'effects' padrão para criar os nossos
        smoothTouch: 0.1,
    });

    // --- A MÁGICA DA ANIMAÇÃO NO SCROLL ---

    // Animação para seções que vêm da esquerda
    gsap.utils.toArray('.anim-from-left').forEach(section => {
        section.classList.add('is-visible'); // Garante que a seção seja visível

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Começa quando o topo da seção atinge 80% da altura da tela
            },
            x: -200, // Começa 200px para a esquerda
            opacity: 0,
            rotation: -10, // Começa meio torto
            duration: 1,
            ease: "power2.out"
        });
    });

    // Animação para seções que vêm da direita
    gsap.utils.toArray('.anim-from-right').forEach(section => {
        section.classList.add('is-visible'); // Garante que a seção seja visível

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            x: 200, // Começa 200px para a direita
            opacity: 0,
            rotation: 10,
            duration: 1,
            ease: "power2.out"
        });
    });
    
    // Animação para seções que vêm de baixo
    gsap.utils.toArray('.anim-from-bottom').forEach(section => {
        section.classList.add('is-visible'); // Garante que a seção seja visível

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
            },
            y: 100, // Começa 100px para baixo
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
    
    // Lógica para o Diário (pode adicionar as outras aqui depois)
    const diarioCerebro = document.getElementById('diario-cerebro');
    const salvarDiarioCerebroBtn = document.getElementById('salvar-diario-cerebro');

    if (diarioCerebro && salvarDiarioCerebroBtn) {
        // ... (código do localStorage para o diário) ...
    }
});