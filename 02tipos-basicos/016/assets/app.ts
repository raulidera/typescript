
 const persona:boolean=true;
 
 function crearPersona(persona:boolean) {
    return false;    
 }
 console.log(crearPersona(persona));

 function crearPersona2(persona:boolean) {
    return true;    
 }
 console.log(crearPersona2(persona));
 function resul(persona:boolean) {
    return (crearPersona(persona)&&crearPersona2(persona))
    
 }
 console.log(resul(persona));
 if (resul(persona)===false) {
    console.log('oppp ohhhh')
     }else(console.log('estamos salvados'))