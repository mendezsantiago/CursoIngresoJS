/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
   var importe;
   var aux;
   var resultado;

   importe = document.getElementById("importe").value;

   importe = parseInt(importe);

   aux = (importe*25)/100;
   resultado = importe - aux;
   
   document.getElementById("resultado").value = resultado;
   
}
