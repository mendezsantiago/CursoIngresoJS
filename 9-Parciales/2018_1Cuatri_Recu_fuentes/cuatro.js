var importe;																			//Variables
var contador = 0;
var primerImporte = true;
var aux;
var max;
var suma = 0;
var resultado;




function mostrar()
{
	while (contador < 4){																//Ingresa 4 datos
		contador ++;																	//Incremento el contador, evita que sea un bucle infinito
		importe = prompt ("Ingrese el importe "+contador+" : "); 						//Ingreso de datos por prompt 
		importe = parseInt(importe);													//Conversión a entero 
																  			 
		if (primerImporte){																//Flag = 1
			max = importe;																//Primer importe ingresado se toma como max
			aux = contador;																//Se guarda el numero de importe, para indentificar
			primerImporte = false;														//Flag = 0;
		}

		if (importe > max){
			max = importe;																//Se toma el importe max
			aux = contador;
		}

		suma += importe;																//Suma de los importes

	}//Fin while

	if (suma > 100){
		resultado = suma - (suma*0.1);													//suma > 100 -->  descuento 10%
	}else{
		if (suma > 50 && suma <= 100){
			resultado = suma - (suma*0.05);												//suma > 50 y suma <= 100 -->  descuento 5%
		}else{
			resultado = suma + (suma*0.15);												//suma <= 50 -->  recargo 15%
		}
	}


	alert ("El importe max ingresado es el importe "+aux+" de $ "+max);					//Muestro resultados
	alert ("La suma total es de: $ "+suma+" .El importe final es de: $ "+resultado);

}//Fin Prog
