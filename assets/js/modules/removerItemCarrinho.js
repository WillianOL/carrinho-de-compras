import { listItemsCart } from "../index.js";
import initIndicadorDeItens from "./indicadorDeItensCarrinho.js";
import initAtualizarValorExcluido from "./atualizarValorExcluido.js";

export default function initRemoverItensCarrinho({target}) {
    const htmlItem = target.parentElement
    const nomeProduto = htmlItem.querySelector(".nomeProduto").innerHTML
    const filter = listItemsCart.filter(item => item.name == nomeProduto)
    listItemsCart.shift(filter)
    htmlItem.parentElement.remove()
    initIndicadorDeItens(listItemsCart)
    initAtualizarValorExcluido(target)
}   