enum Operaciones{
    suma                = 1,
    resta               = 2,
    multiplicacion      = 3,
    division            = 4,
    promedio            = 5,
    maximo              = 6,
    minimo              = 7
}

let operaciones:string[]=Object.keys(Operaciones);
operaciones=operaciones.filter(((operacion:string) =>{
    return isNaN(Number(operacion));
}));


for (const operacion in Operaciones) {
    if (isNaN(Number(operacion))){
        console.log(operacion);
    }
}
let valor:number=+prompt('suma-1,resta-2,multi-3,divi-4,prome-5,max-6,min-7');
let valor1;
let valor2;
let arre=[];

if (valor===1 || valor===2 || valor===3 || valor===4 ||valor===5 ||valor===6 ||valor===7 ) {
    alert('operacion correcta');
    switch (valor) {
        case 1:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);
            
        break;
        case 2:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;

        case 3:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;

        case 4:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;

        case 5:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;

        case 6:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;

        case 7:
            valor1=+prompt('numero 1');
            valor2=+prompt('numero2');
            arre.push(valor1,valor2);
            console.log(arre);

        break;
            
        default:
            alert('operacion no correcta');
            
    }

}else{
    alert('operacion no correcta')
}

