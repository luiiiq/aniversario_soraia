export function animaIntro() {
    const animacao = document.querySelector("#animacao");
    const abertura = document.querySelector(".abertura");
    const bolinha = document.querySelector(".bolinha");
    const imagemExpansao = document.querySelector(".imagemExpansao");
    const videoIntro = document.querySelector(".videoIntro");
    const informaçõesReencontro = document.querySelector(".informaçõesReencontro");
    const musicaFundo = document.querySelector("#musicaFundo");
    const btn = document.querySelector("#musica");

    let audioIniciado = false;
    let tentandoReproduzir = false;

    function iniciarAudio() {
        if (audioIniciado || tentandoReproduzir) return;

        tentandoReproduzir = true;

        musicaFundo.muted = false;

        musicaFundo.play()
            .then(() => {
                audioIniciado = true;
            })
            .catch((erro) => {
                console.error("Erro ao reproduzir áudio:", erro);
            })
            .finally(() => {
                tentandoReproduzir = false;
            });
    };

    btn.addEventListener("pointerdown", iniciarAudio);
    btn.addEventListener("touchstart", iniciarAudio);
    btn.addEventListener("click", iniciarAudio);

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

    videoIntro.addEventListener("ended", () => {
        videoIntro.style.display = "none";
        informaçõesReencontro.style.display = "block";

        // musicaFundo.currentTime = 0;
        // musicaFundo.muted = false;

        // musicaFundo.play().catch(() => {});
    });

};