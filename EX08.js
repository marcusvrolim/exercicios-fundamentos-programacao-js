/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicacao(numero1, numero2){

    let resultado = 0;

    if(numero1 >= 0 && numero2 >= 0){
        for(let i = 0; i < numero2; i++){
            resultado += numero1;
        }
        return resultado;
    }

    return "Numero inválido (numero negativo)";
}

console.log(multiplicacao(2,5));
console.log(multiplicacao(3,3));
console.log(multiplicacao(10,10));

