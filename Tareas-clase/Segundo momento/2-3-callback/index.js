'use strict'
//Decraracion de funcion

function validateField (isVisible, show, hide){
if (isVisible){
    show ();
}else{
hide ();
}

}

//Expresion de funcion

let showField = function (){
    alert ("Campo Activo");
}

//Funcion Flecha

let hideField = () => alert ("Campo Oculto");

validateField (false, showField, hideField)// --> Callback funncion

//EJERCICIO CALCULADORA

<<<<<<< HEAD
function calc(op, fnSum , fnRest) {
    let number1 = Number (prompt("ingrese el primer numero: "));
    let number2 = Number(prompt("ingrese el segundo numero: "));
    if
    (op === "suma"){
    fnsum (number1, number2) ;
    }else{
        alert (fnRest(number1, number2));
    }
}
=======
'use strict';

// Crear la funcion sumar;
let suma=function(a,b){
    suma= a + b;
    alert("El resultado es" + suma) 
}
//funcion resta 
let resta = (a, b) => a - b; 

//Funcion Calc

function calc(op,fnSum , fnRest) {
let number1 = Number(prompt("ingrese el primer numero: "));
let number2 = Number(prompt("ingrese el segundo numero: "));
if (op === "suma"){
    fnSum(number1, number2);
}else{

    alert (fnRest(number1, number2));
}
  
}

//Llamado funcion

calc ("suma",suma,  resta);
>>>>>>> da7079ab25ab5eeb53f0033289cbbe9fc759043f
