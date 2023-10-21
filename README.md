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

</div>























