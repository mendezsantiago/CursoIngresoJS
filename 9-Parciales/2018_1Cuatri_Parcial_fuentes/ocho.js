var num;
var letra;
var condicion = true;
var cont = 0;
var cantidadPares = 0;
var cantidadImpares = 0;
var cantidadCeros = 0;
var sumaPos = 0;
var sumaNeg = 0;
var primerDato = true;
var i, max, min;



function mostrar()
{


	while(condicion){
		cont++;
		num = prompt("Ingrese número "+cont+" :");
		num = parseInt(num);
		while(num < -100 || num > 100){
			alert("Dato invalido, vuelva a ingresar..");
			num = prompt("Ingrese numero "+cont+" :");
			num = parseInt(num);
		}
		
		letra = prompt("Ingrese letra "+cont+" :");

		if(num % 2 == 0){
			cantidadPares += 1;
		}else{
			cantidadImpares += 1;
		}

		if (num == 0){
			min = num;
			cantidadCeros += 0;
		}
		else
		{ if (num > 0){
			sumaPos += num;
		} 
		else
		{
			sumaNeg += num;
		}
		}

		if (primerDato){
			max = num;
			min = num;
			i = letra;
			j = letra;
			primerDato = false;
		}

		if (num > max){
			max = num;
			i = letra;
		}else{
			min = num;
			j = letra;
		}

		respuesta = prompt("Desea salir e informar? Escriba \"si\"");
		if (respuesta == "si"){
			break;
		}

	}//Fin del while
	
	document.write ("<br/> Cantidad de números pares: "+ cantidadPares);
	document.write ("<br/> Cantidad de números impares: "+ cantidadImpares);
	document.write ("<br/> Cantidad de números ceros: "+ cantidadCeros);
	document.write ("<br/> Promedio números pares: "+ sumaPos/cont);
	document.write ("<br/> Suma de números negativos: "+ sumaNeg);
	document.write ("<br/> Número max: "+ max + " Letra: " +i);
	document.write ("<br/> Número min: "+ min + " Letra: " +j);




}//Fin prog
