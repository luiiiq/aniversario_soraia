export function animaIntro() {
    const animacao = document.querySelector("#animacao");
    const abertura = document.querySelector(".abertura");
    const bolinha = document.querySelector(".bolinha");
    const imagemExpansao = document.querySelector(".imagemExpansao");
    const videoIntro = document.querySelector(".videoIntro");

    window.addEventListener("load", () => {
        animacao.classList.add("iniciar");
    });

    bolinha.addEventListener("animationend", (evento) => {

        if (evento.animationName === "descerSubir") {

            animacao.classList.add("final");

            setTimeout(() => {
                animacao.classList.add("expandir");

                setTimeout(() => {
                    imagemExpansao.classList.add("expandirImagem");

                    setTimeout(() => {
                        imagemExpansao.classList.add("iniciarFrase");
                    }, 1200);
                }, 1200);

            }, 1800);
        }

    }, { once: true });

    imagemExpansao.addEventListener("animationend", (evento) => {
        if (evento.animationName === "sequenciaFrase") {
            setTimeout(() => {
                videoIntro.style.display = "block";
                animacao.style.display = "none";
                abertura.style.display = "none";
                imagemExpansao.style.display = "none";
            }, 1000);
        };
    });

};