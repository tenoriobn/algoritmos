// Aqui o foco é iniciar, encontrnado o livro mais barato em uma lista desordenada
// Temos a lista desordenada:
const precosLivros = [25, 15, 30, 50, 45, 20];

// Temos a variável que inicia em 0 e vai armazenar o indice do livro mais barato
let maisBarato = 0;

// Estrutura for, inicial no indice zero e incrementado para passar por todos os indices
for (let atual = 0; atual < precosLivros.length; atual++) {

    // Condição para verificar se o valor armazenado no `precosLivros` na posição armazenado pelo `atual`
    // é menor que o `precosLivros` na posição `maisBarato` que inicia em 0, ou seja, no indice 0. 
    if (precosLivros[atual] < precosLivros[maisBarato]) {

        // Ao achar o indice com o menor valor, esse indice é armazenado no maisBarato.
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${precosLivros[maisBarato]}`);