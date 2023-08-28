// Essa função vai receber a lista dos produtos
// além disso, vai receber a variavel `analise` que irá armazenar os indices
// conforme o for foi incrementando de 1 em 1.
function troca(lista, analise) {
    // Aqui está sendo armazenado na variável o item correspondente ao indice armazenado em `analise`;
    let itemAnalise = lista[analise];
    // Aqui está sendo armazenado o item anterior ao indice armazenado em analise, ou seja,
    // se analise armazena 2, então aqui com -1 está sendo pego o item do indice 1.
    let itemAnterior = lista[analise - 1]; 

    // Aqui é feito a troca, agora analise armazena o item anterior `- 1` que seguindo o exemplo a cima é 1.
    lista[analise] = itemAnterior;
    // Aqui a troca acontecem, fazendo com que o item do exemplo a cima 2, passe a ter o indice 1.
    lista[analise - 1] = itemAnalise;
}

// Aqui a função é exportada para ser utilizada em outros arquivos.
module.exports = troca;