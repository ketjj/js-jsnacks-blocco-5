// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

1.
let word = 'Ciao';
function reverseStr(str){
  return str.split('').reverse().join('');
}
console.log(reverseStr(word));


2. 
const reverseString = (string) => string.split('').reverse().join('');
console.log(reverseString('Salvatore'));