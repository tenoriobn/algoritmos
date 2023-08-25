// Aqui estamos trabalhando com uma lista de objetos que contém preço e titulo do livro

// Então começamos importanto a lista de objetos
const livros = require("./listaLivros");

function menorValor(arrProdutos, posicaoInicial) {
    // Temos a variável que inicia em 0 e vai armazenar o indice do livro mais barato
    let maisBarato = posicaoInicial;
    
    // Estrutura for, inicial no indice zero e incrementado para passar por todos os indices
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    
        // Condição para verificar se o valor armazenado no `precosLivros` na posição armazenado pelo `atual`
        // tem o preço menor que o `precosLivros` armazenado na variável `maisBarato`. 
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
    
            // Ao achar o menor preço, esse preço é armazenado no maisBarato.
            maisBarato = atual;
        }
    }

    return maisBarato;
}

module.exports = menorValor;