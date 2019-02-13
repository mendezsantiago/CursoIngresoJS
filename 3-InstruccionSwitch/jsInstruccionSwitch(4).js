function mostrar()
{
//tomo el mes  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Febrero":
        alert("Este mes tiene 28 días");
        break;
    case "Enero":   
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Este mes tiene 31 días");
        break;
    default:
        alert("Este mes tiene 30 días");
        
}//FIN EL SWITCH

}//FIN DE LA FUNCIÓN