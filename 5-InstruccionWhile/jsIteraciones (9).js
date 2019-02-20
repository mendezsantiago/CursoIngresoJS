function mostrar()
{

	var primera = true; //Bandera
	var respuesta;
	var condición = true;
  var numero;
  var max,min;
	while(condición)
	{
    numero = prompt("Ingrese numero: ");
    numero =parseInt(numero);

    if (primera){     //Bandera
      max = numero;
      min = numero;
      primera = false;    //Cambio el valor y no vuelve a entrar
    }else{
          if(numero > max){
            max = numero;
          }else{
                if (numero < min){
                  min = numero;
                }
               }
         }
    respuesta = prompt("Quiere saber el max y min.?s/n ");
    if (respuesta == "s"){
      break;
    }

  }//fin del While
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN
