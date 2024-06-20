'use strict'
//Ejercicio 1

function contarElementos(array){
   let count = 0;
    for (let i=0; i < array.lenght; i++ ){
        let row = "";
        for (let j = 0; j < array.length; j++) {
          let resultado = array[i] + '' + array[j];
          row += resultado.padStart(2, '0') + ' ';
      }
      alert(row);
  }
}

let array = [0, 2, 4, 8];
concatenar(array);
