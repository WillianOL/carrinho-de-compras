import { listItensCart } from "./adicionarItensAoCarrinho.js";
import initIndicadorDeItens from "./indicadorDeItensCarrinho.js";
import initAtualizarValorExcluido from "./atualizarValorExcluido.js";

export default function initRemoverItensCarrinho({target}) {
    const htmlItem = target.parentElement
    const nomeProduto = htmlItem.querySelector(".nomeProduto").innerHTML
    const filter = listItensCart.filter(item => item.name == nomeProduto)
    listItensCart.shift(filter)
    htmlItem.parentElement.remove()
    initIndicadorDeItens(listItensCart)
    initAtualizarValorExcluido(target)
}   