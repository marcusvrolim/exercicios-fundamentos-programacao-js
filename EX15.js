/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
2 é zero.
*/

function paresIndicesPares(lista){

    let resultado = [];

    for(let i = 0; i < lista.length; i++){
        if((lista[i]%2 === 0) && (i%2 == 0)){
            resultado.push(lista[i]);
        }
    }
    return resultado;

}

let lista1 = [10, 70, 22, 43];
let lista2 = [10, 70, 22, 43, 50, 32, 187, 548, 2, 8, 10, 16];

console.log(paresIndicesPares(lista1));
console.log(paresIndicesPares(lista2));