// Importando a array de objetos dos produtos.
const livros = require('./listaLivros');
// Importando a função
const troca = require('./troca');

// Função que irá receber a lista
function insertionSort(lista) {
    
    // Aqui é iniciado a estrutura para iniciar do 0 até o último elemento/objeto da lista.
    for(let atual = 0; atual < lista.length; atual++) {
        // Aqui analise vai armazenar o valor de `atual` que é incrementado de 1 em 1.
        // será utilizada para acessar o item anterior e o atual, possibilitando a comparação de ambos
        let analise = atual;

        // Aqui é utilizado a estrutura `enquanto` que só será true, se o valor armazenado em `analise` 
        // for maior que 1 para que ao fazer `analise--` ele não vá para o indice -1 e ocorra erro.
        // Além disso, só será executada, se o preço do item atual for menor que o preço do item anterior
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            // Aqui é chamada a função externa responsável pro fazer a troca
            // tornando a lista ordenada
            troca(lista, analise);

            // Aqui a lista é decrementada, então se estou atualmente no 2 e foi feito a troca
            // voltamos para o 1, é feito a comparação e se for false, volta para a estrutura for
            // que vai avançar para o 3.
            analise--
        }
    }
    
    console.log(lista)
}

// Passando a lista de objetos `livros` para a função.
insertionSort(livros)