'use strict'
//ejerciocio numero 2

function concatenar(array) {
    for (let i = 0; i < array.length; i++) {
        let fila = '';
        for (let j = i + 1; j < array.length; j++) {
            let resultado = array[i] + '' + array[j];
            fila += resultado.padStart(2, '0') + ' ';
        }
        alert(fila);
    }
}

let array = [0, 2, 4, 8];
concatenar(array);