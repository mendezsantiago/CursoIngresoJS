/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num_1;
    var num_2;
    var suma;

    num_1 = document.getElementById("numeroUno").value;
    num_2 = document.getElementById("numeroDos").value; 

    suma = parseInt(num_1) + parseInt(num_2);

    alert(suma);

}

