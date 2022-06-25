/**
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 */

function criarMediaFinal(nome, media){
    return {
        nome,
        media    
    }
}

function media(lista){
    
    let mediaFinalAluno = [];
    let mediaFinal = [];
    let somaNotas = 0;
    let melhorAluno = {
        nome: "",
        media: 0
    };

    for(let i = 0; i < lista.length; i++){
        somaNotas = 0;
        for(let j = 0; j < 4; j++){
            somaNotas += lista[i].notas[j];
        }
        mediaFinal[i] = somaNotas / 4;
        
        mediaFinalAluno[i] = criarMediaFinal(lista[i].nome, mediaFinal[i])
        
        if(mediaFinalAluno[i].media > melhorAluno.media){
            melhorAluno.media = mediaFinalAluno[i].media;
            melhorAluno.nome = mediaFinalAluno[i].nome;
        }
    }
  return melhorAluno;
}

let diario = [{
    nome: "Joao",
    notas: [8, 7.6, 8.9, 6]
},
{
    nome: "Mariana",
    notas: [9, 6.6, 7.9, 8]
},
{
    nome: "Carla",
    notas: [7, 7, 8, 9]
}]

console.log(media(diario));