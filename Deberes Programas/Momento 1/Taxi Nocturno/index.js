"use strict"
let totalKms = prompt ("ingrese el km");
let horaActual = prompt ("Ingrese la hora")
let precioPorkm = 0.29;
let arranque = 0.55;
let tarifaMinimaDia = 1.50;
let tarifaMinimaNoche = 1.75;

let valor = ( precioPorkm * totalKms) + arranque;
if (valor < 1.00) {
    alert (tarifaMinimaDia )
}

//Aplicar la tarifa minima segun el dia o la noche con comfirm


if ( horaActual > 6 )  { // Día: 6:00 AM - 5:59 PM

    alert ("El valor a Pagar es " + valor )   
}
 if ( horaActual > 18 ) { alert ( "El valor a pagar es " + valor)
 // Noche: 6:00 PM - 5:59 AM
 }


