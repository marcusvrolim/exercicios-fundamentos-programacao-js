/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/

function objetoInvertido(objeto){
   
    let novoObjetoKey = Object.values(objeto).toString();
    let novoObjetoValues = Object.keys(objeto).toString();

    let novoObjetoKeyArray = novoObjetoKey.split(",");
    let novoObjetoValuesArray = novoObjetoValues.split(",");

    let novoObjeto = {};

    for(let i = 0; i < novoObjetoKeyArray.length; i++){

        Object.defineProperty(novoObjeto, novoObjetoKeyArray[i], {
            enumerable: true,
            writable: false,
            value: novoObjetoValuesArray[i]
        });
    }

    return novoObjeto;
}

let computador = {
    processador: 'Ryzen 7', 
    ram: 32, 
    tipoRam: 'DDR4', 
    VGA: 'RTX3070i'
}


console.log(objetoInvertido(computador));
