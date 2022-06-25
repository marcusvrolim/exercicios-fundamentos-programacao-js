/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
*/

function apenasConsoantes(string){

    let novaString = string.replace(/a|e|i|o|u/g, "");

    return novaString;
    
}

let string1 = "Marcus Vinicius Rolim de Oliveira";

console.log(apenasConsoantes(string1));
