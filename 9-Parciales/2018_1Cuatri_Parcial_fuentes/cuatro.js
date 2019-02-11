function mostrar()
{
    var num1 = prompt ("Ingrese el primer número: ");                       //Entrada de datos
    var num2 = prompt  ("Ingrese el segundo número: ");
    var calculo;
    
    if (num1 == num2){                                                      //Inicio de la Operación
        alert (num1 + num2);                                                //Salida de datos
    }
    else
    { if (num1 > num2){
        calculo = parseInt(num1) - parseInt(num2);
        alert (calculo);                                                    //Salida de datos
      }
      else{
            calculo = parseInt(num1) + parseInt(num2);
            if (calculo > 10){
                alert ("La suma es " + calculo + " y superó el 10");        //Salida de datos
            }else
            {   
                alert ("La suma es " + calculo);                            //Salida de datos
            }

}
}
}
