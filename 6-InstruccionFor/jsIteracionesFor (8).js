function mostrar()
{
    var i;
    var num = prompt("Ingrese numero: ");
    var cantidadPrimos = 0;
    var resto;

    for (i = 1; i<=num; i++){

        resto = num % i;

        if (resto != 0){
            cantidadPrimos += 1;
            document.write("<br/>Primo: "+i);
         }

    }
    document.write("<br/>Cantidad de Primos: "+cantidadPrimos);



}//FIN DE LA FUNCIÓN