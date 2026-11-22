export function controlarCards() {
    const cardsTempo = document.querySelector(".cardsTempo");
    const botaoAbrir = document.querySelector("#botaoAbrir");

    botaoAbrir.addEventListener("click", () => {
        cardsTempo.classList.add("aberto");
        botaoAbrir.disabled = true;

        botaoAbrir.style.opacity = "0";
        botaoAbrir.style.pointerEvents = "none";
    });
}