// LOOPS
// while para repetir uma função
// for faz de forma reduzida

function brigde (){
let contador = 0;

while (contador < 100) {
    frase = frase + "Não devo contar mentiras";   
    contador = contador +1;                 // aqui repete 100 vezes
    

}

return frase; 

}

// USANDO FOR

function bbzao () {
    for {contador = 0;contador < 100; contador ++;}
}


// repetir um texto por 10 vezes
function vezes10(texto) {
    let noisqta = "";
    for (let n=0; n<10;n++){
       noisqta += texto
    }
    return noisqta
   }

// repetir de acordo com nº escolhido de repetições
function multiplica(texto, repeticoes) {
    let noisqta = "";
  
   for (let n=0; n < repeticoes; n++) {
      noisqta += texto;
  
   }
   return noisqta
  }