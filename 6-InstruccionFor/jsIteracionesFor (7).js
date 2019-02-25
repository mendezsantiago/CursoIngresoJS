function mostrar()
{

    var i;
    var num = prompt("Ingrese numero: ");
    var cantidadDivisores = 0;
    var resto;

    for (i = 1; i<=num; i++){

        resto = num % i;

        if (resto == 0){
            cantidadDivisores += 1;
            document.write("<br/>Divisores: "+i);
         }

    }
    document.write("<br/>Cantidad de divisores: "+cantidadDivisores);

}//FIN DE LA FUNCIÓN