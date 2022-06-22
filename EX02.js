/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
*/

function anosParaDias(anos){

    let totalDias;

    totalDias = anos * 365;

    return totalDias;
}

console.log(anosParaDias(25));
console.log(anosParaDias(70));