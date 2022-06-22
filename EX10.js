/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function string(numero){

    let resultado = [];
    
    for(let i = 0; i < numero; i++){
        resultado += "+";
    }
    return resultado;

}

console.log(string(1));
console.log(string(5));
console.log(string(10));
