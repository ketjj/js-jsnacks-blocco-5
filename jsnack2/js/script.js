
// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchinaList = [
  {
    tipologia: 'romanesco',
    pesoingr: 35,
    lunghezzaincm: 12
  },
  {
    tipologia: 'fiorentino',
    pesoingr: 67,
    lunghezzaincm: 37
  },
  {
    tipologia: 'napoletano',
    pesoingr: 77,
    lunghezzaincm: 45
  },
  {
    tipologia: 'tondo di Nizza',
    pesoingr: 35,
    lunghezzaincm: 13
  },
  {
    tipologia: 'tondo di Piacenza',
    pesoingr: 83,
    lunghezzaincm: 45
  },
  {
    tipologia: ' rugoso-friulano',
    pesoingr: 88,
    lunghezzaincm: 33
  },
  {
    tipologia: 'triestino',
    pesoingr: 45,
    lunghezzaincm: 14
  },
  {
    tipologia: 'nero di Milano',
    pesoingr: 12,
    lunghezzaincm: 22
  },
  {
    tipologia: 'pugliese',
    pesoingr: 47,
    lunghezzaincm: 66
  },
  {
    tipologia: 'siciliano',
    pesoingr: 34,
    lunghezzaincm: 89
  } 
];

const zucchineMeno15cm = [], zucchinePiudi15cm = [];

// console.log(zucchineMeno15cm);
// console.log(zucchinePiudi15cm);


for (let zucchina in zucchinaList) {

  const zucchinaMisura = zucchinaList[zucchina];
  // console.log("Siamo alla Zucchina Numero " + zucchinaIndex + " con valore lunghezza: " + zucchina[zucchinaIndex].lunghezzaincm)

  //  if( zucchinaMisura.lunghezzaincm >= 15){
  //    zucchinePiudi15cm.push(zucchinaMisura)
  //  }
  //  else{
  //    zucchineMeno15cm.push(zucchinaMisura)
  //  }
   

  (zucchinaMisura.lunghezzaincm >= 15) ? zucchinePiudi15cm.push(zucchinaMisura) : zucchineMeno15cm.push(zucchinaMisura);

}

let tutteLeZucchinelunghe = 0;

for(let zucchinaLunga of zucchinePiudi15cm){
  tutteLeZucchinelunghe += parseInt(zucchinaLunga.lunghezzaincm);
  
  document.getElementById('result-zucchina1').innerHTML = "Misura Zucchine Lunghe " + tutteLeZucchinelunghe;
}

// console.log("Misura Zucchine Lunghe " + tutteLeZucchinelunghe)

let tutteLeZucchinecorte = 0;

// console.log("Misura Zucchine Lunghe PRE-for " + tutteZucchinelunghe)

for(let zucchinaCorta of zucchineMeno15cm){
  tutteLeZucchinecorte += parseInt(zucchinaCorta.lunghezzaincm);

  document.getElementById('result-zucchina2').innerHTML = "Misura Zucchine Lunghe " + tutteLeZucchinecorte;

  console.log(tutteLeZucchinecorte, 'xxxx');

}

// console.log(zucchineMeno15cm.length, 'Menooo');
// console.log(zucchinePiudi15cm.length, 'Piuuuù');