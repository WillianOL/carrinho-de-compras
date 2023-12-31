<div> 
  <h1 align="center">Carrinho de compras - JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Um carrinho de compras feito inteiramente com JavaScript</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/carrinho-de-compras/assets/112639055/aa717a06-8cdf-489e-ade4-917c08c952ad" width='850px'>
</div>


## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>
</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>

<div>
 <p>A aplicação consiste em uma loja virtual de sapatos inspirada na Adidas, com um carrinho de compras 100% funcional. Nele, pode-se adicionar, remover e mudar o número de itens do carrinho. A cada alteração de número de itens os valores mudam e o valor total do carrinho e atualizado.</p>
 <p>Até agora, esse é o projeto mais complicado e desafiador que já fiz, pois nele utilizei vários conceitos de lógica e manipulação de objetos e arrays e todo o código e lógica foi feito por mim. A maior dificuldade que tive nesse projeto foi armazenar cada item adicionado no carrinho em uma array e como identificar que esse item foi excluído. Para resolver isso, utilizei uma class que cria os itens e exibe os itens do carrinho, e como a class retorna um objeto com as infomações do item(nome, valor, imagem), utilizei uma função para adicionar esses objetos(item) em uma array. Depois, para identificar que esse item específico foi excluído da array, criei uma função que faz um filtro pela array utilizando o método filter() e retorna o objeto que tem o nome igual ao item que vai ser excluído, assim com o método shift() retiro/excluo esse item da array.</p>
	<p>Como já citei, todo o código foi pensado e desenvolvido por mim, então fiquei a vontade para utilizar a criatividade e o conhecimento que já possuo em JavaScript. Com certeza existem formas melhores de se fazer um carrinho de compras na web, porem eu quis me desafiar e tentar criar um inteiramente sozinho. :)</p>
</div>
 
### Acessar projeto ✈

◻<a href="https://willianol.github.io/carrinho-de-compras/assets/index.html">Carrinho de compras Adidas</a>

## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

<div>
	<h3>Organização</h3>
	<p>Como esse projeto tem várias funcionalides, resolvi separar cada parte do código em modulos. Para assim, ficar bem mais organizado e fácil de dar manutenção ao código.</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/b1d2dd46-c503-4ae5-975b-6f6fbd3b8e39" width="250px">
	 </div>
</div>

<div>
	<h3>Acessar carrinho</h3>
	<p>Para abrir e fechar o carrinho, utilizei uma função simples que pega o botão de abrir o carrinho e adiciona um evento de click. Quando clicado, é chamada a função "openOrCloseCart" que adiciona ou remove a classe "cart-open" que mostra o conteiner do carrinho na tela. Depois executa a função que retira a mensagem de alerta.(explicado posteriormente)</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/c2c2feff-a24d-4ced-a812-0d5ceaa608d8" width="650px">
	 </div>
</div>

<div>
	<h3>Adicionar itens ao carrinho</h3>
	<p>Para adicionar os itens ao carrinho, separei em duas funções diferentes, uma para pegar as informações do item(nome, preco, imagem) e outra para adicionar o item ao carrinho. Na de pegar as informações, criei a função "TakeItemInformation" que é chamada quando o botão de adicionar ao carrinho e clicado. Nela, peguei o item inteiro através do target e extrai o nome, preco e url da imagem do item clicado. Ao final a função "addItemToCart" é executada passando como argumentos as informações do item.</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/43ccf861-1739-4a1a-b15a-44475cb8ad5b" width="650px">
	 </div>
	<p>A função "addItemToCart" é responsável por adicionar o item ao carrinho, e com um simples código verificar se o item já está incluso no carrinho e disparar a mensagem de alerta. Fiz a validação criando uma array chamada "listItemsCart" no arquivo principal e importanto ela para utilizar ela. Depois, utilizando o método some fiz um loop para saber se o item já existe no carrinho, retornando um valor booleano. No IF, se o item já existir mostra a mensagem de alerta e da o return para parar a execução do código. Depois com a class o item é criado e colocar na array "listItemsCart". Ao final, executa a função "initIndicardorDeItens" e "initTotalValorCarrinho".</p>
	<h4>Itens/funções importadas</h4>
	<div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/5869727c-9c5f-45a0-adac-7a8bbea9dddf" width="650px">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/a1b69d6f-a4da-4f22-8d76-b4628aaedfa5" width="650px">
	 </div>
	<h4>Função para adicionar itens ao carrinho</h4>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/e3253a01-afbe-47cb-992b-97ca0846fd19" width="650px">
	 </div>
