import { listItemsCart } from "../index.js";
import initTotalValorCarrinho from "./totalValorCarrinho.js";

export default function changeValue({target}) {
    const inputPerent = target.parentElement
    const valueItem = inputPerent.querySelector(".precoProduto")
    const inputItem = inputPerent.querySelector("input")
    const productName = inputPerent.parentElement.querySelector(".nomeProduto").innerHTML
    const itemInObjectList = listItemsCart.filter(item => item.name == productName)
    const formatValue = +itemInObjectList[0].price.replace("R$", "").replace(".", "").replace(",", ".")
    let result = (formatValue * (+inputItem.value)).toFixed(2)
    if(+inputItem.value <= 1) {
        valueItem.innerHTML = itemInObjectList[0].price
        inputItem.value = 1
    }else {
        valueItem.innerHTML = `R$${result.replace(/\./g, ",")}`
    }
    itemInObjectList[0].quantidade = +inputItem.value
    initTotalValorCarrinho(result - formatValue);
}