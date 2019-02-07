function mostrar()
{
	var nota;

	nota = Math.round(Math.random()*10);  //Genero el número RANDOM entre 1 y 10 
	
	if (nota == 9 || nota == 10){
		alert ("Excelente");
	}
	else if (nota >= 4){
		alert ("Aprobó");
	}else{
		alert ("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN