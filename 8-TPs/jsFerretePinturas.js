/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;
var resultado;

function FahrenheitCentigrados () 
{
    ObtenerDatos ();
    ConvertirAEntero ();
	resultado = (temperatura -32 ) * 5/9;
    alert(temperatura + " °F son " + resultado + " °C");
}

function CentigradosFahrenheit () 
{
    
    ObtenerDatos ();
    ConvertirAEntero ();
	resultado = (9/5) * temperatura + 32;
    alert(temperatura + " °C son " + resultado + " °F");
}

function ObtenerDatos () 
{
    temperatura = document.getElementById("Temperatura").value;  
}

function ConvertirAEntero () 
{
    temperatura = parseInt(temperatura);
}