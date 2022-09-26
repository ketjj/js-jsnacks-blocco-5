// Jsnack 4
// Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
// Stampa a schermo la bici con peso minore utilizzando destructuring e template literal

const bicycleList = [
  {
    nome: 'xstyle',
    pesoinkg: 11
  },
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


// console.log(nome);


let startBicycleWeight = bicycleList[0].pesoinkg;
//console.log(startBicycleWeight)
let lighBicycle = {};


for(let bicycle of bicycleList){
  //console.log(bicycle);
  if(startBicycleWeight > bicycle.pesoinkg){
    startBicycleWeight = bicycle.pesoinkg;
    
  } 
}
const myObject =  bicycleList.findIndex((bicycle) => bicycle.pesoinkg === startBicycleWeight);
console.log(myObject);

function printObject(array, num){
  //let myObj = array[num];
  let output = `La bici più leggera è '${array[num].nome}', con il perso di ${array[num].pesoinkg} kg`
  return output;
}

let outMsg = document.getElementById('result');
outMsg.textContent = printObject(bicycleList, myObject);



// let bicipiùleggera = {};

// for(let bici in bicycleList) {
//   const {pesoinkg} = bici;
//   console.log(pesoinkg, 'xxxxxxxxxxxx');

//   if(pesoBici > bici.pesoinkg) {
//     pesoBici = pesoinkg;
    
//     printBicycle(biciIndex);
    
//   }
//   //console.log(biciIndex, '-------------')
// }
  
// printBicycle(bicipiùleggera);
// function printBicycle(biciIndex){
//   const {nome, pesoinkg} = biciIndex;
//   document.getElementById('result').innerHTML  = `la bici pesa ${nome} con un peso di ${pesoinkg}`
// }
