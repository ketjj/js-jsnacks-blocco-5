// Jsnack 1

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// -----------------------------


const zucchino = [
  {
    tipologia: 'romanesco',
    pesoingr: 35,
    lunghezzaincm: 23
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
    lunghezzaincm: 56
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
    lunghezzaincm: 88
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


//console.log(zucchino);
   let pesoTotale = 0;
   for(let zucchina of zucchino){
    pesoTotale += Number(zucchina.pesoingr);
   }
   document.getElementById('result-firstsnack1').innerHTML = `Il peso totale delle zucchine è ${pesoTotale}gr`;
   // console.log(totalWeight);