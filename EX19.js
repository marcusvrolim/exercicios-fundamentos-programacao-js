/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
*/

function media(lista){

    var resultado;
    var total = 0;

    for(let i = 0; i < lista.length; i++){
        total += lista[i];
    }

    resultado = total / lista.length;

    return resultado;    
}

let lista1 = [10, 50, 48, 78, 80];
let lista2 = [10, 50, 30, 10];

console.log(media(lista1));
console.log(media(lista2));