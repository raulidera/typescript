
// let matriz:number[]=[];
// Arrays  multidimensionales
(() => {
  let matriz1:number[][]=[
      [1,3,4,5],
      [4,5,6,7]
  ];


  let matriz2:number[][]=[
      [1,67,56,5],
      [46,56,68,79]
  ];

  let matrizResultadoSuma:number[][]=[];
  let matrizResultadoResta:number[][]=[];
  

  for (let i = 0; i < matriz1.length; i++) {
      // Inicializa cada una de las filas como un arreglo vacio
      matrizResultadoSuma[i]=[];
      matrizResultadoResta[i]=[];
      
      for (let j = 0; j < matriz1[i].length; j++) {
          matrizResultadoSuma[i][j]   = matriz1[i][j]+matriz2[i][j];
          matrizResultadoResta[i][j]  = matriz1[i][j]-matriz2[i][j];
      }
  }


  console.log("matrizResultadoSuma: ",matrizResultadoSuma);
  console.log("matrizResultadoResta: ",matrizResultadoResta);
  
  



})()



