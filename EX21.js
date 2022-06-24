/*
Criar uma função que receba um array de números e retorne o menor número desse array.
*/

function menorNumero(lista){

    var menorNumero = lista[0];

    for(let i = 0; i < lista.length; i++){
        if(menorNumero > lista[i]){
            menorNumero = lista[i];
        }
    }
    return menorNumero;
}

var lista1 = [ 10, 15, 25, 1, 5, 10 ];
var lista2 = [1, 2, 3, 5, 15, 25, 15, 80];

console.log(menorNumero(lista1));
console.log(menorNumero(lista2));
