let numeros:number[]|null=[];
let i:number=0;
while (i<5) {
    numeros.push(parseFloat(prompt('dame el numero')));
    
    i++    
}
console.log(numeros);
  let usandomap:number[] = numeros.map(function(numeros) {
    return numeros * numeros);}

 console.log(usandomap);
 
  for(let i = 0; i < numeros.length; i++) {
    let resultado:number;
    
    resultado = Math.pow(numeros[i],2);
    console.log(resultado);
  ;
  }

    