export default function initAtualizarValorExcluido(item) {
    const itemConteiner = item.parentElement
    const valorProduto = itemConteiner.querySelector(".precoProduto");
    const quantidadeItens = itemConteiner.querySelector("input").value
    const numeroTotalDeItens = document.querySelector(".totalItens")
    const valorTotalCarrinho = document.querySelector(".valorTotal")

    const valorFormat = +valorProduto.innerHTML.replace("R$", "").replace(".", "").replace(",", ".")
    const valorTotalFormat = +valorTotalCarrinho.innerHTML.replace("R$", "")
    const numeroTotalFormat = +numeroTotalDeItens.innerHTML.replace(" Produtos", "")
    const valorFinal = valorTotalFormat - valorFormat
    const numeroFinal = numeroTotalFormat - quantidadeItens
    valorTotalCarrinho.innerHTML = `R$${valorFinal.toFixed(2)}`
    numeroTotalDeItens.innerHTML = `${numeroFinal} Produtos`
}