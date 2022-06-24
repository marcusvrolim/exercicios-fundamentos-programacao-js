/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

function soma(lista){

    let resultado = 0;

    for(let i = 0; i < lista.length; i++){
        resultado += lista[i];
    }
    return resultado;
}

let lista1 = [521, 358, 1523, 5877];
let  lista2 = [1, 2, 3, 4];

console.log(soma(lista1));
console.log(soma(lista2));