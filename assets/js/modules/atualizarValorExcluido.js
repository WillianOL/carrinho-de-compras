export default function initAtualizarValorExcluido(item) {
    const itemConteiner = item.parentElement
    const valueProduct = itemConteiner.querySelector(".precoProduto").innerHTML.replace("R$", "").replace(".", "").replace(",", ".")
    const qunatityItems = itemConteiner.querySelector("input").value
    const totalNumberOfItems = document.querySelector(".totalItens")
    const totalValueCart = document.querySelector(".valorTotal")

    const totalValueCartFormat = +totalValueCart.innerHTML.replace("R$", "")
    const numeroTotalFormat = +totalNumberOfItems.innerHTML.replace(" Produtos", "")
    const valorFinal = totalValueCartFormat - +valueProduct
    const numeroFinal = numeroTotalFormat - qunatityItems
    totalValueCart.innerHTML = `R$${valorFinal.toFixed(2)}`
    totalNumberOfItems.innerHTML = `${numeroFinal} Produtos`
}