</div>

<div>
	<h3>Class para criar os itens</h3>
	<p>Para criar os itens que vão ser colocados no carrinho, criei uma class chamada "Item". Primeiro, no constructor é criado um objeto com a url da imagem, nome, preco e a quantidade padrão que é 1.</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/6988f0dd-a326-4a97-9ec1-5ad821f790f8" width="650px">
	 </div>
	<p>Depois, no método "createItem" é criado um elemento html li, adicionado a classe "item" e feito um innerHTML com a estrutura do item do carrinho, com a url da imagem, o nome e o preco. Ao final, no botão de deletar é adicionado um evento de click que chama a função "initRemoverItensCarrinho" e no input do número de itens é adicionado um evento de change que chama a função "changeValue".</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/b1e96be8-9eac-4115-97e7-2889115990d7" width="650px">
	 </div>
</div>

<div>
	<h3>Apagar itens do carrinho</h3>
	<p>Ao clicar no botão de remover o item do carrinho, a função "initRemoverItensCarrinho" é executada. Nela, é feito um filtro na array de itens que retorna o item que foi escolhido para excluir da array, com o método shift, esse item é excluido da array e o elemento HTML(item na página) é removido. Ao final executando a as funções "initIndicadorDeItens"(a lista atualizada sem o item) e "initAtualizarValorExcluido"(passando o item clicado).</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/11f71856-6b2b-421a-b8f6-9603bedf3fb4" width="650px">
	 </div>
</div>

<div>
	<h3>Mudar quantidade e valor do item</h3>
	<p>Quando a quantidade do item é alterada, a função "changeValue" é chamada. Nela, é feito um filtro para pegar o item que teve a quantidade alterada na lista de itens(objetos), depois fiz uma formatação no valor do item. Para pegar o resoltado fiz de forma simples, na variável "result" o valor do item e multiplicado pela quantidade no input. Dando assim seu valor final. Antes de exibir o resultado, fiz uma validação caso o usuário digite 1 novamente ou um número menor como quantidade, colocando o valor inicial e trocando o valor do input para 1. Se isso não acontecer, o resultado é colocado como valor do item. Ao final, a quantidade do objeto(item) recebe o valor alterado e a função "initTotalValorCarrinho" é chamada.</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/8a282020-ae91-49c3-b0d3-8394849c8e20" width="650px">
	 </div>
</div>

<div>
	<h3>Valor total do carrinho</h3>
	<p>Essa função e responsável por calcular o valor total de todos os valores dos itens e o total de itens do carrinho, ela é executada a cada vez que o número de itens é alterado e quando um item é adicionado ao carrinho. Primerio, para pegar o número total de itens, utilizei o reduce na lista de itens para somar a quantidade total de itens.</p>
	 <div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/4758d020-b8a4-4a31-b653-8018f573c60a" width="650px">
	 </div>
	<p>Depois é feito uma condição: se a quantidade nova for passada, ou seja, se a quantidade de um item for alterado vai pegar esse valor e somar com o valor do carrinho, se não faz um reduce pela lista de itens do carrinho pegando o valor de cada um e somando gerando assim o valor final.</p>
	<div align="center">
		<img align="center" src="https://github.com/WillianOL/carrinho-de-compras/assets/112639055/b9dc604a-1a3f-476a-be09-09617a754a78" width="650px">
	</div>
</div>

























