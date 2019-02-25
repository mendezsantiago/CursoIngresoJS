
var contador = 0;
var nota, sexo;
var acumuladorNotas = 0;


function mostrar()
{
    while (contador < 5){
        contador++;
        nota = prompt("Ingrese nota del alumno: ");
        nota = parseInt(nota);
        while (nota <= 0 || nota > 10){
            alert("Nota no válida, vuelva a intentar ");
            nota = prompt("Ingrese nota del alumno: ");
            nota = parseInt(nota);
        }
        acumuladorNotas = acumuladorNotas + nota;

    }
    alert(acumuladorNotas/5);

}
