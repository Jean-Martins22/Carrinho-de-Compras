let total;
limpar();

function adicionar(){
    //Pegando Valores
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    //Separando Nome de Valor
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);

    //Calculando o SubTotal
    let subTotal = valorProduto * quantidade;

    //Calculando Total
    total = total + subTotal;
    valorTotal.textContent = `R$ ${total}`;

    //Adicionando Produto na Lista
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    //Limpando o Campo Quantidade
    document.getElementById('quantidade').value = '';
}

function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}