function mostrar()
{
	var planet = prompt("Ingrese nombre del planeta: ");

	switch (planet){

		case "mercurio":
		case "venus":
			alert("Acá hace más calor");
			break;
		case "tierra":
			alert("Acá vivimos");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace más frío");
			break;
		default:
			alert("No es un planeta válido");

	}//Fin del switch

}//Fin del prog
