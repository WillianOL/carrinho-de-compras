import { listItemsCart } from "../index.js";

export default function initTotalValorCarrinho(novaQuantidade) {
    const numberOfItems = document.querySelector(".totalItens")
    const totalValue = document.querySelector(".valorTotal")
    const valorTotalFormat = +totalValue.innerHTML.replace("R$", "");
    const quantityTotalOfItems = listItemsCart.reduce((accumulator, item) => {
        return accumulator + item.quantidade
    }, 0)
    if(novaQuantidade) {
        const novoValor = +novaQuantidade.toFixed(2) + valorTotalFormat;
        totalValue.innerHTML = `R$${novoValor.toFixed(2)}`
    } else {
        const valorTotalDosItens = listItemsCart.reduce((accumulator, item) => {
            const formatValue = +item.price.replace("R$", "").replace(".", "").replace(",", ".")
            return accumulator + formatValue
        }, 0)
        totalValue.innerHTML = `R$${valorTotalDosItens.toFixed(2)}`
    }
    numberOfItems.innerHTML = `${quantityTotalOfItems} Produtos`
}