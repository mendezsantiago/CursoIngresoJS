
var contador = 0;                                               //Declaro Variables
var nota, sexo;
var acumuladorNotas = 0;
var primeraNota = true;
var cantidadMasculinos = 0;
var min;
var i = 0;
var aux;


function mostrar()
{
    while (contador < 5){
        contador++;
        nota = prompt("Ingrese nota del alumno "+contador+": ");
        nota = parseInt(nota);
        while (nota <= 0 || nota > 10){                                     //Validación
            alert("Nota no válida, vuelva a intentar ");
            nota = prompt("Ingrese nota del alumno: "+contador+": ");
            nota = parseInt(nota);
            continue;
        }
        sexo = prompt("Ingrese sexo del alumno "+contador+" (m/f): ");
        while (sexo != "m" && sexo != "f"){                                 //Validación
            alert("Sexo no válido, vuelva a intentar ");
            sexo = prompt("Ingrese sexo del alumno "+contador+" (m/f): ");
            continue;
        }
        if (nota >= 6 && sexo == "m"){
            cantidadMasculinos += 1;
        }
        if (primeraNota){       //Flag=1
            min = nota;
            primeraNota = false;    //Flag=0
        }else{
            if (nota <= min){
                min = nota;
                aux = sexo;
                i = contador;
            }
        }
        acumuladorNotas = acumuladorNotas + nota;

    }
    alert("Promedio Total:  "+acumuladorNotas/5);                                                //Salidas por alert
    alert("La nota más baja es del alumno "+i+" con un "+min+" y de sexo "+aux);
    alert("Cantidad de varones con notas mayores o iguales a 6:  "+cantidadMasculinos);

} //Fin del programa
