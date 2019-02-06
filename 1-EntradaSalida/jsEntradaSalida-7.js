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

    suma = parseInt(num_1) + parseInt(num_2);

    alert("La Suma es " + suma);
	
}

function restar()
{   var num_1;
    var num_2;
    var resta;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    resta = parseInt(num_1) - parseInt(num_2);

    alert("La Resta es " + resta);
	
}

function multiplicar()
{   var num_1;
    var num_2;
    var multi;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    multi = parseInt(num_1) * parseInt(num_2);

    alert("El producto es " + multi);
	
}

function dividir()
{   var num_1;
    var num_2;
    var div;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    div = parseInt(num_1) / parseInt(num_2);

    alert("La división es " + div);

}

