/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num_1;
    var num_2;
    var suma;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    num_1 = parseInt(num_1);
    num_2 = parseInt(num_2);

    suma = num_1 + num_2;

    alert(suma);

	
}

function restar()
{   var num_1;
    var num_2;
    var resta;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    num_1 = parseInt(num_1);
    num_2 = parseInt(num_2);

    resta = num_1 - num_2;

    alert(resta);

	
}

function multiplicar()
{   var num_1;
    var num_2;
    var multi;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    num_1 = parseInt(num_1);
    num_2 = parseInt(num_2);

    multi = num_1 * num_2;

    alert(multi);

	
}

function dividir()
{   var num_1;
    var num_2;
    var div;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    num_1 = parseInt(num_1);
    num_2 = parseInt(num_2);

    div = num_1 / num_2;

    alert(div);

}

