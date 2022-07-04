"use strict";
// Tipos
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let volumen;
    (function (volumen) {
        volumen[volumen["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        volumen[volumen["fuerzaBatman"] = 1] = "fuerzaBatman";
        volumen[volumen["fuerzaFlash"] = 5] = "fuerzaFlash";
        volumen[volumen["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(volumen || (volumen = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    console.log(activar_batiseñal);
    function pedir_ayuda(mensaje) {
        console.log('Auxilio!!!');
    }
    pedir_ayuda('batman');
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
