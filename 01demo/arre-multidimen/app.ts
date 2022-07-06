// let matriz:number[]=[];
// Arrays  multidimensionales
(()=>{

    let matriz:Array<Array<number>>=[
        [1,2,43,4],
        [1,3,4,5],
        [1,5,6]
    ];

    console.log("Mediante for tradicional");
    // For tradicional
    // Calculo el número de filas del arreglo multidimensional
    let longitud=matriz.length;
    // Recorro fila de la matriz
    for (let x:number = 0; x < longitud; x++) {
        let longitud1=matriz[x].length;
        // Recorro elementos de cada fila
        for (let y:number = 0; y < longitud1; y++) {
            console.log(`El elemento [${x}][${y}] vale ${matriz[x][y]}`);
        }
    }

    console.log("Mediante forin");
    
    // For in 
    for (const x in matriz) {
        for (const y in matriz[x]) {
            console.log(`El elemento [${x}][${y}] vale ${matriz[x][y]}`);
        }
    }

    console.log("Mediante forof");
    for (const fila of matriz) {
        for (const celda of fila) {
            console.log(`El elemento ${celda}`);
        }
    }

    console.log("Mediante foreach");
    matriz.forEach((fila:number[])=>{
        fila.forEach((celda:number)=>{
            console.log(`El elemento ${celda}`);
        });
    });
    
})()
