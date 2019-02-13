/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var numeroIngresado;
numeroSecreto = Math.floor(Math.random()*(101-1))+1;          //Genero el número RANDOM entre 1 y 100

function comenzar()
{
	                        
    obtenerDatos ();
    if (numeroIngresado == numeroSecreto){
        alert ("Ganaste!");
    }
    else
    {
        alert ("Perdiste, vuelve a intentar ");              //alert(numeroSecreto);
    }
}

function verificar()
{
    
	  obtenerDatos ();
    if (numeroIngresado == numeroSecreto){
        contadorIntentos += 1;       
        alert ("Usted es un ganador!!, y en solo "+ contadorIntentos +" intentos");
        document.getElementById("intentos").value = contadorIntentos;
    }
    else
    { 
      if (numeroIngresado < numeroSecreto){
        contadorIntentos += 1; 
        alert ("Falta...");   
        document.getElementById("intentos").value = contadorIntentos;     
      }
       
      else 
      {
        contadorIntentos += 1; 
        alert ("Se pasó...");     
        document.getElementById("intentos").value = contadorIntentos; 

      }  
    }   
}

function obtenerDatos()
{
  numeroIngresado = document.getElementById("numero").value;
}