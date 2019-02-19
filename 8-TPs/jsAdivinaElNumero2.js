/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numeroIngresado;
numeroSecreto = Math.floor(Math.random()*(101-1))+1; //Genero el número RANDOM entre 1 y 100

function comenzar()
{

	obtenerDatos();
	if (numeroIngresado == numeroSecreto){
		  contadorIntentos +=1;
		  document.getElementById("intentos").value = contadorIntentos;
		  alert("Usted es un Psíquico”");
	}
	else
	{	
		  contadorIntentos +=1;
		  document.getElementById("intentos").value = contadorIntentos;
		  alert("Perdiste, vuelve a intentar");
	
	}
	

}

function verificar()
{
  obtenerDatos();
	if (numeroIngresado == numeroSecreto){
        contadorIntentos += 1;       
        alert ("Usted es un ganador!!, y en solo "+ contadorIntentos +" intentos");
        document.getElementById("intentos").value = contadorIntentos;
        if (contadorIntentos == 2){
          alert("excelente percepción");
        }else if(contadorIntentos == 3){
          alert("Esto es suerte");
        }else if(contadorIntentos == 4){
          alert("Excelente técnica");
        }else if(contadorIntentos == 5){
          alert("usted está en la media");
        }else if(contadorIntentos > 6 && contadorIntentos <= 10){
          alert("Falta técnica");
        }else if(contadorIntentos > 10){
          alert("afortunado en el amor!!");
        }
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

function obtenerDatos() {

	numeroIngresado = document.getElementById("numero").value;
}