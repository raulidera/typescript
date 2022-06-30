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
    // Hago el cálculo de la multiplicación por dos
    let numerosIguales = [];
    for (let i = 0; i< numeros.length; i++) {
        let numero = numeros[i];
        if(numeros[i] ===3 | 5){
            numerosIguales.push(numero);

        }
    }
    console.log(numerosIguales);
})();
