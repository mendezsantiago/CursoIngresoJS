
function mostrar()
{
    var ancho = prompt("Ingrese el ancho del Reactangulo: ");   //Entrada de datos
    var largo = prompt("Ingrese el largo del Reactangulo: ");
    var perimetro;

    perimetro = (2*parseInt(ancho) + (2*parseInt(largo)));      //Operación
    alert (perimetro);                                          //Salida de datos

}
