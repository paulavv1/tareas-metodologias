'use strict'
let premio = 16;
let cont = 0;
let numero;
let maxIntentos = 4

do {numero = Number (prompt ("ingrese el numero"));
    cont++;//cont ++
// contador de tres intentos
    if (cont > maxIntentos) {
 
    }
} while (numero != premio);
    alert ("Ganeste en el intento " + cont);

    for (let i = 0; i < 5; i++) alert( i );
    

    let n = 0;

    while (true) {
    //le pide al usuario por una serie de números
      let value = +prompt("Ingresa un número", '');
    
      if (!value) break; //  Detiene el bucle, pasando a el alert.
    
      n += value;
    
    }
    alert( 'Suma: ' + n );

    let a = 5 + 5;

switch (a) {
  case 3: //inicia comparando a con la primera variante case que es 3
    alert( 'Muy pequeño' );//La comparación falla.
    break;
  case 10://Luego compara 10
    alert( '¡Exacto!' );// Luego 4. La comparación es exitosa
    break;
    case 3:                    // (*) agrupando dos cases
    case 5:
      alert('¡Incorrecto!');
      alert("¿Por qué no repasas matemáticas?")
      break;
}

// 
function name(parámetros, delimitados, por, coma) {
    /* code */
  }
  function sayHi() {
    alert( "Hola" );
  }
  
  alert( sayHi );