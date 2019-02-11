function mostrar()
{
    var precio = prompt("Ingrese el Precio: ");                         //Entrada de datos
    var descuento = prompt("Ingrese el Descuento (%): ");
    var aux;
    var precioFinal;

    aux = (precio * descuento)/100;                                     //Operación
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;       //Salida de datos

}

