"use strict";
const persona = true;
function crearPersona(persona) {
    return false;
}
console.log(crearPersona(persona));
function crearPersona2(persona) {
    return true;
}
console.log(crearPersona2(persona));
function resul(persona) {
    return (crearPersona(persona) && crearPersona2(persona));
}
console.log(resul(persona));
if (resul(persona) === false) {
    console.log('oppp ohhhh');
}
else
    (console.log('estamos salvados'));
