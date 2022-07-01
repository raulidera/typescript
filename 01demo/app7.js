"use strict";
let arreglo = [-1, 5, 4, -3, 7];
let arreglo2 = arreglo.filter((numero) => {
    return numero < 0;
});
console.log({ arreglo2 });
let arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});
console.log({ arreglo3 });
