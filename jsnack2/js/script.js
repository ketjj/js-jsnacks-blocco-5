
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

const menoDi15cm = [];
const piuDi15cm = [];

for(let zucchina of zucchinaList){
  if(zucchina.lunghezzaincm <=15){
    menoDi15cm.push(zucchina.pesoingr)
  }else if(zucchina.lunghezzaincm >15){
    piuDi15cm.push(zucchina.pesoingr)
  }
}

function getSum(arr){
   let total = 0;
   for(let i of arr){
   total += i;
   }
   return total;
}

document.getElementById('result-zucchina1').textContent = `Peso totale delle zucchine meno di 15cm è ${getSum(menoDi15cm)}kg`

document.getElementById('result-zucchina2').textContent = `Peso totale delle zucchine più di 15cm è ${getSum(piuDi15cm)}kg`
