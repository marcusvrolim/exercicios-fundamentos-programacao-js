/**
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

function sorteio(numero){
    var numeroRandomico  = (Math.floor(Math.random() * 10) + 1);

    if(numeroRandomico == numero) return `Parabéns! O número sorteado foi o ${numeroRandomico}`;
    return `Que pena! O número sorteado foi o ${numeroRandomico}`;
}

console.log(sorteio(1));
console.log(sorteio(2));
console.log(sorteio(3));
console.log(sorteio(5));
console.log(sorteio(6));
console.log(sorteio(7));
