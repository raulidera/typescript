let arregloI:[string,string,string,string,string]=['nombre','perro','hambre','desayuno','perro'];

const igualdad=(arregloI:string[])=>{
    let duplicados:string[]=[];
    for (let i = 0; i < arregloI.length; i++) {
        if (arregloI[0] === arregloI[i+1]) {
          duplicados.push(arregloI[i]);
        }
        else if (arregloI[1]===arregloI[i]) {
            duplicados.push(arregloI[i]);   
        }
    
       
      }
      
      let duplicados1:string[]=[];
      
       duplicados1 = duplicados.filter( (arregloI) => {
        return duplicados1;});
    
    
        console.log({duplicados1});
    console.log({duplicados});
       
     
}
igualdad(arregloI);


  

