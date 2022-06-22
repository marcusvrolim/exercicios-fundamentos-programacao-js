/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function numeros(lista){
    
    let tipo;
    let resultado = [];

    for(let i = 0; i < lista.length; i++){
        tipo = typeof(lista[i]);
        if(tipo == "number"){
            resultado.push(lista[i]);
        }
    }
    return resultado;
}

let lista1 = ["computador", 30, 56, "mouse", 4];
let lista2 = [10, 5, 3, 4, "15", "50", "100" ];

console.log(numeros(lista1));
console.log(numeros(lista2));