import { listItensCart } from "./adicionarItensAoCarrinho.js";

export default function initTotalValorCarrinho(novaQuantidade) {
    const numeroDeItens = document.querySelector(".totalItens")
    const valorTotal = document.querySelector(".valorTotal")
    const valorTotalFormat = +valorTotal.innerHTML.replace("R$", "");
    const totalDeItens = listItensCart.reduce((acumulador, item) => {
        return acumulador + item.quantidade
    }, 0)
    if(!novaQuantidade) {
        const valorTotalDosItens = listItensCart.reduce((acumulador, item) => {
            const formatValue = +item.price.replace("R$", "").replace(".", "").replace(",", ".")
            return acumulador + formatValue
        }, 0)
        valorTotal.innerHTML = `R$${valorTotalDosItens.toFixed(2)}`
    } else {
        const novoValor = +novaQuantidade.toFixed(2) + valorTotalFormat;
        valorTotal.innerHTML = `R$${novoValor.toFixed(2)}`
    }

    numeroDeItens.innerHTML = `${totalDeItens} Produtos`
}