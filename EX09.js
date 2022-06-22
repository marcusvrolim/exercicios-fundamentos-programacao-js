/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repeticao(numeroRepetido, numeroRepeticao){

    let resultado = [];

    for(let i = 0; i < numeroRepeticao; i++){
        resultado.push(numeroRepetido);
    }
    return resultado;
}

console.log(repeticao(3,5));
console.log(repeticao(5,3));
console.log(repeticao(1,7));
