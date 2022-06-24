/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
 */

function areaTriangulo(base, altura){
    var areaTriangulo;

    areaTriangulo = (base * altura) / 2;

    return areaTriangulo.toFixed(2);
}

console.log(areaTriangulo(5, 10));
console.log(areaTriangulo(44, 23));
console.log(areaTriangulo(10.343, 10.214));
console.log(areaTriangulo(32.4343, 23.4));
