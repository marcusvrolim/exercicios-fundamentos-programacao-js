/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/

function contadorCaractere(char, string){
    
    var contador = 0;
    var caracteres = [];

    for(let i = 0; i < string.length; i++){
        caracteres[i] = string.charAt(i);
    }
    

    for(let i = 0; i < caracteres.length; i++){
        if(char === caracteres[i]) contador++
    }

    return contador;
}

var string1 = "Mouse, Teclado, Monitor, Modem";
var string2 = "Marcus Vinicius Rolim de Oliveira";

console.log(contadorCaractere("m", string1));
console.log(contadorCaractere("M", string1));
console.log(contadorCaractere("o", string2));
console.log(contadorCaractere("O", string2));