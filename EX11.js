/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

function primeiroUltimo(lista){

    let resultado = [];

    resultado.push(lista[0]);
    resultado.push(lista[lista.length-1]);

    return resultado;
}

let lista1 = [1, 2, 3, 4, 5, 6, 7, 8];
let lista2 = ["mouse", "teclado", "monitor", "cpu", "modem"];

console.log(primeiroUltimo(lista1));
console.log(primeiroUltimo(lista2));