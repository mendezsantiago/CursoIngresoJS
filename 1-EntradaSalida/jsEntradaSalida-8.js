/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num_1;
    var num_2;
    var resultado;
    
    num_1 = document.getElementById("numeroDividendo").value;
    num_2 = document.getElementById("numeroDivisor").value; 

    resultado = parseInt(num_1) % parseInt(num_2);

    alert(resultado);
    
}
