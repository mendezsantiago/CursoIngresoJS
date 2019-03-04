/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var aux;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()*(4-1))+1;
	alert ("A jugar!!\nElija una opción");

	switch(eleccionMaquina){

		case 1: 
			aux = "piedra";
			break;
		case 2: 
			aux = "papel";
			break;
		case 3:
			aux = "tijera"
			break;
	}
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	
	if (eleccionMaquina == 3){
		alert = ("Ganaste, tu rival eligió "+aux);
	}else{
		if (eleccionMaquina == 1){
			alert ("Empate, tu rival eligió "+aux);
		}
		else{
			alert("Perdiste, tu rival eligió "+aux);
		}
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 1){
		alert = ("Ganaste, tu rival eligió "+aux);
	}else{
		if (eleccionMaquina == 2){
			alert ("Empate, tu rival eligió "+aux);
		}
		else{
			alert("Perdiste, tu rival eligió "+aux);
		}
	}
	
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 2){
		alert = ("Ganaste, tu rival eligió "+aux);
	}else{
		if (eleccionMaquina == 3){
			alert ("Empate, tu rival eligió "+aux);
		}
		else{
			alert("Perdiste, tu rival eligió "+aux);
		}
	}

}//FIN DE LA FUNCIÓN