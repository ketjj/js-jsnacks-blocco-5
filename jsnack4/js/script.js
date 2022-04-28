// Jsnack 4
// Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
// Stampa a schermo la bici con peso minore utilizzando destructuring e template literal

const bicycleList = [
  {
    nome: 'xstyle',
    pesoinkg: 10
  },
  {
    nome: 'xxstyle',
    pesoinkg: 12
  },
  {
    nome: 'abcstyle',
    pesoinkg: 9
  },
  {
    nome: 'k-2 style',
    pesoinkg: 18
  },
  {
    nome: 'y-3 style',
    pesoinkg: 23
  },

];

const [nome, pesoinkg] = bicycleList;
// console.log(nome);

let pesoBici = [];

for(let biciIndex in bicycleList) {
  biciWeight = bicycleList[biciIndex].pesoinkg;
  pesoBici.push(biciWeight);
  

  
  let biciPiùLeggera = Math.min(pesoBici);
  //non mi funziona

}

// document.getElementById('result').innerHTML = `La bici più leggera pesa ${biciPiùLeggera} kg`;
