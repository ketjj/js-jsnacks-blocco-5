// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)





// function reverseStringa(str){
//   return str.split('').reverse().join('');
// }

const parola = 'ciao'

const reversestringa = (str) => str.split('').reverse().join('');
console.log(reversestringa(parola));