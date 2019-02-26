function mostrar()
{
    
    var num;
    var cantidadDivisores = 0;
   
    var i;
    num = prompt("Ingrese numero: ");
    for (i = 1; i <= num ; i++){
        
        if (num % i == 0){
            cantidadDivisores += 1;
            document.write("<br/>Divisores: "+i);
        }
    }
        document.write("<br/>Cantidad de Divisores: "+cantidadDivisores);
        if (cantidadDivisores <= 2){
            document.write("<br/> Es número primo");
        }else{
            document.write("<br/> No es número primo");
        }

    
}//FIN DE LA FUNCIÓN
