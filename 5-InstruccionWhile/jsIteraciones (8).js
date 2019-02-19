function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var condición = true;
  var respuesta;

  while(condición){

    numero = prompt ("Ingrese numero: ");
    numero = parseInt(numero);
    if (numero > 0){
      positivo = positivo + numero;
    }else
    {
      if (numero < 0){
      negativo = negativo * numero;
      }
    }

    respuesta = prompt("Desea sacar las cuentas? s/n");
    if (respuesta == "s"){
        break;
      }
  }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
