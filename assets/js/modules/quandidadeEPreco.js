import { listItensCart } from "./adicionarItensAoCarrinho.js";
import initTotalValorCarrinho from "./totalValorCarrinho.js";

export default function changeValue({target}) {
    const inputPerent = target.parentElement
    const valueItem = inputPerent.querySelector(".precoProduto")
    const input = inputPerent.querySelector("input")
    const nomeProduto = inputPerent.parentElement.querySelector(".nomeProduto").innerHTML
    const filtro = listItensCart.filter(item => item.name == nomeProduto)
    const formatValue = +filtro[0].price.replace("R$", "").replace(".", "").replace(",", ".")
    let result;
    if(+input.value <= 1) {
        valueItem.innerHTML = filtro[0].price
        input.value = 1
    }else {
        result = (formatValue * (+input.value)).toFixed(2)
        valueItem.innerHTML = `R$${result}`
    }
    filtro[0].quantidade = +input.value
    initTotalValorCarrinho(result - formatValue);
}