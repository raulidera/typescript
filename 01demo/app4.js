"use strict";
(() => {
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
    
    let numerosIguales = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (numeros[i] >= 4) {
            numerosIguales.push(numero);
        }
        
    }
    console.log({numerosIguales});
    let filter=numeros.filter((numeros)=>{
        return numeros>=4;})

    console.log('con filter',filter);
        
    
 
            

    })();

    


