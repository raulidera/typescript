(() => {
    console.log("*** PARAMETROS POR DEFECTO ***");

    function nombreCompleto(nomb:string,apel:string,capit:boolean=true) {
        if (capit){
            return `${capitalizar(nomb)} ${capitalizar(apel)}`
        }
        else{
            return nomb+" "+apel;
        }
    }

    function capitalizar(text:string) {
        return text.charAt(0).toUpperCase()+text.substring(1).toLowerCase();
    }


    let nombre:string="daniel";
    let apellidos:string="meijomil gutiérrez";

    let miNombre:string;
    miNombre=nombreCompleto(nombre,apellidos);
    console.log("miNombre capitalizado: ",miNombre);

    miNombre=nombreCompleto(nombre,apellidos,false);
    console.log("miNombre NO capitalizado: ",miNombre);
    



})()