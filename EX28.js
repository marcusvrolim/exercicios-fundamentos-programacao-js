/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function contadorDigitos(lista, numero){

    let resultado = [];

    for(let i = 0; i < lista.length;i++){
        if(lista[i].toString().length == numero){
            resultado.push(lista[i]);
            
        }
    }
    return resultado;
}

let lista1 = [1, 10, 100, 1000, 900, 90, 9];
let lista2 = [1, 2, 3, 4, 5, 66, 77];

console.log(contadorDigitos(lista1, 4));
console.log(contadorDigitos(lista2, 2));
