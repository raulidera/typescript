"use strict";
let arregloI = ['nombre', 'perro', 'hambre', 'desayuno', 'perro'];
const igualdad = (arregloI) => {
    let duplicados = [];
    for (let i = 0; i < arregloI.length; i++) {
        if (arregloI[0] === arregloI[i + 1]) {
            duplicados.push(arregloI[i]);
        }
        else if (arregloI[1] === arregloI[i]) {
            duplicados.push(arregloI[i]);
        }
    }
    let duplicados1 = [];
    duplicados1 = duplicados.filter((arregloI) => {
        return duplicados1;
    });
    console.log({ duplicados1 });
    console.log({ duplicados });
};
igualdad(arregloI);
