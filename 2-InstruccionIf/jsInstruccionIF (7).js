function mostrar()
{
    var edad;
    var estado;

    edad = document.getElementById("edad").value; //tomo la edad
    estado = document.getElementById("estadoCivil").value; //tomo estado

    if(edad < 18 && estado != "Soltero"){
        alert("Es muy pequeño para NO ser soltero");
    }

	
}//FIN DE LA FUNCIÓN