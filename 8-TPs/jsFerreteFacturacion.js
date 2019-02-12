/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1,precio2,precio3;
var sumaAux, resultado;

function Sumar () 
{
    obtenerDatos();
    conversiónAEntero();
    resultado = precio1 + precio2 + precio3;
    alert (resultado);
	
}
function Promedio () 
{
    obtenerDatos();
    conversiónAEntero();
	resultado = (precio1 + precio2 + precio3)/3;
    alert (resultado);
}
function PrecioFinal () 
{
    obtenerDatos ();
    conversiónAEntero();
	sumaAux = precio1 + precio2 + precio3;
    resultado = sumaAux + sumaAux * 21/100;
    alert (resultado);

}
function conversiónAEntero ()
{
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
}
function obtenerDatos ()
{
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
}