//Inicio

var condicion = true;
var num;
var positivo=0,negativo=0;                            //Acumuladores
var cantidadPares = 0,resto;                          //Contadores
var cantidadPositivos = 0,cantidadNegativos = 0;
var cantidadCeros = 0;
var diferencia;
var promPositivos, promNegativos;
function mostrar()
{

  while (condicion){
    num = prompt("Ingrese dato: ");
    num = parseInt(num);

    if (num > 0){
      positivo += num;                      
      cantidadPositivos += 1;

    }else{
          if (num < 0){
            negativo += num;
            cantidadNegativos += 1;
          }else{
                cantidadPositivos += 1;
                cantidadCeros += 1;
               }
          }

    resto = num % 2;
    if (resto == 0){
      cantidadPares += 1;
    }

    diferencia = positivo - negativo;
    promPositivos = positivo/cantidadPositivos;
    promNegativos = negativo/cantidadNegativos;

    respuesta = prompt ("Desea mostrar algún calculo? si/no");
    if (respuesta == "si"){
      calculo= prompt("Cuál?");
      calculo = parseInt(calculo);
      switch(calculo){
        case 1:
          document.write(negativo);
          break;

        case 2:
          document.write(positivo);
          break;
        
        case 3:
          document.write(cantidadPositivos);
          break;
        
        case 4:
          document.write(cantidadNegativos);
          break;
        
        case 5:
          document.write(cantidadCeros);
          break;
        
        case 6:
          document.write(cantidadPares);
          break;
        
        case 7:
          document.write(promPositivos);
          break;
        
        case 8:
          document.write(promNegativos);
          break;
        
        case 9:
          document.write(diferencia);
          break;
        }
      
      break;  //Si es True --> sale del while
    }
}//Fin While


}//Fin funcion
