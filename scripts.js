let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarvisual(cor, imagem) {
    tenis.classList.add("trca-efeito")

    body.style.background = cor


    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("trca-efeito")
    }, 500);





}
