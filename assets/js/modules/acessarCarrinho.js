import initMensagemDeAlerta from "./mensagemDeAlerta.js";

export default function initAcessarCarrinho() {
    const cartContainer = document.querySelector(".modal-carrinho");
    const cartButton = document.querySelector(".cart-botao");
    function openOrCloseCart() {
        cartContainer.classList.toggle("cart-open")
        initMensagemDeAlerta(true)
    }
    cartButton.addEventListener("click", openOrCloseCart)
}