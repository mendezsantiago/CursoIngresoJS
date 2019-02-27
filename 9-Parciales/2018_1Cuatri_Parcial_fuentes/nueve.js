var condicion = true;
var producto;
var contProducto = 0;
var peso;
var temperatura;
var contTempPares = 0;
var primerProducto = true;
var aux, max, min;
var contProductoTempBaja = 0;
var suma = 0;
var respuesta;




function mostrar()
{
	while(condicion){
		contProducto++;
		producto = prompt ("Ingrese marca del producto "+contProducto+" : ");
		peso = prompt ("Ingrese peso del producto "+contProducto+" : ");
		peso = parseInt(peso);
		while(peso < 1 || peso > 100){

			alert("Peso no válido, vuelva a ingresar..");
			peso = prompt ("Ingrese peso del producto "+contProducto+" : ");
			peso = parseInt(peso);
		} //Validar peso

		temperatura = prompt ("Ingrese la temperatura del producto "+contProducto+" : ");
		temperatura = parseInt(temperatura);
		while (temperatura < -30 || temperatura > 30){

			alert("Temperatura no válida, vuelva a ingresar..");
			temperatura = prompt ("Ingrese la temperatura del producto "+contProducto+" : ");
			temperatura = parseInt(temperatura);
		}//Validar temp

		if (temperatura % 2 == 0){
			contTempPares += 1;
		}// Temp pares

		if (primerProducto){
			max = peso;
			min = peso;
			aux = producto;
			primerProducto = false;
		}
		if (peso > max){
			max = peso;
			aux = producto;aux
		}//max 
		else
		{
			if(peso < min){
				min = peso;
				aux = producto;
			}//min
		}

		if (temperatura < 0){
			contProductoTempBaja += 1;
		}//Productos con temp baja a 0°

		suma += peso; //suma de todos los pesos

		respuesta = prompt ("Desea salir e informar? Escriba \"si\"");
		if (respuesta == "si"){
			break;
		}
}//Fin while

	document.write("<br/>Cantidad de temperaturas ingresadas pares: "+contTempPares);
	document.write("<br/>La marca del producto más pesado: "+aux);
	document.write("<br/>Cantidad de productos conservados a menos de 0°C: "+contProductoTempBaja);
	document.write("<br/>Promedio total de todos los productos: "+suma/contProducto);
	document.write("<br/>Peso máximo: "+max+ " , Peso minimo: "+min);


}//Fin Prog
