export function controlarCards() {
    const cardsTempo = document.querySelector(".cardsTempo");
    const botaoAbrir = document.querySelector("#botaoAbrir");
    const controls = document.querySelector(".controls");

    botaoAbrir.textContent = "CLIQUE PARA ABRIR";

    botaoAbrir.addEventListener("click", () => {

        if (botaoAbrir.textContent === "CLIQUE PARA ABRIR") {
            cardsTempo.classList.add("aberto");

            if (window.matchMedia("(max-width: 985px)").matches) {
                controls.style.marginBottom = "7rem";
            }

            botaoAbrir.disabled = true;

            setTimeout(() => {
                botaoAbrir.textContent = "CLIQUE PARA AVANÇAR";
                botaoAbrir.style.background = "#F3F4F6";
                botaoAbrir.style.border = "2px solid #161616";
                botaoAbrir.style.color = "#161616";

                botaoAbrir.disabled = false;
            }, 200);

        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });
        }
    });
}