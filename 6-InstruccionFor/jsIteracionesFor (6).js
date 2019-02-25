function mostrar()
{
    var i;
    var num = prompt("Ingrese numero: ");
    var cantidadPares = 0;
    var resto;

    for (i = 1; i<=num; i++){

        resto = i % 2;
        if(resto == 0){
            cantidadPares += 1;
            document.write("<br/> Numero Par: "+i);
            }

    }
    document.write ("<br/>Cantidad de Numeros Pares: "+ cantidadPares);



}//FIN DE LA FUNCIÓN