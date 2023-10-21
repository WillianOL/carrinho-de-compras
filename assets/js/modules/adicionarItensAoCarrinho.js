import initMensagemDeAlerta from "./mensagemDeAlerta.js";
import initIndicadorDeItens from "./indicadorDeItensCarrinho.js";
import Item from "./criarItemCarrinho.js";
import initTotalValorCarrinho from "./totalValorCarrinho.js";
import { listItemsCart } from "../index.js";

const buttonsAddItemToCart = document.querySelectorAll(".btnAddCart");  
export function initAdicionarItensAoCarrinho() {
    function takeItemInformation({ target }) {
        const itemCart = target.parentElement.parentElement;
        const itemInformations = itemCart.querySelectorAll("[data-informacoes]");
        const itemImageSrc = itemInformations[0].getAttribute("src");
        const itemPrice = itemInformations[1].innerHTML;
        const itemName = itemInformations[2].innerHTML;  
        addItemToCart(itemImageSrc, itemPrice, itemName)
    }

    function addItemToCart(itemImg, itemPrice, itemName) {
        const itemExistsInCart = listItemsCart.some((item) => item.name == itemName);
        if (!itemExistsInCart) {
            initMensagemDeAlerta(true);
        } else {
            initMensagemDeAlerta(false);
            return;
        }
        const newItemCart = new Item(itemImg, itemPrice, itemName);
        newItemCart.createItem();
        listItemsCart.push(newItemCart);
        initIndicadorDeItens(listItemsCart);
        initTotalValorCarrinho();
    }

    buttonsAddItemToCart.forEach(button => button.addEventListener("click", takeItemInformation));
}
