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

//ejerciocio

function calc(op, fnSum , fnRest) {
    let number1 = Number (prompt("ingrese el primer numero: "));
    let number2 = Number(prompt("ingrese el segundo numero: "));
    if
    (op === "suma"){
    fnsum (number1, number2) ;
    }else{
        alert (fnRest(number1, number2));
    }

//s
