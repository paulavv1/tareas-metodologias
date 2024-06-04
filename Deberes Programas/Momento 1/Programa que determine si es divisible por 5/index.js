"use strict"
let number = prompt ("Ingresar un numero")
number = Number (number)

if (number % 5 === 0){
    alert ("El numero " + number + " si es divisible por 5")
} else {
    alert ("El numero "+ number + " no es divisible por 5")
}