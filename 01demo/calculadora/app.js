"use strict";
var Operaciones;
(function (Operaciones) {
    Operaciones[Operaciones["suma"] = 1] = "suma";
    Operaciones[Operaciones["resta"] = 2] = "resta";
    Operaciones[Operaciones["multiplicacion"] = 3] = "multiplicacion";
    Operaciones[Operaciones["division"] = 4] = "division";
    Operaciones[Operaciones["promedio"] = 5] = "promedio";
    Operaciones[Operaciones["maximo"] = 6] = "maximo";
    Operaciones[Operaciones["minimo"] = 7] = "minimo";
})(Operaciones || (Operaciones = {}));
let operaciones = Object.keys(Operaciones);
operaciones = operaciones.filter(((operacion) => {
    return isNaN(Number(operacion));
}));
for (const operacion in Operaciones) {
    if (isNaN(Number(operacion))) {
        console.log(operacion);
    }
}
let valor = +prompt('suma-1,resta-2,multi-3,divi-4,prome-5,max-6,min-7');
let valor1;
let valor2;
let arre = [];
if (valor === 1 || valor === 2 || valor === 3 || valor === 4 || valor === 5 || valor === 6 || valor === 7) {
    alert('operacion correcta');
    switch (valor) {
        case 1:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 2:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 3:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 4:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 5:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 6:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        case 7:
            valor1 = +prompt('numero 1');
            valor2 = +prompt('numero2');
            arre.push(valor1, valor2);
            console.log(arre);
            break;
        default:
            alert('operacion no correcta');
    }
}
else {
    alert('operacion no correcta');
}
