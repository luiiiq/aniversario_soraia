export function animaIntro() {
    const animacao = document.querySelector("#animacao");
    const bolinha = document.querySelector(".bolinha");
    const imagemExpansao = document.querySelector(".imagemExpansao");

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

};