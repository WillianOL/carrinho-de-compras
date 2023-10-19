const spanItensIndicator = document.querySelector(".number_cart")
const mensagemCarrinhoVazio = document.querySelector(".semItensCarrinho")
const containerTotalCart = document.querySelector(".totalCarrinho")

export default function initIndicadorDeItens(listItens) {
    spanItensIndicator.innerHTML = listItens.length
    if(listItens.length >= 1) {
        mensagemCarrinhoVazio.classList.add("esconderContainer")
        containerTotalCart.classList.add("aparecerContainer")
    } else {
        mensagemCarrinhoVazio.classList.remove("esconderContainer")
        containerTotalCart.classList.remove("aparecerContainer")
    }
}