"use strict";
(() => {
    console.log("*** PARAMETROS POR DEFECTO ***");
    function nombreCompleto(nomb, apel, capit = true) {
        if (capit) {
            return `${capitalizar(nomb)} ${capitalizar(apel)}`;
        }
        else {
            return nomb + " " + apel;
        }
    }
    function capitalizar(text) {
        return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    }
    let nombre = "daniel";
    let apellidos = "meijomil gutiérrez";
    let miNombre;
    miNombre = nombreCompleto(nombre, apellidos);
    console.log("miNombre capitalizado: ", miNombre);
    miNombre = nombreCompleto(nombre, apellidos, false);
    console.log("miNombre NO capitalizado: ", miNombre);
})();
