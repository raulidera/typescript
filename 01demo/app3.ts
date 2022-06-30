let numeros:number[]=[];
let i:number=0;
while (i<5) {
    numeros.push(parseFloat(prompt('dame el numero')));
    
    i++    
}
console.log(numeros);
 let resultado:number;
 for (let i = 0; i < numeros.length; i++) {
    
    let resultado = numeros[i]*2;
    console.log(resultado);
    
}