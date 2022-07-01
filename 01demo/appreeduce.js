"use strict";
//pedimos datos al usuario
let numeros = [];
while (true) {
    let numeroTexto = prompt("Introduzca un número");
    // Hago la comprobación de que el usuario no ha pulsado
    // el botón cancelar
    if (numeroTexto === null) {
        break;
    }
    let numero = parseFloat(numeroTexto);
    numeros.push(numero);
}
console.log(numeros);
//agrupamos los pares
let numerosFiltradosFilter = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log(numerosFiltradosFilter);
//sumamos los pares
let numerosFiltradosFilter2 = numerosFiltradosFilter.reduce(function (acumulador, numero) {
    return acumulador + numero;
});
console.log(numerosFiltradosFilter2);
//agrupamos los impares
let numerosFiltradosFilterImpares = numeros.filter((numero) => {
    return numero % 3 === 0;
});
console.log(numerosFiltradosFilterImpares);
//sumamos los impares
let numerosFiltradosFilter3 = numerosFiltradosFilterImpares.reduce(function (acumulador, numero) {
    return acumulador + numero;
});
console.log(numerosFiltradosFilter3);
//PROGRAMACION normal bucles for
