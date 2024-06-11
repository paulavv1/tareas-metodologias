'use strict'
// 1. Función que recibe un array de strings y muestra cada elemento con su posición

function mostrarElementosConPosicion(strings) {
    for (let i = 0; i < strings.length; i++) {
      alert(`Elemento en posición ${i}: ${strings[i]}`);
    }
  }
  
  
  const frutas = ["manzana", "banana", "pera"];
  mostrarElementosConPosicion(frutas);

// 2. Función que recibe un array de números del 1 al 10 y devuelve la suma de todos sus elementos
function sumaElementos(arrayNumeros) {
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
      suma += arrayNumeros[i];
    }
    return suma;
  }
  
  // Ejemplo de uso:
  const numerosDel1Al15 = Array.from({ length: 15 }, (_, i) => i + 1);
  const resultadoSuma = sumaElementos(numerosDel1Al15);
  alert(`La suma de los números del 1 al 15 es: ${resultadoSuma}`);
  

// 3. Función que recibe un array de números aleatorios del 1 al 20 y muestra cada uno de sus elementos multiplicado por 3
function mostrarMultiplicadosPor3(arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length; i++) {
      const resultado = arrayNumeros[i] * 3;
      console.log(`Elemento en posición ${i}: ${resultado}`);
    }
  }
  
  const numeros = [2, 5, 8, 11];
  mostrarMultiplicadosPor3(numeros);