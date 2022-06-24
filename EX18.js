/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

function totalDespesas(lista){
    
    let total = 0;

    for(let i = 0; i < lista.length; i++){
        total += lista[i].preco;
    }

    return total;
}

let lista = [
    {nome: 'Mouse', categoria: 'Informatica', preco: 350.00},
    {nome: 'Monitor', categoria: 'Informatica', preco: 5550.00},
    {nome: 'Teclado', categoria: 'Informatica', preco: 250.00},
    {nome: 'Cadeira', categoria: 'Escritorio', preco: 150.00}
]

console.log(totalDespesas(lista));
