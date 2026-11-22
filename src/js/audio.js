export function audio() {
    const musicaFundo = document.querySelector("#musicaFundo");

    if (window.matchMedia("(max-width: 1024px)").matches) {
        musicaFundo.controls = true;
    };
}