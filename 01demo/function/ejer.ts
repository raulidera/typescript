(() => {
  let palabras:string[]=["Casa","casa","pepito","casa","daniel"];
  let palabraBuscar:string="casa";


  
  

  // Alternativa usando bucles tradicionales (for)
  let buscarPalabraFor=(palabras:string[],buscar?:string,distinguir:boolean=true):number =>{
      
      
      let numVeces:number=0;
    

      if (distinguir){
          // Convertir todas las las palabras del arreglo de palabras, bien a mayusculas bien a minúsculas
          // Convertir la palabra de busqueda a mayusculas o a minusculas
          let resultado:string[]=[];
          for (let i = 0; i < palabras.length; i++) {
            if(palabras[i].toLowerCase()===palabraBuscar.toLowerCase()){
                numVeces++
            }
            
            
          }
          
      }


     else{ for (let i = 0; i < palabras.length; i++) {
          let palabra:string = palabras[i];
          if (palabra===buscar){
              numVeces++;
          }
          // numVeces=palabra===buscar?2:1;
      }}

      return numVeces;
  }
  



  // Alternativa usando programación funcional (filter)
  let buscarPalabraFilter=(palabras:string[],buscar?:string):number =>{
      
      // Hago el filtrado
      let palabrasBusqueda:string[]=palabras.filter((palabra:string) =>{
          return palabra===buscar;
      });

      // Devuelvo la longitud del arreglo filtrado
      return palabrasBusqueda.length;
      
  }

  // console.log(`La palabra ${palabraBuscar} se repite ${buscarPalabraFor(palabras,palabraBuscar)}`);
  console.log(`La palabra ${palabraBuscar} se repite ${buscarPalabraFor(palabras,palabraBuscar,true)}`);
  


})()

