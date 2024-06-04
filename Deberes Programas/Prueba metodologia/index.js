"use strict"
let precioProducto = prompt ("Ingrasar el precio unitario del producto");
precioProducto = Number (precioProducto);
let cantidad = prompt ("Ingrasar la cantidad de los productos a comparar ");
let totalCompra = (precioProducto * cantidad)
let Estacionamiento = 2;
if ( totalCompra > 20) {
    alert ("Estacionamiento gratis")
}
else
{
    alert ("Valor a pagar de estacionamiento " + Estacionamiento)
}