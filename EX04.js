/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function mesExtenso(mes){

    let mensagem;

    switch(mes){
        case 1:
            mensagem = "janeiro"
        break;
        case 2:
            mensagem = "fevereiro"
        break;
        case 3:
            mensagem = "março"
        break;
        case 4:
            mensagem = "abril"
        break;
        case 5:
            mensagem = "maio"
        break;
        case 6:
            mensagem = "junho"
        break;
        case 7:
            mensagem = "julho"
        break;
        case 8:
            mensagem = "agosto"
        break;
        case 9:
            mensagem = "setembro"
        break;
        case 10:
            mensagem = "outubro"
        break;
        case 11:
            mensagem = "novembro"
        break;
        case 12:
            mensagem = "dezembro"
        break;
        default:
            mensagem = "Mes inválido"
        break;
    }

    return mensagem;
}

console.log(mesExtenso(1));
console.log(mesExtenso(4));