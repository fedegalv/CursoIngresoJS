function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor(Math.random() * 11);
	if (random == 9 || random == 8) {
		alert("EXCELENTE");
	}
	if (random >= 4 && random < 9 ) {
		alert("APROBO");
	}
	if (random < 4) {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN