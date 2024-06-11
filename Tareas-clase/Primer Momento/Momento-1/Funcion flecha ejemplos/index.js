//Funcion clasica -HOISTING

function saludar (nombre){
    return 'Hola'+ nombre
}

alert ( saludar (' Josue'));

//FUNCION ANONIMA

let saludo = function (nombre){
    return 'Saludos '+ nombre;

}
alert (saludo('Josue'));



// ¿Qué podemos hacer para hacer welcomevisible el exterior if?

//El usuario ingresa la hora
let horaActual = prompt("Ingrese Hora actual")
// Variable para almacenar el mensaje de bienvenida
let mensaje1 = "¡Buenos días!";
let mensaje2 = "¡Buenas tardes!";
let mensaje3 = "¡Buenas noches!";

function welcome (mensaje){
    alert (mensaje);
}

// Condicional para determinar el mensaje de bienvenida
if (horaActual < 12) {
    //Llamamos a la funcion
    welcome (mensaje1);   
} else if (horaActual < 18) {
    //Llamamos a la funcion
    welcome(mensaje2);
} else {
     welcome (mensaje3);
 }


//Funciones Flecha () => {}

//Son funciones anonimas

//el return no es necesaria

/*si la funcion tiene un parametro 
se omite los ()  O {} */
 
let saludo2 = nombre => 'Saludos '+ nombre;

//NOS PERMITEN OPTIMIZAR EL CODIGO
/*si tenemos dos parametros como una suma 
si es nesesario los ()*/
let suma = (a,b) => a+b
//Cuando la funcion no tiene parametros




////FUNCIONES de flecha multilínea ////

/*Si tenemos que hacer varias líneas de 
código será  necesario usar un return*/

let sum = (a, b) => { 
  let result = a + b;
  return result; 
};
alert( sum(8, 10) ); // 18

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
   ...// <- no extra nesting level
  }
