// Tipos
(() => {
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:[string,string,string,string] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash:number = 5;
    const fuerzaSuperman:number = 100;
    const fuerzaBatman:number = 1;
    const fuerzaAcuaman:number = 0;

    enum volumen{
        fuerzaAcuaman=0,
        fuerzaBatman=1,
        fuerzaFlash=5,
        fuerzaSuperman=100
    }
   
  
    // Retorno de funciones
    function activar_batiseñal():avoid{
      return 'activada';
    }
  console.log(activar_batiseñal);
    function pedir_ayuda(mensaje:string){
      console.log('Auxilio!!!');
    }
  pedir_ayuda('batman');
    // Aserciones de Tipo
    const poder:any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  