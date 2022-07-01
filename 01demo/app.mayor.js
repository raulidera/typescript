"use strict";
let arreglo = [];
while (true) {
    let numeroTexto = prompt("Introduzca un número");
    // Hago la comprobación de que el usuario no ha pulsado
    // el botón cancelar
    if (numeroTexto === null) {
        break;
    }
    let numero = parseFloat(numeroTexto);
    arreglo.push(numero);
}
console.log(arreglo);
let mayor = Math.max.apply(null, arreglo);
console.log('el mayor es:', mayor);
const mayor2 = (arreglo) => {
    let m;
    m = arreglo.length;
    mayor = arreglo[m - 1];
    while (m--) {
        if (arreglo[m] > mayor) {
            mayor = arreglo[m];
        }
    }
    console.log('el mayor es bucle normal', mayor);
};
mayor2(arreglo);
let minimo = Math.min.apply(null, arreglo);
console.log('el minimo es', minimo);
