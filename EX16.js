/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/

function anoBissexto(ano){
    if(ano%4 == 0) return true;
    else return false;
}

console.log(anoBissexto(2022));
console.log(anoBissexto(2021));
console.log(anoBissexto(2020));
console.log(anoBissexto(2019));
console.log(anoBissexto(2018));
console.log(anoBissexto(2017));
console.log(anoBissexto(2016));

