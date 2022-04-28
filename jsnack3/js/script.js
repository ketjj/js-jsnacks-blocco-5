// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function reverseStringa(str){
  
  let reverseString = '';

  reverseString = str.split('').reverse().join('') 

  for(let i = str.length - 1; i >= 0; i--){
    reverseString += str[i];
  }

  return reverseString;
}