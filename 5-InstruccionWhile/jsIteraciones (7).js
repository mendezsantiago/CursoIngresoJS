function mostrar()
{
  var condición = true;
	var contador = 0;
	var acumulador=0;
	var respuesta;

  while(condición){
    contador ++;
    numero = prompt ("Ingrese numero: ");
    numero = parseInt(numero);
    acumulador = acumulador + numero;
    respuesta = prompt("Desea sacar las cuentas? s/n");
      if (respuesta == "s"){
        break;
      }
  }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
