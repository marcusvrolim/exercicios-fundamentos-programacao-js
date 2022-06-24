/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

function separador(lista){

    return Object.entries(lista);


}

let lista1 = {
        id: "01",
        nome: "Marcus",
        profissao: "Programador"
}

let lista2 = {
        id: 01,
        descricao: "Mouse",
        categoria: "Periferico"
}


console.log(separador(lista1));
console.log(separador(lista2));



