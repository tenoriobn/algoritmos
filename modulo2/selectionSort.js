const livros = require("./listaLivros");
const menorValor = require("./menorValor");

// Aqui é criado a estrutura for que inicia em 0
// Além disso é feito o tamanho da lista `-1` pois o último elemento já não vai interessar por ser o maior.
// Por fim, é feito a incrementação de 1 em 1, mandando para a função que recebe em `posicaoInicial`.
for (let atual = 0; atual < livros.length - 1; atual++) {
    // Aqui vai guardar o indice de 0 a 5, conforme a lista é percorrida.
    // Além disso, `menor` armazena a chamada da função, passando o array e a posição atual percorrida.
    let menor = menorValor(livros, atual);

    console.log('posição atual', atual);

    // Aqui `livroAtual` vai guardar o próprio item e não o indice.
    // assim, torna-se possível pegar essa let para comparar com outro valor e fazer a troca.
    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);

    // Aqui vou guardar o item com menor valor, segundo o que a função retorna.
    // Então o menor valor será 15, depois 20...
    // Isso por aqui está fazendo um loop, então a cada vez, retornara o indice do valor menor pós outros valor menor.
    // Pois é o intuito desse `selectionSort` mostrar a comapração e ordenação de cada item.
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);

    // Aqui é feito a troca. Estou acessando a posição `atual` dentro da array `livros`
    // e trocando pelo valor dentro da let `livroMenorPreco`
    livros[atual] = livroMenorPreco;

    // Em seguida, acesso a array com a posição armazenada no `menor` que é enviado pela função
    // e substituindo pelo item guardado na let `livroAtual`
    livros[menor] = livroAtual;
}

console.log(livros);