/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var num_1;
var num_2;
var resultado;

function sumar()
{	
    obtenerDatos();

    resultado = parseInt(num_1) + parseInt(num_2);

    alert("La Suma es " + resultado);
	
}

function restar()
{   
    obtenerDatos();

    resultado = parseInt(num_1) - parseInt(num_2);

    alert("La Resta es " + resultado);
	
}

function multiplicar()
{ 
    obtenerDatos();

    resultado = parseInt(num_1) * parseInt(num_2);

    alert("El producto es " + resultado);
	
}

function dividir()
{   
    obtenerDatos();

    resultado = parseInt(num_1) / parseInt(num_2);

    alert("La división es " + resultado);

}

function obtenerDatos() {
    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 
}