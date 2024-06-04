'use strict'
let fruta =  {
    nombre:"Manzana", 
    color: "Rojo",
    presio: 0.25,
    descuentoPresio:0.20, 
    Proveedor:{
        Nombre: "Roeberto Juela",
        Ruc:  "001134139941",
        Direccion: "Bolivar y Calle larga 8-10"
    }
}
//Acceder a las propiedades del objeto es con un punto [.]
alert ("Nombre: "+ fruta.nombre);
alert ("Color: " + fruta.color);
alert ("Presio: " + fruta.presio);
alert ("descuentoPresio: "+ fruta.descuentoPresio);
alert ("Proveedor "+ fruta.Proveedor.nombre);



