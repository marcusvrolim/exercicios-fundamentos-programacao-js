/*
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

function contadorPalavras(string){

    var palavras = [];
    var totalPalavras;

    palavras = string.replace(",", "").split(" ");

    totalPalavras = palavras.length;

    return totalPalavras;

}

var frase1 = "Mouse, teclado, monitor, modem, cpu, cadeira";
var frase2 = "Marcus Vinicius Rolim de Oliveira";

console.log(contadorPalavras(frase1));
console.log(contadorPalavras(frase2));

