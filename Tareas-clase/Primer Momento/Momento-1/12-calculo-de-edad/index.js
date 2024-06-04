/*
Escribir una funcion que reciba como argumento la edad de una persina 
y devuelva true si es mayor a 18 y false si es menor
*/

  let mmss = "El resultado es "
function calcularEdad (edad){
    /* if (edad > 18){
        return true;
  }else {
    return false;
  }} */
    if (edad > 18){
        return true;
  }else {
    return false;
  }}
//Llamar a la funcion
let edad = Number (prompt ("Ingrese su edad"))
let result = calcularEdad (edad);
alert (mmss + result);

/* Escribir una funcion que multiplique dos 
numeros y devuelva el resultado.
N: usar solo la operacion + */

let multiplicador=0;
let multiplicando=2;
let suma =0;
for (let i = 0; i < multiplicador ; i++ ){
    suma=suma + multiplicando
}
alert (suma);

