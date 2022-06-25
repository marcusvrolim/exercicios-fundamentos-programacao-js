/*
 Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

function segundoMaior(lista){

    let maiorNumero = lista[0];
    let posicaoMaiorNumero;
    let resultadoFinal = lista[0];

    for(let i = 0; i < lista.length; i++){
        if(maiorNumero < lista[i]){
            maiorNumero = lista[i];
            posicaoMaiorNumero = i;
        }
    }
    
    lista.splice(posicaoMaiorNumero, 1);
    
    for(let i = 0; i < lista.length; i++){
        if(resultadoFinal < lista[i]){
            resultadoFinal = lista[i];
        }
    }
    
    return resultadoFinal;
}

let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(segundoMaior(lista1));