export default function initAtualizarValorExcluido() {
  const totalValueCart = document.querySelector(".valorTotal")
  const totalNumberItems = document.querySelector(".totalItens")
  const itensDoCarrinho = document.querySelectorAll('.item');
  const arrayItens = Array.from(itensDoCarrinho);
  const takeAndFormatInformations = () => {
    const takeInformations = arrayItens.map((item) => {
      const itemPrice = item.querySelector('.precoProduto');
      const itemQuantity = +item.querySelector('.numeroDeItens').value;
      const formatPrice = +itemPrice.innerHTML.replace('R$', '').replace('.', '').replace(',', '.');
      return { itemQuantity, formatPrice };
    });
    return takeInformations
  }
  const putTotalPriceAndQuantity = () => {
    const totalPrice = takeAndFormatInformations().reduce((acumulador, item) => {
      return +(acumulador + item.formatPrice).toFixed(2)
    }, 0)
    const totalQuantity = takeAndFormatInformations().reduce((acumulador, item) => {
      return acumulador + item.itemQuantity
    }, 0)
    totalValueCart.innerText = `R$${totalPrice}`
    totalNumberItems.innerText = `${totalQuantity} Produtos`
    return { totalPrice, totalQuantity }
  }
  putTotalPriceAndQuantity();
}

