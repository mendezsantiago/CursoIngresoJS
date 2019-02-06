/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   var sueldo;
   var aux;
   var resultado;

   sueldo = document.getElementById("sueldo").value;

   sueldo = parseInt(sueldo);

   aux = (sueldo*10)/100;
   resultado = aux + sueldo;

   document.getElementById("resultado").value = resultado;
   
}
