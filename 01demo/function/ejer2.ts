function palindrome(palabra:string,boolean=true){
    const palabra2 = palabra.toLowerCase();
    const palabra3 = palabra2.split('').reverse().join('');
  
    return  palabra2 === palabra3 ? 'es palindromo' : 'no es palindromo'
  
  }
  let palabra='Raulin';
  

  console.log(palindrome(palabra,true));


  function palindrome2(str:string) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome2("A man, a Plan, a canal. PaNama"));
  