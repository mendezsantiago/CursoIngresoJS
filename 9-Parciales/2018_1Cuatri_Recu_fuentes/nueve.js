var animal;
var peso;
var temp;
var condicion = true;
var contador = 0;
var cantParesTemp = 0;
var max,i,j;
var max_2, min_2,b,z;
var primerPeso = true;
var primerPeso_2 = true;
var cantAnimales =0;
var suma = 0;
var respuesta;



function mostrar()
{
	while(condicion){
		contador++;
		animal = prompt ("Ingrese el nombre del animal "+contador+" : ");
		peso = prompt ("Ingrese el peso del "+animal+" : ");
		peso = parseInt(peso);
		while (peso < 1 || peso > 1000){
			alert ("Peso no válido, vuelva a intentar..");
			peso = prompt ("Ingrese el peso del "+animal+" : ");
			peso = parseInt(peso);
		}
		temp = prompt ("Ingrese la temperatura de habitat: ");
		temp = parseInt(temp);
		while (temp < -30 || temp > 30){
			alert ("Temperatura no válida, vuelva a intentar..");
			temp = prompt ("Ingrese la temperatura de habitat: ");
			temp = parseInt(temp);
		}

		if (temp % 2 == 0){
			cantParesTemp += 1;
		}

		if (primerPeso){
			max = peso;
			i = animal;
			j = temp;
			primerPeso = false;
		}

		if (peso > max){
			max = peso;
			i = animal;
			j = temp;
		}
		

		if (temp < 0){
			cantAnimales += 1;
			if (primerPeso_2){
				max_2 = peso;
				min_2 = peso;
				primerPeso_2 = false;
			}

			if (peso >= max_2){
				max_2 = peso;
				z = animal;
				
			}else{
				if (peso <= min_2){
					min_2 = peso;
					b = animal
				}
			}

		}

		suma += peso;
		respuesta = prompt ("Desea salir e informar? Escriba \"si\"");
		if (respuesta == "si"){
			break;
		}
	
	}//Fin while
	document.write("Informe<br/>");
	document.write("<br/>Cantidad de temperaturas pares: "+cantParesTemp);
	document.write("<br/><br/>Datos del animal más pesado<br/>Animal: "+i+"<br/>Temperatura: "+j);
	document.write("<br/><br/>Cantidad de animales que viven menos los 0°C: "+cantAnimales);
	document.write("<br/>Promedio del peso de todos los animales: "+suma/contador);
	document.write("<br/><br/>Datos de animales cuya temp es bajo cero<br/>Peso max: "+max_2+"//Animal: "+z+"<br/>Peso min: "+min_2+"//Animal: "+b);
	

}//Fin prog
