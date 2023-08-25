// Aqui estamos trabalhando com uma lista de objetos que contém preço e titulo do livro

// Então começamos importanto a lista de objetos
const livros = require("./listaLivros");

// Temos a variável que inicia em 0 e vai armazenar o indice do livro mais barato
let maisBarato = 0;

// Estrutura for, inicial no indice zero e incrementado para passar por todos os indices
for (let atual = 0; atual < livros.length; atual++) {

    // Condição para verificar se o valor armazenado no `precosLivros` na posição armazenado pelo `atual`
    // tem o preço menor que o `precosLivros` armazenado na variável `maisBarato`. 
    if (livros[atual].preco < livros[maisBarato].preco) {

        // Ao achar o menor preço, esse preço é armazenado no maisBarato.
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);