function mostrar()
{
	var numRandom;
    
    numRandom = Math.round(Math.random()*10);  //Genero el número RANDOM entre 1 y 10 
	
    if(numRandom >=1 && numRandom <= 10){
        alert(numRandom);
    }   
	
}//FIN DE LA FUNCIÓN