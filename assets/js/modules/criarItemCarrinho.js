import changeValue from "./quandidadeEPreco.js";
import initRemoverItensCarrinho from "./removerItemCarrinho.js";

const cartContainer = document.querySelector(".modal-carrinho")
export default class Item {
    constructor(imgSrc, price, name) {
        this.imgSrc = imgSrc,
        this.price = price,
        this.name = name,
        this.quantidade = 1
    }

    createItem() {
        const containerItem = document.createElement("li");
        containerItem.classList.add("item")
        containerItem.innerHTML = `
        <img src="${this.imgSrc}" alt="Imagem Tenis">
        <div>
            <h1 class="nomeProduto">${this.name}</h1>
            <div class="quantidade">
                <p class="precoProduto">${this.price}</p>
                <input type="number" value="1" class="numeroDeItens">
            </div>
            <span class="material-symbols-outlined delete_button">delete_forever</span>
        </div>`
        const inputQuantidade = containerItem.querySelector(".numeroDeItens")
        const deletButton = containerItem.querySelector(".delete_button")
        inputQuantidade.addEventListener("change", changeValue)
        deletButton.addEventListener("click", initRemoverItensCarrinho)
        cartContainer.appendChild(containerItem)
    }
}