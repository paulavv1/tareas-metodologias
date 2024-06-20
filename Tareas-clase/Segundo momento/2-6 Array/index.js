'use strict'
// Escribir una funcion que reciba un array
//retorne la la suma de sus elementos

function sumArray(array) {
    let sum = 0;
    //inicio la condicion

    for (let i = 0; i < array.length; i++) {
        //alert (i); //imprime el indice
        //array [i] //imprime el elemento
        sum = sum + array[i];
    }
    return sum;
}
let array = [2, 8, 9]
let result = sumArray(array);
alert(result);

/* Escribir una funcion que reciba un array
y devuelva la suma de los numeros pares*/



function sumaArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (arrays[i] % 2 === 0) {
           sum = sum + arrays [i];
        }
    }
    return sum;
}
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let resultados = sumaArray (arrays)
alert(resultados);