/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

function procurarPalavra(string, lista){

    return lista.filter(localizado => localizado.includes(string))
}

let lista = ["Mouse", "Teclado", "monitor", "modem", "celular", "nome", "endereco"];

console.log(procurarPalavra("mouse", lista));
console.log(procurarPalavra("celular", lista));
console.log(procurarPalavra("mo", lista));
console.log(procurarPalavra("tor", lista));