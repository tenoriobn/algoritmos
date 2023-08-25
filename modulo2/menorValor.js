// Aqui a função vai receber uma `array` e uma `posição inicial` referente ao indice
// esse indice irá mudar conforme a lista for varrida
function menorValor(arrProdutos, posicaoInicial) {

    // Essa variável vai ir armazenando a posição.
    let maisBarato = posicaoInicial;

    // Aqui, a estrutura vai percorrer a array `arrProdutos` até o fim
    // A cada item da array o indice referente a esse item é armazenado na `posicaoInicial`
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        // Aqui vai comparar se o item na variável `atual` é menor que o item na variável `maisBarato`
        // sempre com base na array `arrProdutos` para comparar o item e não o indice do item.
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {

            // Se o item na let `atual` for menor que o da `maisBarato`, então esse item da `atual`
            // é armazenado na variável `maisBarato` obtendo o menor valor
            maisBarato = atual;
        }
    }

    // Por fim, é retornado para a função o indice do item mais barato.
    // Além disso, isso vai fazer com que retornamos de um certo ponto,
    // então, depois que passou do 0, não precisamos mas nos preocupar com ele, agora vai do 1 e assim sucessivamente.
    return maisBarato;
}

// Aqui a função está sendo exportada para maior flexibilidade e usabilidade
// sendo possível, passar a array e posição inicial de outro arquivo.
module.exports = menorValor;